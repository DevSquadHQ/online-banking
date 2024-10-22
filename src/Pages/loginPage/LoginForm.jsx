import Buttons from "../../Components/buttons/Buttons";
import Input from "../../Components/input/Input";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import Form from "../../Components/form/Form";
import SubLine from "../../Components/subLine/SubLine";
import Links from "../../Components/links/Sublink/Links";
import ContainerTheme from "../../Layout/container/Container";

export default function LoginForm() {
  const [visibility, setVisibility] = useState(false);
  let clickHandler = () => {
    setVisibility(!visibility);
  };

  return (
    <>
      <ContainerTheme>
        <Form Header={"اینترنت بانک من"} FormTitle={"ورود به حساب کاربری"}>
          <Input
            inputName="پست الکترونیک"
            type="text"
            placeholder="لطفا ایمیل خود را وارد کنید"
            dir={"ltr"}
          />
          <Input
            inputName={"رمز عبور"}
            type={visibility ? "type" : "password"}
            placeholder=""
            icon={visibility ? VisibilityOffIcon : VisibilityIcon}
            dir={"ltr"}
            className={"pl-11 "}
            onClick={clickHandler}
          />
          <Buttons btnName={"ورود به حساب"} />

          <SubLine SubText={"عضو نیستید ؟"}>
            <Links linkName="ایجاد حساب" to="/signup" />
          </SubLine>
        </Form>
        {/* whole form */}
      </ContainerTheme>
    </>
  );
}
