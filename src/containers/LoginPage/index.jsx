import React, { Component } from "react";
import LoginSection from "../../components/LoginSection";
import constants from "./constants";

class LoginPage extends Component {
  state = {
    user: {
      email: "",
      password: "",
    },
  };

  inputHandler = (event) => {
    const { name, value } = event.target;
    const user = { ...this.state.user };
    user[name] = value;
    this.setState({ user });
  };

  loginButtonHandle = (event, values) => {
    this.props.history.replace("/profile");
  };
  render() {
    const {
      inputHandler,
      loginButtonHandle,
      state: {
        user: { email, password },
      },
    } = this;
    return (
      <LoginSection
        emailType={constants.emailType}
        emailPlaceholder={constants.emailPlaceholder}
        emailId={constants.emailId}
        emailName={constants.emailName}
        emailValue={email}
        passwordType={constants.passwordType}
        passwordId={constants.passwordId}
        passwordName={constants.passwordName}
        passwordPlaceholder={constants.passwordPlaceholder}
        passwordValue={password}
        onChange={inputHandler}
        loginButtonHandle={loginButtonHandle}
      />
    );
  }
}

export default LoginPage;
