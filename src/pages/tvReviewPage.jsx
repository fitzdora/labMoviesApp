import React from "react";
import { useLocation } from "react-router-dom";
import TemplateTvPage from "../components/templateTvPage";
import TvReview from "../components/tvReview";

const TvReviewPage = (props) => {
  const { state : {tv, review } } = useLocation()
  return (
    <TemplateTvPage tv={tv}>
      <TvReview review={review} />
    </TemplateTvPage>
  );
};
export default TvReviewPage;