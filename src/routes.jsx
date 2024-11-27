import AccountDetail from "./Components/accountDetail/accountDetail";
import Signup from "./Pages/signUp/signUpFirst/SignUp";
import HomeData from "./Components/HomeData/HomeData";
import Login from "./Pages/loginPage/Login";
import Error from "./Pages/Error/Error";
import BlockUnblock from "./Pages/BlockUnblock/BlockUnblock";
import OperationFailed from "./Components/operationFailed/operationFailed";
import OperationSuccessful from "./Components/operationSuccessful/operationSuccessful";
import MonyTransfer from "./Components/monyTransfer/monyTransfer";
import Report from "./Pages/report/Report";
import MoneyTransfer from "./Pages/moneyTransfer/MoneyTransfer";
import ChangingPass from "./Pages/changingPass/ChangingPass";
// import BlockingAccount from "./Pages/blockingAccount/BlockingAccount";
import PooyaPass from "./Components/pooyaPass/PooyaPass";
import AccountLists from "./Pages/AccountLists/AccountLists";

let routes = [
  { path: "/homedata", element: <HomeData /> },
  { path: "/signup", element: <Signup /> },
  { path: "/", element: <Login /> },
  { path: "/detail", element: <AccountDetail /> },
  { path: "/report", element: <Report /> },
  { path: "/moneytransfer", element: <MoneyTransfer /> },
  { path: "/changingpass", element: <ChangingPass /> },
  // { path: "/blockingaccount", element: <BlockingAccount /> },
  { path: "/pooya", element: <PooyaPass /> },

  { path: "*", element: <Error /> },
  // { path: "/block", element: <BlockUnblock /> },
  { path: "/monyTransfer", element: <MoneyTransfer /> },
];

export default routes;
