import React from "react";
import TvListPageTemplate from "../components/templateTvListPage";

const FavouriteTvSeriesPage = (props) => {
    const toDo = () => true;
    //Get Tv from local storage
    const tv_series = JSON.parse(localStorage.getItem("favourites"));

    return (
        <TvListPageTemplate
        title = "Favourite Tv Series"
        tv_series={tv_series}
        selectFavourite={toDo}
        />
    );
};

export default FavouriteTvSeriesPage