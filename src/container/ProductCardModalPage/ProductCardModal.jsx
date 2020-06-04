import React, { Component } from "react";
import ProductCardsSection from "../../components/ProductCardsSection/index";

class ProductCardModal extends Component {
  state = {
    productCards: [],
  };

  render() {
    const { productCards } = this.state;
    return <ProductCardsSection productCards={productCards} />;
  }
}

export default ProductCardModal;
