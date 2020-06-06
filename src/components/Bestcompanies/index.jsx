import React from "react";
import Bestcompaniesitem from "../Bestcompaniesitem";

const Bestcompanies = ({ companies }) => {
  return (
    <React.Fragment>
      <div className="project-container project-container--h">
        <div class="bestContainer__header">Our Best Sellers</div>
        <div class="text-container">
          Whether you are looking for the perfect cake for a celebration,
          browsing breakfast ideas on searching for catering options for large
          meetings or celebrations; our food has something for everyone.
        </div>
        <div class="list-container list-container--4">
          {companies.map((company) => (
            <Bestcompaniesitem company={company} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Bestcompanies;
