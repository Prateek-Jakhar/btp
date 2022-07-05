import React from "react";
// import { Icon } from 'semantic-ui-react'
import "../css/HeaderOptions.css";
import LeftHeader from "./LeftHeader";
import Vector from "../assets/Vector.png";
import dashimg from "../assets/dashboard-img.png";
import twopeople from "../assets/bi_people-fill.png";
import forum from "../assets/Forum.png";
import asessment from "../assets/Assesments.png";
import tests from "../assets/practice-tests.png";
import Opportunity from "../assets/Opportunity.png";
import application from "../assets/Applications.png";
import offer from "../assets/Offers.png";
import resume from "../assets/Resume.png";

const HeaderOptions = () => {
  return (
    <div className="menu">
      <div classname="Dashboard" style={{ marginLeft: "-89px" }}>
        <img classname="image" src={dashimg} alt="" />
        <span className="header-button">Dashboard</span>
      </div>
      <div classname="People" style={{ marginLeft: "-114px" }}>
        <img classname="image" src={twopeople} alt="" />
        <span className="header-button">People</span>
      </div>
      <div classname="Forum" style={{ marginLeft: "-113px" }}>
        <img classname="image" src={forum} alt="" />
        <span className="header-button">Forum</span>
      </div>
      <div classname="messages" style={{ marginLeft: "-100px" }}>
        <img classname="image" src={Vector} alt="" />
        <span className="header-button">Messages</span>
      </div>
      <div classname="Assessments" style={{ marginLeft: "-87px" }}>
        <img classname="image" src={asessment} alt="" />
        <span className="header-button">Assesments</span>
      </div>
      <div classname="Opportunity" style={{ marginLeft: "-85px" }}>
        <img classname="image" src={Opportunity} alt="" />
        <span className="header-button">Opportunity</span>
      </div>
      <div classname="Application" style={{ marginLeft: "-79px" }}>
        <img classname="image" src={application} alt="" />
        <span className="header-button">Applications</span>
      </div>
      <div classname="Offers" style={{ marginLeft: "-123px" }}>
        <img classname="image" src={offer} alt="" />
        <span className="header-button">Offers</span>
      </div>
      <div classname="Resume" style={{ marginLeft: "-113px" }}>
        <img classname="image" src={resume} alt="" />
        <span className="header-button">Resume</span>
      </div>
    </div>
  );
};

export default HeaderOptions;
