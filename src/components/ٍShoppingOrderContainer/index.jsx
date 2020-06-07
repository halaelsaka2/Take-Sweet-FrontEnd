import React from "react";
import ShoppingCart from "../ShoppingCart";
// import ShoppingOrderList from "./Partails/shopingOrderList";
import { ShoppingOrderList } from "./Partails";
import PropTypes from "prop-types";
const ShoppingOrderContainer = ({ shoppingOrderList, number }) => {
  return (
    <React.Fragment>
      <ShoppingCart number={number} />
      <div className="shoppingCart">
        <div className="shoppingCart__title">
          <h4>Shopping Bag</h4>
          <i className="fas fa-times"></i>
        </div>
        {shoppingOrderList.length === 0 && (
          <h5>you have no items in shopping card...</h5>
        )}
        <ShoppingOrderList shoppingOrderList={shoppingOrderList} />
      </div>
    </React.Fragment>
  );
};

export default ShoppingOrderContainer;

ShoppingOrderContainer.propTypes = {
  shoppingOrderList: PropTypes.arrayOf(
    PropTypes.objectOf({
      id: PropTypes.number,
      src: PropTypes.string, //img
      quantity: PropTypes.string,
      totalPrice: PropTypes.number,
    })
  ),
};
