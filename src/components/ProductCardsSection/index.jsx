import React from "react";
import ProductCardList from "../ProductCardList";
import ModalSection from "../ModalSection";

const ProductCardsSection = ({
  productCards,
  handleDelete,
  isClicked,
  closeProductsModal,
}) => (
  <ModalSection
    isClicked={isClicked}
    classModifier1="myModal--product"
    classModifier="myModal__modalContent--product"
  >
    <i
      className="myModal__modalContent__closeIcon fas fa-times"
      onClick={closeProductsModal}
    ></i>
    <ProductCardList handleDelete={handleDelete} productCards={productCards} />
  </ModalSection>
);
export default ProductCardsSection;
