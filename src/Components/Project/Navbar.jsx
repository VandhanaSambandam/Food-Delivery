import React, { Component } from 'react'
import "./Nav.css";
import toggle from "./image/toggle.png";
import img2 from './image/shoppingcart.png';
import img1 from './image/Foodzielogo1.png';
import {Link} from "react-router-dom";
import Cart from './Cart';

export class Navbar extends Component {
  

  render() {
    return (
      <div>
         <nav className="navbar navbar-expand-sm" >
            <div className="container">
              
                <div className="navbar-text mx-5 mt-2">
                  <Link to="/">
                  <img src={img1} width="80px" height="90px" type="button"/>
                  </Link>
                 <span> <img src={toggle} width="20px" height="20px" className="navbar-toggler"  
                 data-bs-target="#collapsiblenavbar" type="button" data-bs-toggle="collapse"/></span>
                  
                </div>
              <div className="collapse navbar-collapse" id="collapsiblenavbar">
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
                
                
                 
             


                <div className="icon mx-6">
         
                  <Link to="/Cart" >             
                  <span>
                    <img src={img2} width="25px" height="20px" className="cart" type="button"/>
                      <span className="count badge rounded pill bg-danger top-0 start-100 translate-middle">{Cart.length}</span>
                    </span>
                    </Link>

                    <Link to="/Login"><button className="log"><b>Log in</b></button></Link>
                {/*<Link to="/Signup"><button className="signin "><b>Sign up</b></button></Link>*/}
                  
                 
                   
                  </div>

                  </div>



            
                
    



                

          




              
            
             </div>
         </nav>
      
      </div>
    )
  }
}

export default Navbar;