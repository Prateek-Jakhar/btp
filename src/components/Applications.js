import React from "react";
import OldOpportunityCard from "./OldOpportunityCard";
import "../css/Applications.css";
import NewOpportunityCard from "./NewOpportunityCard";

const Applications=()=>{
    return(
        <div className="main-applications" >
            <NewOpportunityCard/>
            <NewOpportunityCard/>
            <br/>
            <NewOpportunityCard/>
            <br/>
            {/* <OldOpportunityCard/>
            <br/> */}
        </div>
    )
}

export default Applications;