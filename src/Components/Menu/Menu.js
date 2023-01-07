import React, { useState } from "react";
import "./Menu.css";
import Dishes from "../../List/List";
import { add } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
import Navbar from "../Navbar/Navbar";

const Menu = () => {
  const dispatch = useDispatch();

  const [items, setItems] = useState(Dishes);
  const [total, setTotal] = useState(0);

  const FilterItem = (categItem) => {
    const updatedItems = Dishes.filter((curElem) => {
      return curElem.Category === categItem;
    });

    setItems(updatedItems);
  };

  const [cart, setcart] = useState([]);

  const AddItem = (item) => {
    dispatch(add(item));
  };

  return (
    <div>
      <Navbar/>
      <div className="menu container">
        <span className="ctitle mt-2">
          <b>Categories</b>
        </span>

        <div className="menu-cat container">
          <button
            className="c-type mt-5 position-absolute"
            onClick={() => FilterItem("Soups")}
          >
            <b>Soups & Starters</b>
          </button>
          <button
            className="c-type1 mt-5 position-absolute"
            onClick={() => FilterItem("Lunch")}
          >
            <b>Lunch</b>
          </button>
          <button
            className="c-type2 mt-5 position-absolute"
            onClick={() => FilterItem("North Indian")}
          >
            <b>North Indian</b>
          </button>
          <button
            className="c-type3 mt-5 position-absolute"
            onClick={() => FilterItem("Continental")}
          >
            <b>Continental</b>
          </button>
          <button
            className="c-type4 mt-5 position-absolute"
            onClick={() => FilterItem("Dosa Corner")}
          >
            <b>Dosa Corner</b>
          </button>
          <button
            className="c-type5 mt-5 position-absolute"
            onClick={() => FilterItem("Desert")}
          >
            <b>Deserts</b>
          </button>
          <button
            className="c-type6 mt-5 position-absolute"
            onClick={() => FilterItem("South Indian")}
          >
            <b>South Indian</b>
          </button>
          <button
            className="c-type7 mt-5 position-absolute"
            onClick={() => FilterItem("Fit")}
          >
            <b>Fit Line</b>
          </button>
          <button
            className="c-type8 mt-5 position-absolute"
            onClick={() => FilterItem("Sides")}
          >
            <b>Sides & Beverages</b>
          </button>
        </div>

        <div class="row">
          {items.map((item) => {
            const { img, Dishname, Price, id } = item;

            return (
              <div class="col-sm-4 p-4   " key={id}>
                <div class="card border-0">
                  <img
                    src={img}
                    width="330px"
                    height="165px"
                    alt="no img"
                    className="card-img"
                  />

                  <div class="card-body bg-black ">
                    <h5 class="card-title mt-2">{Dishname}</h5>
                    <span className="rate text-light  position-absolute ">
                      {Price} INR
                    </span>
                    <button class="addbtn " onClick={() => AddItem(item)}>
                      <b>Add</b>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;