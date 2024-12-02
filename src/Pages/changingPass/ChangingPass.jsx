import React, { useState } from "react";
import Form from "../../Components/form/Form";
import Input from "../../Components/input/Input";
import { Button } from "antd";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function ChangingPass() {
  const [visibility, setVisibility] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const clickHandler = (inputName) => {
    setVisibility((prevState) => ({
      ...prevState,
      [inputName]: !prevState[inputName], // Toggle visibility for the clicked input
    }));
  };

  // Define the validation schema
  const schema = yup.object({
    currentPassword: yup
      .string()
      .required("رمز الزامی است")
      .min(8, "رمز حداقل باید 8 رقم باشد")
      .matches(/[a-z]/, "رمز باید حداقل یک حرف کوچک داشته باشد")
      .matches(/[A-Z]/, "رمز باید حداقل یک حرف بزرگ داشته باشد")
      .matches(/\d/, "رمز باید حداقل یک عدد داشته باشد")
      .matches(/[@$!%*?&]/, "رمز باید حداقل یک حرف مخصوص داشته باشد"),
    newPassword: yup
      .string()
      .required("رمز الزامی است")
      .min(8, "رمز حداقل باید 8 رقم باشد")
      .matches(/[a-z]/, "رمز باید حداقل یک حرف کوچک داشته باشد")
      .matches(/[A-Z]/, "رمز باید حداقل یک حرف بزرگ داشته باشد")
      .matches(/\d/, "رمز باید حداقل یک عدد داشته باشد")
      .matches(/[@$!%*?&]/, "رمز باید حداقل یه حرف مخصوص داشته باشد")
      .notOneOf(
        [yup.ref("currentPassword"), null],
        "رمز جدید نباید مشابه رمز فعلی باشد"
      ),
    confirmPassword: yup
      .string()
      .required("رمز را مجدد وارد کنید")
      .oneOf([yup.ref("newPassword"), null], "رمز ها باید یکسان باشند"),
  });

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    // mode: "onChange",
  });

  const onSubmit = async (data) => {
    const isValid = await trigger();
    if (isValid) {
      console.log(data);
    }
  };

  return (
    <Form FormTitle={"تغییر رمز اولیه ثابت"}>
      <Input
        inputName={"رمز عبور فعلی"}
        onClick={() => clickHandler("currentPassword")}
        icon={visibility.currentPassword ? VisibilityOffIcon : VisibilityIcon}
        type={visibility.currentPassword ? "text" : "password"}
        register={register('currentPassword')}
        dir="ltr"
      />
      <p style={{ color: "red", paddingBottom: "10px" }}>
        {errors.currentPassword?.message}
      </p>
      <Input
        inputName={"رمز عبور جدید"}
        onClick={() => clickHandler("newPassword")}
        icon={visibility.newPassword ? VisibilityOffIcon : VisibilityIcon}
        type={visibility.newPassword ? "text" : "password"}
        
        register={register('newPassword')}
        dir="ltr"
      />
      <p style={{ color: "red", paddingBottom: "10px" }}>
        {errors.newPassword?.message}
      </p>
      <Input
        inputName={"تکرار رمز عبور جدید"}
        onClick={() => clickHandler("confirmPassword")}
        icon={visibility.confirmPassword ? VisibilityOffIcon : VisibilityIcon}
        type={visibility.confirmPassword ? "text" : "password"}
        dir="ltr"
        register={register('confirmPassword')}
      />
      <p style={{ color: "red", paddingBottom: "10px" }}>
        {errors.confirmPassword?.message}
      </p>
      <Button
        block
        type="primary"
        className="py-5"
        onClick={handleSubmit(onSubmit)}
      >
        تایید
      </Button>
    </Form>
  );
}
