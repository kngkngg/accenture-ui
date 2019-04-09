import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import HeaderLinks from "../Header/HeaderLinks.jsx";

import imagine from "../../assets/img/sidebar-3.jpg";
//import logo from "assets/img/reactlogo.png";

import dashboardRoutes from "../../routes/dashboard.jsx";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 100
    };
  }
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  render() {

    return (
      <div
        id="sidebar"
        className="sidebar"
        data-color="black"
        data-image={imagine}
      >
        <div className="logo">
          <a>
            <div className="logo-img">
            <img src={require("./LOGO.png")} alt="logo_image" style={{width: 160, height: 28,marginTop:5,marginLeft:18}}/>
            </div>
          </a>
          <br/>
          <a style={{marginLeft:42, color:'white'}}>
            <strong>Admin Dashboard</strong>
          </a>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            {this.state.width <= 991 ? <HeaderLinks /> : null}
            {dashboardRoutes.map((prop, key) => {
              if (!prop.redirect)
                return (
                  <li
                    className={
                      prop.upgrade
                        ? "active active-pro"
                        : this.activeRoute(prop.path)
                    }
                    key={key}
                  >
                    <NavLink
                      to={prop.path}
                      className="nav-link"
                      activeClassName="active"
                    >
                      <i className={prop.icon} />
                      <p>{prop.name}</p>
                    </NavLink>
                  </li>
                );
              return null;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
