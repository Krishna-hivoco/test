import React, { useState } from "react";
import Button from "../elements/Button";
import { login } from "../api/authServices";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message || "Login failed");
    }
  };
  return (
    <div className="flex h-screen ">
      <img
        className="w-1/2 h-full object-cover hidden md:block"
        src="/pngs/login.png"
        alt=""
        srcSet=""
      />
      <div className="w-full md:w-1/2 h-full ">
        <div className="flex flex-col justify-center items-center   h-full">
          <div className="flex flex-col justify-center items-center  p-8 bg-[#F8F8F8] rounded-3xl w-[361px]">
            <strong className="font-bold text-2xl leading-tight">Login</strong>
            <small className="font-normal text-base leading-tight mt-5 mb-10">
              Enter your email & password to login:
            </small>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="outline-none border-b border-gray-300 bg-transparent text-sm font-normal placeholder:text-black w-full p-3"
              type="email"
              name="Email"
              placeholder="E-mail"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="outline-none border-b border-gray-300 bg-transparent text-sm font-normal placeholder:text-black w-full p-3"
              type="password"
              name="Password"
              placeholder="Password"
            />
            <Button
              onClick={() => handleLogin()}
              title="Login"
              className={`bg-[#F25F3E] mt-10 p-2`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
