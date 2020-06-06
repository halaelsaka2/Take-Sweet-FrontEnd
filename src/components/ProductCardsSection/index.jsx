import React from "react";
import ProductCardList from "../ProductCardList/index";

const ProductCardsSection = ({ productCards, handleDelete }) => (
  <div class="myModal myModal--product active-modal">
    <div class="myModal__modalContent myModal__modalContent--product">
      <i class="myModal__modalContent__closeIcon fas fa-times"></i>
      <ProductCardList
        handleDelete={handleDelete}
        productCards={productCards}
      />
    </div>
  </div>
);
export default ProductCardsSection;
