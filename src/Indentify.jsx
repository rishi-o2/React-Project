import react from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



const Identify = (props)=>{

   return(
    <>
        <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src="hi.gif" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">HELLO {props.name}</h5>
    <p className="card-text">You have been successfully registered</p>
    
  </div>
</div>
    </>
   )



}
export default Identify;