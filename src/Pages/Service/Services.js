import React, { useEffect, useState } from 'react';
import useTitle from '../../Hooks/useTitle';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    useTitle('Services');

    useEffect(() => {
        const url = "http://localhost:5000/services";

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setServices(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className='text-center'>
                <progress className="mx-auto progress w-56"></progress>
            </div>
        );
    }

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