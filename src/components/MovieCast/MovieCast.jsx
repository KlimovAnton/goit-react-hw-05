import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchDetailsMovie } from "../../movie-api";
import Loading from "../Loading/Loading";

export default function MovieCast () {
    const { moviesId } = useParams();

    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getDetailsMovie() {
            try {
                setIsLoading(true);
                const data = await fetchDetailsMovie(moviesId, "credits");
                setMovie(data.credits.cast)
            } catch (error) {
                setError(true);
            } finally {
                setIsLoading(false);
            }
        };

        getDetailsMovie();

    }, [moviesId]);
    
    if (!movie) {
        return;
      }

    return (
        <>
            {isLoading && <Loading />}
            <h3>Film Cast</h3>
            {movie && movie.length ? (
                <ul>
                {movie.map(({ profile_path, original_name, character, id }) => (
                    <li key={id}>
                    <img
                        src={
                        profile_path
                            ? `https://image.tmdb.org/t/p/w200${profile_path}`
                            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlcM989vRkQnMY-r6Nd8SgVLt34-tPKMLouQ&s"
                        }
                        alt="original_name"
                    />
                    <p>
                        <b>Name: </b>
                        {original_name}
                    </p>
                    <p>
                        <b>Character: </b>
                        {character}
                    </p>
                    </li>
                ))}
                </ul>
            ) : (
                <p>We dont have information about cast for this movie</p>
            )}
        </>
    )
}