import React from "react";
import PropTypes from "prop-types";

const Textarea = ({ classname, placeholder }) => (
  <textarea
    name="textarea"
    className={classname}
    placeholder={placeholder}
  ></textarea>
);

export default Textarea;

Textarea.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
};
