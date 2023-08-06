import React, { useState, useEffect, useContext } from "react";
// import PageTemplate from '../components/templateMovieListPage'
import TvListPageTemplate from "../components/templateTvListPage";
import { getUpcomingTvSeries } from "../api/tmdb-api";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { TvContext } from "../contexts/tvContext";

const UpcomingTvSeriesPage = (props) => {
  const { data, error, isLoading, isError } = useQuery("upcoming", getUpcomingTvSeries);
  const [tv, setTv] = useState([]);
  const { addToMustWatch } = useContext(TvContext);

  useEffect(() => {
    if (data) {
      setTv(data.results);
    }
  }, [data]);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const addToWatchList = (tvId) => {
    const updatedTv = tv.map((tv) =>
      tv.id === tvId ? { ...tv, mustWatch: true } : tv
    );
    setTv(updatedTv);
    console.log(updatedTv);
  };
  

  return (
    <TvListPageTemplate
      title='Upcoming Tv'
      tv={tv}
      action={(tv) => (
        <PlaylistAddIcon
          onClick={() => addToWatchList(tv.id)}
          style={{ cursor: "pointer" }}
        />
      )}
    />
  );
};

export default UpcomingTvSeriesPage;

