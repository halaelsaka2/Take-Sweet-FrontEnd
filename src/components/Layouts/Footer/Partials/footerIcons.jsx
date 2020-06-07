import React from "react";
import Icon from "./footerIcon";
const Icons = ({ icons }) => {
  return (
    <div className="footer__bottom__icons">
      {icons.map((item) => (
        <Icon key={item.id} className={item.className} />
      ))}
    </div>
  );
};

export default Icons;
