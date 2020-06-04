import React from "react";

const Button = ({ name, className, onClick }) => (
  <button className={className} id={name} onClick={onClick}>
    {name}
  </button>
);

export default Button;
