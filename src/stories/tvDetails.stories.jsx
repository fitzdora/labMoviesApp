import React from "react";
import TvDetails from "../components/tvDetails";
import SampleTv from "./sampleData_tv";

export default {
  title: "Tv Series Details Page/TvDetails",
  component: TvDetails,
};

export const Basic = () => <TvDetails tv={SampleTv} />;
Basic.storyName = "Default";
