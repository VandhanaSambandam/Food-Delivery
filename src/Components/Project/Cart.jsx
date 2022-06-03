import React, { useState } from 'react'
import "./Cart.css";
import { Link } from 'react-router-dom';



  
const Cart=()=>{

 
 /* if(cart==null){
    return <p>Your Cart is empty</p>
  }*/
  
  
    return (
      <div> 
          <div className="container ">

       
          <div className="Cart-title mt-5"><b>Your Orders</b></div>
          <Link to="/Menu"><button className="Back-menu"><b>Back to Menu</b></button></Link>     
                        
          
                       
                      
                      
                        <div className="cart-row">

               
                    <div className="order-cart card mt-4 p-5">
                       
                          <img alt="source img" width="280px" height="200px" className='Cart-img ms-2 mt-2' />
                            <h5 className="menu-title"><b>Dishname</b></h5>
                            <div className="Cart-Price"><b>Price</b></div>
                            <button className="AddQty" >+</button>
                            <p className="Quantity"><b>1</b></p>
                            <button className="lessQty">-</button>
                            <button className="remove"><b>Remove</b></button>
                      </div>
               

                    </div>
    

                   


                    
                   



                    
                   

                    </div>

                
               {/* <div className="Sub-Container">
                  <div className="Pay-heading"><b>Your Payment</b></div>
                    <div className="sub-heading ms-3 mt-5"><b>Subtotal : <span className="text-dark">Rs.219 /-</span></b></div>
                    <button className="payment"><b>Confirm Order</b></button>
    </div>*/}
  
                  
                
            </div>
      
    )
  
  }


export default Cart;
  
