import React from "react";
import "./../css/Dashboard.css";
import LeftHeader from "./LeftHeader";
import FeedButton from "./FeedButton";
import NewOpportunityCard from "./NewOpportunityCard";
import OldOpportunityCard from "./OldOpportunityCard";
import NewOpportunityCardTop from "./NewOpportunityCardTop";

const Dashboard = () => {
  return (
    <div className="dashboardMain">
      <div style={{ width: "228px" }}>
        <LeftHeader />
      </div>
      <div className="dashboardMainRight">
        <div className="mainTop">
          <FeedButton text={"Verified"} />
          <FeedButton text={"Unverified"} />
        </div>
        <div className="mainMiddle">
          <NewOpportunityCardTop />
          <NewOpportunityCardTop />
        </div>
        <div className="mainSecondMiddle">
          <NewOpportunityCard />
        </div>
        <div className="mainBottom">
          <OldOpportunityCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
