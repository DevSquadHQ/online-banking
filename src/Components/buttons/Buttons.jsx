import React from "react";

export default function Buttons(props) {
  const { btnName } = props;
  return (
    <>
      <button className="text-white w-full bg-blue-600 my-2 py-2 px-2 rounded-md hover:bg-blue-700 transition-all ease-in-out delay-200">
        {btnName}
      </button>
    </>
  );
}
