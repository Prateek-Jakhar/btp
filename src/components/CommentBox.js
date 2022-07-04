import React from "react";
import "../css/CommentBox.css";
import pic from "../assets/student-pic.png";

const CommentBox =()=>{
    return(
        <div className="comment-block">
            <img class="image" src={pic} alt="" />
            <div className="comment-box">

                <p className="free-space">
                    Add a comment ....
                </p>
            </div>
        </div>
    )
}

export default CommentBox;