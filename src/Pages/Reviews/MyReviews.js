import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import MyReviewsCard from './MyReviewsCard';

const MyReviews = () => {
    const [reviewAll, setReviewAll] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => setReviewAll(data))
    }, [user.email])
    return (
        <div>
            <h2 className='text-4xl font-semibold text-center text-indigo-600'>Your Reviewed {reviewAll.length} Services</h2>
            {
                reviewAll.map(reviewOne => <MyReviewsCard
                    key={reviewOne._id}
                    reviewOne={reviewOne}
                ></MyReviewsCard>)
            }
        </div>
    );
};

export default MyReviews;