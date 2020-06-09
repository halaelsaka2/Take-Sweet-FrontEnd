import React from "react";
const CompanyLogo = ({ imgSrc }) => {
  return (
    <div className="company-logo">
      <div className="date-container date-container--company">
        <img src={imgSrc} alt="company-logo" />
      </div>
    </div>
  );
};

export default CompanyLogo;
