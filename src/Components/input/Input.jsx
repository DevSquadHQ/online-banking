import React from "react";

export default function Input(props) {
  const { type, placeholder, inputName } = props;

  return (
    <div className="mb-3">
      <h5 className="text-white text-sm">{inputName}</h5>
      <input
        style={{ background: "#374151" }}
        className="my-2 py-2 px-2 w-full rounded-md text-gray-300 border-spacing-1 border-gray-600 outline-none border-[1px] "
        type={type}
        placeholder={placeholder}
        
      />
    </div>
  );
}
