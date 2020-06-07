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
    <span className="branchContainer__branches__location__header">
      {cityName}
    </span>
    {cancelIcon && (
      <i
        onClick={() => cancelButtonHandle(index)}
        className="fas fa-times cancel-branch"
      ></i>
    )}
    <span className="branchContainer__branches__location__address">
      {address}
    </span>
    <span className="branchContainer__branches__location__phone">
      {phoneNumber}
    </span>
  </div>
);

export default BranchItem;
