import './App.css'
import User_Dashboard from './components/user_comp/User_Dashboard'
import User_signup_form from './components/user_comp/User_signup_form'
import User_login_form from './components/user_comp/User_login_form'
import User_state from './context/User_state'
import Admin_state from './context/Admin_state'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/admin_panel/Login'
import Signup from './components/admin_panel/Signup'
import Admin_dashboard from './components/admin_panel/Admin_dashboard'

function App(props) {

  return (
    <>
    <BrowserRouter>
    <Admin_state>
    <User_state>
    <Routes>
    <Route exact path= '/' element= {<User_login_form/>}></Route>
    <Route exact path= '/signup' element= {<User_signup_form/>}></Route>
    <Route exact path= '/dashboard' element= {<User_Dashboard/>}></Route>
    <Route exact path= '/admin-login' element= {<Login/>}></Route>
    <Route exact path= '/admin-signup' element= {<Signup/>}></Route>
    <Route exact path= '/admin-dashboard' element= {<Admin_dashboard/>}></Route>
    </Routes>
    </User_state>
    </Admin_state>
    </BrowserRouter>
    </>
  )
}

export default App
