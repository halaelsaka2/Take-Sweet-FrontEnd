import React from "react";
import ProductCard from "../../components/product-card/productCard";

const ProductCardModal = () => {
  return (
    <React.Fragment>
      <div class="myModal myModal--product active-modal" onclick="clicked()">
        <div class="myModal__modalContent myModal__modalContent--product">
          <i class="myModal__modalContent__closeIcon fas fa-times"></i>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </React.Fragment>
  );
};
export default ProductCardModal;
