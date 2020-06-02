import React, { Component } from "react";

import Login from "./container/LoginPage/login";

import ProductCardModal from "./container/ProductCardModalPage/ProductCardModal";
import RegisterGeneralInfo from "./container/RegisterPage/registerGeneralInfo";
import Footer from "./components/layouts/footer";
import Header from "./components/layouts/header";
import Textarea from "./components/Textarea/textarea";
import RegisterAcceptanceInfo from "./container/RegisterPage/registerAcceptanceInfo";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Login /> */}
        {/* <ProductCardModal /> */}
        <RegisterAcceptanceInfo />
        {/* <RegisterGeneralInfo /> */}
        {/* <Header check="t" /> */}
        {/* <br /> <br /> <br /> */}
        {/* <Textarea
          classname="inputReview reviewCard__reviews"
          columsNo="100"
          placeholder="your message"
        ></Textarea> */}
        {/* <Footer /> */}
      </React.Fragment>
    );
  }
}

export default App;
