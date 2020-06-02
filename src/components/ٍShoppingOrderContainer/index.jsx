import React from "react";
import ShoppingOrderList from "./ShoppingOrderList";
import ShoppingCart from "../ShoppingCart";

const ShoppingOrderContainer = (props) => (
  <React.Fragment>
    <ShoppingCart></ShoppingCart>
    <div className="shoppingCart">
      <div className="shoppingCart__title">
        <h4>Shopping Bag</h4>
        <i className="fas fa-times"></i>
      </div>
      <h5>you have no items in shopping card...</h5>
      <ShoppingOrderList
        shoppingOrderList={props.ShoppingOrderList}
      ></ShoppingOrderList>
    </div>
  </React.Fragment>
);

export default ShoppingOrderContainer;
