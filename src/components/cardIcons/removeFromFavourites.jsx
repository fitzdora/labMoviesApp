import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/moviesContext";
import { TvContext } from "../../contexts/tvContext";

const RemoveFromFavouritesIcon = ({ movie, tv }) => {
  const context = useContext(MoviesContext);
  const tvContext = useContext(TvContext);

  const onUserRequest = (e) => {
    e.preventDefault();
    context.removeFromFavourites(movie);
    tvContext.removeFromTvFavourites(tv);
  };

return (
  <IconButton
    aria-label="remove from favorites"
    onClick={onUserRequest}
  >
    <DeleteIcon color="primary" fontSize="large" />
  </IconButton>
);
};

export default RemoveFromFavouritesIcon;
