import { useEffect, useState, Suspense } from 'react';
import { useParams, useLocation, Outlet } from "react-router-dom";
import { fetchMoiveByID } from "services/api-movies-service";
import { BackLink } from "components/BackLink/BackLink";
import { Movie } from "components/Movie/Movie";
import { Wrapper, Item, StyledLink } from "pages/MovieDetails/MovieDetails.styled"; 

const MovieDetails = () => {
    const { id } = useParams();
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetchMoiveByID(id).then(movie => {
            setMovie(movie);
        });
    }, [id]);

    return (
        movie && (
            <main>
                <BackLink to={backLinkHref}>Go back</BackLink>
                <Movie movie={movie} />
                <Wrapper>
                    <h3>Additional information</h3>
                    <ul>
                        <Item>
                            <StyledLink to="cast" id={id}>Cast</StyledLink>
                        </Item>
                        <Item>
                            <StyledLink to="reviews">Reviews</StyledLink>
                        </Item>
                    </ul>
                </Wrapper>
                <Suspense fallback={null}>
                    <Outlet />
                </Suspense>
            </main>
        )
    );
};

export default MovieDetails;