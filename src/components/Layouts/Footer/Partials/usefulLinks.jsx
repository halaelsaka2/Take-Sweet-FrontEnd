import React from "react";

const UsefulLinks = () => {
  return (
    <React.Fragment>
      <h4 className="footerContainer__col__title">USEFUL LINKS</h4>
      <ul className="footerContainer__col__menu">
        <li className="footerContainer__col__menu__item">
          <i className="fas fa-map-marker-alt pad"></i>
          <span className="pad">Locations</span>
        </li>
        <li className="footerContainer__col__menu__item">
          <i className="fas fa-phone-alt pad"></i>
          <span className="pad">Call us 0999 5000</span>
        </li>
        <li className="footerContainer__col__menu__item">
          <i className="far fa-envelope pad"></i>
          <span className="pad">GoBetween@gmail.com</span>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default UsefulLinks;
