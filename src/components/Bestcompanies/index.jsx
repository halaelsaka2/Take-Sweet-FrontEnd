import React from "react";
import BrandItem from "../BrandItem";
import PropTypes from "prop-types";

const Bestcompanies = ({ companies }) => (
  <div className="project-container project-container--h">
    <div className="bestContainer__header">Our Best Sellers</div>
    <div className="text-container">
      Whether you are looking for the perfect cake for a celebration, browsing
      breakfast ideas on searching for catering options for large meetings or
      celebrations; our food has something for everyone.
    </div>
    <div className="list-container list-container--4">
      {companies.map((company) => (
        <BrandItem src={company.src} />
      ))}
    </div>
  </div>
);

export default Bestcompanies;

Bestcompanies.propTypes = {
  companies: PropTypes.arrayOf(
    PropTypes.objectOf({
      id: PropTypes.number,
      name: PropTypes.string,
      src: PropTypes.string, //logoImgSrc
    })
  ),
};
