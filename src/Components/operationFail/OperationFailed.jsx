import React from "react";
// import "./OperationFailed.css";
import "./OperationFailed.css";
import img from "../../assets/img/failed.svg";

export default function OperationFailed() {
  return (
    <>
      <div className="container4">
        <img src={img} alt="" />
        <span>عملیات ناموفق</span>
      </div>
    </>
  );
}
