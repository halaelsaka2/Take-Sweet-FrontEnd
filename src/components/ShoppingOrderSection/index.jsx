import React from "react";
import ShoppingCart from "../ShoppingCart";
import { ShoppingOrderList } from "./Partails";
import PropTypes from "prop-types";

const ShoppingOrderContainer = ({
  shoppingOrderList,
  number,
  closeShoppingBag,
  isOpen,
  openCardModal,
  orderHandle,
  cancelHandle,
}) => (
  <React.Fragment>
    <div className="shoppingCart-container">
      <div className={`shoppingCart ${isOpen && "openBag"}`}>
        <div className="shoppingCart__title">
          <h4>Shopping Bag</h4>
          <i className="fas fa-times" onClick={closeShoppingBag}></i>
        </div>
        {shoppingOrderList.length === 0 && (
          <h5>you have no items in shopping card...</h5>
        )}
        <ShoppingOrderList
          shoppingOrderList={shoppingOrderList}
          openCardModal={openCardModal}
          orderHandle={orderHandle}
          cancelHandle={cancelHandle}
        />
      </div>
    </div>
  </React.Fragment>
);

export default ShoppingOrderContainer;
ShoppingOrderContainer.defaultProps = {
  shoppingOrderList: [],
};

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
