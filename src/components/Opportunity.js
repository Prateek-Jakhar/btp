import React from "react";
import Applications from "./Applications";
import LeftHeader from "./LeftHeader";
import "./../css/Opportunity.css";

const Opportunity = () => {
  return (
    <div className="opportunityMain">
      <div style={{ width: "228px" }}>
        <LeftHeader />
      </div>
      <div className="opportunityMainRight">
        <Applications />
      </div>
    </div>
  );
};

export default Opportunity;
