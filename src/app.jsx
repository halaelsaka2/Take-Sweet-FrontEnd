import React, { Component } from "react";

import Login from "./container/LoginPage/login";
// import Button
import Button from "./components/Button/button";
import ProductCardModal from "./container/ProductCardModalPage/ProductCardModal";
import Footer from "./components/layouts/footer";
import Header from "./components/layouts/header";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Login /> */}
        {/* <ProductCard /> */}
        <ProductCardModal />
        <Header />
        <br /> <br /> <br />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
