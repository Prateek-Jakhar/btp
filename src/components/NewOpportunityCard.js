import React from "react";
import logo from "../assets/letter_z.png";
import "../css/NewOpportunityCard.css";
import { Icon } from "semantic-ui-react";
import hat from "../assets/hat.png";

const NewOpportunityCard = () => {
  return (
    <div className="main-card">
      <div className="top">
        <div className="company-info">
          <img src={logo} alt="" />
          <div>
            <h3>Software Developer Intern</h3>
            <p style={{ marginLeft: "-128px", marginTop: "-8px" }}>
              ZS Associates
            </p>
          </div>

          <div className="graduation-cap">
          <img src={hat} alt="" />
          </div>
        </div>
        {/* <div className="graduation-cap">
        </div> */}
        {/* <div className="date"></div> */}
      </div>
      <div className="middle">
        <div className="job-type">
          <span style={{ fontWeight: "600", marginLeft: "30px" }}>
            Job Type
          </span>
          <span style={{ fontWeight: "600", marginRight: "250px" }}>
            Cost to Company
          </span>
        </div>
        <div className="intern">
          <span style={{ marginLeft: "30px" }}>Internship</span>
          <span style={{ marginRight: "247px" }}>Stipend: Rs 30,000</span>
        </div>
      </div>
      <hr style={{ marginLeft: "24px"}} />
      <div className="bottom">
        <span style={{ marginRight: "30px" }}>4 days ago</span>
        <span style={{ marginRight: "0px", color: "#D7263D" }}>
          <Icon enabled name="clock outline" />
          Registration Ended 3 days ago
        </span>
      </div>
    </div>
  );
};

export default NewOpportunityCard;
