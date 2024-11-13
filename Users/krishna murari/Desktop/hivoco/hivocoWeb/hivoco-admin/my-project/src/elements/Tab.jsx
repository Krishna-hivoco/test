import React from "react";
import { MdDashboard } from "react-icons/md";

function Tab({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="w-full p-3 bg-black rounded-lg flex items-center gap-2 text-white cursor-pointer "
    >
      <MdDashboard className="w-7 h-7" />
      <small className="font-semibold text-lg">Inquiries</small>
    </div>
  );
}

export default Tab;
