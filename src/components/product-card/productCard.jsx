import React from "react";

const ProductCard = (props) => {
  const {
    productImg,
    productName,
    productAmount,
    totalPrice,
    status,
    modalCart,
    className,
  } = props;
  const displayStatus = status ? true : false;
  const displaymodalCard = modalCart ? true : false;
  console.log(className);
  return (
    <React.Fragment>
      {/* <div class="myModal myModal--product active-modal" onclick="clicked()">
        <div class="myModal__modalContent myModal__modalContent--product">
          <i class="myModal__modalContent__closeIcon fas fa-times"></i> */}
      <div className={className}>
        <div className="product-card__img">
          <img className="product-card__img" src={productImg} />
        </div>
        <div className="product-card__text">
          <div className="product-card__text__header">{productName}</div>
          <div className="product-card__text__line"></div>
          <div className="product-card__text__content">
            <div className="product-card__text__content__info">
              <div className="amount">Amount</div>
              <div className="amount">Total</div>
            </div>
            <div className="product-card__text__content__line"></div>
            <div className="product-card__text__content__prices">
              <div className="amount">{productAmount}</div>
              <div className="amount">{totalPrice}</div>
            </div>
          </div>
          {displaymodalCard ? (
            <div className="product-card__text__cancelBtn">
              <button className="button--rounded button--rounded--xs">
                cancel
              </button>
            </div>
          ) : null}
        </div>
        {displayStatus ? (
          <div class="status-container">
            <div class="status-text">status:</div>
            <div class="status-current">
              <div class="wrapping">
                <input
                  type="radio"
                  id="waiting"
                  name="card-0"
                  value="male"
                  class="status-current__circle"
                />
                <label for="waiting">waiting</label>
              </div>
              <div class="wrapping">
                <input
                  type="radio"
                  id="arrived"
                  name="card-0"
                  value="female"
                  class="status-current__circle"
                />
                <label for="arrived">arrived</label>
              </div>
              <div class="wrapping">
                <input
                  type="radio"
                  id="cancelled"
                  name="card-0"
                  value="other"
                  class="status-current__circle"
                />
                <label for="cancelled">cancelled</label>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {/* </div> */}
      {/* //   </div> */}
    </React.Fragment>
  );
};
export default ProductCard;
