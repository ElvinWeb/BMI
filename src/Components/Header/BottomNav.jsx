import React from "react";
import logo from "../../bmi-image/logo/2x/verticalbig.png";
import { Link, NavLink } from "react-router-dom";
import { NavLinksData } from "../../Data/NavLinksData";

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <div className="container">
        <div className="bottom-nav-inner">
          <Link to="/" className="header-logo d-none">
            <img src={logo} alt="" className="logo" />
          </Link>
          <div className="nav-links">
            {NavLinksData.map((link) => (
              <NavLink
                key={link.id}
                className={(isActive) => (isActive ? "link active" : "link")}
                to={link.href}
              >
                {link.link}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default BottomNav;
