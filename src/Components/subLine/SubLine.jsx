import React from "react";

export default function SubLine(props) {
  const { SubText, children } = props;
  return (
    <div className="flex items-center align-middle ">
      <p className="text-gray-400 mt-2 text-sm pl-3 ">{SubText}</p>
      {children}
    </div>
  );
}
