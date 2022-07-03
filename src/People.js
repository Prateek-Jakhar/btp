import React from "react";
import PeopleList from "./components/PeopleCardList";
import LeftHeader from "./components/LeftHeader";

const People = () => {
  return (
    <div>
      <LeftHeader/>
      {/* options */}
      <PeopleList/>
      {/*  Discover */}
      {/* Profile Button */}
    </div>
  );
};

export default People;