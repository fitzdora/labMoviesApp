import React from "react";
import MovieCard from "../components/movieCard";
import SampleMovie from "./sampleData";
import MoviesContextProvider from "../contexts/moviesContext";
import { MemoryRouter } from "react-router-dom";


export default {
  title: "Home Page/MovieCard",
  component: MovieCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <MovieCard
      movie={SampleMovie}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleMovie, poster_path: undefined };
  return (
    <MovieCard
      movie={sampleNoPoster}
    />
  );
};
Exceptional.storyName = "exception";
