import React from "react";
import PropTypes from "prop-types";

const DescriptionSection = ({ title, text }) => (
  <React.Fragment>
    <h2 className="text-container-h3">{title}</h2>
    <div className="text-container">{text}</div>
  </React.Fragment>
);
export default DescriptionSection;

DescriptionSection.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};
