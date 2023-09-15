import React from "react";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";

const GeneralHeader = () => {
  return (
    <div className="general-nav d-lg-blok">
      <div className="container">
        <TopNav />
        <BottomNav />
      </div>
    </div>
  );
};
export default GeneralHeader;
