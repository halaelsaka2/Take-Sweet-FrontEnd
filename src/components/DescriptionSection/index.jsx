import React from "react";
import PropTypes from "prop-types";

const DescriptionSection = ({ titleClassName, textClassName, title, text }) => (
  <React.Fragment>
    <h2 className={titleClassName}>{title}</h2>
    <div className={textClassName}>{text}</div>
  </React.Fragment>
);
export default DescriptionSection;

DescriptionSection.propTypes = {
  titleClassName: PropTypes.string,
  textClassName: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};
