import React from "react";
import Sidebar from "./Sidebar";

function Main({ children, isSidebarOpen }) {
  return (
    <div style={{ height: "calc(100vh - 80px)" }} className=" flex">
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <div
        className={`max-w-full px-7 py-8 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "md:ml-64 ml-0" : "ml-0"
        } flex-1`}
      >
        {children}
      </div>
    </div>
  );
}

export default Main;
