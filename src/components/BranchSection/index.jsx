import React from "react";
import BranchList from "./partials/BranchList";
import ProfileLabel from "../ProfileLabel";


const BranchSection = ({
  branchList,
  isEditBranch,
  branchStyle,
  isBranchTab,
  cancelIcon,
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
              <i className="fas fa-pencil-alt"></i>
            </div>
          </div>

        )} 

        <BranchList
          branchList={branchList}
          cancelIcon={cancelIcon}
          ListAdditionalStyle={ListAdditionalStyle}
          cancelButtonHandle={cancelButtonHandle}
        ></BranchList>

      </div>
    </div>
  </React.Fragment>
);

export default BranchSection;
