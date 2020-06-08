import React from "react";

const BranchItem = ({
  cityName,
  address,
  phoneNumber,
  cancelIcon,
  cancelButtonHandle,
  index
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

export default BranchItem;
