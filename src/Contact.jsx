import react from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import "./index.css"


const Contact = ()=>{

    return(
        <>
            <h3 style={{textAlign:"center"}} className="heading ">How Can We Help</h3>
            <div className="contactus rounded-circle">
            <div style={{display:"flex"}}>
            <div>
            <img src="student.jpg" className=" student rounded-circle me-5 ms-0"/>
            <p style={{translate: "20px"}}>Student</p>
            </div>
            <div>
            <img src="teacher.jpg" className=" student rounded-circle me-5" />
            <p style={{translate: "20px"}}>Mentor</p>
            </div>
            </div>
            <div style={{display:"flex"}}>
            <div>
            <img src="parents.jpg" className=" student rounded-circle me-5" />
            <p style={{translate: "20px"}}>parents</p>
            </div>
            <div>
            <img src="horn.jpg" className=" student rounded-circle" />
            <p style={{textAlign: "center"}}>Advertisement</p>
            </div>
            </div>
            </div>
            <div className="socialmedia">
            <p style={{translate:" 0 55%"}} >Our Social Media Handles</p>
            <div style={{textAlign:"center"}}>
            <a href="https://www.twitter.com/" target="blank"><TwitterIcon/></a>
            <a href="https://www.instagram.com/" target="blank"><InstagramIcon/></a>
            <a href="https://www.linkedin.com/" target="blank"><LinkedInIcon/></a>
            <a href="https://www.facebook.com/" target="blank"><FacebookIcon/></a>
            <a href="#" target="blank"><EmailIcon/></a>
            </div>
            </div>
            <div style={{display:"flex"}} className="phone ">
            <PhoneIcon/>
            <p>+918525874637</p>
            </div>
        </>
    )
}

export default Contact;
