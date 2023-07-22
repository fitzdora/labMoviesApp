import React from "react";
import TvCard from "../tvCard";
import Grid from "@mui/material/Grid";
import { Tv } from "@mui/icons-material";

const TvList = ({tv_series}) => {
  let tvCards = tv_series.map((tv) => (
    <Grid key={tv.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <TvCard key={tv.id} tv={tv} />
    </Grid>
  ));
  return tvCards;
};

export default TvList;
