import React from "react";

export default function SideBarLi(props) {
  const { src, expanded, liName, srcIcon } = props;
  return (
    <li>
      <img
        src={src}
        className={`overflow-hidden transition-all text-white hover:bg-white hover:fill-white group-hover:fill-white ${
          expanded ? "w-6 ml-2" : "w-0"
        }`}
      />
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52" : "w-0"
        }`}
      >
        {liName}
      </span>
      <img src={srcIcon} />
    </li>
  );
}
