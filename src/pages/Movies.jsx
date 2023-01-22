import { useSearchParams } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { SearchBox } from "components/SearchBox/SearchBox";
import { fetchMoviesByName } from "services/api-movies-service";

export const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const movieName = searchParams.get("name") ?? "";
    const location = useLocation();
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    const updateQueryString = (name) => {
        const nextParams = name !== "" ? { name } : {};
        setSearchParams(nextParams);
    };

    useEffect(() => {
        if (!movieName) {
            return
        }

        fetchMoviesByName(movieName)
            .then(movies => setMovies(movies))
            .catch(error => setError(error.message))
    }, [movieName]);

    useEffect(() => {
       if (error) {
            setTimeout(() => {setError(null) }, 3000);
        }  
    }, [error]);
    
    return (
        <main>
            <SearchBox value={movieName} onSubmit={updateQueryString} />
            {movies &&
                <ul>
                    {movies.map((movie) => { 
                        return (
                            <li key={movie.id}>
                                <Link to={`${movie.id}`} state={{ from: location }}>
                                    {movie.title}
                                </Link>
                            </li>
                        )              
                    })}  
                </ul>}
            
            {error && <p>{error}</p>}
        </main>
    );
};