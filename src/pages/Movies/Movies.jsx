import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { SearchBox } from "components/SearchBox/SearchBox";
import { fetchMoviesByName } from "services/api-movies-service";
import { Container, List, Item, StyledLink } from "pages/Movies/Movies.styled"; 

 const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const movieName = searchParams.get("name") ?? "";
    const location = useLocation();
    
    const [movies, setMovies] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = (name) => {
        const nextParams = name !== "" ? { name } : {};
        setSearchParams(nextParams);
    };

    useEffect(() => {
        if (!movieName) {
            setMovies(null);
            return;
        }

        fetchMoviesByName(movieName)
            .then(movies => setMovies(movies))
            .catch(error => setError(error.message))
    }, [movieName]);

    useEffect(() => {
        if (error) {
            setSearchParams({});
            setMovies(null);
            setTimeout(() => {setError(null) }, 3000);
        }  
    }, [error, setSearchParams]);
    
    return (
        <Container>
            <SearchBox searchParams={movieName} onSubmit={handleSubmit} />
            {movies &&
                <List>
                    {movies.map((movie) => { 
                        return (
                            <Item key={movie.id}>
                                <StyledLink to={`${movie.id}`} state={{ from: location }}>
                                    {movie.title}
                                </StyledLink>
                            </Item>
                        )              
                    })}  
                </List>}
            
            {error && <p>{error}</p>}
        </Container>
    );
};

export default Movies;