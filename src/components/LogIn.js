import React from "react";
import "../css/LogIn.css";
import Image from "../assets/background.png";
import logo from "../assets/logo.png";

const LogIn = () => {
  return (
    <div
      className="main"
      style={{
        backgroundImage: "url(" + Image + ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
      }}
    >
      <img className="lnmLogo" src={logo} alt="" />
      <h1>Sign In</h1>
      <h5 style={{ color: "#FCFCF5" }}>Sign In and start your journey</h5>
      <div className="container">
        <input className="login" type="text" />
        <input className="login" type="Password" />
        <div className="check">
          <div>
            <input type="checkbox" />
            <span style={{ marginLeft: "5px", color: "#FCFCF5" }}>
              Remember me
            </span>
          </div>
          <span style={{ color: "#D7263D" }}>Forgot Password?</span>
        </div>
        <button style={{ color: "#FCFCF5" }}>Sign In</button>
      </div>
    </div>
  );
};

export default LogIn;
