import { Formik, Form, Field } from "formik";
import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import { fetchSearchFilms } from "../../search-movie-api";
import { IoSearch } from "react-icons/io5";
import css from "./MoviesPage.module.css";
import Loading from "../../components/Loading/Loading";
import MovieList from "../../components/MoviesList/MoviesList"

export default function MoviesPage() {
    const [films, setFilms] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();
    const [data, setData] = useState([]);
    const filmQuery = searchParams.get("query") ?? "";

    useEffect(() => {
        if (!filmQuery) {
          return;
        }
    
        const fetchListFilm = async () => {
          try {
            setLoading(true);
            const dataFilms = await fetchSearchFilms(filmQuery, 1);
            setData(dataFilms);
            setFilms(dataFilms.results);
          } catch (error) {
            setError(true);
          } finally {
            setLoading(false);
          }
        };
    
        fetchListFilm();
      }, [filmQuery]);

    return (
        <>
            <Formik
                initialValues={{ query: ""}}
                onSubmit={(values, actions) => {
                    if (values.query.trim() === "") {
                        return;
                    }
                    actions.resetForm();
                    setSearchParams({ query: values.query });
                }}
            >
                <Form className={css.form}>
                    <Field className={css.input} type="text" name="query" />
                    <button className={css.btn} type="submit"><IoSearch className={css.icon} size={15} /></button>
                </Form>
            </Formik>
            {loading && <Loading />}

            <MovieList movies={films} />
            {filmQuery && films.length === 0 && (
                <p>
                Sorry, but we could not find anything for your query. Please try
                again.
                </p>
            )}

            {error && <Error />}
        </>
    )
}