import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { fetchMovies } from "services/api-movies-service";

export const Home = () => {
    const [movies, setMovies] = useState([]);
    const location = useLocation();
    
    useEffect(() => {
        fetchMovies().then(movies => {
            setMovies(movies);
        });
    }, []);
    
    return (
        <main>
            <h1>Trending today</h1>
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
            </ul>
        </main>
    );
};