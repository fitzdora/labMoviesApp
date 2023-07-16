import React from "react";
import TvCard from "../movieCard";
import Grid from "@mui/material/Grid";

const TvList = (props) => {
  let TvCards = props.tv.map((tv) => (
    <Grid key={tv.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Movie key={tv.id} tv={tv} />
    </Grid>
  ));
  return TvCards;
};

export default TvList;
