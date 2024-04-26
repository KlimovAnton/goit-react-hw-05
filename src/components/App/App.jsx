import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import { getMovies } from '../../movies-api';
// import SearchMovies from "../SearchMovies/SearchMovies";
// import MoviesList from "../MoviesList/MoviesList";
console.log(getMovies())
export default function App () {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" />
          <Route path="/movies" />
        </Routes>
      </Layout>
      {/* <MoviesList /> */}
    </>
  )
}
