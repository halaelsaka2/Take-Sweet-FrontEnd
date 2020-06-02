import React from "react";
import ProductCard from "../../components/product-card/productCard";

const ProductCardModal = () => {
  return (
    <React.Fragment>
      <div class="myModal myModal--product active-modal" onclick="clicked()">
        <div class="myModal__modalContent myModal__modalContent--product">
          <i class="myModal__modalContent__closeIcon fas fa-times"></i>
          <ProductCard
            productName="caramel"
            productAmount="50"
            totalPrice="1500"
            status={false}
            modalCart={true}
            className="product-card "
          />
          <ProductCard
            productName="caramel"
            productAmount="50"
            totalPrice="1500"
            status={false}
            modalCart={true}
            className="product-card "
          />
          <ProductCard
            productName="caramel"
            productAmount="50"
            totalPrice="1500"
            className="product-card "
            status={false}
            modalCart={true}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
export default ProductCardModal;
