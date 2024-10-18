import Buttons from "../Components/buttons/Buttons";
import Input from "../Components/input/Input";
import { Link } from "react-router-dom";
import Container from "../Layout/container/Container";

const LoginPage = () => {
  return (
    <>
      <Container>
        {/* whole form */}
        <div className='flex justify-center items-center h-screen '>
          {/* form-title */}
          <div className='w-96'>
            <h2 className='text-white text-center mb-8 text-2xl font-bold'>
              اینترنت بانک من
            </h2>

            {/* form-content */}
            <form
              style={{ background: "#1F2A37" }}
              className='px-5 py-6 rounded-lg'
            >
              <h3 className='text-white mb-6 font-semibold'>
                ورود به حساب کاربری
              </h3>

              <Input
                style={{ background: "#374151" }}
                className='my-2 py-2 px-2 w-full rounded-md text-gray-300 border-spacing-1 border-gray-300 outline-none'
                inputName='پست الکترونیک'
                type='text'
                placeholder='name@happy.com'
              />

              <Input
                style={{ background: "#374151" }}
                className='my-2 py-2 px-2 w-full rounded-md text-gray-300 border-spacing-1 border-gray-300 outline-none'
                inputName={"رمز عبور"}
                type='password'
                placeholder=''
              />
              <Buttons btnName={"ورود به حساب"} />

              {/* form-subtext */}
              <p className='text-gray-400'>
                عضو نیستید؟{" "}
                <Link to={"/signup"} className='text-blue-700'>
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
