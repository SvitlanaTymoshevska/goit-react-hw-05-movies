import { useEffect, useState } from 'react';
import { useParams, useLocation, Link, Outlet } from "react-router-dom";
import { fetchMoiveByID } from "services/api-movies-service";
import { BackLink } from "components/BackLink/BackLink";
import { Movie } from "components/Movie/Movie";
// import {Cast} from "components/Movie/Cast";

export const MovieDetails = () => {
    const { id } = useParams();
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/home";

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
                <ul>
                    <li>
                        <Link to="cast" id={id}>Cast</Link>
                    </li>
                    <li>
                        <Link to="reviews">Reviews</Link>
                    </li>
                </ul>
                <Outlet />
            </main>
        )
    );
};