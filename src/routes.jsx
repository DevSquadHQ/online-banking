import AccountDetail from "./Components/accountDetail/accountDetail";
import Signup from "./Pages/signUp/signUpFirst/SignUp";
import HomeData from "./Components/HomeData/HomeData";
import Login from "./Pages/loginPage/Login";
import Error from "./Pages/Error/Error";
import BlockUnblock from "./Pages/BlockUnblock/BlockUnblock";
import OperationFailed from "./Components/operationFailed/operationFailed";
import OperationSuccessful from "./Components/operationSuccessful/operationSuccessful";
import MonyTransfer from "./Components/monyTransfer/monyTransfer";

let routes = [
  { path: "/homedata", element: <HomeData /> },
  { path: "/signup", element: <Signup /> },
  { path: "/", element: <Login /> },
  { path: "/detail", element: <AccountDetail /> },
  { path: "*", element: <Error /> },
  { path: "/block", element: <BlockUnblock /> },
  { path: "/monyTransfer", element: <MonyTransfer /> },
];

export default routes;
