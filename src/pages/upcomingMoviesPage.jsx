import React, { useState, useEffect, useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { MoviesContext } from "../contexts/moviesContext";
import { set } from "react-hook-form";

const UpcomingMoviesPage = (props) => {
  const { data, error, isLoading, isError } = useQuery("upcoming", getUpcomingMovies);
  const [movies, setMovies] = useState([]);
  const { addToMustWatch } = useContext(MoviesContext);

  useEffect(() => {
    if (data) {
      setMovies(data.results);
    }
  }, [data]);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const addToWatchList = (movieId) => {
    const updatedMovies = movies.map((m) =>
      m.id === movieId ? { ...m, mustWatch: true } : m
    );
    setMovies(updatedMovies);
    console.log(updatedMovies);
  };
  

  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}
      action={(movie) => (
        <PlaylistAddIcon
          onClick={() => addToWatchList(movie.id)}
          style={{ cursor: "pointer" }}
        />
      )}
    />
  );
};

export default UpcomingMoviesPage;




