import React from "react";
// import PageTemplate from "../components/templateMovieListPage";
import TvListPageTemplate from "../components/templateTvListPage";
import MovieListPageTemplate from "../components/templateMovieListPage";
import { getMovies, getTvSeries } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import { MoviesContext } from "../contexts/moviesContext";
import { TvContext } from "../contexts/tvContext";

const HomePage = () => {
  const { data: movieData, error: movieError, isLoading: movieLoading, isError: movieIsError } = useQuery("discoverMovies", getMovies);
  const { data: tvData, error: tvError, isLoading: tvLoading, isError: tvIsError } = useQuery("discoverTv", getTvSeries);
  
  const { addToFavouritesMovies } = React.useContext(MoviesContext);
  const { addToFavouritesTv} = React.useContext(TvContext);

  if (movieLoading || tvLoading) {
    return <Spinner />;
  }
  
  if (movieIsError || tvIsError) {
    return (
      <div>
      <h1>Error</h1>
      <p>{movieError && movieError.message}</p>
      <p>{tvError && tvError.message}</p>
      </div>
    );
  }

  const movies = movieData ? movieData.results : [];
  const tvSeries = tvData ? tvData.results : [];

  return (
    <div>
      <MovieListPageTemplate
        title="Discover Movies"
        movies={movies}
        action={(movie) => <AddToFavouritesIcon movie={movie} addToFavourites={addToFavouritesMovies} />}
      />
      <TvListPageTemplate
        name="Discover TV Series"
        tv={tvSeries}
        action={(tv) => <AddToFavouritesIcon tvSeries={tv} addToFavourites={addToFavouritesTv} />}
      />
    </div>
  );
};

export default HomePage;
