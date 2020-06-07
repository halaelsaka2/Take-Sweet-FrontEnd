import React from "react";
import BranchItem from "./BranchItem";

const BranchList = ({
  branchList,
  cancelIcon,
  ListAdditionalStyle,
  cancelButtonHandle
}) => (
  <div className={`branchContainer__branches ${ListAdditionalStyle}`}>
    {branchList.map((item, index) => (
      <BranchItem
        key={index}
        cityName={item.cityName}
        address={item.address}
        phoneNumber={item.phoneNumber}
        cancelIcon={cancelIcon}
        cancelButtonHandle={cancelButtonHandle}
      ></BranchItem>
    ))}
  </div>
);

export default BranchList;
