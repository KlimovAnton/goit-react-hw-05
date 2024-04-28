import { NavLink, Outlet } from "react-router-dom";

export default function MovieDetails ({ movie: { title, overview, genres, poster_path, release_date, vote_average }}) {

    const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w300/${poster_path}`
    : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/640px-No-Image-Placeholder.svg.png";

    return (
        <div>
            <NavLink to="/">Go back</NavLink>
            <div>
                <img src={posterUrl}/>
                <h3>{title}</h3>
                <p>User Score: {vote_average}</p>
                <p>Overview: {overview}</p>
                <p>Genres: 
                    {genres.map((genre) => (
                      <span key={genre.id}>{genre.name}, </span>
                    ))}
                </p>
                <p>Release: {release_date}</p>
            </div>
            <ul>
                <li>
                    <NavLink to="cast">Cast:</NavLink>
                </li>
                <li>
                    <NavLink to="reviews">Reviews:</NavLink>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}