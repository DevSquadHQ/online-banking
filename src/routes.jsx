import Home from "./Pages/Home/Home";
import Signup from "./Pages/signUp/SignupForm";
import LoginPage from "./Pages/LoginPage";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <LoginPage /> },
];

export default routes;
