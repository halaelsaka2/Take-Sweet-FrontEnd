import React from "react";
import ShoppingOrderItem from "./shopingOrderItem";
import PropTypes from "prop-types";

const ShoppingOrderList = ({ shoppingOrderList }) =>
  shoppingOrderList.map((item) => (
    <ShoppingOrderItem
      key={item.id}
      src={item.src}
      quantity={item.quantity}
      totalPrice={item.totalPrice}
    />
  ));

ShoppingOrderList.propTypes = {
  shoppingOrderList: PropTypes.array,
};

export default ShoppingOrderList;
