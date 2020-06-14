import React from "react";
import ShoppingOrderItem from "./shopingOrderItem";
import PropTypes from "prop-types";

const ShoppingOrderList = ({ shoppingOrderList, openCardModal, orderHandle }) =>
  shoppingOrderList.map((item) => (
    <ShoppingOrderItem
      key={item.id}
      src={item.src}
      quantity={item.products.length}
      totalPrice={item.totalPrice}
      openCardModal={openCardModal}
      orderHandle={orderHandle}
    />
  ));

ShoppingOrderList.propTypes = {
  shoppingOrderList: PropTypes.array,
};

export default ShoppingOrderList;
