import React from "react";
// import Input from "../Input";
// import Button from "../Button";
import Stepper from "../Stepper";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Button } from "reactstrap";

const RegisterGeneralInfoSection = ({
  emailType,
  emailPlaceholder,
  emailValue,
  emailId,
  emailName,
  passwordType,
  passwordPlaceholder,
  passwordValue,
  passwordName,
  passwordId,
  confirmPasswordType,
  confirmPasswordPlaceholder,
  confirmPasswordValue,
  confirmPasswordId,
  confirmPasswordName,
  onChange,
  nextButtonHandle
}) => (
  <div className="register-container">
    <div className="register-form-container">
      <div className="register-form">
        <div className="register-header">Register</div>
        <Stepper
          steps={[1, 2, 3]}
          stepClassNames={[
            "circle--active",
            "circle--notTouched",
            "circle--notTouched"
          ]}
          pipeClassNames={["pipe--notTouched", "pipe--notTouched"]}
        />
        <AvForm className="register-form" onValidSubmit={nextButtonHandle}>
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
              required: {
                value: true,
                errorMessage: "Password can't be empty"
              },
              minLength: {
                value: 5,
                errorMessage: "Password must be at least 5 chars long"
              },
              pattern: {
                value: "^[A-Za-z](?=(.*[0-9]){1,})",
                errorMessage: "Password must contain at least a number"
              }
            }}
          />

          <AvField
            className="input input--shadow"
            type={confirmPasswordType}
            placeholder={confirmPasswordPlaceholder}
            id={confirmPasswordId}
            name={confirmPasswordName}
            onChange={onChange}
            value={confirmPasswordValue}
            validate={{
              required: {
                value: true,
                errorMessage: "Confirm Password can't be empty"
              }
              // match: {
              //   value: { passwordName },
              //   errorMessage: "Passwords are not matched"
              // }
            }}
          />
          <Button
            className="button--rounded button--rounded--s button--rounded--shadow"
            // onClick={nextButtonHandle}
            type="submit"
            color=""
          >
            Next
          </Button>
          <Link className="have-account-link" to="/login">
            Already Have An Account
          </Link>
        </AvForm>
      </div>
    </div>

    <div className="register-img card-overlay">
      <img className="img-register" src="assets/images/cake6x6.jpg" alt="" />
    </div>
  </div>
);

RegisterGeneralInfoSection.propTypes = {
  emailType: PropTypes.string,
  emailPlaceholder: PropTypes.string,
  emailValue: PropTypes.string,
  emailId: PropTypes.string,
  emailName: PropTypes.string,
  passwordType: PropTypes.string,
  passwordPlaceholder: PropTypes.string,
  passwordValue: PropTypes.string,
  passwordName: PropTypes.string,
  passwordId: PropTypes.string,
  confirmPasswordType: PropTypes.string,
  confirmPasswordPlaceholder: PropTypes.string,
  confirmPasswordValue: PropTypes.string,
  confirmPasswordId: PropTypes.string,
  confirmPasswordName: PropTypes.string,
  onChange: PropTypes.func,
  nextButtonHandle: PropTypes.func
};

export default RegisterGeneralInfoSection;
