import React from "react";
import ProductCard from "./../productCard/productCard";
const ProductCardListing = (props) => {
  const { productCards } = props;
  //productCards[{name,amount,totalPrice},{name,amount,totalPrice},{name,amount,totalPrice}]
  //  return (   productCards.map((prod) => (
  //   <ProductCard
  //     productName={prod.name}
  //     productAmount={prod.amount}
  //     totalPrice={prod.price}
  //     cardType="modalCard"
  //     className="product-card"
  //   />
  // ));

  return productCards.map((prod) => (
    <ProductCard
      productName={prod.name}
      productAmount={prod.amount}
      productImg={prod.image}
      totalPrice={prod.totalPrice}
      cardType="modalCard"
      className="product-card"
    />
  ));
};

export default ProductCardListing;
