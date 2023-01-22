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
            srcSet={`
                https://image.tmdb.org/t/p/w300/${poster_path}     300w,
                https://image.tmdb.org/t/p/w500/${poster_path}     500w,
                https://image.tmdb.org/t/p/w780/${poster_path}     780w,
                https://image.tmdb.org/t/p/w1280/${poster_path}    1280w,
                https://image.tmdb.org/t/p/original/${poster_path} 2000w
            `}
            loading="lazy"
            src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
            alt={`Poster of the film ${title}`}
            sizes="(max-width: 320px) 280px, (max-width: 768px) 340px, 400px"
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