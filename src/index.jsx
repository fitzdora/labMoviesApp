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
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from "./components/siteHeader";
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

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/*" element={<MoviesContextProvider> {/* Wrap with MoviesContextProvider */}
            <Routes>
              <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
              <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
              <Route path="/movies/:id" element={<MoviePage />} /> 
              <Route path="/movies/:id/reviews/form" element={<AddMovieReviewPage />} />
              <Route path="/movies/:id/reviews/:reviewId" element={<MovieReviewPage />} />
            </Routes>
          </MoviesContextProvider>} />

          <Route path="/tv/*" element={<TvContextProvider> {/* Wrap with TvContextProvider */}
            <Routes>
              <Route path="/tv/series" element={<TvListPage />} />
              <Route path="/tv/:id" element={<TvPage />} />
            </Routes>
          </TvContextProvider>} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
