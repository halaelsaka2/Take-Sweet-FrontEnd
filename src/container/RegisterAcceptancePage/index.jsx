import React, { Component } from "react";
import RegisterAcceptanceSection from "./../../components/RegisterAcceptanceSection";
class RegisterAcceptancePage extends Component {
  state = { checked: false, inputType: "checkbox", inputId: "checkbox" };
  checkHandle = event => {
    let checked = { ...this.state.checked };
    checked = event.target.checked;
    this.setState({ checked });
  };
  backButtonHandle = event => console.log(this.state.checked);

  registerButtonHandle = event => console.log("register");

  render() {
    const {
      checkHandle,
      backButtonHandle,
      registerButtonHandle,
      state: { checked, inputType, inputId }
    } = this;
    return (
      <RegisterAcceptanceSection
        checked={checked}
        inputId={inputId}
        inputType={inputType}
        checkHandle={checkHandle}
        backButtonHandle={backButtonHandle}
        registerButtonHandle={registerButtonHandle}
      />
    );
  }
}

export default RegisterAcceptancePage;
