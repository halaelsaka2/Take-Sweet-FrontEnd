import React, { Component } from "react";
import ProductCardsContainer from "../../components/ProductCardsContainer/index";

class ProductCardModal extends Component {
  state = {
    productCards: [
      {
        name: "carmel",
        amount: "ttt",
        totalPrice: 55,
        image: "assets/images/Product-2.jpg",
      },
      { name: "", amount: "", totalPrice: "", image: "" },
    ],
  };
  render() {
    const { productCards } = this.state;
    return <ProductCardsContainer productCards={productCards} />;
  }
}

export default ProductCardModal;
