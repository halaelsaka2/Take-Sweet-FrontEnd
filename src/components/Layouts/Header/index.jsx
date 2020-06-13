import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { Link, animateScroll as scroll } from "react-scroll";
import NotificationPopOver from "./../../NotificationPopover/index";

class Header extends Component {
  state = {
    isCompany: false,
    isCafe: false,
    isOpen: false,
    orders: [] /*backednd*/,
    newOrders: [],
    userName: "",
    role: "",
  };

  componentDidMount() {
    let userObject = JSON.parse(localStorage.getItem("userObject"));
    if (userObject) {
      this.setState({
        userName: userObject.userProfile.userName,
        role: userObject.role,
      });
    }
  }

  handleToggle = () => {
    let { isOpen } = this.state;
    isOpen = !isOpen;
    this.setState({ isOpen });
  };

  render() {
    const {
      state: { isCompany, isCafe, isOpen, orders, newOrders, userName, role },
      handleToggle,
      handleOpenOrder,
    } = this;
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
              <NavLink
                to="/home"
                activeClassName="activeLink"
                className="nav__menu__link"
              >
                Home
              </NavLink>
            </li>
            <li className="nav__menu__item">
              <Link to="about-us" className="nav__menu__link">
                <NavLink
                  to="/home"
                  className="nav__menu__link"
                  activeClassName="activeLink"
                >
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
            {role === "company" && (
              <li className="nav__menu__item">
                <NavLink to="/seller" className="nav__menu__link">
                  Products
                </NavLink>
              </li>
            )}
            {role === "cafe" && (
              <li className="nav__menu__item">
                <NavLink to="/brands" className="nav__menu__link">
                  Brands
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "10%",
          }}
        >
          {role === "company" && (
            <NotificationPopOver
              isOpen={isOpen}
              orders={orders}
              newOrders={[
                { id: 1, name: "Cake" },
                { id: 2, name: "Donuts" },
              ]}
              handleToggle={handleToggle}
              handleOpenOrder={handleOpenOrder}
            />
          )}

          {userName ? (
            <NavLink to="/profile">
              {/* <i className="fas fa-user"></i>  */}
              {userName}
            </NavLink>
          ) : (
            <NavLink to="/login">
              <i className="fas fa-user"></i> Sign in
            </NavLink>
          )}
          {/* // <NavLink to="/login">
          //   <i className="fas fa-user"></i> Sign in
          // </NavLink> */}
          <NavLink to="/login">
            <i class="fas fa-sign-out-alt"></i>
          </NavLink>
        </div>
      </header>
    );
  }
}

export default Header;
