import React from "react";
import PropTypes from "prop-types";

const Textarea = ({ className, placeholder, name, value, onChange }) => (
  <textarea
    name={name}
    className={className}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
  ></textarea>
);

Textarea.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  name : PropTypes.string,
  value : PropTypes.string,
  onChange : PropTypes.func
};

export default Textarea;