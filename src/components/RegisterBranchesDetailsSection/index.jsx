import React from "react";
import Button from "../Button";
import Stepper from "../Stepper";
import BranchSection from "../BranchSection";
import PropTypes from "prop-types";

const RegisterBranchesDetailsSection = ({
  branchList,
  backButtonHandle,
  cancelButtonHandle,
  isEditBranch,
  isBranchTab
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
            "circle--active"
          ]}
          pipeClassNames={["pipe--finished", "pipe--finished"]}
        />

        <BranchSection
          branchStyle={"branchContainer--register"}
          branchList={branchList}
          isEditBranch={isEditBranch}
          isBranchTab={isBranchTab}
          ListAdditionalStyle={"branchContainer__branches--2branches"}
          cancelButtonHandle={cancelButtonHandle}
        />

        <div className="button-container">
          <div className="flex-buttons-container">
            <Button
              className="button--rounded button--rounded--s button--rounded--shadow"
              name="Back"
              onClick={backButtonHandle}
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

RegisterBranchesDetailsSection.propTypes = {
  branchList: PropTypes.array,
  isEditBranch: PropTypes.bool,
  isBranchTab: PropTypes.bool,
  backButtonHandle: PropTypes.func,
  cancelButtonHandle: PropTypes.func
};
export default RegisterBranchesDetailsSection;
