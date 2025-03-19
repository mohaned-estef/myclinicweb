import "./Footer.css"

import { CiLinkedin } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  const mycolor=localStorage.getItem('color')
  let colorFooter;
  {mycolor == "#FFFFFF" ? colorFooter="#000000" : colorFooter="#FFFFFF"}
  

  return (
    <div id ="Footer"className="Footer" style={{color:colorFooter}}>
      


      <div className="Footer-Content">
        
        <div className="location">

            <h3>location</h3>
            <p>programmer Mohaned Estef Syria Aleppo +963962438048</p>
          
        </div>

        <div className="around-web">
          <h3>Contact with Programmer Mohaned</h3>
          <div className="around-web-icons">
       
     
            <a href="https://www.linkedin.com/mohaned577"><CiLinkedin /></a>
            <a href="https://www.facebook.com/profile.php?id=100072525691933"><FaFacebookF/></a>
            <a href="https://wa.me/qr/GLKGJXZCFTUQM1"><FaWhatsapp/></a>
          </div>
        </div>

        <div className="about-me">
          <h3>About mohaned</h3>
          <p>mohaned Estef working as a freelace Programming since 2 years ago </p>
        </div>


      </div>

      <div className="footer-copyRights">

          <p>copyright © your website 2024</p>
          
      </div>

    </div>

  )
}


