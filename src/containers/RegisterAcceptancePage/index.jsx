import React, { Component } from "react";
import RegisterAcceptanceSection from "./../../components/RegisterAcceptanceSection";
import constants from "./constants";

class RegisterAcceptancePage extends Component {
  state = { checked: false };
  checkHandle = (event) => {
    let checked = { ...this.state.checked };
    checked = event.target.checked;
    this.setState({ checked });
  };
  backButtonHandle = (event) => {
    this.props.history.push("/register-branch");
  };

  registerButtonHandle = (event) => {
    window.history.replaceState(null, null, "/");
    this.props.history.push("/profile");
  };

  render() {
    const {
      checkHandle,
      backButtonHandle,
      registerButtonHandle,
      state: { checked },
    } = this;
    return (
      <RegisterAcceptanceSection
        checked={checked}
        inputId={constants.inputId}
        inputType={constants.inputType}
        inputName={constants.inputName}
        checkHandle={checkHandle}
        backButtonHandle={backButtonHandle}
        registerButtonHandle={registerButtonHandle}
      />
    );
  }
}

export default RegisterAcceptancePage;
