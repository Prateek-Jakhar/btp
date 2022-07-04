import React from "react";
import CommentBox from "./CommentBox.js";
import OldOpportunityCard from './OldOpportunityCard.js';
import "../css/Forum.css";


const Forum=()=>{
    return(
        <div>
            <OldOpportunityCard/>
            <div class="number-of-responses">1 response</div>
            <hr/>
            <CommentBox/>
        </div>
    )
}

export default Forum;