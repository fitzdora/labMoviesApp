import React from "react";
import FilterTvCard from "../components/filterTvCard";
import TvContextProvider from "../contexts/tvContext";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";



export default {
  title: "Home Page/FilterTvCard",
  component: FilterTvCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <TvContextProvider>{Story()}</TvContextProvider>,
    (Story) => <QueryClientProvider client={ new QueryClient() }>{Story()}</QueryClientProvider>
  ],
};

export const Basic = () => {
  return <FilterTvCard />;
};
Basic.storyName = "Default";