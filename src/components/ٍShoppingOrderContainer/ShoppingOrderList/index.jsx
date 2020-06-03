import React from "react";
import ShoppingOrderItem from "./ShoppingOrderItem";

const ShoppingOrderList = (props) => (
  <React.Fragment>
    {props.ShoppingOrderList.map((item) => (
      <ShoppingOrderItem
        imageSrc={item.imageSrc}
        quantity={item.quantity}
        totalPrice={item.totalPrice}
      ></ShoppingOrderItem>
    ))}
  </React.Fragment>
);

export default ShoppingOrderList;
