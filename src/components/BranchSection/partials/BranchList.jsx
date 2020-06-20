import React from "react";
import BranchItem from "./BranchItem";
import PropTypes from "prop-types";

const BranchList = ({
  branchList,
  ListAdditionalStyle,
  deleteButtonHandle,
  editButtonHandle,
  isEdit,
}) => (
  <div className={`branchContainer__branches ${ListAdditionalStyle}`}>
    {branchList.length > 0 ? (
      branchList.map((item, index) => (
        <BranchItem
          key={item.id}
          cityName={item.city}
          address={item.address}
          phoneNumber={item.phoneNumber}
          deleteButtonHandle={deleteButtonHandle}
          editButtonHandle={editButtonHandle}
          index={index}
          id={item.id}
          isEdit={isEdit}
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
  deleteButtonHandle: PropTypes.func,
};
BranchList.defaultProps = {
  branchList: [],
};

export default BranchList;
