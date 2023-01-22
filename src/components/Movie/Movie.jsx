import { Container, Img, Plug } from "components/Movie/Movie.styled";

const getYear = (release_date) => {
    let year = '';
    
    if (!release_date) {
    return year;
    }
    year = ` (${release_date?.slice(0, 4)})`;
    return year;
}

const getGenreNames = (genres) => {
    let genreNames = "unknown";

    if (!genres) {
        return genreNames;
    }
    genreNames = genres.map(genre => genre.name).join(", ");
    return genreNames;
}

export const Movie = ({ movie }) => { 
    const { poster_path, genres, overview, title, release_date, vote_average } = movie;
    
    const poster = poster_path ? (
        <Img
            src={`https://image.tmdb.org/t/p/w1280/${poster_path}`}
            alt={`Poster of the film ${title}`}
            loading="lazy"
        />
    ) : <Plug>Poster not found</Plug>;   
    
    const userScore = (vote_average * 10).toFixed(0);

    return (
        <Container>
            {poster}
            <div>
                <h2>{title}{getYear(release_date)}</h2>
                <p>User Score {userScore}%</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h4>Genres</h4>
                <p>{getGenreNames(genres)}</p>
            </div>
        </Container>
    );
};