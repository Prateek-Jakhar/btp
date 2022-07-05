import "./App.css";
<<<<<<< HEAD
// import FeedButton from "./components/FeedButton";
// import HeaderOptions from "./components/HeaderOptions";
// import LogIn from "./components/LogIn";
// import NewOpportunityCard from "./components/NewOpportunityCard";
import NewOpportunityCardTop from "./components/NewOpportunityCardTop";
// import OldOpportunityCard from "./components/OldOpportunityCard";
// import LeftHeader from "./components/LeftHeader";
import Dashboard from "./components/Dashboard";
import People from "./components/pages/People";
=======
//import FeedButton from "./components/FeedButton";
import HeaderOptions from "./components/HeaderOptions";
// import LogIn from "./components/LogIn";
// import NewOpportunityCard from "./components/NewOpportunityCard";
// import NewOpportunityCardTop from "./components/NewOpportunityCardTop";
//import OldOpportunityCard from "./components/OldOpportunityCard";
import Forum from "./components/Forum.js";
import LeftMenu from "./components/LeftMenu";
//import LeftHeader from "./components/LeftHeader";
import PeopleCard from "./components/PeopleCard.js";
import PeopleList from "./components/PeopleCardList";
import People from "./People";
>>>>>>> cef959547712228a085797f668dede2bbe97ad33

function App() {
  return (
    <div className="App">
      {/* <LogIn /> */}
      {/* <NewOpportunityCard /> */}
      {/* <NewOpportunityCardTop /> */}
      {/*<OldOpportunityCard />*/}
      <Forum/>
      {/*<PeopleCard />*/}
      {/*<PeopleList/>*/}
      {/* <FeedButton text={"Discover"} /> */}
      {/* {<LeftHeader />} */}
<<<<<<< HEAD
      {/* <HeaderOptions /> */}
      {/* <Dashboard /> */}
      <People />
=======
      {/*<LeftMenu />*/}
>>>>>>> cef959547712228a085797f668dede2bbe97ad33
    </div>
  );
}

export default App;