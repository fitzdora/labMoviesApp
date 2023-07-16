import React from "react";
import TvHeader from "../components/headerTvList";
import TvDetails from "../components/tvDetails";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const styles = {
  imageListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
};

const TvPage = (props) => {
  const tv = props.tv;
  const images = props.images;

  return (
    <>
      {tv ? (
        <>
          <TvHeader tv={tv} />
          <Grid container spacing={5} style={{ padding: "15px" }}>
            <Grid item xs={3}>
              <div sx={styles.imageListRoot}>
                <ImageList cols={1}>
                  {images.map((image) => (
                    <ImageListItem
                      key={image.file_path}
                      sx={styles.gridListTile}
                      cols={1}
                    >
                     <img
                        src={`https://image.tmdb.org/t/p/w500/${image}`}
                        alt={'Image alternative'}
                      />                    
                    </ImageListItem>
                  ))}
                </ImageList>
              </div>
            </Grid>
            <Grid item xs={9}>
              <TvDetails tv={tv} />
            </Grid>
          </Grid>
        </>
      ) : (
        <h2>Waiting for API data</h2>
      )}
    </>
  );
};

export default TvPage;
