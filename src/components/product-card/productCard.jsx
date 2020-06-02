import React from "react";

const ProductCard = (props) => {
  const {
    producImg,
    productName,
    productAmount,
    totalPrice,
    buttonText,
  } = props;
  return (
    <React.Fragment>
      {/* <div class="myModal myModal--product active-modal" onclick="clicked()">
        <div class="myModal__modalContent myModal__modalContent--product">
          <i class="myModal__modalContent__closeIcon fas fa-times"></i> */}
      <div class="product-card">
        <div class="product-card__img">
          <img class="product-card__img" src={producImg} />
        </div>
        <div class="product-card__text">
          <div class="product-card__text__header">{productName}</div>
          <div class="product-card__text__line"></div>
          <div class="product-card__text__content">
            <div class="product-card__text__content__info">
              <div class="amount">Amount</div>
              <div class="amount">Total</div>
            </div>
            <div class="product-card__text__content__line"></div>
            <div class="product-card__text__content__prices">
              <div class="amount">{productAmount}</div>
              <div class="amount">{totalPrice}</div>
            </div>
          </div>
          <div class="product-card__text__cancelBtn">
            <button class="button--rounded button--rounded--xs">
              {" "}
              {buttonText}
            </button>
          </div>
        </div>
      </div>

      {/* </div> */}
      {/* //   </div> */}
    </React.Fragment>
  );
};
export default ProductCard;
