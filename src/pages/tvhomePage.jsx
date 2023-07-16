import React from "react";
import TvHeader from "../components/headerTvList";
import Grid from "@mui/material/Grid";
import TvList from "../components/tvList";

const styles = {
  root: {
    padding: "20px",
  },
};

const TvListPage = (props) => {
  const tv = props.tv;

  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <TvHeader title={"Tv Series Home Page"} />
      </Grid>
      <Grid item container spacing={5}>
        <TvList tv={tv}></TvList>
      </Grid>
    </Grid>
  );
};
export default TvListPage;
