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
