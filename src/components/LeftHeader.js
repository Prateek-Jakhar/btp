import React from "react";
import "../css/LeftHeader.css";
import mainLogo from "../assets/mainLogo.png";

function LeftHeader() {
  return (
    <div className="main-leftHeader">
      <div style={{ height: "fitContent" }}>
        <img className="main-logo" src={mainLogo} alt="" />
      </div>
      <div id="name">Calyxpod</div>
    </div>
  );
}

export default LeftHeader;
