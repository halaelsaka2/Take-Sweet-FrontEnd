import React from "react";

const CompanyItem = ({ src }) => {
  return (
    <div className="item-medium">
      <div
        className="item-medium__image image"
        style={{
          backgroundImage: `url(${src})`,
          backgroundPosition: " center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "20rem 20rem",
        }}
      >
        <a href="s" className="item-medium__action">
          Order
        </a>
      </div>
    </div>
  );
};

export default CompanyItem;
