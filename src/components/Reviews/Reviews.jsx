import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { fetchReviews } from "services/api-movies-service";
import { List, Accent, ErrorMessage } from "components/Reviews/Reviews.styled";

const Reviews = () => {
    const { id } = useParams();
    const [reviews, setReviews] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchReviews(id)
            .then(movieReviews => setReviews(movieReviews))
            .catch(error => setError(error.message))
    }, [id]);

    return (
        <>
            {reviews && 
                <List>
                    {reviews.map(({ id, author, content }) => {
                        return (
                            <li key={id}>
                                <Accent>{author}</Accent>
                                <p>{content}</p>
                            </li>
                        )
                    })}
                </List>}
            
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </>
    );
};

export default Reviews;