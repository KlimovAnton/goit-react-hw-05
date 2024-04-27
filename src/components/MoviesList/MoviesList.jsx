import css from "./MoviesList.module.css";
import { NavLink, useLocation } from "react-router-dom";

export default function MoviesList ({ movies }) {

    return (
        <ul className={css.list}>
                {movies.map((movie) => 
                    <li key={movie.id}>
                      <NavLink className={css.link}to="/movie">
                            <img className={css.movieImg}
                                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                alt={movie.original_title}/>
                            <p className={css.movieTitle}>{movie.original_title}</p>
                      </NavLink>
                    </li>
                )}
        </ul>
    )
}