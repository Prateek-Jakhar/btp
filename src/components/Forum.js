import React from "react";
import CommentBox from "./CommentBox.js";
import OldOpportunityCard from './OldOpportunityCard.js';


const Forum=()=>{
    return(
        <div>
            <OldOpportunityCard/>
            <br/>
            <span classname="number-of-responses">1 response</span>
            <hr/>
            <CommentBox/>
        </div>
    )
}

export default Forum;