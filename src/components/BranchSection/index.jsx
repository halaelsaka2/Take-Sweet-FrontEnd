import React from "react";
import BranchList from "./partials/BranchList";
import ProfileLabel from "../ProfileLabel";
import PropTypes from "prop-types";

const BranchSection = ({
  branchList,
  isEditBranch,
  branchStyle,
  isBranchTab,
  ListAdditionalStyle,
  deleteButtonHandle,
  editButtonHandle,
  newBranchModalOpenHandle,
  isEdit,
}) => (
  <React.Fragment>
    {isBranchTab && (
      <ProfileLabel className="profileLabel" content="Branches" />
    )}

    <div className={`branchContainer ${branchStyle}`}>
      <div className="branchContainer__content">
        {isEditBranch && (
          <div className="branchContainer__edit">
            <div className="branchContainer__edit__icon">
              <i onClick={newBranchModalOpenHandle} className="fas fa-plus"></i>
            </div>
          </div>
        )}

        <BranchList
          branchList={branchList}
          ListAdditionalStyle={ListAdditionalStyle}
          deleteButtonHandle={deleteButtonHandle}
          editButtonHandle={editButtonHandle}
          isEdit={isEdit}
        ></BranchList>
      </div>
    </div>
  </React.Fragment>
);

export default BranchSection;

BranchSection.defaultProps = {
  isEditBranch: true,
  isBranchTab: true,
};

BranchSection.protoTypes = {
  branchList: PropTypes.array,
  isEditBranch: PropTypes.bool,
  isBranchTab: PropTypes.bool,
  branchStyle: PropTypes.string,
  ListAdditionalStyle: PropTypes.string,
  deleteButtonHandle: PropTypes.func,
};
