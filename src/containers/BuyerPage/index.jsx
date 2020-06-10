import React, { Component } from "react";
import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";
import ProductsSection from "../../components/ProductsSection";
import { category, sortByList, products } from "./dumy";

export default class BrandsPage extends Component {
  render() {
      console.log(sortByList)
      console.log(category)
    return (
      <React.Fragment>
        <Header />
        <ProductsSection
          products={products}
          category={category}
          sortbyList={sortByList}
          type={"buyer-page"}
        />
        <Footer />
      </React.Fragment>
    );
  }
}
