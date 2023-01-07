import React, { useEffect, useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import Navbar from "../Navbar/Navbar";

const Signup = () => {
  let history = useNavigate();

  const [data, setData] = useState({
    FirstName: "",
    LastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const SignSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8000/api/register", data).then((result) => {
      console.log(result);
      localStorage.setItem("user-info", JSON.stringify(result));
    });
    swal({
      title: "Registered Successfully",
      icon: "success",
      button: "Ok!,",
    });

    setData({ FirstName: "", LastName: "", email: "", password: "" });
    history("/Login");
  };
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history("/Login");
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="border-box">
        <div className="title text-center">
          <b>Sign Up</b>
        </div>

        <form onSubmit={SignSubmit}>
          <input
            type="text"
            placeholder="FirstName"
            className="textbox1"
            autoComplete="off"
            name="FirstName"
            id="FirstName"
            onChange={handleChange}
            value={data.FirstName}
            required
          />
          <input
            type="text"
            placeholder="LastName"
            className="textbox2"
            name="LastName"
            autoComplete="off"
            id="LastName"
            onChange={handleChange}
            value={data.LastName}
            required
          />
          <input
            type="email"
            placeholder="email"
            className="Email"
            name="email"
            id="email"
            onChange={handleChange}
            value={data.email}
            autoComplete="off"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="signpassword"
            id="password"
            name="password"
            onChange={handleChange}
            value={data.password}
            required
          />
          <button className="signupbtn" onSubmit={SignSubmit}>
            <b>Sign Up</b>
          </button>
          <span className="pagelink">
            Already have an account ?
            <Link to="/Login" className="signuptext1">
              <b>Log In</b>
            </Link>{" "}
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
