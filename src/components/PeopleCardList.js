import React from "react";
import PeopleCard from "./PeopleCard.js";
import Grid from '@mui/material/Grid'

/*const PeopleList = props => {
    const cards = props.cards.map(card => {
      return <PeopleCard key={card.id} card={card} />;
    });
    return <div className="cards-list">{cards}</div>;
  };
*/

const PeopleList = () => {
    return (
        <Grid container spacing={1}>
            <Grid container item spacing={5}>
                <PeopleCard />
                <PeopleCard />
                <PeopleCard />
            </Grid>
            <Grid container item spacing={3}>
                <PeopleCard />
                <PeopleCard />
                <PeopleCard />
            </Grid>
            <Grid container item spacing={3}>
                <PeopleCard />
                <PeopleCard />
                <PeopleCard />
            </Grid>
        </Grid>

    );
};

export default PeopleList;


