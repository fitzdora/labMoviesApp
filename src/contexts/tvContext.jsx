import React, { useState } from "react";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

export const TvContext = React.createContext(null);

const TvContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState( {} ); 
  const [favourites, setFavourites] = useState([]);

  const addToTvFavourites = (tv) => {
    let updatedFavourites = [...favourites];
    if (!favourites.includes(tv.id)) {
      updatedFavourites.push(tv.id);
    }
    setFavourites(updatedFavourites);
  };

  // We will use this function in a later section
  const removeFromTvFavourites = (tv) => {
    setFavourites(favourites.filter((tvId) => tvId !== tv.id));
  };

  const addReview = (tv, review) => {   // NEW
    setMyReviews( {...myReviews, [tv.id]: review } )
  };

  return (
    <TvContext.Provider
      value={{
        favourites,
        addToTvFavourites,
        removeFromTvFavourites,
        addReview, // New
      }}
    >
      {props.children}
    </TvContext.Provider>
  );
};

export default TvContextProvider;
