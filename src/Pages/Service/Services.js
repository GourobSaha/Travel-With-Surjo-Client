import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const services = useLoaderData();
    return (
        <div className='container mx-auto mt-5 mb-10'>
            <h2 className='text-4xl font-semibold text-center text-indigo-600'>Surjo's All Services</h2>
            <p className='text-center mb-6'>I have a great experience fo traveling. So, hire me if you wanna be the part that experience.</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;