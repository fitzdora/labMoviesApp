import React from "react";
import MovieHeader from "../components/headerMovie";
import SampleMovie from "./sampleData";
import MoviesContextProvider from "../contexts/moviesContext";
import { MemoryRouter } from "react-router-dom";


export default {
  title: "Movie Details Page/MovieHeader",
  component: MovieHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => <MovieHeader movie={SampleMovie} />;
Basic.storyName = "Default";
