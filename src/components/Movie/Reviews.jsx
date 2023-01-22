import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { fetchReviews } from "services/api-movies-service";

export const Reviews = () => {
    const { id } = useParams();

    const [reviews, setReviews] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchReviews(id)
            .then(movieReviews => setReviews(movieReviews))
            .catch(error => setError(error.message))
    }, [id]);

    console.log(error);
    return (
        <>
            {reviews && 
                <ul>
                    {reviews.map(({ id, author, content }) => {
                        return (
                            <li key={id}>
                                <p>{author}</p>
                                <p>{content}</p>
                            </li>
                        )
                    })}
                </ul>}
            
            {error && <p>{error}</p>}
        </>
    );
};