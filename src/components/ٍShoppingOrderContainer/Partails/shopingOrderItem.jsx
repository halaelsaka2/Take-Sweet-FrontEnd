import React from "react";

const ShoppingOrderItem = ({ src, quantity, totalPrice }) => {
  return (
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
            Total Price : ${totalPrice}
          </div>
          <div className="shoppingCart__item__product__buttons">
            <button className="button--rounded--s shoppingCart__item__product__buttons__btn">
              Order
            </button>
            <button className="button--rounded--s shoppingCart__item__product__buttons__btn">
              Cancel
            </button>
          </div>
        </div>
        <div className="shoppingCart__item__icon">
          <i className="fas fa-eye"></i>
        </div>
      </div>
      <hr className="line" />
    </React.Fragment>
  );
};

export default ShoppingOrderItem;
