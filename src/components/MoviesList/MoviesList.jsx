import { useState, useEffect } from "react";
import { getMovies } from "../../movies-api";

export default function MoviesList () {
    const [error, setError] = useState(false);
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchMovies() {
          try {
            setLoading(true);
            const data = await getMovies();
            setMovies(data);
          } catch (error) {
            setError(true);
          } finally {
            setLoading(false);
          }
        }
    
        fetchMovies();
        console.log(fetchMovies())
      }, []);

    return (
        <>
        </>
    )
}