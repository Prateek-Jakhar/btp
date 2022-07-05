import React from "react";
import pic from "../assets/student-pic.png";
import "../css/ResponseCard.css";

const ResponseCard = () => {
    return(
        <div className="response-card">
            <div className="student-details-response">
                <img className="student-pic-response" src={pic} alt="" />
                <div className="student-response">
                    <div className="name-response">
                        Nitesh Patel
                    </div>
                    <div className="date-of-response">
                        8 May '22
                    </div>
                </div>
            </div>
            <div className="questions">
                <div className="first-question">
                    For what role was the interview conducted?
                </div>
                <div className="first-answer">
                    SDE Intern
                </div>
                <hr />
                <div className="second-question">
                    What questions were asked in the various rounds? You can also provide the answers to them.
                </div>
                <div className="second-answer">
                    The questions in the first round were based on CS fundamentals and coding questions were of leetcode medium level.
                    For the second round, easy debugging questions and medium-hard level DSA questions were there. In the interview, one of the questions was based on Dynamic Programming.
                </div>
                <hr />
            </div>


        </div>
    )
}
export default ResponseCard;