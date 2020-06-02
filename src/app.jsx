import React, { Component } from "react";

import Login from "./container/LoginPage/login";
import RegisterGeneralInfo from "./container/RegisterPage/registerGeneralInfo";
import Footer from "./components/layouts/footer";
import Header from "./components/layouts/header";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Login /> */}
        <RegisterGeneralInfo />
        <Header check="t" />
        <br /> <br /> <br />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
