import React from "react";
import "./accountDetail.css";
import img from "../../assets/img/check.svg";

function AccountDetail() {
  return (
    <div className="container2">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "96px",
          height: "96px",
          borderRadius: "50%",
          background: "#014737",
        }}>
        <img src={img} alt="" />
      </div>
      <span className="title">اطلاعات حساب بانکی شما:</span>
      <table>
        <tr>
          <td>شماره سپرده</td>
          <td>1111111111</td>
        </tr>
        <tr>
          <td>شماره کارت</td>
          <td>111111111</td>
        </tr>
        <tr>
          <td>CVV2</td>
          <td>1153</td>
        </tr>
        <tr>
          <td>تاریخ انقضا</td>
          <td>1408/05</td>
        </tr>
        <tr>
          <td>رمز اولیه ثابت</td>
          <td>2563</td>
        </tr>
        <tr>
          <td>نوع حساب</td>
          <td>جاری</td>
        </tr>
      </table>
    </div>
  );
}

export default AccountDetail;
