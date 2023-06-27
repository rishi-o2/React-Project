import react from "react";
import "./index.css";
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";


const Home =()=>{
    const click =()=>{

        <NavLink  to="/service"></NavLink>
    }

return(
    <>
      
     <div className="text">Welcome to <span style={{color:"rgb(0,191,255"}}>RISHI's WORLD</span>
     <p>Let's work hard and strive for best</p>
     
     </div>
     <img src="pic3.jpg" alt="Girl in a jacket" width="300" height="300" id="homeImg"/>
     <NavLink to="/service">
     <button className="rounded-pill">Check Our Services</button>
     </NavLink>
     
     



    </>
)




}
export default Home;