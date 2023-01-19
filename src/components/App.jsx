import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "components/SharedLayout/SharedLayout";
import { Home } from "pages/Home";
import { MoviePage } from "pages/MoviePage";
import { Movies } from "pages/Movies";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/:id" element={<MoviePage />} />
        <Route path="movies" element={<Movies />}></Route>
      </Route>
    </Routes>
  );
};
