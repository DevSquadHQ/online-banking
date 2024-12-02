import React from "react";
import "./MoneyTransferComp.css";
import Input from "../input/Input";
import CustomDate from "../CustomDate/CustomDate";
import Buttons from "../buttons/Buttons";
import { useForm } from "react-hook-form";
import Form from "../form/Form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import JalaliDatePicker from "../JalaliDatePicker/JalaliDatePicker";

export default function MoneyTransferCom({onClick}) {
  const schema = yup.object().shape({
    amount: yup
      .string()
      .required("لطفا مبلغ را وارد کنید")
      .test(
        "is-numeric-and-greater-than-10000",
        "حداقل مبلغ موردنیاز جهت افتتاح حساب 10000 تومان است",
        (value) => {
          const numberValue = Number(value);
          return !isNaN(numberValue) && numberValue >= 10000;
        }
      ),
  });

  const onSubmit = (e) => {
    e.preventDefault;
  };

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  return (
    <>
      <Form
        FormTitle="انتقال وجه"
        onSubmit={handleSubmit(onSubmit)}
        className="	absolute top-36"
      >
        <Input
          type="number"
          inputName="کارت مبدا"
          placeholder="0000 - 0000 - 0000 - 0000"
        />
        <Input
          type="number"
          inputName="کارت مقصد"
          placeholder="0000 - 0000 - 0000 - 0000"
        />
        <Input
          type="text"
          id="amount"
          inputName="مبلغ(تومان)"
          register={register("amount")}
        />
        <p style={{ color: "red", paddingBottom: "10px" }}>
          {errors.amount?.message}
        </p>
        <Input inputName="CVV2" />
        {/* <CustomDate label="تاریخ انقضا" name="date" control={control} /> */}
        <JalaliDatePicker placeholder={'لطفا تاریخ را انتخاب کنید'} title={'تاریخ انقضا'}/>
        <Buttons btnName={"تایید"} onClick={onClick} />
      </Form>
    </>
  );
}
