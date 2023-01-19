import { Container, Img, Plug } from "components/MovieDetails/MovieDetails.styled";

const getYear = (release_date) => {
    let year = '';
    
    if (!release_date) {
    return year;
    }
    year = ` (${release_date?.slice(0, 4)})`;
    return year;
}

const getGenres = (filmGenresID) => {
    const arrGenres = JSON.parse(localStorage.getItem('genres'));
    let genres = "unknown";

    if (!arrGenres) {
        return genres;
    }
    genres = filmGenresID.map(genreID => arrGenres.find(genre => genre.id === genreID).name).join(", ");
    return genres;
}

export const MovieDetails = ({ movie }) => { 
    const { poster_path, genre_ids, overview, title, release_date, vote_average } = movie;
    
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
    const genres = getGenres(genre_ids);

    return (
        <Container>
            {poster}
            <div>
                <h2>{title}{getYear(release_date)}</h2>
                <p>User Score {userScore}%</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h4>Genres</h4>
                <p>{genres}</p>
            </div>
        </Container>
    );
};



