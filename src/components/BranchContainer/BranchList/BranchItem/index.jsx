import React from "react";

const BranchItem = (props) => (
  <div className="branchContainer__branches__location">
    <span className="branchContainer__branches__location__header">
      {props.cityName}
    </span>
    <span className="branchContainer__branches__location__address">
      {props.address}
    </span>
    <span className="branchContainer__branches__location__phone">
      {props.phoneNumber}
    </span>
  </div>
);

export default BranchItem;
