import React from "react";
import PropTypes from "prop-types";

const BranchItem = ({
  cityName,
  address,
  phoneNumber,
  cancelButtonHandle,
  index,
}) => (
  <div className="branchContainer__branches__location">
    <div className="branch-header-flex">
      <span className="branchContainer__branches__location__header">
        {cityName}
      </span>
      <div className="branch-icons-flex">
        <i className="fas fa-pencil-alt"></i>
        <i
          onClick={() => cancelButtonHandle(index)}
          className="fas fa-trash-alt branch-trash-icon"
        ></i>
      </div>
    </div>
    <span className="branchContainer__branches__location__address">
      {address}
    </span>
    <span className="branchContainer__branches__location__phone">
      {phoneNumber}
    </span>
  </div>
);

BranchItem.protoTypes = {
  cityName: PropTypes.string,
  address: PropTypes.string,
  phoneNumber: PropTypes.number,
  cancelIcon: PropTypes.string,
  cancelButtonHandle: PropTypes.func,
  index: PropTypes.number,
};

export default BranchItem;
