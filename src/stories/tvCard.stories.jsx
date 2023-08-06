import React from "react";
import TvCard from "../components/tvCard";
import SampleTv from "./sampleData_tv";
import TvContextProvider from "../contexts/tvContext";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Home Page/TvCard",
  component: TvCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <TvContextProvider>{Story()}</TvContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <TvCard
      tv={SampleTv}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleTv, poster_path: undefined };
  return (
    <TvCard
      tv={sampleNoPoster}
    />
  );
};
Exceptional.storyName = "exception";
