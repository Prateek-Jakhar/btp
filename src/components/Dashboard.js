import React, { useEffect, useState } from "react";
import "./../css/Dashboard.css";
import LeftHeader from "./LeftHeader";
import FeedButton from "./FeedButton";
import NewOpportunityCard from "./NewOpportunityCard";
import OldOpportunityCard from "./OldOpportunityCard";
import NewOpportunityCardTop from "./NewOpportunityCardTop";
import db from "./Firebase";
import { collection, getDocs } from "firebase/firestore";

const Dashboard = () => {
  const [dataApplication, setDataApplication] = useState([]);

    const fetchPost = async () => {
        const querySnapshot = await getDocs(collection(db, "applications"))
        let data_list = []
        querySnapshot.forEach((doc) => {
            data_list.push(doc.data());
        });
        setDataApplication(data_list);
    }

    useEffect(()=>{
        fetchPost();
    },[])

  return (
    <div className="dashboardMain">
      <div style={{ width: "228px" }}>
        <LeftHeader />
      </div>
      <div className="dashboardMainRight">
        <div className="mainTop">
          <FeedButton text={"Verified"} />
          <FeedButton text={"Unverified"} />
        </div>
        <div className="mainMiddle">
          <NewOpportunityCardTop />
          <NewOpportunityCardTop />
        </div>
        <div className="mainSecondMiddle">
          {dataApplication.map((item)=>{
            return(
              <>
                <NewOpportunityCard info={item}/>
              </>
            )
          })}
        </div>
        <div className="mainBottom">
          <OldOpportunityCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
