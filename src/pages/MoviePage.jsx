import { useParams, useLocation } from "react-router-dom";
// import { fetchMoiveByID } from "services/api-movies-service";
import { BackLink } from "components/BackLink/BackLink";
import { MovieDetails } from "components/MovieDetails/MovieDetails";

export const MoviePage = () => {
    const { id } = useParams();
    // console.log(fetchMoiveByID(436270));
    const movie = JSON.parse(localStorage.getItem('movies'))[Number(id)];
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/home";
    
    return (
        <main>
            <BackLink to={backLinkHref}>Go back</BackLink>
            <MovieDetails movie={movie} />
        </main>
    );
};