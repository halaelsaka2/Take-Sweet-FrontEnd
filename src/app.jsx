import React, { Component } from "react";
import "../src/sass/main.scss";
import Login from "./container/LoginPage/login";
import Footer from "./components/layouts/footer";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Login /> */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
