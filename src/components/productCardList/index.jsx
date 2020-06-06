import React from "react";
import ProductCard from "../ProductCard/index";

const ProductCardList = ({ productCards, handleDelete }) =>
  productCards.map((product) => (
    <ProductCard
      key={product.id}
      productName={product.name}
      productAmount={product.amount}
      productImg={product.image}
      totalPrice={product.totalPrice}
      handleDelete={handleDelete}
      cardType="modalCard"
    />
  ));

export default ProductCardList;
