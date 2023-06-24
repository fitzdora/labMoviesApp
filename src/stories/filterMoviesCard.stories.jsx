import React from "react";
import FilterMoviesCard from "../components/filterMoviesCard";
import MoviesContextProvider from "../contexts/moviesContext";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";


export default {
  title: "Home Page/FilterMoviesCard",
  component: FilterMoviesCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
    (Story) => <QueryClientProvider client={ new QueryClient() }>{Story()}</QueryClientProvider>
  ],
};

export const Basic = () => {
  return <FilterMoviesCard />;
};
Basic.storyName = "Default";
