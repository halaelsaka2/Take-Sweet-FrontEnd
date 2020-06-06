import React from "react";
import Bestcompaniesitem from "../Bestcompaniesitem";

const Bestcompanies = ({ companies }) => {
  return (
    <div class="list-container list-container--4">
      {companies.map((company) => (
        <Bestcompaniesitem company={company} />
      ))}
    </div>
  );
};

export default Bestcompanies;
