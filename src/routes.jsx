
import Signup from "./Pages/signUp/signUp1/SignUp"
import Home from "./Pages/Home/Home"
import Login from "./Pages/loginPage/Login"
import SignUp2 from "./Pages/signUp/signUp2/signUp2"


let routes = [
    
    {path:'/home', element:<Home/>},
    {path:'/signup', element:<Signup/>},
    {path:'/login', element:<Login/>},
    {path:'/signup2', element:<SignUp2/>},
   
    
]

export default routes