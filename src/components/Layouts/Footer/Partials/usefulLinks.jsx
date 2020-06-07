import React from "react";
import UsefulLink from "./usefulLink";

const UsefulLinks = ({ usefulLinks }) => {
  return (
    <React.Fragment>
      <h4 className="footerContainer__col__title">USEFUL LINKS</h4>
      <ul className="footerContainer__col__menu">
        {usefulLinks.map((item) => (
          <UsefulLink
            key={item.id}
            className={item.className}
            text={item.text}
          />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default UsefulLinks;
