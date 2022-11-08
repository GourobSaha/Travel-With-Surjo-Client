import React from 'react';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData();
    const { name, price, img, description, rating, duration } = serviceDetails;
    return (
        <div className='container mx-auto mb-10'>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="places" className="rounded-xl" />
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
        </div>
    );
};

export default ServiceDetails;