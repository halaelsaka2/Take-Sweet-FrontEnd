import React, { Component } from "react";
import ProductsSection from "../../components/ProductsSection";

export default class ProductsPage extends Component {
  state = {
    products: [],
    sortbyList: [],
    categoryList: [],
    pagetype: this.props.pagetype,
  };

  render() {
    return (
      <ProductsSection
        products={this.products}
        sortbyList={this.state.sortbyList}
        categoryList={this.state.categoryList}
        pagetype={this.state.pagetype}
      ></ProductsSection>
    );
  }
}
