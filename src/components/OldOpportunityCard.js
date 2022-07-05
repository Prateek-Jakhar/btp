import React from "react";
import "../css/OldOpportunityCard.css";
import Button from "./Button";
import pic from "../assets/student-pic.png";

const OldOpportunityCard = () => {
  return (
    <div className="main-old">
      <div className="company-heading">
        <p style={{ marginBottom: "4px" }}>
          FFEV India - Hiring for Automotive Cyber security and <br />
          ADAS/Infotainment Testing profile. - 2022 Batch Recruitment Eve...{" "}
        </p>
      </div>
      <span className="posted-by-system">Posted by system</span>
      <p className="main-content">
        This post has been created for all the students to share and discuss the
        Recruitment Event conducted for FEV India Below is a quick overview of
        the Position Details: ADAS/Infotainment Testing Package: 800000
        Description: Unit Testing, Functional Testing, Integration Testing for
        ADAS & Infotainment ...
      </p>
      <div className="detail-tag">
        <div>
          <span>
            <Button details={"FEV India"} />
          </span>
        </div>
        {/* <div>
          <span>
            <Button details={"chutiya"} />
          </span>
        </div> */}
      </div>
      <br />
      <hr />
      <div className="bottom">
        <img src={pic} alt="" />
        <span className="name">
          <strong>Ratik Jain</strong> shared his experience
        </span>
        <span className="numberOfDays">19 days ago</span>
      </div>
    </div>
  );
};

export default OldOpportunityCard;