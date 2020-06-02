import React, { Component } from "react";
import Login from "./container/LoginPage/login";
import RegisterGeneralInfo from "./container/RegisterPage/registerGeneralInfo";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Login /> */}
        <RegisterGeneralInfo />
      </React.Fragment>
    );
  }
}

export default App;
