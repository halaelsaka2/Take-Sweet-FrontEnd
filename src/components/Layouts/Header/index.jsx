import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

import NotificationPopOver from "./../../NotificationPopover/index";

class Header extends Component {
  state = {
    isCompany: false,
    isCafe: false,
    isOpen: false,
    orders: [] ,
    newOrders: [],
    userName: "",
    role: "",
  };

  componentDidMount() {
    let user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    if (user) {
      this.setState({
        userName: user.userName,
        role: user.roleId.name,
      });
    }
  }

  handleToggle = () => {
    let { isOpen } = this.state;
    isOpen = !isOpen;
    this.setState({ isOpen });
  };

  logoutHandle = () => {
    localStorage.clear();
    window.history.replaceState(null, null, "/");
    this.props.history.push("/home");
  };
  render() {
    const {
      state: { isOpen, orders, userName, role },
      handleToggle,
      handleOpenOrder,
      logoutHandle,
    } = this;
    return (
      <header className="header">
        <div className="header__logo">
          <img
            className="header__logo__icon"
            src="/assets/images/GoBetween.png"
            alt="logo"
          />
        </div>
        <nav className="nav">
          <ul className="nav__menu">
            <li className="nav__menu__item">
              <NavLink to="/home" activeClassName="activeLink">
                Home
              </NavLink>
            </li>
            <li className="nav__menu__item">
              <NavLink to="/home" activeClassName="activeLink">
                About us
              </NavLink>
            </li>
            <li className="nav__menu__item">
              <NavLink to="/home#reviewCard" activeClassName="activeLink">
                Review
              </NavLink>
            </li>
            <li className="nav__menu__item">
              <NavLink to="/" activeClassName="activeLink">
                Contact
              </NavLink>
            </li>
            {role === "Company" && (
              <React.Fragment>
                <li className="nav__menu__item">
                  <NavLink to="/deals" activeClassName="activeLink">
                    Deals
                  </NavLink>
                </li>

                <li className="nav__menu__item">
                  <NavLink to="/seller" activeClassName="activeLink">
                    Products
                  </NavLink>
                </li>
              </React.Fragment>
            )}
            {role === "Cafe" && (
              <li className="nav__menu__item">
                <NavLink to="/brands" activeClassName="activeLink">
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
          {role === "Company" && (
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
            <NavLink to="/profile">{userName}</NavLink>
          ) : (
            <NavLink to="/login">
              <i className="fas fa-user"></i> Sign in
            </NavLink>
          )}

          {userName && (
            <i onClick={logoutHandle} className="fas fa-sign-out-alt"></i>
          )}
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
