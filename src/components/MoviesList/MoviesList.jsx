import css from "./MoviesList.module.css";
import { Link, useLocation } from "react-router-dom";

export default function MoviesList ({ movies }) {

    return (
        <ul className={css.list}>
                {movies.map((movie) => 
                    <li key={movie.id}>
                      <Link>{movie.title}</Link>
                    </li>
                )}
        </ul>
    )
}