import React, { Component, useEffect } from 'react'
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import Navbar from "../Navbar/Navbar";



const Login = () => {

  let navigate = useNavigate();
  /*const [msg,setMsg]=useState();*/
  const [login, setlogin] = useState({
    email: "", password: ""
  })
  const handleLogin = (e) => {
    setlogin({ ...login, [e.target.name]: e.target.value });

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/api/login', login)
      .then(res => {
        if (res.data.status === 401) {

          swal("Warning", res.data.message, "warning");

        } 
        else if (res.data.status === 200){
          console.log(res.data);
          
          localStorage.setItem("user", JSON.stringify(res));
          swal("Success", res.data.message, "success");
          localStorage.setItem("usertype", res.data.usertype);
         
          //localStorage.setItem("user-info",JSON.stringify(res.data));

          if(res.data.usertype === 'admin') {
          
            navigate("/admin");

          }else if(res.data.usertype === 'customer'){
      
            navigate("/");
            
          }
         
         
          
        }
        

      });
      setlogin({email:"",password:""})
  }
    useEffect(() => {
    if (localStorage.getItem('user')) {
      navigate('/');
    }
  }, []);
 

  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="box">

          <div className="login text-center "><b>Log In</b></div>
          <div className="signup">Don't have an account? <Link to="/Signup" className="signuptext"><b>Signup</b></Link></div>

          <form onSubmit={handleSubmit}>
            <input type="text" className="username" placeholder="email" name="email"
              onChange={handleLogin} value={login.email} autoComplete="off" required />
            <input type="password" className="password" placeholder="password" name="password"
              onChange={handleLogin} value={login.password} autoComplete="off" required />
            <button className="submit" onSubmit={handleSubmit}  ><b>Log in</b></button>
          </form>

        </div>

      </div>

    </div>
  )

}

export default Login;


