import { useEffect, useState } from 'react';
import { useParams, useLocation } from "react-router-dom";
import { fetchCast } from "services/api-movies-service";
import { Img } from "components/Movie/Movie.styled";

export const Cast = () => {
    const { id } = useParams();
    const location = useLocation();
    console.log(location);

    const [cast, setCast] = useState(null);

    useEffect(() => {
        fetchCast(id).then(moviesCast => {
            setCast(moviesCast);
        });
    }, [id]);

    // const poster = poster_path ? (
    //     <Img
    //         srcSet={`
    //             https://image.tmdb.org/t/p/w300/${poster_path}     300w,
    //             https://image.tmdb.org/t/p/w500/${poster_path}     500w,
    //             https://image.tmdb.org/t/p/w780/${poster_path}     780w,
    //             https://image.tmdb.org/t/p/w1280/${poster_path}    1280w,
    //             https://image.tmdb.org/t/p/original/${poster_path} 2000w
    //         `}
    //         loading="lazy"
    //         src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
    //         alt={`Poster of the film ${title}`}
    //         sizes="(max-width: 320px) 280px, (max-width: 768px) 340px, 400px"
    //     />
    // ) : <Plug>Poster not found</Plug>;   

    return (
        cast && (
            <ul>
                {cast.map(({id, character, name, profile_path}) => { 
                    return (
                        <li key={id}>
                            <Img
                                srcSet={`
                                    https://image.tmdb.org/t/p/w300/${profile_path}     300w,
                                    https://image.tmdb.org/t/p/w500/${profile_path}     500w,
                                    https://image.tmdb.org/t/p/w780/${profile_path}     780w,
                                    https://image.tmdb.org/t/p/w1280/${profile_path}    1280w,
                                    https://image.tmdb.org/t/p/original/${profile_path} 2000w
                                `}
                                loading="lazy"
                                src={`https://image.tmdb.org/t/p/w300/${profile_path}`}
                                alt={`Poster of ${name}`}
                                sizes="(max-width: 320px) 280px, (max-width: 768px) 340px, 400px"
                            />
                            <p>{name}</p>
                            <p>{character}</p>
                        </li>
                    )
                })}   
            </ul>  
        )
    );
};