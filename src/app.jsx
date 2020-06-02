import React, { Component } from "react";

import Login from "./container/LoginPage/login";
import Footer from "./components/layouts/footer";
import Header from "./components/layouts/header";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Login /> */}
        <Header />
        <br /> <br /> <br />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
