import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes, Switch } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import MovieReviewPage from "./pages/movieReviewPage"; //NEW
import SiteHeader from "./components/siteHeader"; //NEW
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
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

const tv_series = [sample, sample, sample, sample, sample, sample, sample];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <SiteHeader />      {/* New Header  */}
    <Switch>
      <Route exact path="/movies">
      <MoviesContextProvider>
      <Routes>
        <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
        <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
        <Route path="/reviews/:id" element={<MovieReviewPage/>} />
        <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </MoviesContextProvider>
      </Route>
      <Route exact path="/tv-series">
      <TvContextProvider>
      <HomePage tv_series={tv_series} />
      </TvContextProvider>
      </Route>
      </Switch>
    </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
