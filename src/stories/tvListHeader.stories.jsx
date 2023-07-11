import React from "react";
import TvHeader from "../components/headerTvList";

export default {
  title: "Home Page/TvHeader",
  component: TvHeader,
};

export const Basic = () => <TvHeader title={'Discover Tv Series'} />;

Basic.storyName = "Default";
