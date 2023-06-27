import react from "react";
import "./index.css"
import { NavLink } from "react-router-dom";

const Login = ()=>{

return(
    <>
        <form id="form1">
        <h3>Login</h3>
            <div className="inputbox">
               <input type="text" name="username" autoComplete="off" required/>
               <label>Username</label>
            </div>
            <div className="inputbox">
               <input type="password" name="password" autoComplete="off" required/>
               <label>Password</label>
            </div>
            <input type="submit" name="login" className="lbtn"  value={"login"}/>
        </form>
        <p id="ppara" >New Member? <NavLink to="/signUp"> Sign Up </NavLink></p>
    </>
)



}
export default Login;