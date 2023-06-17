import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";


const styles = {
    root: {  
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
  /* avatar: {
    color: "rgb(255, 0, 0)",
  } */
};

const MovieHeader = (props) => {
  const movie = props.movie;
  // const [favourites, setFavourites] = useState([]);
  
  // retrieve movies from locals storage

  const favourites = JSON.parse(localStorage.getItem('favourites') || []);
  /* useEffect(() => {
    const storedFavourites = localStorage.getItem("updatedMovies");
    if (storedFavourites) {
      setFavourites(JSON.parse(storedFavourites));
    }
  }, []); */

  // set error handling
  const handleAddToFavourite = (e) => {
    e.preventDefault();


  // Check if the current movie is a favorite
  const isFavorite = favourites.includes(movie.id);


    // Update the list of favorite movies
    /* let updatedFavourites;
    if (isFavorite) {
      updatedFavourites = favourites.filter((id) => id !== movie.id);
    } else {
      updatedFavourites = [...favourites, movie.id];
    }
    
    setFavourites(updatedFavourites); */

    // save the update favourites to local storage
    //localStorage.setItem("updatedMovies", JSON.stringify(updatedFavourites));
  
  };
  const isFavorite = favourites.includes(movie.id);

   return (
    <Paper component="div" sx={styles.root}>
      <IconButton aria-label="go back">
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>

          <Avatar sx={styles.avatar}>
          {isFavorite ? (
          <FavoriteIcon color="disabled" />
        ) : (
          <FavoriteIcon />
        )}
          </Avatar>

      <Typography variant="h4" component="h3">
        {movie.title}{"   "}
        <a href={movie.homepage}>
          <HomeIcon color="primary"  fontSize="large"/>
        </a>
        <br />
        <span>{`${movie.tagline}`} </span>
      </Typography> 
      <IconButton aria-label="go forward">
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};
export default MovieHeader;
