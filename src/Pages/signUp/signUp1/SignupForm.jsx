import React from "react";
import "./signup.css";
import ContainerTheme from "../../../Layout/container/Container";
import { Link } from "react-router-dom";
import Input from "../../../Components/input/Input";
import Buttons from "../../../Components/buttons/Buttons";
export default function SignupForm() {
  return (
    <ContainerTheme>
      {/* whole form */}
      <div className="flex justify-center items-center h-screen ">
        <div className="w-96">
          <h2 className="text-white text-center mb-8 text-2xl font-bold">
            اینترنت بانک من
          </h2>
          <form
            style={{ background: "#1F2A37" }}
            className="px-5 py-6 rounded-lg"
          >
            <h3 className="text-white mb-6 font-semibold">ایجاد حساب کاربری</h3>

            <Input
              style={{ background: "#374151" }}
              className="my-2 py-2 px-2 w-full rounded-md text-gray-300 border-spacing-1 border-gray-300 outline-none"
              inputName="نام"
              type="text"
              placeholder="لطفا نام  خود را وارد کنید"
            />

            <Input
              style={{ background: "#374151" }}
              className="my-2 py-2 px-2 w-full rounded-md text-gray-300 border-spacing-1 border-gray-300 outline-none"
              inputName={"نام خانوادگی"}
              type="text"
              placeholder="لطفا نام خانوادگی خود را وارد کنید"
            />

            <Input
              style={{ background: "#374151" }}
              className="ltr my-2 py-2 px-2 w-full rounded-md text-gray-300 border-spacing-1 border-gray-300 outline-none"
              inputName={"کدملی"}
              type="number"
              placeholder="لطفا کدملی خود را وارد کنید"
              dir="ltr"
            />

            <Buttons btnName={"ادامه"} to={"/signup2"} />

            <p className="text-gray-400 mt-2 text-sm">
              حساب کاربری دارید؟{" "}
              <Link to={"/login"} className="text-blue-700">
                ورود به حساب
              </Link>
            </p>
          </form>
        </div>
      </div>
    </ContainerTheme>
  );
}
