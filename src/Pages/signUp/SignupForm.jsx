import React from "react";
import Container from "../../Layout/container/Container";
// import { Link } from "react-router-dom";
import Input from "../../Components/input/Input";
import Buttons from "../../Components/buttons/Buttons";
import Links from "../../Components/links/Links";

export default function SignupForm() {
  return (
    <Container>
      {/* whole form */}
      <div className='flex justify-center items-center h-screen '>
        <div className='md:w-96 w-[375px]'>
          <h2 className='text-white text-center mb-8 text-[32px] font-bold'>
            اینترنت بانک من
          </h2>

          {/* form-content */}
          <form
            style={{ background: "#1F2A37" }}
            className='px-5 py-6 rounded-lg'
          >
            <h3 className='text-white mb-6 font-semibold text-xl'>
              ایجاد حساب کاربری
            </h3>
            {/* inputs */}
            <Input
              style={{ background: "#374151" }}
              className='my-2 py-2 px-2 w-full rounded-md text-gray-300 border-spacing-1 border-gray-300 outline-none'
              inputName='نام'
              type='text'
              placeholder='لطفا نام  خود را وارد کنید'
            />

            <Input
              style={{ background: "#374151" }}
              className='my-2 py-2 px-2 w-full rounded-md text-gray-300 border-spacing-1 border-gray-300 outline-none'
              inputName={"نام خانوادگی"}
              type='text'
              placeholder=' لطفا نام خانوادگی خود را وارد کنید'
            />

            <Input
              style={{ background: "#374151" }}
              className='my-2 py-2 px-2 w-full rounded-md text-gray-300 border-spacing-1 border-gray-300 outline-none'
              inputName={"کدملی"}
              type='number'
              placeholder=' لطفا کدملی خود را وارد کنید'
            />
            <div>
              {/* btn */}
              <Buttons btnName={"ادامه"} />
            </div>
            {/* link */}
            <p className='text-gray-400 text-sm mt-1 mt-2'>
              حساب کاربری دارید؟ <Links to={"/"} linkName={"ورود به حساب"} />
            </p>
          </form>
        </div>
      </div>
    </Container>
  );
}
