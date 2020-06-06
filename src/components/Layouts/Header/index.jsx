import React from "react";
{
  /* <Header check="t" /> */
}
const Header = ({ check }) => {
  let x = check !== "" ? true : false;
  return (
    <header className="header">
      <div className="header__logo">
        <img
          className="header__logo__icon"
          src="assets/images/GoBetween.png"
          alt="logo"
        />
      </div>
      <nav className="nav">
        <ul className="nav__menu">
          <li className="nav__menu__item">
            <a href="#" className="nav__menu__link">
              Home
            </a>
          </li>
          <li className="nav__menu__item">
            <a href="#" className="nav__menu__link">
              Features
            </a>
          </li>
          <li className="nav__menu__item">
            <a className="nav__menu__link" href="#">
              About us
            </a>
          </li>
          <li className="nav__menu__item">
            <a className="nav__menu__link" href="#">
              Review
            </a>
          </li>
          <li className="nav__menu__item">
            <a className="nav__menu__link" href="#">
              Contact
            </a>
          </li>
          {x && (
            <li className="nav__menu__item">
              <a className="nav__menu__link" href="#">
                Products
              </a>
            </li>
          )}
        </ul>
      </nav>
      <div>
        <i className="fas fa-user"></i> Sign in
      </div>
    </header>
  );
};

export default Header;
