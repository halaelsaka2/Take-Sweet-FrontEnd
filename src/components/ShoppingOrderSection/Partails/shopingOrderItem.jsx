import React from "react";
import PropTypes from "prop-types";
import Button from "../../Button";
import { Link } from "react-router-dom";

const ShoppingOrderItem = ({
  src,
  quantity,
  totalPrice,
  orderHandle,
  cancelHandle,
  openCardModal,
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
          Total Price : $500
        </div>
        <div className="shoppingCart__item__product__buttons">
          <Link
            to="/order-details/1"
            // onClick={orderHandle}
            name={"order"}
            className={
              "button--rounded--s shoppingCart__item__product__buttons__btn"
            }
          >
            Order
            {/* <Link to="/order-details/1"> */}
          </Link>

          <Button
            onClick={cancelHandle}
            name={"Cancel"}
            className={
              "button--rounded--s shoppingCart__item__product__buttons__btn"
            }
          ></Button>
        </div>
      </div>
      <div className="shoppingCart__item__icon">
        <i className="fas fa-eye" onClick={openCardModal}></i>
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

export default ShoppingOrderItem;
