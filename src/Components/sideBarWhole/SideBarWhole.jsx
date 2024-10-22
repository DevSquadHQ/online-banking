import React from "react";

export default function SideBarWhole(props) {
  const { children, expanded } = props;
  return (
    <div
      style={{ background: "#374151" }}
      className={` text-white h-screen pt-5 transition-all duration-300 ${
        expanded ? "w-[275px] px-3" : "w-0 px-0"
      }`}
    >
        
      {children}
    </div>
  );
}
