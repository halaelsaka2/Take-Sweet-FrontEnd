import React from "react";
import BranchItem from "./BranchItem";

const BranchList = ({ branchList }) => (
  <div className="branchContainer__branches">
    {branchList.map((item) => (
      <BranchItem
        cityName={item.cityName}
        address={item.address}
        phoneNumber={item.phoneNumber}
      ></BranchItem>
    ))}
  </div>
);

export default BranchList;
