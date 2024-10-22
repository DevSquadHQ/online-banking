import React from "react";
import "./signup.css";
import ContainerTheme from "../../../Layout/container/Container";
import Input from "../../../Components/input/Input";
import Buttons from "../../../Components/buttons/Buttons";
import Form from "../../../Components/form/Form";
import SubLine from "../../../Components/subLine/SubLine";
import Links from "../../../Components/links/Sublink/Links";

export default function SignupForm() {
  return (
    <ContainerTheme>
      <Form Header={"اینترنت بانک من"} FormTitle={"ایجاد حساب کاربری"}>
        <Input
          style={{ background: "#374151" }}
          inputName="نام"
          type="text"
          placeholder="لطفا نام  خود را وارد کنید"
        />
        <Input
          style={{ background: "#374151" }}
          inputName={"نام خانوادگی"}
          type="text"
          placeholder="لطفا نام خانوادگی خود را وارد کنید"
        />
        <Input
          style={{ background: "#374151" }}
          inputName={"کدملی"}
          type="number"
          placeholder="لطفا کدملی خود را وارد کنید"
          dir="ltr"
        />
        <Buttons btnName={"ادامه"} to={"/signup2"} />
        <SubLine SubText={"حساب کاربری دارید ؟"}>
          <Links to={"/login"} linkName={"ورود به حساب"} />
        </SubLine>
      </Form>
    </ContainerTheme>
  );
}
