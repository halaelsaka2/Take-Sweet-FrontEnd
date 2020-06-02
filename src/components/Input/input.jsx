import React from "react";
const Input = props => {
  const {
    name,
    label,
    style,
    type,
    value,
    error,
    onChange,
    placeholder
  } = props;
  return (
    <React.Fragment>
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus
        value={value}
        onChange={onChange}
        className={style}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
      />
      {/* {error && <div className="alert alert-danger">{error}</div>} */}
    </React.Fragment>
  );
};

export default Input;
