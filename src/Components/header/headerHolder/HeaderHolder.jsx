import React from "react";

export default function HeaderHolder(props) {
  const { children } = props;
  return (
    <div
      className="flex justify-between h-16"
      style={{ background: "#374151" }}
    >
      {children}
    </div>
  );
}
