import React from "react";
import "../css/PeopleCard.css";
import pic from "../assets/pic.png";
import msg from "../assets/msg-icon.png"


const PeopleCard = () => {
    return (
        <div className="main">
            <div className="student-details">
                <div className="student-name">
                    <p>Pranjay Choudhary</p>
                </div>
                <div className="branch">
                    <p>B.tech-Mechanical</p>
                </div>
                <div className="batch">
                    <p>Student-Batch of '23</p>
                </div>
            </div>
            <div className="photo">
                <img src={pic} alt="" />
            </div>
            <div className="bottom">
                <span className="Message-button">
                    <img src={msg} alt="" />
                    <strong>Messages</strong>
                </span>
            </div>
        </div>

    );
};
export default PeopleCard;