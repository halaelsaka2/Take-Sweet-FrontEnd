import React, { Component } from "react";
import Login from "./container/LoginPage/login";
// import Button
import Button from "./components/Button/button";
import ProductCardModal from "./container/ProductCardModalPage/ProductCardModal";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Login /> */}
        {/* <ProductCard /> */}
        <ProductCardModal />
      </React.Fragment>
    );
  }
}

export default App;
