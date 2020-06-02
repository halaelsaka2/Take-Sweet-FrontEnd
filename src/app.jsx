import React, { Component } from "react";

import Login from "./container/LoginPage/login";
// import Button
import Button from "./components/Button/button";
import ProductCardModal from "./container/ProductCardModalPage/ProductCardModal";
import Footer from "./components/layouts/footer";
import Header from "./components/layouts/header";
import ProductCard from "./components/product-card/productCard";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Login /> */}
        {/* <ProductCard
          productName="caramel"
          productAmount="50"
          totalPrice="1500"
          status={false}
          modalCart={true}
          className="product-card product-card--large"
        /> */}
        <ProductCardModal />
        <Header />
        <Header check="t" />
        <br /> <br /> <br />
        <Footer /> */}
      </React.Fragment>
    );
  }
}

export default App;
