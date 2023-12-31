import React, {useContext} from "react";
import TvListPageTemplate from "../components/templateTvListPage";
import { TvContext } from "../contexts/tvContext";
import { useQueries } from "react-query";
import { getTv } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromFavourites from "../components/cardIcons/removeFromFavourites";
import WriteReview from "../components/cardIcons/writeReview";

const FavouriteTvSeriesPage = (props) => {
    const { favourites: tvIds } = useContext(TvContext);

    //create and array of querires and run them in parallel.
    const favouriteTvQueries = useQueries(tvIds.map((tvId) => {
        return {
            queryKey: ["tv", { id: tvId }],
            queryFn: getTv,
        };
    })
    );

    //check if loading
    const isLoading = favouriteTvQueries.find((tv) => tv.isLoading == true);
    if (isLoading){
        return <Spinner />;
    }

    const tv = favouriteTvQueries.map((q) => q.data);
    // const toDo = () => true;

    return (
        <TvListPageTemplate
        title = "Favourite Tv Series"
        tv={tv}
        action={(tv) => (
            <>
              <RemoveFromFavourites tv={tv} />
              <WriteReview tv={tv} />
            </>
          )}
        />
    );
};

export default FavouriteTvSeriesPage;