import React from "react";
import BranchItem from "./BranchItem";

const BranchList = ({
  branchList,
  ListAdditionalStyle,
  cancelButtonHandle
}) => (
  <div className={`branchContainer__branches ${ListAdditionalStyle}`}>
    {branchList.length > 0 ? (
      branchList.map((item, index) => (
        <BranchItem
          key={index}
          cityName={item.cityName}
          address={item.address}
          phoneNumber={item.phoneNumber}
          cancelButtonHandle={cancelButtonHandle}
          index={index}
        ></BranchItem>
      ))
    ) : (
      <div> There is no branches yet</div>
    )}
  </div>
);

export default BranchList;
