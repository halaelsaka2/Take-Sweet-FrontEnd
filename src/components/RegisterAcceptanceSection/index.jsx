import React from "react";
import Input from "../Input";
import Button from "../Button";
import Stepper from "../Stepper";
import PropTypes from "prop-types";

const RegisterAcceptanceSection = ({
  inputId,
  inputName,
  checkHandle,
  backButtonHandle,
  registerButtonHandle,
}) => (
  <div className="register-container">
    <div className="register-form-container">
      <div className="register-form">
        <div className="register-header">Register</div>
        <Stepper
          steps={[1, 2, 3]}
          stepClassNames={[
            "circle--finished",
            "circle--finished",
            "circle--finished",
          ]}
          pipeClassNames={["pipe--finished", "pipe--finished"]}
        />

        <div className="terms-container">
          <span className="block-span">You have finished all the steps</span>
          <span className="block-span">Now please read the terms</span>
          <div style={{ height: "25rem" }}>-Allow to access your data</div>
          <div>
            <Input
              type="checkbox"
              name={inputName}
              id={inputId}
              onChange={checkHandle}
            />
            <span>Accept All Terms</span>
          </div>
        </div>
        <div className="button-container">
          <div className="flex-buttons-container">
            <Button
              className="button--rounded button--rounded--s button--rounded--shadow"
              name="Back"
              onClick={backButtonHandle}
            />

            <Button
              className="button--rounded button--rounded--s button--rounded--shadow"
              name="Register"
              onClick={registerButtonHandle}
            />
          </div>
        </div>
      </div>
    </div>
    <div className="register-img card-overlay">
      <img className="img-register" src="assets/images/cake6x6.jpg" alt="" />
    </div>
  </div>
);

RegisterAcceptanceSection.propTypes = {
  checked: PropTypes.bool,
  inputType: PropTypes.string,
  inputId: PropTypes.string,
  inputName: PropTypes.string,
  checkHandle: PropTypes.func,
  backButtonHandle: PropTypes.func,
  registerButtonHandle: PropTypes.func,
};
export default RegisterAcceptanceSection;
