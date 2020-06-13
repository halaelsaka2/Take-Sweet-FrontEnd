import React from "react";
import ShoppingOrderItem from "./shopingOrderItem";
import PropTypes from "prop-types";

const ShoppingOrderList = ({ shoppingOrderList, openCardModal }) =>
  shoppingOrderList.map((item) => (
    <ShoppingOrderItem
      key={item.id}
      src={item.src}
      quantity={item.quantity}
      totalPrice={item.totalPrice}
      openCardModal={openCardModal}
    />
  ));

ShoppingOrderList.propTypes = {
  shoppingOrderList: PropTypes.array,
};

export default ShoppingOrderList;
