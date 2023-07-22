import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TvDetails from "../components/tvDetails";
import TemplateTvPage from "../components/templateTvPage";
import { getTv } from "../api/tmdb-api";

const TvDetailsPage = (props) => {
  const { id } = useParams();
  const [tv, setTv] = useState(null);

  useEffect(() => {
    getTv(id).then((tv) => {
      setTv(tv);
    });
  }, [id]);

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