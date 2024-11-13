import axios from "axios";
import { logout, refreshAccessToken } from "./authServices";

const api = axios.create({
  baseURL: "https://api.hivoco.com", // Base API URL
  // baseURL: "http://localhost:8815",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const newAccessToken = await refreshAccessToken();
        api.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return api(originalRequest); // Retry the original request with the new token
      } catch (refreshError) {
        logout(); // Logout if refresh fails
        window.location.href = "/login"; // Redirect to login
      }
    }

    return Promise.reject(error);
  }
);

export default api;
