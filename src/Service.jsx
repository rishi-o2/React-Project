import react from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { height } from "@mui/system";
import "./index.css";
import Card from "./Cards";


const Services = ()=>{

return(
    <>
    <div style={{textAlign:"center"}} className="Services" ><h3>Our Services</h3></div>
    <div className="content" style={{display:"flex"}}>
    <Card
     title="Free Demo"
     text= "Get a free demo here"
     btn="Free Demo"
     img = "webd.jpg"
    />
    <Card
      title="Learn CSS"
      text="Get a complete course on CSS"
      btn="CSS"
      img="css.jpg"
    />
    <Card
      title="Learn HTML"
      text="Get a complete course on HTML"
      btn="HTML"
      img="html.jpg"
    />
    <Card
      title="Kearn JS"
      text="Get a complete course on JS"
      btn="JS"
      img="js.jpg"
    />
    </div>
    <div className="shadow-lg p-3 mb-5 bg-white rounded">
      <h3 style={{textAlign:"center"}}>Benefits:-</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam molestias, nam possimus rerum deserunt maxime? Consequuntur, ipsa explicabo deleniti itaque dignissimos, voluptates dolor ex, totam numquam beatae distinctio tempore ut!
      Odit ipsa deserunt eligendi, consectetur itaque ea alias tempore aliquam. Fugiat cum autem ipsa asperiores enim mollitia incidunt dolore eaque suscipit eligendi. Officiis voluptatum nobis, quaerat nulla qui eveniet voluptates!
      Similique, perferendis ut? Saepe dicta ea exercitationem, omnis nulla illum amet blanditiis, minus quae sit nostrum, impedit rem. Facilis porro voluptate quod magnam adipisci aut fugit voluptatibus culpa voluptas veritatis!
      Placeat accusamus explicabo veniam quibusdam illo soluta beatae facere aliquid, doloremque iste asperiores id temporibus, aperiam tempore reprehenderit? Ducimus, nemo. Culpa alias impedit assumenda nisi molestias ex nesciunt sint doloremque!</p>
    </div>
    
    
    
  </>
)




}
export default Services;

  