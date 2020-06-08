import React from "react";
import PropTypes from "prop-types";

const ModalSection = ({ isClicked, classModifier, children }) => (
  <div className={`myModal${isClicked && "active-modal"}`} id="editInfo">
    <div className={`myModal__modalContent ${classModifier}`}>{children}</div>
  </div>
);
ModalSection.defaultProps = {
  isClicked: false,
};

ModalSection.propTypes = {
  classModifier: PropTypes.string,
  children: PropTypes.node,
  isClicked: PropTypes.bool,
};
export default ModalSection;
