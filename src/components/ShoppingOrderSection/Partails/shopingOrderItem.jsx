import React from "react";
import PropTypes from "prop-types";
import Button from "../../Button";
import { withRouter } from "react-router-dom";

const ShoppingOrderItem = ({
  src,
  quantity,
  totalPrice,
  cancelHandle,
  openCardModal,
  orderHandle,
  history,
  id,
}) => (
  <React.Fragment>
    <div className="shoppingCart__item">
      <div className="shoppingCart__item__image">
        <img src={src} alt="" className="shoppingCart__item__image__logo" />
      </div>
      <div className="shoppingCart__item__product">
        <div className="shoppingCart__item__product__text">
          Quantity : {quantity}
        </div>
        <div className="shoppingCart__item__product__text">
          Total Price : {totalPrice} EGP
        </div>
        <div className="shoppingCart__item__product__buttons">
          <Button
            onClick={() => orderHandle(id)}
            name={"order"}
            className={
              "button--rounded--s shoppingCart__item__product__buttons__btn"
            }
          >
            Order
          </Button>
          <Button
            onClick={() => cancelHandle(id)}
            name={"Cancel"}
            className={
              "button--rounded--s shoppingCart__item__product__buttons__btn"
            }
          ></Button>
        </div>
      </div>
      <div className="shoppingCart__item__icon">
        <i className="fas fa-eye" onClick={() => openCardModal(id)}></i>
      </div>
    </div>
    <hr className="line" />
  </React.Fragment>
);

ShoppingOrderItem.propTypes = {
  src: PropTypes.string,
  quantity: PropTypes.number,
  totalPrice: PropTypes.number,
  buttonHandle: PropTypes.func,
  orderHandle: PropTypes.func,
};

export default withRouter(ShoppingOrderItem);
