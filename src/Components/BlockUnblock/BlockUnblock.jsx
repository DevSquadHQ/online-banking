import "./BlockUnblock.css";
import Buttons from "../buttons/Buttons";

import React from "react";

export default function BlockUnblock() {
  return (
    <>
      <div className="list-container">
        <ul className="list">
          <li>
            <span>شماره سپرده</span>
            <span>11111</span>
          </li>
          <li>
            <span>شماره کارت</span>
            <span>111111</span>
          </li>
          <li>
            <span>نوع حساب</span>
            <span>جاری</span>
          </li>

          <Buttons btnName={"مسدود کردن/رفع مسدودی"} />
        </ul>
      </div>
    </>
  );
}
