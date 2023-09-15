import React from "react";

export const SearchBox = () => {
  return (
    <div className="search-bar">
      <div className="lang-dropdown">
        <div className="dropdown">
          <button className="toggle" type="button">
            <span>AZ</span>
            <i className="fa-solid fa-chevron-down"></i>
          </button>
        </div>
      </div>
      <div className="search-box">
        <form className="input-form">
          <input type="text" className="search-field" placeholder="Axtar..." />
          <button type="button" className="search-btn">
            <i className="fa-solid fa-magnifying-glass"> </i>
          </button>
        </form>
      </div>
    </div>
  );
};
export default SearchBox;
