import React, { Component } from "react";
import LoginSection from "../../components/LoginSection";
import constants from "./constants";
import { connect } from "react-redux";
import { userLogin } from "../../redux-modules/users/actions";
import { constant } from "lodash";

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
      localStorage.setItem("token", this.props.token);
      this.props.history.replace(`/profile`);
    }
    // let companyObject = {
    //   userProfile: {
    //     email: "elabd@gmail.com",
    //     userName: "El Abd",
    //     discription:
    //       "Whether you are looking for the perfect cake for a celebration, browsing breakfast ideas on searching for catering options for large meetings or celebrations; our food has something for everyone",
    //     imageUrl: "assets/images/ElAbd.jpg",
    //   },

    //   branchList: [
    //     // { city: "Cairo", address: "el maadi", phone: "0128855888" },
    //     { city: "Cairo", address: "el zamalk", phone: "01060621024" },
    //     // { city: "Alexandra", address: "Green plaza", phone: "0128855888" },
    //   ],
    //   role: "company",
    // };

    // let cafeObject = {
    //   userProfile: {
    //     email: "moka@gmail.com",
    //     userName: "Moka",
    //     discription:
    //       "is a type of restaurant which typically serves coffee and tea, in addition to light refreshments such as baked goods or snacks",
    //     imageUrl: "assets/images/moka.jpeg",
    //   },

    //   branchList: [
    //     { city: "ismailia", address: "nemra6", phone: "01060621024" },
    //   ],
    //   role: "cafe",
    // };

    // if (user.email === companyObject.userProfile.email) {
    //   localStorage.setItem("userObject", JSON.stringify(companyObject));
    // } else if (user.email === cafeObject.userProfile.email) {
    //   localStorage.setItem("userObject", JSON.stringify(cafeObject));
    // }

    // this.props.history.replace("/profile");
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
