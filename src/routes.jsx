import AccountDetail from "./Components/accountDetail/accountDetail";
import Signup from "./Pages/signUp/signUpFirst/SignUp";
import HomeData from "./Components/HomeData/HomeData";
import Login from "./Pages/loginPage/Login";
import Error from "./Pages/Error/Error";
import OperationFailed from "./Components/operationFailed/operationFailed";
import OperationSuccessful from "./Components/operationSuccessful/operationSuccessful";
// import MonyTransfer from "./Components/monyTransfer/monyTransfer";
import Report from "./Pages/report/Report";
import MoneyTransfer from "./Pages/moneyTransfer/MoneyTransfer";
import ChangingPass from "./Pages/changingPass/ChangingPass";
import PooyaPass from "./Components/pooyaPass/PooyaPass";
import AccountLists from "./Pages/AccountLists/AccountLists";
import BlockUnblock from "./Components/BlockUnblock/BlockUnblock";
import NewAccount from "./Components/newAccount/NewAccount";

let routes = [
  { path: "/homedata", element: <HomeData /> },
  { path: "/signup", element: <Signup /> },
  { path: "/", element: <Login /> },
  { path: "/detail", element: <AccountDetail /> },
  { path: "/report", element: <Report /> },
  { path: "/moneytransfer", element: <MoneyTransfer /> },
  { path: "/changingpass", element: <ChangingPass /> },
  { path: "/pooya", element: <PooyaPass /> },
  { path: "*", element: <Error /> },
  { path: "/monyTransfer", element: <MoneyTransfer /> },
  { path: "/BlockUnblock", element: <BlockUnblock /> },
  { path: "/newaccount", element: <NewAccount /> },
];

export default routes;
















// import React, { useState, useEffect } from "react";
// import "./signup.css";
// import ContainerTheme from "../../../Layout/container/Container";
// import { useNavigate } from "react-router-dom";
// import Input from "../../../Components/input/Input";
// import Buttons from "../../../Components/buttons/Buttons";
// import Form from "../../../Components/form/Form";
// import SubLine from "../../../Components/subLine/SubLine";
// import Links from "../../../Components/links/Sublink/Links";
// import { useForm, Controller } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import api from "../../../api";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import JalaliDatePicker from "../../../Components/JalaliDatePicker/JalaliDatePicker";
// import Countdown from "react-countdown";

// const isPersian = (value) => {
//   if (!value) return false; // Ensure the value is not empty or null
//   const persianRegex = /^[\u0600-\u06FF\s]+$/; // Persian characters and spaces
//   return persianRegex.test(value);
// };
// export default function SignupForm() {
//   const [idNumberLength, setIdNumberLength] = useState(0); // To track the number of entered digits

//   const schema = yup.object().shape({
//     name: yup
//       .string()
//       .required("نام الزامی است")
//       .min(3, "حداقل 3 حرف لازم است")
//       .matches(/^[^0-9]+$/, "نام نباید شامل عدد باشد")
//       .matches(
//         /^[^!@#$%^&*()-_=+~`.<>?/";:]+$/,
//         "نام نباید حاوی کاراکتر خاص باشد"
//       )
//       .test("name", "نام باید با حروف فارسی وارد شود", isPersian),
//     lastName: yup
//       .string()
//       .required("نام خانوادگی الزامی است")
//       .min(3, "حداقل 3 حرف لازم است")
//       .matches(/^[^0-9]+$/, "نام خانوادگی نباید شامل عدد باشد")
//       .matches(
//         /^[^!@#$%^&*()-_=+~`.<>?/";:]+$/,
//         "نام خانوادگی نباید حاوی کاراکتر خاص باشد"
//       )
//       .test("lastname", "نام خانوادگی باید با حروف فارسی وارد شود", isPersian),
//     idNumber: yup
//       .string()
//       .required("کد ملی را وارد کنید")
//       .matches(/^\d{10}$/, "کدملی باید 10 عدد باشد")
//       .test("iranian-national-id", "کد ملی معتبر نیست", (value) => {
//         if (!value) return false;

//         // Convert the input into an array of numbers
//         const digits = value.split("").map(Number);

//         // Check for repeated digits (e.g., "1111111111" is invalid)
//         if (digits.every((digit) => digit === digits[0])) {
//           return false;
//         }

//         const check = digits.pop(); // last digit is the checksum
//         const sum = digits.reduce(
//           (acc, digit, idx) => acc + digit * (10 - idx),
//           0
//         );
//         const remainder = sum % 11;

//         return (
//           (remainder < 2 && check === remainder) ||
//           (remainder >= 2 && check === 11 - remainder)
//         );
//       }),

//     date: yup
//       .date()
//       .required("تاریخ تولد را وارد کنید")
//       .nullable()
//       .max(new Date(), "تاریخ باید در گذشته باشد"),
//     email: yup
//       .string()
//       .email("ایمیل معتبر وارد کتید")
//       .required("ایمیل الزامی است"),
//     phoneNumber: yup
//       .string()
//       .required("شماره تلفن الزامی است")
//       // .matches(/^\d{11}$/, "شماره تلفن باید حداقل 11 عدد باشد"),
//       .matches(/^09\d{9}$/, "شماره تلفن باید 11 رقم و با 09 شروع شود"),
//     username: yup.string().required("یوزر الزامی است"),
//     password: yup
//       .string()
//       .required("رمز الزامی است")
//       .min(8, "رمز باید حداقل 8 رقم باشد")
//       .matches(/[a-z]/, "رمز باید حداقل یک حرف کوچک داشته باشد")
//       .matches(/[A-Z]/, "رمز باید حداقل یک حرف بزرگ داشته باشد")
//       .matches(/\d/, "رمز باید حداقل یک عدد داشته باشد")
//       .matches(/[@$!%*?&]/, "رمز باید حداقل یه حرف مخصوص داشته باشد"),
//     confirmPassword: yup
//       .string()
//       .oneOf([yup.ref("password"), null], "رمز ها باید یکسان باشند")
//       .required("رمز را مجدد وارد کنید"),

//     otpPassword: yup
//       .string()
//       .required("رمز الزامی است")
//       .matches(/^\d+$/, "رمز فقط باید شامل اعداد باشد") // Only allows numbers
//       .min(6, "رمز باید 6 رقم باشد")
//       .max(6, "رمز باید 6 رقم باشد"), // Ensure exactly 6 digits
//   });

//   const [countdownTime, setCountDownTime] = useState(null);
//   const [formStep, setFormStep] = useState(0);
//   const [passVisibility, setPassVisibility] = useState(false);
//   const [confPassVisibility, setConfPassVisibility] = useState(false);
//   const [countdownKey, setCountdownKey] = useState(0);
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [formData, setFormData] = useState({});

//   const onChangeHandler = (field, value) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   useEffect(() => {
//     if (formStep === 3) {
//       setCountDownTime(Date.now() + 60000);
//     }
//   }, [formStep]);
//   const {
//     control,
//     register,
//     handleSubmit,
//     trigger,
//     getValues,
//     formState: { errors, isValid },
//   } = useForm({
//     resolver: yupResolver(schema),
//     mode: "onChange",
//   });

//   const CountdownReset = () => {
//     setCountDownTime(Date.now() + 60000);
//     setCountdownKey((prev) => prev + 1);
//   };

//   const onSubmit = async (data) => {
//     setFormData(data);
//   };

//   const sendOtp = async (phoneNumber) => {
//     console.log("show number:", phoneNumber);

//     try {
//       const number = { phoneNumber: formData.phoneNumber };
//       const response = await fetch(
//         "https://bankapi.liara.run/api/v1/Otp/send-otp",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ phoneNumber: phoneNumber }),
//         }
//       );
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`); // Handle HTTP errors
//       }
//       const data = await response.json(); // Wait for the response to be parsed as JSON
//       console.log(data); // Handle the response data
//       console.log("OTP Response:", result); // Log the response for debugging
//       console.log("Sending OTP to:", phoneNumber);
//     } catch (error) {
//       console.error("Error:", error); // Handle any errors
//     }
//   };

//   const verifyOtp = async (otpCode, phoneNumber) => {
//     console.log(
//       "Verifying OTP for phone number:",
//       phoneNumber,
//       "with OTP code:",
//       otpCode
//     );
//     try {
//       const response = await fetch(
//         "https://bankapi.liara.run/api/v1/Otp/verify-otp",

//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             code: otpCode, // Change `otpCode` to `code` as per server expectations
//             phoneNumber: phoneNumber,
//           }),
//         }
//       );
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`); // Handle HTTP errors
//       }
//       const data = await response.json(); // Wait for the response to be parsed as JSON
//       console.log("OTP Verification Response:", data); // Handle the response from server
//       if (data.success) {
//         console.log("OTP Verified successfully!");
//         return true; // Return true when OTP is verified
//       } else {
//         console.log("OTP verification failed.");
//         return false; // Return false if OTP is incorrect
//       }
//     } catch (error) {
//       console.error("Error during OTP verification:", error); // Handle any errors
//       return false; // Return false in case of an error
//     }
//   };

//   const navigate = useNavigate();
//   const nextHandler = async () => {
//     const currentStepFields =
//       formStep === 0
//         ? ["name", "lastName", "idNumber"]
//         : formStep === 1
//         ? ["date", "phoneNumber", "email"]
//         : formStep === 2
//         ? ["username", "password", "confirmPassword"]
//         : ["otpPassword"];

//     const isStepValid = await trigger(currentStepFields);

//     if (isStepValid) {
//       if (formStep === 2) {
//         // Step 3 is about to be shown
//         const phoneNumber = getValues("phoneNumber"); // Retrieve the phone number
//         console.log("Phone Number captured before sending OTP:", phoneNumber);

//         if (phoneNumber) {
//           await sendOtp(phoneNumber); // Pass the phone number to sendOtp
//         } else {
//           console.error("Phone number is missing!");
//         }
//       } else if (formStep === 3) {
//         // Step 3, verify the OTP
//         const otpCode = getValues("otpPassword"); // Get OTP from input field
//         const phoneNumber = getValues("phoneNumber"); // Get phone number for verification

//         if (otpCode && phoneNumber) {
//           const otpVerified = await verifyOtp(phoneNumber, otpCode); // Verify OTP
//           if (otpVerified) {
//             // If OTP is valid, navigate to the login page
//             navigate("/"); // Navigate to the login page
//           } else {
//             console.error("OTP verification failed!");
//           }
//         } else {
//           console.error("OTP or Phone number is missing!");
//         }
//       }
//       setFormStep((prev) => prev + 1);
//     }
//   };

//   const prevHandler = () => {
//     setFormStep((prev) => prev - 1);
//   };

//   const clickHandler = () => {
//     setPassVisibility(!passVisibility);
//   };
//   const clickHandlerConf = () => {
//     setConfPassVisibility(!confPassVisibility);
//   };

//   return (
//     <ContainerTheme>
//       <Form
//         Header="اینترنت بانک من"
//         FormTitle="ایجاد حساب کاربری"
//         onSubmit={handleSubmit(onSubmit)}
//       >
//         {formStep === 0 && (
//           <>
//             <Input
//               style={{ background: "#374151" }}
//               inputName="نام"
//               type="text"
//               placeholder="لطفا نام خود را وارد کنید"
//               id="name"
//               register={register("name")}
//             />
//             <p style={{ color: "red", paddingBottom: "10px" }}>
//               {errors.name?.message}
//             </p>

//             <Input
//               style={{ background: "#374151" }}
//               inputName="نام خانوادگی"
//               type="text"
//               placeholder="لطفا نام خانوادگی خود را وارد کنید"
//               id="lastName"
//               register={register("lastName")}
//             />
//             <p style={{ color: "red", paddingBottom: "10px" }}>
//               {errors.lastName?.message}
//             </p>

//             <Controller
//               name="idNumber"
//               control={control}
//               defaultValue="" // Ensure defaultValue is explicitly set
//               render={({ field }) => (
//                 <Input
//                   style={{ background: "#374151" }}
//                   inputName="کدملی"
//                   type="text"
//                   placeholder="لطفا کدملی خود را وارد کنید"
//                   className={"pl-2"}
//                   id="idNumber"
//                   dir="ltr"
//                   value={field.value} // Bind value to Controller state
//                   onChange={(e) => {
//                     const rawValue = e.target.value;
//                     const numericValue = rawValue.replace(/\D/g, ""); // Keep only digits
//                     if (numericValue.length <= 10) {
//                       field.onChange(numericValue); // Update Controller state
//                       setIdNumberLength(numericValue.length); // Update length tracker
//                     }
//                   }}
//                 />
//               )}
//             />

//             <p style={{ color: "white" }}>{idNumberLength}/10</p>
//             <p style={{ color: "red", paddingBottom: "10px" }}>
//               {errors.idNumber?.message}
//             </p>
//           </>
//         )}

//         {formStep === 1 && (
//           <>
//             <h1 className="text-white  text-sm pb-2">تاریخ تولد</h1>

//             <Controller
//               name="date"
//               control={control}
//               render={({ field }) => (
//                 <JalaliDatePicker
//                   id="date"
//                   type={"text"}
//                   {...field}
//                   onChange={(date) => {
//                     field.onChange(date);
//                   }}
//                   placeholder="تاریخ تولد خود را انتخاب کنید"
//                 />
//               )}
//             />

//             <p style={{ color: "red", paddingBottom: "10px" }}>
//               {errors.date?.message}
//             </p>

//             <Input
//               inputName="شماره موبایل"
//               type="text"
//               placeholder=" مثال 09121212730 "
//               dir="ltr"
//               id="phoneNumber"
//               register={register("phoneNumber")}
//               className={"pl-4"}
//             />
//             <p style={{ color: "red", paddingBottom: "10px" }}>
//               {errors.phoneNumber?.message}
//             </p>

//             <Input
//               inputName="ایمیل"
//               type="text"
//               placeholder=" لطفا ایمیل خود را وارد کنید"
//               dir="ltr"
//               id="email"
//               register={register("email")}
//               className={"pl-4"}
//             />
//             <p style={{ color: "red", paddingBottom: "10px" }}>
//               {errors.email?.message}
//             </p>

//             <Buttons
//               className="bg-slate-800 text-blue-600 border-2 border-blue-600 hover:bg-slate-700"
//               btnName="بازگشت"
//               type="button"
//               onClick={prevHandler}
//             />
//           </>
//         )}

//         {formStep === 2 && (
//           <>
//             <Input
//               style={{ background: "#374151" }}
//               inputName="نام کاربری"
//               type="text"
//               placeholder="لطفا نام کاربری خود را وارد کنید"
//               id="username"
//               register={register("username")}
//             />
//             <p style={{ color: "red", paddingBottom: "10px" }}>
//               {errors.username?.message}
//             </p>

//             <Input
//               inputName="رمز عبور"
//               type={passVisibility ? "text" : "password"}
//               placeholder="لطفا رمز عبور خود را وارد کنید"
//               icon={passVisibility ? VisibilityOffIcon : VisibilityIcon}
//               dir="ltr"
//               id="password"
//               register={register("password")}
//               onClick={clickHandler}
//               className={" pl-10 "}
//             />

//             <p style={{ color: "red", paddingBottom: "10px" }}>
//               {errors.password?.message}
//             </p>

//             <Input
//               inputName="تایید رمز عبور"
//               type={confPassVisibility ? "text" : "password"}
//               placeholder="لطفا رمز عبور را دوباره وارد کنید"
//               icon={confPassVisibility ? VisibilityOffIcon : VisibilityIcon}
//               dir="ltr"
//               id="confirmPassword"
//               register={register("confirmPassword")}
//               onClick={clickHandlerConf}
//               className={" pl-10 "}
//             />
//             <p style={{ color: "red", paddingBottom: "10px" }}>
//               {errors.confirmPassword?.message}
//             </p>

//             <Buttons
//               className="bg-slate-800 text-blue-600 border-2 border-blue-600 hover:bg-slate-700"
//               btnName="بازگشت"
//               type="button"
//               onClick={prevHandler}
//             />
//           </>
//         )}
//         {formStep === 3 && (
//           <>
//             <Input
//               style={{ background: "#374151" }}
//               inputName={`رمز یکبار مصرف به (${
//                 phoneNumber || "شماره وارد شده"
//               }) ارسال شد`}
//               type={passVisibility ? "text" : "password"}
//               placeholder="لطفا رمز دریافتی را وارد کنید"
//               icon={passVisibility ? VisibilityOffIcon : VisibilityIcon}
//               dir="ltr"
//               id="otpPassword"
//               register={register("otpPassword")}
//               onClick={clickHandler}
//               className={" pl-10 mb-0 "}
//             />
//             <p style={{ color: "red", paddingBottom: "10px" }}>
//               {errors.otpPassword?.message}
//             </p>
//             <div className="flex items-center justify-between">
//               <Links
//                 onclick={() => {
//                   CountdownReset(); // Reset the countdown timer
//                   const phoneNumber = getValues("phoneNumber"); // Get the phone number
//                   if (phoneNumber) {
//                     sendOtp(phoneNumber); // Send the OTP again
//                   }
//                 }}
//                 linkName="دریافت مجدد کد"
//                 className={"pt-0 pb-2"}
//               />
//               {countdownTime && (
//                 <span className="text-white bg-gray-800 rounded-md">
//                   <Countdown
//                     key={countdownKey}
//                     date={countdownTime}
//                     renderer={({ minutes, seconds }) => {
//                       return (
//                         <span>
//                           {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
//                         </span>
//                       );
//                     }}
//                   />
//                 </span>
//               )}
//             </div>
//             <Buttons
//               className="bg-slate-800 text-blue-600 border-2 border-blue-600 hover:bg-slate-700"
//               btnName="بازگشت"
//               type="button"
//               onClick={prevHandler}
//             />
//           </>
//         )}

//         <Buttons
//           btnName={formStep < 3 ? "ادامه" : "ثبت نام"}
//           type="button"
//           onClick={async () => {
//             if (formStep === 3) {
//               // Handle OTP verification
//               const otpCode = getValues("otpPassword"); // Get OTP from input
//               const phoneNumber = getValues("phoneNumber"); // Get phone number

//               if (otpCode && phoneNumber) {
//                 const otpVerified = await verifyOtp(phoneNumber, otpCode); // Verify OTP
//                 if (otpVerified) {
//                   // If OTP is valid, navigate to the login page
//                   navigate("/"); // Navigate to the login page
//                 } else {
//                   console.log("OTP verification failed!");
//                 }
//               } else {
//                 console.log("OTP or phone number is missing!");
//               }
//             } else {
//               // Handle form submission for earlier steps
//               nextHandler(); // Proceed to the next step for formStep < 3
//             }
//           }}
//         />

//         <SubLine SubText="حساب کاربری دارید ؟">
//           <Links to="/" linkName="ورود به حساب" />
//         </SubLine>
//       </Form>
//     </ContainerTheme>
//   );
// }
