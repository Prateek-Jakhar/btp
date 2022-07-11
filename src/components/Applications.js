import React from "react";
import OldOpportunityCard from "./OldOpportunityCard";
import "../css/Applications.css";
import NewOpportunityCard from "./NewOpportunityCard";
import ProfileButton from "./ProfileButton";

const Applications=()=>{
    return(
        <div className="main-applications" >
            <div className="application-header">
                <span className="on-campus">
                    <text>On Campus</text>
                </span>
                <span className="apply-filters">
                    <text>Apply Filters</text>
                </span>
                <ProfileButton/>
            </div>
            <div className="application-cards">
                <NewOpportunityCard />
                <br />
                <NewOpportunityCard />
                <br />
                <NewOpportunityCard />
                <br />
                
            </div>
            <text className="finish">Yay, You have seen it all!</text>
        </div>
    )
}

export default Applications;