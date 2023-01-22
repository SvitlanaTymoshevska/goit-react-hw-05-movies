import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "components/SharedLayout/SharedLayout";
import { Home } from "pages/Home";
import { MovieDetails } from "pages/MovieDetails";
import { Cast } from "components/Movie/Cast";
import { Reviews } from "components/Movie/Reviews";
import { Movies } from "pages/Movies";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="movies" element={<Movies />} />
      </Route>
    </Routes>
  );
};
