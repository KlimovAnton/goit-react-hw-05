import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../../trending-movies-api';
import MoviesList from '../../components/MoviesList/MoviesList';

export default function HomePage () {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getTrendingMovies() {
            try {
                setIsLoading(true);
                const data = await fetchTrendingMovies();
                setMovies(data)
            } catch (error) {
                setError(true);
            } finally {
                setIsLoading(false);
            }
        };

        getTrendingMovies();

    }, []);


    return (
        <MoviesList movies={movies}/>
    )
}