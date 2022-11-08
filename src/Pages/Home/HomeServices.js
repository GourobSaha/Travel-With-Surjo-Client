import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../Service/ServiceCard';

const HomeServices = () => {
    const services = useLoaderData();
    const servicesHome = services.slice(0, 3);
    return (
        <div className='container mx-auto my-5'>
            <h2 className='text-4xl font-semibold text-center text-indigo-600'>Surjo's Services</h2>
            <p className='text-center mb-6'>I will give you the best travel experience. I'm not just a travel guide with route knowledge <br /> but have the knowledge of the history of all the places.</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                {
                    servicesHome.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='text-center my-5'>
                <Link to='/services'><button className="btn btn-primary btn-sm">View More<FaArrowRight /></button></Link>
            </div>
        </div>
    );
};

export default HomeServices;