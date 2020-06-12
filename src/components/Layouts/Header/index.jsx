import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";
import { Popover, PopoverHeader, PopoverBody } from "reactstrap";
import NotificationPopOver from "./../../NotificationPopover/index";

class Header extends Component {
  state = {
    isCompany: false,
    isOpen: false,
    orders: [] /*backednd*/,
    newOrders: [],
  };
  handleToggle = () => {
    let { isOpen } = this.state;
    isOpen = !isOpen;
    this.setState({ isOpen });
  };
  render() {
    const {
      state: { isCompany, isOpen, orders, newOrders },
      handleToggle,
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
            {isCompany && (
              <li className="nav__menu__item">
                <NavLink to="/seller" className="nav__menu__link">
                  Products
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
          {isCompany && (
            <NotificationPopOver
              isOpen={isOpen}
              orders={orders}
              handleToggle={handleToggle}
              newOrders={newOrders}
            />
          )}

          <NavLink to="/login">
            <i className="fas fa-user"></i> Sign in
          </NavLink>
        </div>
      </header>
    );
  }
}

export default Header;
