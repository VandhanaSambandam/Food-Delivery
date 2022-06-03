import React, { Component } from 'react'
import img1 from './images/pool.jpg';
import img2 from './images/triangle.jpg';
import img3 from './images/arrow-right.png';

export class Testing extends Component {
  render() {
    return (
 < div>      
      <div className="navbar navbar-expand-sm bg-success">
          <div className='navbar-text text-light mx-5'>Logo</div>
          <ul className='navbar-nav mx-auto'>
            <li className='nav-item ' >
                <a href="" className='nav-link text-light'>Home</a>
            </li>
            <li className='nav'>
                <a href="" className='nav-link text-light'>About</a>
            </li>
            <li className='nav-item'>
                <a href="" className='nav-link text-light' >Blogs</a>
            </li>
            <li className='nav-item'>
                <a href="" className='nav-link text-light'>Contact</a>
            </li>
          </ul>
      
      </div>
      <div className="container my-5">
          <img src={img1} height="500px" width="700px"/>
         <br></br>
         <br></br>
          <button className='btn btn-primary bg-gradient rounded-pill'>Contact us</button>

          <button className='btn btn-primary bg-gradient rounded-pill'>Discover
          <span className='badge bg-secondary'><img src={img3} width="30px" height="30px" /></span></button>
          </div>


      



      </div>
      



      
    )
  }
}

export default Testing;