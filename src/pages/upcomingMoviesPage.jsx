import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { MoviesContext } from "../contexts/moviesContext";

const UpcomingMoviesPage = (props) => {
  // const [movies, setMovies] = useState([]);
  const { data, error, isLoading, isError } = useQuery("discover", getUpcomingMovies);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data ? data.results : [];
  
  
  const favourites = movies.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))

 /*  const addToFavourites = (movieId) => {
    const updatedMovies = movies.map((m) =>
      m.id === movieId ? { ...m, favourite: true } : m
    );
    setMovies(updatedMovies);
  }; */


/*  useEffect(() => {
    getUpcomingMovies().then(movies => {
      setMovies(movies);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    //test for git
  }, []); */

  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}
      action={(movie) => <PlaylistAddIcon movie={movie} 
      // addToWatchList={addToWatchList} 
      />}
     // selectFavourite={addToFavourites}
    />
  );
};
export default UpcomingMoviesPage;




