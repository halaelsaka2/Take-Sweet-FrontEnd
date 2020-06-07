import React from "react";
import Stepper from "../Stepper";
import Dropdown from "../Dropdown";
import Button from "../Button";
import Input from "../Input";
const RegisterBranchSection = ({
  cityValue,
  addressType,
  addressPlaceholder,
  addressValue,
  phoneType,
  phonePlaceholder,
  phoneValue,
  onChange,
  addBranchButtonHandle,
  numberOfBranches,
  backButtonHandle,
  nextButtonHandle,
  dropdownIsOpen,
  dropdownIsOpenHandle,
  selectCityHandle
}) => {
  return (
    <div className="register-container">
      <div className="register-form-container">
        <div className="register-form">
          <div className="register-header">Register</div>
          <Stepper
            steps={[1, 2, 3]}
            stepClassNames={[
              "circle--finished",
              "circle--finished",
              "circle--active"
            ]}
            pipeClassNames={["pipe--finished", "pipe--finished"]}
          />

          <div className="branches-container">
            <div className="profileLabel  profileLabel--left">Branches</div>
            <div className="branches-div">
              <div className="reg-dropdown-container reg-dropdown-container--reg4">
                <Dropdown
                  additionalStyle={"dropdown--br1"}
                  Header={cityValue}
                  ListItems={[
                    "Cairo",
                    "Alexandria",
                    "Ismailia",
                    "Portsaid",
                    "Suez"
                  ]}
                  isOpened={dropdownIsOpen}
                  IsOpenHandle={dropdownIsOpenHandle}
                  selectionHandle={selectCityHandle}
                />
              </div>
              <div id="location">
                <div className="location-container">
                  <Input
                    className="input input--mwh"
                    type={addressType}
                    placeholder={addressPlaceholder}
                    name="address"
                    id="address"
                    value={addressValue}
                    onChange={onChange}
                  />
                  <i className="fas fa-2x fa-map-marker-alt map-icon "></i>
                </div>
                <Input
                  className="input input--mwh"
                  type={phoneType}
                  placeholder={phonePlaceholder}
                  name="phone"
                  id="phone"
                  value={phoneValue}
                  onChange={onChange}
                />
                <div className="add-branch">
                  <Button
                    className="button--rounded button--rounded--s button--rounded--shadow"
                    name="Add"
                    onClick={addBranchButtonHandle}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="branches-link">
            {numberOfBranches > 0 && (
              <React.Fragment>
                <span>{numberOfBranches} Brach.</span>
                <a href="">check your branches</a>
              </React.Fragment>
            )}
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
                name="Next"
                onClick={nextButtonHandle}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="register-img">
        <img className="img-register" src="assets/images/cake6x6.jpg" alt="" />
      </div>
    </div>
  );
};

export default RegisterBranchSection;
