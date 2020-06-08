import React from "react";
import ProductCardList from "../productCardList";

const ProductCardsSection = ({ productCards, handleDelete }) => (
  <div className="myModal myModal--product active-modal">
    <div className="myModal__modalContent myModal__modalContent--product">
      <i className="myModal__modalContent__closeIcon fas fa-times"></i>
      <ProductCardList
        handleDelete={handleDelete}
        productCards={productCards}
      />
    </div>
  </div>
);
export default ProductCardsSection;
