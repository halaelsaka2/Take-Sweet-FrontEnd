import React from "react";

const Button = ({ name, id, type, className, onClick }) => (
  <button className={className} type={type} id={id} onClick={onClick}>
    {name}
  </button>
);

export default Button;
