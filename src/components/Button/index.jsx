import React from "react";

const Button = props => {
  const { name, className , id} = props;
  return <button className={className} id={id}>{name}</button>;
};

export default Button;
