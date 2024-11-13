import React from "react";
import Tab from "../elements/Tab";
import Button from "../elements/Button";
import { useNavigate } from "react-router-dom";
import { logout } from "../api/authServices";

function Sidebar({ isSidebarOpen }) {
  const navigate = useNavigate();
  return (
    <div
      style={{ height: "calc(100vh - 80px)" }}
      className={`fixed flex flex-col p-6 h-full w-64 bg-white  transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className=" flex flex-col gap-3 flex-1">
        <Tab onClick={() => navigate("/")} />
        {/* <Tab />
        <Tab />
        <Tab />
        <Tab /> */}
      </div>
      <Button
        onClick={() => logout()}
        className={
          "bg-gradient-to-r from-[#F15633F5] from-10% via-[#F15633FA] via-30% to-[#F8BC00FA]"
        }
        title="Logout"
        isIcon={true}
      />
    </div>
  );
}

export default Sidebar;
