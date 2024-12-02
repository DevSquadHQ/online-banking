import React from "react";
import img from "../../assets/img/card.png";
import Input from "../input/Input";
import Buttons from "../buttons/Buttons";
import Form from "../form/Form";

export default function NewAccount() {
  return (
    <Form className="w-[650px]">
      <img src={img} />
      <span className="flex justify-center text-gray-200 text-2xl font-semibold my-2">افتتاح حساب بانکی</span>
      <form>
        <label style={{ color: "white" }}>نوع حساب</label>
        <select
          style={{ background: "#374151", border: "none" }}
          className="my-2 py-2 px-2 w-full rounded-md text-gray-300 border-spacing-1 border-gray-300 outline-none"
        >
          <option>جاری</option>
          <option>قرض الحسنه</option>
        </select>
        <Input
          style={{ background: "#374151" }}
          className="my-2 py-2 px-2 w-full rounded-md text-gray-300 border-spacing-1 border-gray-300 outline-none"
          inputName="مبلغ"
          type="selected"
          placeholder="مبلغ مورد نیاز را وارد کنید"
        />
        <Buttons btnName="افتتاح حساب" />
      </form>
    
    </Form>
  );
}
