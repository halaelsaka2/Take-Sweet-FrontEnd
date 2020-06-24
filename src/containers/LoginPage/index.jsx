import React, { Component } from "react";
import LoginSection from "../../components/LoginSection";
import constants from "./constants";
import { connect } from "react-redux";
import { userLogin } from "../../redux-modules/users/actions";

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

  loginButtonHandle = async (event, values) => {
    let user = { ...this.state.user };
    await this.props.userLogin(user);
    if (this.props.user) {
      localStorage.setItem("user", JSON.stringify(this.props.user));
      localStorage.setItem("token", JSON.stringify(this.props.token));
      this.props.history.replace(`/profile`);
    }
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

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    token: state.user.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (user) => dispatch(userLogin(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
