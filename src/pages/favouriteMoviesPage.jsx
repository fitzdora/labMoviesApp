import React, { useContext } from "react";
import TemplateMoviePage from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromFavourites from "../components/cardIcons/removeFromFavourites";
import WriteReview from "../components/cardIcons/writeReview";



const FavouriteMoviesPage = (props) => {
  const { favourites: movieIds } = useContext(MoviesContext);

  // Create an array of queries and run them in parallel.
  const favouriteMovieQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteMovieQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const movies = favouriteMovieQueries.map((q) => q.data);

  return (
  <TemplateMoviePage
  title="Favourite Movies"
  movies={movies}
  action={(movie) => (
      <>
        <RemoveFromFavourites movie={movie} />
        <WriteReview movie={movie} />
      </>
    )}
  />
  );
};

 export default FavouriteMoviesPage;
