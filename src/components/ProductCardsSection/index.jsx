import React from "react";
import ProductCardList from "../ProductCardList";
import ModalSection from "../ModalSection";

const ProductCardsSection = ({ productCards, handleDelete, isClicked }) => (
  // <div className="myModal myModal--product active-modal">
  //   <div className="myModal__modalContent myModal__modalContent--product">

  <ModalSection isClicked={isClicked} classModifier>
    <i className="myModal__modalContent__closeIcon fas fa-times"></i>
    <ProductCardList
      handleDelete={handleDelete}
      productCards={productCards}
      classModifier="myModal__modalContent--product"
    />
  </ModalSection>

  // </div>
);
export default ProductCardsSection;
