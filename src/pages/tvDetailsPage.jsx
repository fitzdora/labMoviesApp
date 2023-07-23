import React from "react";
import { useParams } from "react-router-dom";
import TvDetails from "../components/tvDetails";
import TemplateTvPage from "../components/templateTvPage";
import { getTv } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
// import useTv from "../hooks/useTv";

const TvDetailsPage = () => {
  const { id } = useParams();
  // const [tv] = useTv(id);

  const { data: tv, error, isLoading, isError } = useQuery(
    ["tv", {id: id}],
    getTv
  );

  if(isLoading){
    return <Spinner />;
  }

  if (isError)
  {
    return <h1>{error.message}</h1>
  }

  return (
    <>
      {tv ? (
        <>
          <TemplateTvPage tv={tv}>
            <TvDetails tv={tv} />
          </TemplateTvPage>
        </>
      ) : (
        <p>Waiting for Tv Series details</p>
      )}
    </>
  );
};

export default TvDetailsPage;