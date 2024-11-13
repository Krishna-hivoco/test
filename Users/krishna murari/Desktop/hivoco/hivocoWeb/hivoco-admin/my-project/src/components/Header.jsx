import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";

function Header({ isSidebarOpen, setIsSidebarOpen }) {
  return (
    <header className="bg-white h-20 px-8 flex justify-between items-center ">
      <div className="flex justify-center gap-5">
        <img src="/svgs/logo.svg" alt="" srcSet="" />
        <span
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="w-8 h-8 rounded-full flex justify-center items-center bg-[#D7E4FF]"
        >
          {isSidebarOpen ? (
            <BsChevronLeft className="w-3 h-3" />
          ) : (
            <BsChevronRight className="w-3 h-3" />
          )}
        </span>
      </div>
      <div className="hidden md:flex items-center gap-3 ">
        <RxAvatar className="w-9 h-9" />
        <div className="flex flex-col ">
          <strong className="font-medium text-sm">Pritesh Chothani</strong>
          <small className="font-medium text-xs">admin</small>
        </div>
      </div>
    </header>
  );
}

export default Header;
