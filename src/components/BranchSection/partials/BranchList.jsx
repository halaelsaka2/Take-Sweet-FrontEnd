import React from "react";
import BranchItem from "./BranchItem";
import PropTypes from "prop-types";

const BranchList = ({
  branchList,
  ListAdditionalStyle,
  deleteButtonHandle,
  editButtonHandle
}) => (
  <div className={`branchContainer__branches ${ListAdditionalStyle}`}>
    {branchList.length > 0 ? (
      branchList.map((item, index) => (
        <BranchItem
          key={index}
          cityName={item.city}
          address={item.address}
          phoneNumber={item.phone}
          deleteButtonHandle={deleteButtonHandle}
          editButtonHandle={editButtonHandle}
          index={index}
        ></BranchItem>
      ))
    ) : (
      <div> There is no branches yet</div>
    )}
  </div>
);

BranchList.propTypes = {
  branchList: PropTypes.array,
  cancelIcon: PropTypes.string,
  ListAdditionalStyle: PropTypes.string,
  deleteButtonHandle: PropTypes.func
};

export default BranchList;
