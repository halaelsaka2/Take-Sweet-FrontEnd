import React from "react";
import ShoppingOrderItem from "./shopingOrderItem";

const ShoppingOrderList = ({ shoppingOrderList }) => {
  return shoppingOrderList.map((item) => (
    <ShoppingOrderItem
      key={item.id}
      src={item.src}
      quantity={item.quantity}
      totalPrice={item.totalPrice}
    />
  ));
};

export default ShoppingOrderList;
