import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

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
      state: { isCompany, isCafe, isOpen, orders, newOrders, userName, role },
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
              <NavLink
                to="/home"
                activeClassName="activeLink"
                // className="nav__menu__link"
              >
                Home
              </NavLink>
            </li>
            <li className="nav__menu__item">
              {/* <Link to="about-us" 
              className="nav__menu__link"
              > */}
              <NavLink
                to="/home"
                // className="nav__menu__link"
                activeClassName="activeLink"
              >
                About us
              </NavLink>
              {/* </Link> */}
            </li>
            <li className="nav__menu__item">
              {/* <Link to="reviewCard"  */}
              {/* // className="nav__menu__link" */}
              {/* > */}
              <NavLink to="/home#reviewCard" activeClassName="activeLink">
                Review
              </NavLink>
              {/* </Link> */}
            </li>
            <li className="nav__menu__item">
              {/* <Link to="footer" className="nav__menu__link"> */}
              <NavLink to="/" activeClassName="activeLink">
                Contact
              </NavLink>
              {/* </Link> */}
            </li>
            {role === "Company" && (
              <li className="nav__menu__item">
                <NavLink to="/seller" activeClassName="activeLink">
                  Products
                </NavLink>
              </li>
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
          {userName && (
            // <NavLink to="/login">
            <i onClick={logoutHandle} className="fas fa-sign-out-alt"></i>
            // </NavLink>
          )}
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
