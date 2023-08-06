import React, { useContext } from "react";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
// import IconButton from "@mui/material/IconButton";
import img from '../../images/film-poster-placeholder.png';
import { Link } from "react-router-dom";
import { TvContext } from "../../contexts/tvContext";

const styles = {
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

export default function TvCard({ tv, action }) {
  //const { tvId } = tv;
  const { favourites, addToTvFavourites } = useContext(TvContext);
  const isFavorite = favourites.includes(tv.id);
  // const tv = props.tv;

/*   if (favourites.find((id) => id === tv.id)) {
    tv.favourite = true;
  } else {
    tv.favourite = false;
  }
 */
/*   const handleAddToFavourite = (e) => {
    e.preventDefault();
    addToFavourites(tv);
  }; */

  return (
    <Card sx={styles.card}>
       <CardHeader
      sx={styles.header}
      avatar={
        isFavorite ? (
          <Avatar sx={styles.avatar}>
            <FavoriteIcon />
          </Avatar>
        ) : null
      }
      title={
        <Typography variant="h5" component="p">
          {tv.name}{" "}
        </Typography>
      }
    /> 
      <CardMedia
        sx={styles.media}
       image={
          tv.poster_path
            ? //`https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              `https://image.tmdb.org/t/p/w500/${tv.poster_path}`
            : img
        } 
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {tv.first_air_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {tv.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {action && action(tv)}
        <Link to={`/tv/${tv.id}`}>
        <Button variant="outlined" size="medium" color="primary">
          More Info ...
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
