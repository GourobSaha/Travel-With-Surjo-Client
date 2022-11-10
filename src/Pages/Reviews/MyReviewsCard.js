import React from 'react';
import { Link } from 'react-router-dom';

const MyReviewsCard = ({ reviewOne, handleDelete }) => {

    const { _id, userPhotoUrl, userName, review, date, serviceName } = reviewOne;


    return (
        <div>
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-xl divide-gray-700 dark:bg-gray-900 dark:text-gray-100 shadow-xl my-5">
                <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                        <div>
                            <img src={userPhotoUrl} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                        </div>
                        <div>
                            <h4 className="font-bold">{userName}</h4>
                            <span className="text-xs dark:text-gray-400">{date.slice(0, 10)}</span>
                        </div>
                    </div>
                </div>
                <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                    <h3 className='font-bold text-lg'>Service: {serviceName}</h3>
                    <p>Review: {review}</p>
                    <div className='flex justify-between'>
                        <Link to={`/update/${_id}`}><button className='btn btn-primary btn-sm'>Edit Review</button></Link>
                        <button onClick={() => handleDelete(_id)} className='btn btn-accent btn-sm'>Delete Review</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyReviewsCard;