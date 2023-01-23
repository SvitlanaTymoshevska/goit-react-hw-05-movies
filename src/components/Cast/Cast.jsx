import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { fetchCast } from "services/api-movies-service";
import { List, Item, Img, Plug, Accent } from "components/Cast/Cast.styled";

const Cast = () => {
    const { id } = useParams();
    const [cast, setCast] = useState(null);

    useEffect(() => {
        fetchCast(id).then(movieCast => {
            setCast(movieCast);
        });
    }, [id]);

    return (
        cast && (
            <List>
                {cast.map(({id, character, name, profile_path}) => { 
                    return (
                        <Item key={id}>
                            {profile_path ? (<Img
                                src={`https://image.tmdb.org/t/p/w1280/${profile_path}`}
                                alt={`Poster of ${name}`}
                                loading="lazy"
                            />) :  <Plug>Poster not found</Plug>}
                            
                            <Accent>{name}</Accent>
                            <p>Character: {character}</p>
                        </Item>
                    )
                })}   
            </List>  
        )
    );
};

export default Cast;