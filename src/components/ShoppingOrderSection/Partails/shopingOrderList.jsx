import React from "react";
import ShoppingOrderItem from "./shopingOrderItem";
import PropTypes from "prop-types";

const ShoppingOrderList = ({
  shoppingOrderList,
  cancelHandle,
  openCardModal,
  orderHandle,
}) =>
  shoppingOrderList.map((item) => (
    <ShoppingOrderItem
      key={item.company.id}
      src={item.company.imageSrc}
      quantity={item.shoppingBagProducts.length}
      totalPrice={item.totalPrice}
      openCardModal={openCardModal}
      orderHandle={orderHandle}
      cancelHandle={cancelHandle}
      id={item.company.id}
    />
  ));

ShoppingOrderList.propTypes = {
  shoppingOrderList: PropTypes.array,
};

export default ShoppingOrderList;
