import React, { Component } from 'react'
import "./Nav.css";
import img2 from '../../image/shoppingcart.png';
import img1 from '../../image/Foodzielogo1.png';
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux/es/exports';
import { NavDropdown } from 'react-bootstrap-v5';
import accicon from '../../image/accounticon.png';


function Navbar ()  {
  const navigate=useNavigate();


 /* let user=JSON.parse(localStorage.getItem('user-info'));*/
  const cart = useSelector((state) => state.cart);

    function logout(){
      localStorage.clear();
      navigate('/Signup');
    }
  return (
    <div>
      <nav className="navbar navbar-expand-sm" >
        <div className="container">

    
          <div className="navbar-text mx-5 mt-2">
           
          
            
            <Link to="/">
              <img src={img1} width="80px" height="90px" type="button" />
            </Link>
          

          </div>

            {localStorage.getItem('user')  ?
                  <>
            <ul className="navbar-nav mx-auto ">
              
              <li className="nav-item ">

                
                   
                <Link to="/" className="nav-link mx-3"><b>Home</b></Link>



              </li>
              <li className="nav-item">
                <Link to="/Menu" className="nav-link mx-3 "><b>Menu</b></Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-link mx-3"><b>About</b></Link>
              </li>
              <li className="nav-item">
                <Link to="/Contact" className="nav-link mx-3"><b>Contact</b></Link>
              </li>
              
            </ul>


            {/*<div className="icon mx-6">*/}

              <Link to="/Cart" >
                <span>
                  <img src={img2} width="25px" height="20px" className="cart" type="button" />

                  <span className="count badge rounded pill bg-danger top-0 start-100 translate-middle">{cart.cartItems.length}</span>
                </span>
              </Link>
              <img src={accicon} width="55px" height="55px" className='accicon' alt="account"/>

              <NavDropdown /*title={ user && user.data.FirstName}*/ className="navname" >
                <NavDropdown.Item onClick={logout} classname="logout">Logout</NavDropdown.Item>
              </NavDropdown>
              </>
              :
              <>
              <Link to="/Login"><button className="log"><b>Log in</b></button></Link>
              <Link to='/Signup'><button className="signin"><b>Sign Up</b></button></Link>             
              </>


           
             
              }
        

              {/*<Link to="/Signup"><button className="signin "><b>Sign up</b></button></Link>*/}



            {/*</div>*/}


         


















        </div>
      </nav>

    </div>
  )
}


export default Navbar;