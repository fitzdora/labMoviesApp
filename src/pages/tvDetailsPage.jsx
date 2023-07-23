import React from "react";
import { useParams } from "react-router-dom";
import TvDetails from "../components/tvDetails";
import TemplateTvPage from "../components/templateTvPage";
import { getTv } from "../api/tmdb-api";
import useTv from "../hooks/useTv";

const TvDetailsPage = (props) => {
  const { id } = useParams();
  const [tv] = useTv(id);

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