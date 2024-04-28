import { useParams, NavLink, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import css from "./MovieDetailsPage.module.css"
import { fetchDetailsMovie } from "../../movie-api";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import Loading from "../../components/Loading/Loading";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

export default function MovieDetailsPage () {
    const { moviesId } = useParams();

    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getDetailsMovie() {
            try {
                setIsLoading(true);
                const data = await fetchDetailsMovie(moviesId);
                setMovie(data)
            } catch (error) {
                setError(true);
            } finally {
                setIsLoading(false);
            }
        };

        getDetailsMovie();

    }, [moviesId]);

    return (
        <div>
            {isLoading && <Loading />}
            {movie && <MovieDetails movie={movie}/>}
            {error && <NotFoundPage />}
            <ul>
                <li>
                    <NavLink to="cast">Cast:</NavLink>
                    <Outlet />
                </li>
                <li>
                    <NavLink to="reviews">Reviews:</NavLink>
                </li>
            </ul>
        </div>
    )
}