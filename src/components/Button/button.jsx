import React from "react";

const Button = props => {
  const { name, style } = props;
  return <Button className={style}>{name}</Button>;
};

export default Button;
