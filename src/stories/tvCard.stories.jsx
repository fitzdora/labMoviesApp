import React from "react";
import TvCard from "../components/tvCard";
import SampleTv from "./sampleData_tv";

export default {
  title: "Home Page/TvCard",
  component: TvCard,
};

export const Basic = () => {
  return (
    <TvCardCard
      tv={SampleTvSeries}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleTv, poster_path: undefined };
  return (
    <TvCardCard
      tv={sampleNoPoster}
    />
  );
};
Exceptional.storyName = "exception";
