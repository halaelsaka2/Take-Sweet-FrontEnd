import React from "react";
import Button from "../Button";
import Stepper from "../Stepper";
import BranchSection from "../BranchSection";

const RegisterBranchesDetailsSection = ({
  branchList,
  backButtonHandle,
  cancelButtonHandle
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

          <BranchSection
            branchStyle={"branchContainer--register"}
            branchList={branchList}
            isEditBranch={false}
            isBranchTab={false}
            ListAdditionalStyle={"branchContainer__branches--2branches"}
            cancelIcon={true}
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
};
export default RegisterBranchesDetailsSection;
