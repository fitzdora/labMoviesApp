import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import { MoviesContext } from "../contexts/moviesContext";
// import SampleTv from "./sampleData_tv";
// import { TvContext } from "../contexts/tvContext";



const HomePage = (props) => {
  const { data, error, isLoading, isError } = useQuery("discover", getMovies);
  const { addToFavourites } = React.useContext(MoviesContext);



  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
 

  const movies = data ? data.results : [];

  return (
    <PageTemplate
      title="Discover Movies"
      movies={movies}
      action={(movie) => <AddToFavouritesIcon movie={movie} addToFavourites={addToFavourites} />}
      />
  );
};

export default HomePage;
