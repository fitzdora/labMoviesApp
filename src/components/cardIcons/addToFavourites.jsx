import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import { TvContext } from "../../contexts/tvContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToFavouritesIcon = ({ movie, tv }) => {
  const context = useContext(MoviesContext);
  const tvContext = useContext(TvContext);

  const onUserSelect = (e) => {
    e.preventDefault();
    context.addToFavourites(movie);
    tvContext.addToFavourites(tv);
  };
  return (
    <IconButton aria-label="add to favorites" onClick={onUserSelect}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavouritesIcon;
