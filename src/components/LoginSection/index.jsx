import React from "react";
import Input from "../../components/Input";
// import Button from "../../components/Button";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Button } from "reactstrap";

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
  loginButtonHandle
}) => (
  <div className="login-container">
    <div className="login-img">
      <img className="img-login" src="assets/images/cookies6x6.jpg" alt="" />
    </div>
    <div className="login-form-container">
      <div className="login-form">
        <AvForm className="login-form" onValidSubmit={loginButtonHandle}>
          <div className="form-header">Login</div>
          <AvField
            className="input input--shadow"
            type={emailType}
            placeholder={emailPlaceholder}
            id={emailId}
            name={emailName}
            onChange={onChange}
            value={emailValue}
            validate={{
              required: { value: true, errorMessage: "Email can't be empty" },
              email: { value: true, errorMessage: "Invalid email form" }
            }}
          />
          <AvField
            className="input input--shadow"
            type={passwordType}
            placeholder={passwordPlaceholder}
            id={passwordId}
            name={passwordName}
            onChange={onChange}
            value={passwordValue}
            validate={{
              required: { value: true, errorMessage: "Password can't be empty" }
            }}
          />
          {/* <Link to="/profile"> */}
          <Button
            className="button--rounded button--rounded--s button--rounded--shadow"
            // name="Login"
            type="submit"
            // onClick={loginButtonHandle}
            color=""
          >
            Login
          </Button>
        </AvForm>
        {/* </Link> */}
        <Link className="register-now" to="/register-general-info">
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
  loginButtonHandle: PropTypes.func
};

export default LoginSection;
