import React from "react";

const Bestcompaniesitem = ({ company }) => (
  <div className="item-medium">
    <div
      className="item-medium__image image"
      style={{
        backgroundImage: "url('" + company.src + "')",
        "background-position": "center",
        "background-repeat": "no-repeat",
        "background-position": "center",
        "background-size": "20rem 20rem",
      }}
    ></div>
  </div>
);

export default Bestcompaniesitem;
