import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchDetailsMovie } from "../../movie-api";
import css from "./MovieReviews.module.css";
import Loading from "../Loading/Loading";

export default function MovieReviews () {
    const { moviesId } = useParams();

    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getDetailsMovie() {
            try {
                setIsLoading(true);
                const data = await fetchDetailsMovie(moviesId, "reviews");
                setMovie(data.reviews.results)
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
          <h3>Reviews</h3>
          {movie && movie.length ? (
            <ul>
              {movie.map(({ id, author_details: { username }, content }) => (
                <li key={id}>
                  <p>
                    <b>Author: </b>
                    {username}
                  </p>
                  <p>
                    <b>Review: </b>
                    {content}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p>We dont have any reviews for this movie</p>
          )}
        </div>
      );
}