import React from "react";
import Container from "../../../Layout/container/Container";
import { Link } from "react-router-dom";
import Input from "../../../Components/input/Input";
import Buttons from "../../../Components/buttons/Buttons";
function SignupForm2() {
  jalaliDatepicker.startWatch({
    minDate: "attr",
    maxDate: "attr",
  });

  return (
    <Container>
      {/* whole form */}
      <div className="flex justify-center items-center h-screen ">
        <div className="w-96">
          <h2 className="text-white text-center mb-8 text-2xl font-bold">
            اینترنت بانک من
          </h2>
          <form
            style={{ background: "#1F2A37" }}
            className="px-5 py-6 rounded-lg">
            <h3 className="text-white mb-6 font-semibold">ایجاد حساب کاربری</h3>
            <h5 style={{ color: "#fff" }}>تاریخ تولد</h5>
            <input
              style={{ background: "#374151" }}
              className="my-2 py-2 px-2 w-full rounded-md text-gray-300 border-spacing-1 border-gray-300 outline-none"
              type="text"
              placeholder="انتخاب تاریخ"
              data-jdp
            />

            <Input
              style={{ background: "#374151" }}
              className="my-2 py-2 px-2 w-full rounded-md text-gray-300 border-spacing-1 border-gray-300 outline-none"
              inputName={"شماره موبایل"}
              type="text"
              placeholder=" مثال 09121212730 "
            />

            <Input
              style={{ background: "#374151" }}
              className="my-2 py-2 px-2 w-full rounded-md text-gray-300 border-spacing-1 border-gray-300 outline-none"
              inputName={"ایمیل"}
              type="email"
              placeholder=" لطفا ایمیل خود را وارد کنید"
            />
            <Buttons btnName={"ثبت نام"} />

            <Link to="/signup">
              <Buttons
                style={{
                  color: "#1a56db",
                  background: "#1F2A37",
                  border: "1px solid #1a56db",
                }}
                btnName={"بازگشت"}
              />
            </Link>

            <p className="text-gray-400">
              حساب کاربری دارید؟{" "}
              <Link to={"/"} className="text-blue-700">
                ورود به حساب
              </Link>
            </p>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default SignupForm2;
