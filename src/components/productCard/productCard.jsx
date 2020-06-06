import React from "react";
import Input from "../Input";
import Button from "./../Button/index";

const ProductCard = ({
  productImg,
  productName,
  productAmount,
  totalPrice,
  handleDelete,
  handleReorder,
  cafeName,
  className,
  cardType,
  cardNo,
}) => {
  // className=" product-card--large"
  //cardType= statusCard||modalCard||historyCard
  return (
    <div className={`product-card ${className}`}>
      <div className="product-card__img">
        <img className="product-card__img" src={productImg} />
      </div>
      <div className="product-card__text ">
        <div className="product-card__text__header">{productName}</div>
        <div className="product-card__text__line"></div>
        <div className="product-card__text__content">
          <div className="product-card__text__content__info">
            {cardType === "statusCard" && <div className="amount">To</div>}
            <div className="amount">Amount</div>
            <div className="amount">Total</div>
          </div>
          <div className="product-card__text__content__line"></div>
          <div className="product-card__text__content__prices">
            <div className="amount">{productAmount}</div>
            <div className="amount">{totalPrice}</div>
            {cardType === "statusCard" && (
              <div className="amount">{cafeName}</div>
            )}
          </div>
        </div>
        {cardType === "historyCard" && (
          <div className="product-card__text__cancelBtn product-card__text__cancelBtn--user">
            <Button
              name="Reorder"
              onClick={handleReorder}
              className="button--rounded button--rounded--s"
            />
            <Button
              name="Cancel"
              onClick={handleDelete}
              className="button--rounded button--rounded--s button--rounded--danger"
            />
          </div>
        )}
        {cardType === "modalCard" && (
          <div className="product-card__text__cancelBtn">
            <Button
              name="Cancel"
              onClick={handleDelete}
              className="button--rounded button--rounded--xs"
            />
          </div>
        )}
      </div>
      {cardType === "statusCard" && (
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
      )}
    </div>
  );
};
export default ProductCard;
