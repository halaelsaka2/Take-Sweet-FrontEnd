import React from "react";
const CompanyLogo = ({ imgSrc }) => {
  return (
    <div class="company-logo">
      <div class="date-container date-container--company">
        <img src={imgSrc} alt="company-logo" />
      </div>
    </div>
  );
};

export default CompanyLogo;
