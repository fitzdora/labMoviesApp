import React, { useState } from "react";
import TvHeader from "../headerTvList";
import FilterTvCard from "../filterTvCard";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import TvList from "../tvList";

const styles = {
  root: {
    padding: "20px",
  },
  fab: {
    marginTop: 8,
    position: "fixed",
    top: 2,
    right: 2,
  },
};

function TvListPageTemplate({ tv, name, selectFavourite }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  const genreId = Number(genreFilter);

  let displayedTvSeries = tv
    .filter((tv) => {
      return tv.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((tv) => {
      return genreId > 0 ? tv.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
   <>
      <Grid container sx={styles.root}>
        <Grid item xs={12}>
          <TvHeader name={name} />
        </Grid>
        <Grid item container spacing={5}>
          <TvList
            tv_series={displayedTvSeries}
            selectFavourite={selectFavourite}
          />
        </Grid>
      </Grid>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={styles.fab}
      >
        Filter
      </Fab>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <FilterTvCard
          onUserInput={handleChange}
          nameFilter={nameFilter}
          genreFilter={genreFilter}
        />
      </Drawer>
    </>  
  );
}
export default TvListPageTemplate;