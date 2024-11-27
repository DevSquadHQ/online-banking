import React from "react";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";

export default function SideBarLi(props) {
  const { icon, expanded, liName, subIcon, onClick, className, to } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) onClick(); 
    if (to) navigate(to); 
  };

  return (
    <li onClick={handleClick} className="flex items-center cursor-pointer">
      {/* Icon */}
      <span
        className={`overflow-hidden transition-all text-gray-300 ${
          expanded ? "w-6 ml-2" : "w-0"
        }`}
      >
        {icon}
      </span>

      {/* Label */}
      <span
        className={`overflow-hidden transition-all pr-2 ${
          expanded ? "w-52" : "w-0"
        }`}
      >
        {liName}
      </span>

      {/* Sub Icon */}
      {subIcon && (
        <span
          className={`text-gray-300 transition-all delay-100 ${className}`}
        >
          {subIcon}
        </span>
      )}
    </li>
  );
}
