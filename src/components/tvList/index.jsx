import React from "react";
import TvCard from "../tvCard";
import Grid from "@mui/material/Grid";

const TvList = (props) => {
  let TvCards = props.tv_series.map((tv) => (
    <Grid key={tv.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Movie key={tv.id} tv_series={tv} />
    </Grid>
  ));
  return TvCards;
};

export default TvList;
