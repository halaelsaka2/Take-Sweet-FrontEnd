import React from "react";

const Button = ({ name, id, className, onClick }) => (
  <button className={className} id={id} onClick={onClick}>
    {name}
  </button>
);

export default Button;
