import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  add,
  remove,
  decreaseCart,
  clearCart,
  getTotals,
} from "../../store/cartSlice";
import "./Cart.css";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  {
    /* const handleAdd=(productId)=>{
    dispatch(add(productId))
 }*/
  }
  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };
  const handleIncreaseCart = (cartItem) => {
    dispatch(add(cartItem));
    
    
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <Navbar/>
    <div>
      {cart.cartItems.length > 0 ? (
        <div className="cartWrapper container">
          <table className="table table-image">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Price</th>
                <th scope="col">Category</th>
                <th scope="col">Dishname</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total Price</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.cartItems.map((cartItem) => (
                <tr key={cartItem.id}>
                  <td className="w-25">
                    <img
                      src={cartItem.img}
                      className="img-fluid img-thumbnail"
                      alt="Sheep"
                    ></img>
                  </td>
                  <td>{cartItem.Price} INR</td>
                  <td>{cartItem.Category}</td>
                  <td>{cartItem.Dishname}</td>
                  <td>
                    <div>
                      <button
                        className="btn btn-sm btn-dark mx-2"
                        onClick={() => handleDecreaseCart(cartItem)}
                      >
                        -
                      </button>
                      <span id="qunatity mr-2">{cartItem.cartQuantity}</span>
                      <button
                        className="btn btn-sm btn-dark mx-2"
                        onClick={() => handleIncreaseCart(cartItem)}
                      >
                        +
                      </button>
                    </div>
                  </td>

                  <td>{cartItem.Price * cartItem.cartQuantity} INR</td>
                  
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleRemove(cartItem.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-summary">
            <button className="btn btn-dark" onClick={() => handleClearCart()}>
              Clear Cart
            </button>
            <div className="cart-checkout">
              <div className="sub-total mt-2">
                <span><b>SubTotal :</b></span>
                <span className="amount">{cart.cartTotalAmount} INR</span>
              </div>
              <p>Taxes and Shipping will be calculated at checkout</p>
              <Link to="/Checkout">
                <button
                  className="btn btn-warning"
                  onClick={() => handleIncreaseCart()}
                >
                  Checkout
                </button>
              </Link>
            </div>
            <Link to="/Menu">
              {" "}
              <button className="btn btn-dark mt-2">
                Continue Shopping
              </button>{" "}
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-center">Cart</h2>
          <p className="text-center">your cart is currently Empty</p>
          <Link to="/Menu">
            {" "}
            <button className="Returntoshop">
              <b>Return to Shop</b>
            </button>
          </Link>
        </div>
      )}
    </div>
    </div>
  );
};
export default Cart;
