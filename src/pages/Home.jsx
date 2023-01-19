import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { fetchMovies, fetchGenres } from "services/api-movies-service";

export const Home = () => {
    const [movies, setFilms] = useState([]);
    const location = useLocation();
    
    useEffect(() => {
        fetchMovies().then(movies => {
            setFilms(movies);
            localStorage.setItem('movies', JSON.stringify(movies))
        });
        fetchGenres().then(genres => { localStorage.setItem('genres', JSON.stringify(genres)) });
    }, []);
    
    return (
        <main>
            <h1>Trending today</h1>
            <ul>
                {movies.map((movie, index) => { 
                    return (
                        <li key={movie.id} film={movie}>
                            <Link to={`${index}`} state={{ from: location }}>
                                {movie.title}
                            </Link>
                        </li>
                    )              
                })}  
            </ul>
        </main>
    );
};