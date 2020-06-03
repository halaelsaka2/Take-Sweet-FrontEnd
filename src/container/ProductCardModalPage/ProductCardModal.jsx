import React, { Component } from "react";
import ProductCardsContainer from "../../components/ProductCardsContainer/index";
class ProductCardModal extends Component {
  state = {
    productCards: [
      { name: "carmel", amount: "ttt", totalPrice: 55, image: "" },
      { name: "", amount: "", totalPrice: "", image: "" },
    ],
  };
  render() {
    const { productCards } = this.state;
    return <ProductCardsContainer productCards={productCards} />;
  }
}

export default ProductCardModal;
