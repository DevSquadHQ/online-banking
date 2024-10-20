import React from "react";
import ContainerTheme from "../../../Layout/container/Container";
import { Link } from "react-router-dom";
import Input from "../../../Components/input/Input";
import Buttons from "../../../Components/buttons/Buttons";

export default function SignupForm2() {
  return (
    <ContainerTheme>
      <div className="flex justify-center items-center h-screen">
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
              inputName={'تاریخ تولد'}
              type="text"
              placeholder="انتخاب تاریخ"
              data-jdp
            />

            <Input
              style={{ background: "#374151" }}
              className="my-2 py-2 px-2 w-full rounded-md text-gray-300 border-spacing-1 border-gray-300 outline-none"
              inputName={"شماره موبایل"}
              type="number"
              placeholder=" مثال 09121212730 "
              dir='ltr'
            />

            <Input
              style={{ background: "#374151" }}
              className="my-2 py-2 px-2 w-full rounded-md text-gray-300 border-spacing-1 border-gray-300 outline-none"
              inputName={"ایمیل"}
              type="email"
              placeholder=" لطفا ایمیل خود را وارد کنید"
              dir='ltr' 
            />

            <Buttons btnName={"ثبت نام"}  to={'/'}/>

            
              <Buttons
               
                className={' bg-slate-800 text-blue-600  border-2 border-blue-600 hover:bg-slate-700 '}
                btnName={"بازگشت"}
                to='/signup'
              />
            

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


