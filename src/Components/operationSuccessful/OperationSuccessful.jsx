import React from "react";
// import "../operationFailed/OperationFailed.css";
import '../operationFail/OperationFailed.css'
import img from "../../assets/img/check.svg";

export default function OperationSuccessful() {
  return (
    <>
      <div className="container4">
        <img src={img} alt="" />
        <span>عملیات موفق</span>
      </div>
    </>
  );
}
