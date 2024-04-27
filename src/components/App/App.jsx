import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomePage from "../../pages/HomePage/HomePage";
// import SearchMovies from "../SearchMovies/SearchMovies";
// import MoviesList from "../MoviesList/MoviesList";

export default function App () {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" />
          <Route path="/movies" />
        </Routes>
      </Layout>
      <HomePage />
    </>
  )
}
