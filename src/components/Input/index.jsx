import React from "react";

const Input = ({
  name,
  label,
  className,
  type,
  value,
  checked,
  onChange,
  placeholder,
  id,
  defaultChecked,
}) => (
  <React.Fragment>
    <label htmlFor={name}>{label}</label>
    <input
      value={value}
      onChange={onChange}
      className={className}
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      checked={checked}
      defaultChecked={defaultChecked}
    />
  </React.Fragment>
);

export default Input;
