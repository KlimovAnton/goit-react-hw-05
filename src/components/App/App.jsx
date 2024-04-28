import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomePage from "../../pages/HomePage/HomePage";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";

export default function App () {
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/movies" element={<MoviesPage />}/>
          <Route path="/movies/:moviesId" element={<MovieDetailsPage />}>
            <Route path="cast" />
            <Route path="reviews"/>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
  )
}
