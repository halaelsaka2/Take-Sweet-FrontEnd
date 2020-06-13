import React from "react";
import { NavLink } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

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
          <Link to="home">
            <NavLink to="/home" className="nav__menu__link">
              Home
            </NavLink>
          </Link>
        </li>
        <li className="nav__menu__item">
          <Link to="about-us" className="nav__menu__link">
            <NavLink to="/home" className="nav__menu__link">
              About us
            </NavLink>
          </Link>
        </li>
        <li className="nav__menu__item">
          <Link to="reviewCard" className="nav__menu__link">
            <NavLink to="/home" className="nav__menu__link">
              Review
            </NavLink>
          </Link>
        </li>
        <li className="nav__menu__item">
          <Link to="footer" className="nav__menu__link">
            <NavLink to="/home" className="nav__menu__link">
              Contact
            </NavLink>
          </Link>
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
