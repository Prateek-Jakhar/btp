import React from "react";
import CommentBox from "./CommentBox.js";
import OldOpportunityCard from "./OldOpportunityCard.js";
import ResponseCard from "./ResponseCard.js";
import "../css/Forum.css";
import LeftHeader from "./LeftHeader.js";

const Forum = () => {
  return (
    <div className="forumMain">
      <div style={{ width: "228px" }}>
        <LeftHeader />
      </div>
      <div className="forumMainRight">
        <OldOpportunityCard />
        <div class="number-of-responses">1 response</div>
        <hr />
        <CommentBox />
        <br />
        <br />
        <ResponseCard />
      </div>
    </div>
  );
};

export default Forum;
