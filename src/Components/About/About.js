import React from "react";
import "./About.css";
import foodbg from "../../image/foodbg1.jpg";
import copyrights from "../../image/copyright.png";
import logo from "../../image/Foodzielogo1.png";
import fb from "../../image/fb.png";
import twitter from "../../image/twitte.png";
import insta from "../../image/insta.png";
import Navbar from "../Navbar/Navbar";

function About() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="main ">
          <div className="About-title mt-5">
            <b>Our Story</b>
          </div>
          <img src={foodbg} width="470px" height="500px" className="foodbg" />
          <div className="story">
            <span>
              <b>Fine Dining Is Just Around the Corner</b>
            </span><br/><br/>
            <b>
              Foodzie is one of India's fastest-growing
              hospitality brands, managing a portfolio of over<br/> 70+ properties
              across the country. Founded in 2001 by zee-industry is a renowned and<br/>
              trusted brand with a growth plan to reach 100 hotels by 2022. We
              cater to business and <br/>leisure travellers who value comfort, great
              cuisine, distinctly warm Indian hospitality,<br/> and value for money.
              Our modern and fully equipped hotels, resorts, long-stay suites,<br/>
              and inns are what make our guests return time and time again to
              our properties in metro<br/> cities, holiday destinations, pilgrimage
              sites and wildlife parks. With a Head Office based<br/> in the heart of
              Bengaluru, the team zee Hotels is truly
              passionate about hospitality and driven to deliver immaculate
              guest experiences. Our success flows from our core values;
              creating exceptional outcomes for our owners, guests, staff, and
              shareholders.
            </b>
          </div>
          <span className="quotation">
           
          </span>
        </div>

        <div className="Afooter">
          <img src={logo} width="90px" height="90px" className="alogo" />
          <div className="officeaddress text-light">
            No.43b,East coast Road, <br />
            <span className="ms-3">near hill park ,</span>
            <br />
            <span className="ms-4"> Mumbai-34</span>
          </div>
          <span>
            <img
              src={twitter}
              width="50px"
              height="50px"
              className="atwitter"
            />
          </span>
          <span>
            <img src={fb} width="30px" height="30px" className="afb" />
          </span>
          <span>
            <img src={insta} width="58px" height="65px" className="ainsta" />
          </span>
        </div>

        <div className="abottom">
          <img
            src={copyrights}
            width="25px"
            height="25px"
            className="cpyrights ms-5 mt-2"
          />
          <span className="cpyright ms-5 mt-2">Copyrights@Foodzie2022</span>
        </div>
      </div>
    </div>
  );
}

export default About;
