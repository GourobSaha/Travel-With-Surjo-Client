import React, { useContext } from 'react';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import ReviewAll from '../Reviews/ReviewAll';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import useTitle from '../../Hooks/useTitle';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData();
    const { user } = useContext(AuthContext);
    const { _id, name, price, img, description, rating, duration } = serviceDetails;
    useTitle('Service Detail')


    const handleSubmitReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;
        const serviceName = name;
        const userName = user?.displayName || "Anonymous";
        const email = user?.email || "Unregistered";
        const userPhotoUrl = user?.photoURL;

        const date = new Date();

        const reviews = {
            service_id: _id,
            serviceName,
            userName,
            email,
            review,
            date,
            userPhotoUrl,
        };
        console.log(reviews);

        fetch('https://travel-more-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Review Added Successfully');
                    form.reset();
                }
            })
            .catch(error => console.error(error))
    };

    return (
        <div className='container mx-auto mb-10'>
            <div className='flex flex-col md:flex-row'>
                <div className="card bg-base-100 w-full md:w-1/2 h-full shadow-xl">
                    <figure className="px-10 pt-10">
                        <PhotoProvider>
                            <PhotoView src={img}>
                                <img className='rounded-2xl w-full' src={img} style={{ objectFit: 'cover' }} alt="places" />
                            </PhotoView>
                        </PhotoProvider>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl text-indigo-600">{name}</h2>
                        <h2 className="card-title text-2xl">Surjo's Fee: {price}tk</h2>
                        <h2 className="card-title text-xl">Duration: {duration}</h2>
                        <p className='font-light'>N.B: Fee may vary based on the duration.</p>
                        <p>{description}</p>
                        <p className='font-semibold flex items-center'>Rating: {rating}  <span className='text-orange-400'>< FaStar /></span></p>
                        <div className="card-actions">
                            <Link>
                                <button className="btn btn-primary btn-sm">Book Now<FaArrowRight /></button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='mt-6 w-full md:w-1/2 md:px-5'>

                    <div>
                        <ReviewAll></ReviewAll>
                    </div>
                    {
                        user?.uid ?
                            <div className='my-6'>
                                <h2 className='text-2xl font-semibold text-center text-indigo-600'>Wanna give your Review!</h2>
                                <form onSubmit={handleSubmitReview} className="card-body ">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Service Name</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            defaultValue={name}
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
                                            className="textarea textarea-primary"
                                            name="review"
                                            placeholder="Your Review"
                                            required
                                        ></textarea>
                                    </div>

                                    <div className="form-control mt-6 mx-auto ">
                                        <input
                                            className="btn btn-primary btn-sm"
                                            type="submit"
                                            value="Add Review"
                                        />
                                    </div>
                                </form>
                            </div>
                            :
                            <div className='my-6 text-center'>
                                <h2 className='text-2xl font-semibold text-center text-indigo-600 mb-3'>Wanna give your Review!</h2>
                                <p>You need to login first to give a review. <Link to='/login' className='btn btn-primary btn-sm'>Please Login</Link></p>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;