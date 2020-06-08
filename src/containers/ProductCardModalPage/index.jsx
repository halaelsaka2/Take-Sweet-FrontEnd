import React, { Component } from "react";
import ProductCardsSection from "../../components/ProductCardsSection";

class ProductCardModal extends Component {
  state = {
    productCards: [1, 2, 3],
  };
  handleDelete = (id) => {};
  render() {
    const {
      handleDelete,
      state: { productCards },
    } = this;

    return (
      <ProductCardsSection
        handleDelete={handleDelete}
        productCards={productCards}
      />
    );
  }
}

export default ProductCardModal;
