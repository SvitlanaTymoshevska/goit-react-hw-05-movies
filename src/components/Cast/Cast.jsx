import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { fetchCast } from "services/api-movies-service";
import { List, Item, Img, Text } from "components/Cast/Cast.styled";

export const Cast = () => {
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
                            <Img
                                src={`https://image.tmdb.org/t/p/w1280/${profile_path}`}
                                alt={`Poster of ${name}`}
                                loading="lazy"
                            />
                            <Text>{name}</Text>
                            <p>Character: {character}</p>
                        </Item>
                    )
                })}   
            </List>  
        )
    );
};