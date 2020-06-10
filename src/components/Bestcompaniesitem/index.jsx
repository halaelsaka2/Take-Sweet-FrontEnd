import React from "react";

const Bestcompaniesitem = ({ src }) => (
  <div className="item-medium">
    <div
      className="item-medium__image image"
      style={{
        backgroundImage: "url('" + src + "')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    ></div>
  </div>
);

export default Bestcompaniesitem;
