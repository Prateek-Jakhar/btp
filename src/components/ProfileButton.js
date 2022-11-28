import React from "react";
import "../css/ProfileButton.css"
import pic from "../assets/student-pic.png";
import bell from "../assets/notification-bell.png";

const ProfileButton =() =>{
    const name = localStorage.getItem('userName');
    const imgUrl = localStorage.getItem('photoURL');
    return(
        <div  className="profile-button">
            <img src={imgUrl} alt="" />
            <text className="profile-name">{name}</text>
            <img src={bell} alt="" />
        </div>
    )
}

export default ProfileButton;