import react from "react";
import "./index.css";
import { NavLink } from "react-router-dom";
const Navbar = ()=>{


return(

    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">RISHI WORLD</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink activeClassName="menu_drive" className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_drive" className="nav-link" to="/about">About</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink activeClassName="menu_drive" className="nav-link" to="/service">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_drive" className="nav-link" to="/contact">Contact Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_drive" className="nav-link" to="/login">Sign Up/Login</NavLink>
        </li>
        
      
        
      </ul>
      
    </div>
  </div>
</nav>
    </>
)



}
export default Navbar;