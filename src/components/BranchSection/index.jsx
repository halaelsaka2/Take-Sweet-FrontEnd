import React from "react";
import BranchList from "./partials/BranchList";
import ProfileLabel from "../ProfileLabel";

const BranchSection = ({
  branchList,
  isEditBranch,
  branchStyle,
  isBranchTab,
  ListAdditionalStyle,
  cancelButtonHandle
}) => (
  <React.Fragment>
    {isBranchTab && (
      <ProfileLabel className="profileLabel" content="Branches" />
    )}

    <div className={`branchContainer ${branchStyle}`}>
      <div className="branchContainer__content">
        {isEditBranch && (
          <div className="branchContainer__edit">
            <div className="branchContainer__edit__icon" id="editBranch">
              <i className="fas fa-plus"></i>
            </div>
          </div>
        )}

        <BranchList
          branchList={branchList}
          ListAdditionalStyle={ListAdditionalStyle}
          cancelButtonHandle={cancelButtonHandle}
        ></BranchList>
      </div>
    </div>
  </React.Fragment>
);

export default BranchSection;

BranchSection.defaultProps = {
  isEditBranch: true,
  isBranchTab: true
};
