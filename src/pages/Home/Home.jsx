import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchTrendingMovies } from "services/api-movies-service";
import { Container, List, Item, StyledLink } from "pages/Home/Home.styled"; 

export const Home = () => {
    const [movies, setMovies] = useState([]);
    const location = useLocation();
    
    useEffect(() => {
        fetchTrendingMovies()
            .then(movies => setMovies(movies));
    }, []);
    
    return (
        <Container>
            <h1>Trending today</h1>
            <List>
                {movies.map((movie) => { 
                    return (
                        <Item key={movie.id}>
                            <StyledLink to={`movies/${movie.id}`} state={{ from: location }}>
                                {movie.title}
                            </StyledLink>
                        </Item>
                    )              
                })}  
            </List>
        </Container>
    );
};