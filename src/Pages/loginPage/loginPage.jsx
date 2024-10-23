import Buttons from "../../Components/buttons/Buttons";
import Input from "../../Components/input/Input";
import { Link } from "react-router-dom";
import Container from "../../Layout/container/Container";
import { useState, useEffect } from "react";

const LoginPage = () => {
  const [values, setValues] = useState({});
  const [error, setError] = useState({});
  const [submit, setSubmit] = useState(false);

  const onChange = (e) => {
    const id = e.target.id;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setValues((previousState) => ({ ...previousState, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validate(values));
    setSubmit(true);
  };

  useEffect(() => {
    console.log(error);
    if (Object.keys(error).length === 0 && submit) {
      console.log(values);
    }
  }, [error]);

  const validate = (v) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!v.email) {
      errors.email = "ایمیل خود را وارد کنید";
    } else if (!regex.test(values.email)) {
      errors.email = "ایمیل وارد شده اشتباه است";
    }
    if (!v.password) {
      errors.password = "رمز عبور خود را وارد کنید";
    } else if (values.password.length < 4) {
      errors.password = "تعداد کاراکتر کمتر از حد مجاز";
    }
    return errors;
  };
  return (
    <>
      <Container>
        {/* whole form */}
        <div className="flex justify-center items-center h-screen ">
          {/* form-title */}
          <div className="w-96">
            <h2 className="text-white text-center mb-8 text-2xl font-bold">
              اینترنت بانک من
            </h2>

            {/* form-content */}
            <form
              style={{ background: "#1F2A37" }}
              className="px-5 py-6 rounded-lg"
              onSubmit={handleSubmit}>
              <h3 className="text-white mb-6 font-semibold">
                ورود به حساب کاربری
              </h3>

              <Input
                style={{ background: "#374151" }}
                className="my-2 py-2 px-2 w-full rounded-md text-gray-300 border-spacing-1 border-gray-300 outline-none"
                inputName="پست الکترونیک"
                type="text"
                id="email"
                placeholder="name@happy.com"
                onChange={onChange}
              />
              <p style={{ color: "red" }}>{error.email}</p>
              <Input
                style={{ background: "#374151" }}
                className="my-2 py-2 px-2 w-full rounded-md text-gray-300 border-spacing-1 border-gray-300 outline-none"
                inputName={"رمز عبور"}
                type="password"
                id="password"
                placeholder=""
                onChange={onChange}
              />
              <p style={{ color: "red" }}>{error.password}</p>
              <Buttons btnName={"ورود به حساب"} />

              {/* form-subtext */}
              <p className="text-gray-400">
                عضو نیستید؟{" "}
                <Link to={"/signup"} className="text-blue-700">
                  ایجاد حساب
                </Link>
              </p>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};
export default LoginPage;
