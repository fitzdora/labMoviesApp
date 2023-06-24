import React from "react";
import MovieDetails from "../components/movieDetails";
import SampleMovie from "./sampleData";
import MoviesContextProvider from "../contexts/moviesContext";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Movie Details Page/MovieDetails",
  component: MovieDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => <MovieDetails movie={SampleMovie} />;
Basic.storyName = "Default";
