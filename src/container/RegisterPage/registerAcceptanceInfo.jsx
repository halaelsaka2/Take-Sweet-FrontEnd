import React from "react";
import Input from "./../../components/Input";
import Button from "../../components/Button/button";
import States from "../../components/States";

const RegisterAcceptanceInfo = (props) => {
  return (
    <React.Fragment>
      <div class="register-container">
        <div class="register-form-container">
          <div class="register-form">
            <div class="register-header">Register</div>
            <States
              classNameC1="circle circle--s circle--finished"
              classNameP1="pipe pipe--s pipe--finished"
              classNameC2="circle circle--s circle--finished"
              classNameP2="pipe pipe--s pipe--finished"
              classNameC3="circle circle--s circle--finished"
            />

            <div class="terms-container">
              <span class="block-span">you have finished all the steps</span>
              <span class="block-span">now please read the terms</span>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
              <div>
                <Input type="checkbox" name="checkbox" id="checkbox" />
                <span>Accept All Terms</span>
              </div>
            </div>
            <div class="button-container">
              <div class="flex-buttons-container">
                <Button
                  className="button--rounded button--rounded--s button--rounded--shadow"
                  name="Back"
                />
                {/* <!-- button--rounded--disabled --> */}
                <Button
                  className="button--rounded button--rounded--s button--rounded--shadow"
                  name="Register"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="register-img card-overlay">
          <img class="img-register" src="assets/images/cake6x6.jpg" />
        </div>
      </div>
    </React.Fragment>
  );
};
export default RegisterAcceptanceInfo;
