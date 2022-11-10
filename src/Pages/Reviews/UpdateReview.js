import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const UpdateReview = () => {
    useTitle('Update Review')

    const updateReview = useLoaderData();
    const [reviews, setReviews] = useState(updateReview);

    const handleUpdateReview = (event) => {
        event.preventDefault();

        console.log(reviews);
        fetch(`https://travel-more-server.vercel.app/reviews/${updateReview._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(reviews),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Review Updated Successfully');
                    console.log(data);
                }
                else {
                    toast('Nothing to Update');
                }
            })
            .catch((error) => console.error(error));
    };
    const handleInputChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...reviews };
        console.log(newReview);
        newReview[field] = value;
        setReviews(newReview);
    };


    return (
        <div className='lg:w-1/2 w-full mx-auto'>
            <h2 className='text-4xl font-semibold text-center text-indigo-600'>Edit Your Review</h2>
            <form onSubmit={handleUpdateReview} className="card-body ">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Name</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        defaultValue={updateReview.serviceName}
                        readOnly
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Review</span>
                    </label>
                    <textarea
                        onChange={handleInputChange}
                        className="textarea textarea-primary"
                        name="review"
                        defaultValue={updateReview.review}
                        placeholder="Your Review"
                    ></textarea>
                </div>

                <div className="form-control mt-6 mx-auto ">
                    <input
                        className="btn btn-primary btn-sm"
                        type="submit"
                        value="Update Review"
                    />
                </div>
            </form>
        </div>
    );
};

export default UpdateReview;