import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ check }) => (
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
          <NavLink to="/home" className="nav__menu__link">
            Home
          </NavLink>
        </li>
        <li className="nav__menu__item">
          <NavLink to="/home" className="nav__menu__link">
            Features
          </NavLink>
        </li>
        <li className="nav__menu__item">
          <NavLink to="/home" className="nav__menu__link">
            About us
          </NavLink>
        </li>
        <li className="nav__menu__item">
          <NavLink to="/home" className="nav__menu__link">
            Review
          </NavLink>
        </li>
        <li className="nav__menu__item">
          <NavLink to="/home" className="nav__menu__link">
            Contact
          </NavLink>
        </li>
        {check && (
          <li className="nav__menu__item">
            <NavLink to="/seller" className="nav__menu__link">
              Products
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
    <div>
      <NavLink to="/login">
        <i className="fas fa-user"></i> Sign in
      </NavLink>
    </div>
  </header>
);

export default Header;
