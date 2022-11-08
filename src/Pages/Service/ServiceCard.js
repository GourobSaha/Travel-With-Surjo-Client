import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, name, img, price, description } = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="places" className="rounded-xl" />
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