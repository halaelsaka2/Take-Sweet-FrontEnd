import React from "react";

const Button = (props) => {
  const { name, style } = props;
  return <button className={style}>{name}</button>;
};

export default Button;
