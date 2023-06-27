import react, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom'; 
import Identify from "./Indentify";



const SignUp = ()=>{
  const navigate = useNavigate();

 const [user,setuser]= useState({
  name:" ",
  email:" ",
  phone:" ",
  profession:" ",
  password:" ",
  cpassword:" "
 });
 const [fuser, fsetuser]=useState({

 })
 let name;
 let value;
 const inputfield = (e)=>{
  
  name=e.target.name;
  
  value= e.target.value;
  setuser({...user,[name]:value});






 }
 console.log(user);
 const AddData = async(e)=>{

  e.preventDefault();
  const {name,email,phone,profession,password,cpassword}=user;
  const res= await fetch("/register",{
   method: "POST",
   headers:{
    "Content-Type" : "application/json"
   },
   body: JSON.stringify({
    name,email,phone,profession,password,cpassword

   })
  });
  const data= await res.json();

  if(data.status===422 || !data)
  {
    window.alert("Invalid Registeration");
    console.log("Invalid Registeration");

  }
  else{
    window.alert("Successfull Registeration");
    console.log("Successfull Registeration");
    navigate("/identify")
  }


     

<Identify 
  name= {user.name}
 />


 }
 




  return(
     <>
     <h1 style={{textAlign:"center"}} className="stext">Sign Up</h1>
     <form id="form2">
  <div className="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="string" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name= "name"  placeholder="Enter your name" onChange={inputfield}/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Phone No.</label> 
    <input type="string" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Phone No."  name="phone" onChange={inputfield}/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Email</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email"  placeholder="Enter your Email id" onChange={inputfield}/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Select Your Profession</label>
    <select class="form-control" id="exampleFormControlSelect1" name="profession"  onChange={inputfield} >
      <option>Student</option>
      <option>Mentor</option>
      <option>Parents</option>
      <option>Undergraduate</option>
      <option>Postgraduate</option>
    </select>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name="password"  placeholder="Password" onChange={inputfield}/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Confirm Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name="cpassword"  placeholder="Re Enter your Password" onChange={inputfield}/>
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn1 btn-primary" onClick={AddData}>Submit</button>
  <p style={{translate:"50px"}}>Already a member? <NavLink to="/login">Login</NavLink></p>
</form>
<img src="signin.jpg" className="signin"/>
     </>

  )


}
export default SignUp;