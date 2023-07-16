import React, { useState } from "react";

export const TvContext = React.createContext(null);

const TvContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState( {} ); 
  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (tv) => {
    let updatedFavourites = [...favourites];
    if (!favourites.includes(tv.id)) {
      updatedFavourites.push(tv.id);
    }
    setFavourites(updatedFavourites);
  };

  // We will use this function in a later section
  const removeFromFavourites = (tv) => {
    setFavourites(favourites.filter((tvId) => tvId !== tv.id));
  };

  const addReview = (tv, review) => {   // NEW
    setMyReviews( {...myReviews, [tv.id]: review } )
  };

  return (
    <TvContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addReview, // New
      }}
    >
      {props.children}
    </TvContext.Provider>
  );
};

export default TvContextProvider;
