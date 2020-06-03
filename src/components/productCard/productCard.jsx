import React from "react";
import Input from "../Input/input";

const ProductCard = (props) => {
  const {
    productImg,
    productName,
    productAmount,
    totalPrice,
    cardType,
    cafeName,
    className,
    cardNo,
  } = props;
  // className=" product-card--large"
  //cardType= statusCard||modalCard||historyCard
  return (
    <React.Fragment>
      <div className={`product-card ${className}`}>
        <div className="product-card__img">
          <img className="product-card__img" src={productImg} />
        </div>
        <div className="product-card__text ">
          <div className="product-card__text__header">{productName}</div>
          <div className="product-card__text__line"></div>
          <div className="product-card__text__content">
            <div className="product-card__text__content__info">
              {cardType === "statusCard" ? (
                <div className="amount">To</div>
              ) : null}
              <div className="amount">Amount</div>
              <div className="amount">Total</div>
            </div>
            <div className="product-card__text__content__line"></div>
            <div className="product-card__text__content__prices">
              <div className="amount">{productAmount}</div>
              <div className="amount">{totalPrice}</div>
              {cardType === "statusCard" ? (
                <div className="amount">{cafeName}</div>
              ) : null}
            </div>
          </div>
          {cardType === "historyCard" ? (
            <div class="product-card__text__cancelBtn product-card__text__cancelBtn--user">
              <button class="button--rounded button--rounded--s button--rounded--danger">
                Cancel
              </button>
              <button class="button--rounded button--rounded--s">
                Reorder
              </button>
            </div>
          ) : null}
          {cardType === "modalCard" ? (
            <div className="product-card__text__cancelBtn">
              <button className="button--rounded button--rounded--xs">
                cancel
              </button>
            </div>
          ) : null}
        </div>
        {cardType === "statusCard" ? (
          <div className="status-container">
            <div className="status-text">status:</div>
            <div className="status-current">
              <div className="wrapping">
                <Input
                  name={`card-${cardNo}`}
                  type="radio"
                  value="waiting"
                  id="waiting"
                  className="status-current__circle"
                />
                <label htmlFor="waiting">waiting</label>
              </div>
              <div className="wrapping">
                <Input
                  name={`card-${cardNo}`}
                  type="radio"
                  value="arrived"
                  id="arrived"
                  className="status-current__circle"
                />
                <label htmlFor="arrived">arrived</label>
              </div>
              <div className="wrapping">
                <Input
                  name={`card-${cardNo}`}
                  type="radio"
                  value="cancelled"
                  id="cancelled"
                  className="status-current__circle"
                />
                <label htmlFor="cancelled">cancelled</label>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </React.Fragment>
  );
};
export default ProductCard;
