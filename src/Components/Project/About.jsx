import React, {  } from 'react';
import "./About.css";
import foodbg from "./image/foodbg1.jpg";
import copyrights from "./image/copyright.png";
import logo from "./image/Foodzielogo1.png";
import fb from "./image/fb.png";
import twitter from "./image/twitte.png";
import insta from "./image/insta.png";

function About(){
  
    return (
      <div className="container">
        <div className="main ">
          <div className="About-title mt-5"><b>Our Story</b></div>    
          <img src={foodbg} width="470px" height="500px" className="foodbg"/>
          <div className="story"><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br/>labore et dolore magna aliqua.Ut enim ad minim veniam, quis
          nostrud exercitation ullamco <br/>laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in <br/>voluptate velit esse cillum dolore eu fugiat nulla pariatur. </b></div>
        <span className="quotation"><b>Thank You !!</b></span>
        </div>
    
    
    
    <div className="Afooter">
            <img src={logo} width="90px" height="90px" className="alogo"/>
            <div className="officeaddress text-light">No.43b,East coast Road, <br/><span className="ms-3">near hill park ,</span><br/><span className='ms-4'> Mumbai-34</span></div>
            <span><img src={twitter} width="50px" height="50px" className="atwitter"/></span>
        <span><img src={fb} width="30px" height="30px" className="afb"/></span>
        <span><img src={insta} width="58px" height="65px" className="ainsta"/></span>


    
    
    </div>
    
    <div className="abottom">
    <img src={copyrights} width="25px" height="25px" className="cpyrights ms-5 mt-2"/>
              <span className="cpyright ms-5 mt-2">Copyrights@Foodzie2022</span>
              </div>









      </div>
    );
    }


export default About;