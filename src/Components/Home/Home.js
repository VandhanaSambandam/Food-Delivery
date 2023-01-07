import React from "react";
import { Link } from "react-router-dom";
import bg from "../../image/bg.jpg";
import email from "../../image/email.png";
import telephone from "../../image/telephone1.png";
import twitter from "../../image/twitte.png";
import fb from "../../image/fb.png";
import insta from "../../image/insta.png";
import "./home.css";
import img1 from "../../image/Foodzielogo1.png";
import right from "../../image/chevron.png";
import fast from "../../image/fast-delivery.png";
import yummy from "../../image/yummy.png";
import winner from "../../image/winner.png";
import ship from "../../image/take.png";
import copyrights from "../../image/copyright.png";
import Navbar from "../Navbar/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="text">
          <b>
            Order food anytime <br /> & anywhere
          </b>
          <span class="line-break">
            <b>
              {" "}
              from our
              <br /> Restaurant.
            </b>
          </span>
        </div>
        <div className="lead ">
          {" "}
          Hey! "Foodie", explore our Foodzie menu to order <br />
          your favourite food.{" "}
        </div>

        <div className="direction mt-3">
          <Link to="/Bookings">
            <button className="location mt-4">
              <b>Reservation</b>
            </button>
          </Link>

          <Link to="/Menu">
            <button className="Discover rounded-end ">
              <b>Discover Menu</b>
            </button>
          </Link>
          <span>
            <img src={right} width="18px" height="18px" className="chevron" />
          </span>
        </div>

        <img src={ship} className="truck d-sm-none d-md-block" />
      </div>

      <div className="container-fluid">
        <div className="Feature1">
          <span>
            <img
              src={winner}
              width="90px"
              height="80px"
              className="qualityicon"
            />
          </span>
          <span className="quality ">
            <b>Quality Food</b>
          </span>
          <span className="context text-light ">
            We make sure to provide healthy and quality <br />
            foods available for our customers for a good <br />
            health reason.
          </span>
        </div>

        <div className="feature2">
          <span>
            <img src={yummy} width="90px" height="80px" className="tasteicon" />
          </span>
          <span className="taste ">
            <b>Super Taste</b>
          </span>
          <span className="description text-light ">
            Good Food is Good Mood.
            <br />
            We are always ready to make your food with fresh <br />
            ingredients in super tasty and delicious way.
          </span>
        </div>

        <div className="feature3">
          <span>
            <img src={fast} width="90px" height="90px" className="fasticon" />
          </span>
          <span className="fast">
            <b>Direct delivery</b>
          </span>
          <span className="fastdelivery text-light ">
            Experience Foodzie's superfast delivery <br />
            with good packaging and get on time.
          </span>
        </div>
      </div>

      <div className="container ">
        <div className="backdrop mt-3"></div>
        <img src={bg} width="1490px" height="800px" className="backimg mt-3" />
        <span className="about">
          <b>About Us</b>
        </span>
        <img />
        <div className="foodziedescription ms-5">
          <b>
          Foodzie is one of India's fastest-growing
              hospitality brands, managing a portfolio of over
            <br /> 70+ properties
              across the country. Founded in 2001 by zee-industry is a renowned and <br />
              trusted brand with a growth plan to reach 100 hotels by 2022. We
              cater to business and{" "}
          </b>
        </div>
        <Link to="/About">
          <button className="aboutus">
            <b>Read More</b>
          </button>
        </Link>
      </div>

      <div className="footer">
        <span className="logo">
          <img src={img1} width="100px" height="100px" className="logo" />
        </span>
        <span className="describe ">
          Delicioud food with super quality <br />
          from Foodzie for your service with Fast delivery.{" "}
        </span>
        <span>
          <img src={twitter} width="50px" height="50px" className="twitter" />
        </span>
        <span>
          <img src={fb} width="30px" height="30px" className="fb" />
        </span>
        <span>
          <img src={insta} width="58px" height="65px" className="insta" />
        </span>

        <div className="company">
          Company
          <span className="list3">Home</span>
          <span className="list">Menu</span>
          <span className="list1">About</span>
          <span className="list2">Contact</span>
        </div>

        <div className="help">
          Contact
          <span className="ro">
            <img
              src={email}
              width="33px"
              height="30px"
              className="emailicon "
            />
            <span className="support">Foodzie2022@gmail.com</span>
            <img
              src={telephone}
              width="33px"
              height="30px"
              className="phoneicon"
            />
            <span className="support1  ">Call:080032144567</span>
          </span>
        </div>
      </div>

      <div className="bottom">
        <img
          src={copyrights}
          width="25px"
          height="25px"
          className="cpyrights ms-5"
        />
        <span className="cpyright ms-5">Copyrights@Foodzie2022</span>
      </div>
    </div>
  );
}

export default Home;
