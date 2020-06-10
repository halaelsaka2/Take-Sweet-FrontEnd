import React from "react";
import ProductCardList from "../ProductCardList";
import ModalSection from "../ModalSection";

const ProductCardsSection = ({ productCards, handleDelete, isClicked }) => (
  <ModalSection
    isClicked={isClicked}
    classModifier1="myModal--product"
    classModifier="myModal__modalContent--product"
  >
    <i className="myModal__modalContent__closeIcon fas fa-times"></i>
    <ProductCardList handleDelete={handleDelete} productCards={productCards} />
  </ModalSection>
);
export default ProductCardsSection;
