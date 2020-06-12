import React, { Component } from "react";
import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";
import ProductsSection from "../../components/ProductsSection";
import { category, sortByList, products } from "./dumy";

export default class BrandsPage extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Header /> */}
        <ProductsSection
          products={products}
          category={category}
          sortbyList={sortByList}
          type={"brand-page"}
        />
        <Footer />
      </React.Fragment>
    );
  }
}
