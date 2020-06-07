import React from "react";

const UsefulLink = ({ className, text }) => {
  return (
    <li className="footerContainer__col__menu__item">
      <i className={className}></i>
      <span className="pad">{text}</span>
    </li>
  );
};

export default UsefulLink;
