import React from "react";
import ProductCard from "../productCard/productCard";

const ProductCardList = ({ productCards }) =>
  productCards.map((product) => (
    <ProductCard
      productName={product.name}
      productAmount={product.amount}
      productImg={product.image}
      totalPrice={product.totalPrice}
      cardType="modalCard"
    />
  ));

export default ProductCardList;
