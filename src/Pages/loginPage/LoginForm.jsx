import Buttons from "../../Components/buttons/Buttons";
import Input from "../../Components/input/Input";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import Form from "../../Components/form/Form";
import SubLine from "../../Components/subLine/SubLine";
import Links from "../../Components/links/Sublink/Links";
import ContainerTheme from "../../Layout/container/Container";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; // For navigation after successful login

export default function LoginForm() {
  const [visibility, setVisibility] = useState(false);
  let clickHandler = () => {
    setVisibility((visibility) => !visibility);
  };

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("ایمیل الزامی است") // changed to email
      .email("ایمیل معتبر وارد کنید"), // Validate email format

    password: yup
      .string()
      .required("رمز عبور الزامی است")
      .min(8, "رمز عبور باید حداقل 8 خرف باشد")
      .matches(/[a-z]/, "رمز عبور باید حداقل از یک حرف کوچک استفاده شود")
      .matches(/[A-Z]/, "رمز عبور باید حداقل از یک حرف بزرگ استفاده شود")
      .matches(/\d/, "رمز باید حداقل از یک عدد تشکیل شود")
      .matches(/[@$!%*?&]/, "رمز عبور باید شامل حداقل یک خرف خاص باشد"),
  });

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    const res = await fetch("https://bankapi.liara.run/api/v1/User/login", {
      method: "POST",
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(res);
    const c = await res.text();
    console.log(c);

    if (res.status === 200) {
      localStorage.setItem("token", c); // Save token to localStorage
      navigate("/homedata"); // Navigate to home page after successful login
    }
  };

  return (
    <ContainerTheme>
      <Form Header={"اینترنت بانک من"} FormTitle={"ورود به حساب کاربری"} onSubmit={handleSubmit(onSubmit)}>
        <Input
          inputName="پست الکترونیک"
          type="email"
          placeholder="لطفا ایمیل خود را وارد کنید"
          dir={"ltr"}
          id="email"
          register={register("email")}
          className={'pl-2'}
        />
        {errors.email && (
          <p style={{ color: "red", paddingBottom: "10px" }}>
            {errors.email?.message}
          </p>
        )}

        <Input
          inputName={"رمز عبور"}
          type={visibility ? "text" : "password"}
          placeholder=""
          icon={visibility ? VisibilityOffIcon : VisibilityIcon}
          dir={"ltr"}
          className={"pl-11"}
          onClick={clickHandler}
          id="password"
          register={register("password")}
        />
        {errors.password && (
          <p style={{ color: "red", paddingBottom: "10px" }}>
            {errors.password?.message}
          </p>
        )}

        <Buttons btnName={"ورود به حساب"} type="button" onClick={handleSubmit(onSubmit)} />

        <SubLine SubText={"عضو نیستید ؟"}>
          <Links linkName="ایجاد حساب" to="/signup" />
        </SubLine>
      </Form>
    </ContainerTheme>
  );
}






