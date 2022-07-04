import React from "react";
import CommentBox from "./CommentBox.js";
import OldOpportunityCard from './OldOpportunityCard.js';
import ResponseCard from "./ResponseCard.js";
import "../css/Forum.css";



const Forum=()=>{
    return(
        <div>
            <OldOpportunityCard/>
            <div class="number-of-responses">1 response</div>
            <hr/>
            <CommentBox/>
            <br/>
            <br/>
            <ResponseCard/>
        </div>
    )
}

export default Forum;