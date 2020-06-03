import React from "react";
import ProductCardListing from "../productCardListing/index";
const ProductCardsContainer = (props) => {
  const { productCards } = props;
  console.log(productCards);
  return (
    <React.Fragment>
      <div class="myModal myModal--product active-modal">
        <div class="myModal__modalContent myModal__modalContent--product">
          <i class="myModal__modalContent__closeIcon fas fa-times"></i>
          <ProductCardListing productCards={productCards} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductCardsContainer;
