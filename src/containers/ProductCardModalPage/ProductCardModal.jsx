import React, { Component } from "react";
import ProductCardsSection from "../../components/ProductCardsSection";

class ProductCardModal extends Component {
  state = {
    productCards: [],
  };
  handleDelete = (id) => {};
  render() {
    const {
      handleDelete,
      state: { productCards },
    } = this;
    const { productCards } = this.state;
    return (
      <ProductCardsSection
        handleDelete={handleDelete}
        productCards={productCards}
      />
    );
  }
}

export default ProductCardModal;
