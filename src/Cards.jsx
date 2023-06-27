import react from "react";
import "./index.css"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Card = (props)=>{

       return (
        <>

    <div id="Card" className="card shadow-lg p-3 ms-5 me-5 mb-5 bg-white rounded" style={{width: "18rem", height : "50%"}}>
    <img className="card-img-top" src={props.img} alt="Card image cap" style={{width:"80%"}}/>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.text}</p>
      <a href="#" className="btn btn-primary">{props.btn}</a>
    </div>
  </div>
  </>
       )


}
export default Card;