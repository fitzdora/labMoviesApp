import React from "react";
import TvMainHeader from "../components/headerTv";
import SampleTv from "./sampleData_tv";

export default {
  title: "Tv Series Details Page/TvMainHeader",
  component: TvMainHeader,
};

export const Basic = () => <TvMainHeader tv={SampleTv} />;
Basic.storyName = "Default";
