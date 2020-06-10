import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LoginSection = ({
  emailType,
  emailPlaceholder,
  emailValue,
  emailId,
  emailName,
  passwordType,
  passwordPlaceholder,
  passwordValue,
  passwordId,
  passwordName,
  onChange,
  loginButtonHandle,
}) => (
  <div className="login-container">
    <div className="login-img">
      <img className="img-login" src="assets/images/cookies6x6.jpg" />
    </div>
    <div className="login-form-container">
      <div className="login-form">
        <div className="form-header">Login</div>
        <Input
          className="input input--shadow"
          type={emailType}
          placeholder={emailPlaceholder}
          id={emailId}
          name={emailName}
          onChange={onChange}
          value={emailValue}
        />
        <Input
          className="input input--shadow"
          type={passwordType}
          placeholder={passwordPlaceholder}
          id={passwordId}
          name={passwordName}
          onChange={onChange}
          value={passwordValue}
        />
        <Link to='/profile'>
        <Button
          className="button--rounded button--rounded--s button--rounded--shadow"
          name="Login"
          onClick={loginButtonHandle}
        />
        </Link>
        <Link
          to="/register-general-info"
          style={{ color: "#bb9230", textDecoration: "none" }}
        >
          Register Now
        </Link>
      </div>
    </div>
  </div>
);

LoginSection.propTypes = {
  emailType: PropTypes.string,
  emailPlaceholder: PropTypes.string,
  emailValue: PropTypes.string,
  emailId: PropTypes.string,
  emailName: PropTypes.string,
  passwordType: PropTypes.string,
  passwordPlaceholder: PropTypes.string,
  passwordValue: PropTypes.string,
  passwordId: PropTypes.string,
  passwordName: PropTypes.string,
  onChangeEmailHandle: PropTypes.func,
  onChangePasswordHandle: PropTypes.func,
  loginButtonHandle: PropTypes.func,
};

export default LoginSection;
