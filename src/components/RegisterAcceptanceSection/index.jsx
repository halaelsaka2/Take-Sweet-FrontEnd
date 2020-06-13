import React from "react";
import Input from "../Input";
import Button from "../Button";
import Stepper from "../Stepper";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const RegisterAcceptanceSection = ({
  checked,
  inputType,
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
          <span className="block-span">you have finished all the steps</span>
          <span className="block-span">now please read the terms</span>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
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
            {/* <Link to="register-branch"> */}
            <Button
              className="button--rounded button--rounded--s button--rounded--shadow"
              name="Back"
              onClick={backButtonHandle}
            />
            {/* </Link> */}
            {/* <!-- button--rounded--disabled --> */}
            {/* <Link to="/profile"> */}
            <Button
              className="button--rounded button--rounded--s button--rounded--shadow"
              name="Register"
              onClick={registerButtonHandle}
            />
            {/* </Link> */}
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
