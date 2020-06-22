import React from "react";
// import CompanyItem from "../CompanyItem";
import Bestcompaniesitem from "../Bestcompaniesitem";
import PropTypes from "prop-types";

const Bestcompanies = ({ companies }) => (
  <React.Fragment>
    <div className="bestContainer__header">Best Brands</div>

    <div className="list-container list-container--4">
      {companies.map((company) => (
        // <Companiesitem src={company.src} key={company.id} />
        <Bestcompaniesitem src={company.src} key={company.id} />
      ))}
    </div>
  </React.Fragment>
);

export default Bestcompanies;

Bestcompanies.propTypes = {
  companies: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      name: PropTypes.string,
      src: PropTypes.string,
    })
  ),
};
