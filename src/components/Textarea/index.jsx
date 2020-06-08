import React from "react";
import PropTypes from "prop-types";

const Textarea = ({ classname, placeholder, name, value, onChange }) => {
  return (
    <textarea
      name={name}
      className={classname}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    ></textarea>
  );
};

export default Textarea;

Textarea.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
};
