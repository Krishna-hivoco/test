import axios from "axios";

const API_BASE_URL = "https://api.hivoco.com/auth";
// const API_BASE_URL = "http://localhost:8815/auth";

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, {
      email,
      password,
    });
    const { accessToken, refreshToken } = response.data;
    // Store tokens in local storage
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error.response ? error.response.data : new Error("Login failed");
  }
};

export const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  window.location.href = "/login";
};

export const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken");
  if (!refreshToken) throw new Error("No refresh token available");

  const response = await axios.post(`${API_BASE_URL}/refresh-token`, {
    refreshToken,
  });
  const { accessToken } = response.data;

  // Update access token in local storage
  localStorage.setItem("accessToken", accessToken);

  return accessToken;
};
