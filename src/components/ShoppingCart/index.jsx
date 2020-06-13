import React from "react";

const ShoppingCart = ({ number, openShoppingBag, isHidden }) => (
  <div
    className={`shoppingCar ${isHidden && "hiddenCar"}`}
    onClick={openShoppingBag}
  >
    <i className="fa fa-shopping-cart fa-2x"></i>
    <span className="CartCount"> {number} </span>
  </div>
);

export default ShoppingCart;
