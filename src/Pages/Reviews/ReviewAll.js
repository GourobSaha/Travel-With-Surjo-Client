import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewService from './ReviewService';

const ReviewAll = () => {
    const serviceDetails = useLoaderData();
    const [reviewAll, setReviewAll] = useState([]);
    const { _id } = serviceDetails;

    useEffect(() => {
        fetch(`https://travel-more-server.vercel.app/reviewServices?service_id=${_id}`)
            .then(res => res.json())
            .then(data => setReviewAll(data))
    }, [_id])

    return (
        <div>
            <h2 className='text-4xl font-semibold text-center text-indigo-600'>Reviews :{reviewAll.length}</h2>
            {
                reviewAll.map(reviewOne => <ReviewService
                    key={reviewOne._id}
                    reviewOne={reviewOne}
                ></ReviewService>)
            }
        </div>
    );
};

export default ReviewAll;