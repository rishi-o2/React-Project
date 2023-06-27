import react from "react";
import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Error from "./Error";
import Navbar from "./Navigate";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from "./Login";
import signUp from "./SignUp";
import Identify from "./Indentify";


 

const App = ()=>{
  
    return(
          
        <>
        <Navbar></Navbar>
         <Routes>
         <Route exact path="/" Component={Home}></Route>
         <Route exact path="/about" Component={About}></Route>
         <Route exact path="/contact" Component={Contact}></Route>
         <Route exact path="/service" Component={Service}></Route>
         <Route exact path="/login"    Component = {Login}></Route>
         <Route exact path="/signUp"    Component = {signUp}></Route>
         <Route exact path="/*" Component={Error}></Route>
         <Route exact path="/identify" Component={Identify}></Route>

         </Routes> 

        </>



    )


}
export default App;