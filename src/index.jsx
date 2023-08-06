import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import HomePage from "./pages/homePage";
import TvListPage from "./pages/tvhomePage";
import MoviePage from "./pages/movieDetailsPage";
import TvPage from "./pages/tvDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import FavouriteTvSeriesPage from "./pages/favouriteTvSeriesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import TvReviewPage from "./pages/tvReviewPage";
import SiteHeader from "./components/siteHeader";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import UpcomingTvSeriesPage from "./pages/upcomingTvSeriesPage";
import MoviesContextProvider from "./contexts/moviesContext";
import TvContextProvider from "./contexts/tvContext";
import AddMovieReviewPage from "./pages/addMovieReviewPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <Routes>
          <Route path="/" element={
            <MoviesContextProvider>
              <TvContextProvider>
                <HomePage />
              </TvContextProvider>
            </MoviesContextProvider>
          } />
          <Route path="/movies/*" element={
            <MoviesContextProvider>
              <Routes>
                <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
                <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
                <Route path="/movies/:id" element={<MoviePage />} />
                <Route path="/movies/:id/reviews/form" element={<AddMovieReviewPage />} />
                <Route path="/movies/:id/reviews/:reviewId" element={<MovieReviewPage />} />
              </Routes>
            </MoviesContextProvider>
          } />
          <Route path="/tv/*" element={
            <TvContextProvider>
              <Routes>
                <Route path="/tv/series" element={<TvListPage />} />
                <Route path="/tv/:id" element={<TvPage />} />
                <Route path="/tv/:id/reviews/:reviewId" element={<TvReviewPage />} />
                <Route path="/tv/upcoming" element={<UpcomingTvSeriesPage />} />
                <Route path="/tv/favourites" element={<FavouriteTvSeriesPage />} />
                {/* <Route path="/tv/:id/reviews/form" element={<AddTvReviewPage />} /> */}
              </Routes>
            </TvContextProvider>
          } />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
