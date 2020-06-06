import React from "react";

const ShoppingCart = ({ number }) => (
  <div className="shoppingCar">
    <i className="fa fa-shopping-cart fa-2x"></i>
    <span className="CartCount"> {number} </span>
  </div>
);

export default ShoppingCart;
