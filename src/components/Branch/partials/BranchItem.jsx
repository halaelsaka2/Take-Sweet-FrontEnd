import React from "react";

const BranchItem = ({
  cityName,
  address,
  phoneNumber,
  cancelIcon,
  itemStyle,
}) => (
  <div className={`"branchContainer__branches__location"${cancelIcon}`}>
    <span className="branchContainer__branches__location__header">
      {cityName}
    </span>
    {cancelIcon && <i class="fas fa-times cancel-branch"></i>}
    <span className="branchContainer__branches__location__address">
      {address}
    </span>
    <span className="branchContainer__branches__location__phone">
      {phoneNumber}
    </span>
  </div>
);

export default BranchItem;
