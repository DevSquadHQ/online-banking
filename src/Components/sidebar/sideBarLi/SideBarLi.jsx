import React from "react";
import './Sidebar.css'

export default function SideBarLi(props) {
  const { icon, expanded, liName, subIcon } = props;
  return (
    <li>
      <span className={`overflow-hidden transition-all text-gray-300  ${
          expanded ? "w-6 ml-2" : "w-0"
        }`} >

      {icon}

      </span>
     
      <span
        className={`overflow-hidden transition-all pr-2 ${
          expanded ? "w-52" : "w-0"
        }`}
      >
        {liName}
      </span>
      <span className="text-gray-300 hover:text-white hover:delay-100 transition-all">{subIcon}</span>
      
    </li>
  );
}
