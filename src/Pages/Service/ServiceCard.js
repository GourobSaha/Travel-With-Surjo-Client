import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({ service }) => {
    const { _id, name, img, price, description } = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img className='rounded-2xl' src={img} style={{ objectFit: 'cover' }} alt="places" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl text-indigo-600">{name}</h2>
                <h2 className="card-title text-xl">Surjo's Fee: {price}tk</h2>
                <p>{description.slice(0, 100)}...</p>
                <div className="card-actions">
                    <Link to={`/services/${_id}`}>
                        <button className="btn btn-primary btn-sm">View Details<FaArrowRight /></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;