import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import MyReviewsCard from './MyReviewsCard';
import toast from 'react-hot-toast';
import useTitle from '../../Hooks/useTitle';

const MyReviews = () => {
    const [reviewAll, setReviewAll] = useState([]);
    const { user, logOut } = useContext(AuthContext);
    useTitle('My Reviews')

    useEffect(() => {
        fetch(`https://travel-more-server.vercel.app/reviews?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('Secret-Token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logOut();
                }
                return res.json();
            })
            .then(data => {
                setReviewAll(data);
            })
    }, [user.email, logOut]);

    const handleDelete = id => {
        const agree = window.confirm('Are you sure, you want delete this review')
        if (agree) {
            fetch(`https://travel-more-server.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success('Service Added Successfully');
                        const remainingReviews = reviewAll.filter(riv => riv._id !== id);
                        setReviewAll(remainingReviews);
                    }
                })
        }
    }

    return (
        <div>
            {
                reviewAll.length > 0 ?
                    <>
                        <h2 className='text-4xl font-semibold text-center text-indigo-600'>Your Reviewed {reviewAll.length} Services</h2>
                        {
                            reviewAll.map(reviewOne => <MyReviewsCard
                                key={reviewOne._id}
                                reviewOne={reviewOne}
                                handleDelete={handleDelete}
                            ></MyReviewsCard>)
                        }
                    </> :
                    <>
                        <div className='grid h-80 justify-center content-center'>
                            <h2 className='text-4xl font-semibold text-indigo-600'>No Reviews Were Added</h2>
                        </div>
                    </>
            }

        </div>
    );
};

export default MyReviews;