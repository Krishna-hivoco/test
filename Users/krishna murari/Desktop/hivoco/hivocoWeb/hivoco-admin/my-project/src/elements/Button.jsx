import React from "react";
import { MdOutlineLogout } from "react-icons/md";

function Button({ title, className, isIcon = false, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`w-full p-3  to-90% rounded-lg flex items-center justify-center gap-2 text-white cursor-pointer ${className}`}
    >
      {isIcon && <MdOutlineLogout className="w-6 h-6" />}
      <small className="font-medium text-lg">{title}</small>
    </div>
  );
}

export default Button;
