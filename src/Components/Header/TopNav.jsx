import React from "react";
import logo from "../../bmi-image/logo/2x/verticalbig.png";
import SearchBox from "./SearchBox";
import ContactLinks from "./ContactLinks";

export const TopNav = () => {
  return (
    <div className="top-nav">
      <div className="top-nav-logo">
        <a href="/#" className="header-logo">
          <img src={logo} alt="" className="logo" />
        </a>
      </div>
      <div className="top-nav-right">
        <ContactLinks />
        <SearchBox />
      </div>
    </div>
  );
};
export default TopNav;
