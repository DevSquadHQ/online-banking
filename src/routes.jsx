import Signup from "./Pages/signUp/signUp1/SignUp";
import Home from "./Pages/Home/Home";
import LoginPage from "./Pages/loginPage/loginPage";
import SignUp2 from "./Pages/signUp/signUp2/signUp2";
import AccountDetail from "./Components/accountDetail/accountDetail";

let routes = [
  { path: "/home", element: <Home /> },
  { path: "/signup", element: <Signup /> },
  { path: "/signup2", element: <SignUp2 /> },
  { path: "/", element: <LoginPage /> },
  { path: "/detail", element: <AccountDetail /> },
];

export default routes;
