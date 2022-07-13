import React from "react";
import "../css/people.css";
import LeftHeader from "./LeftHeader";
import PeopleList from "./PeopleCardList";
// import FeedButton from "../FeedButton";
// import PeopleButton from "../PeopleButton";


const People = () => {
  return (
    <div>
      <div className="peopleMain">
        <div style={{ width: "228px" }}>
          <LeftHeader />
        </div>
          <PeopleList/>
      </div>
    </div>
  );
};

export default People;
