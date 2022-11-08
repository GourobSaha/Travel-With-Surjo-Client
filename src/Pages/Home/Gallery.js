import React from 'react';
import img1 from '../../Images/Places/bangladesh-places-01a-1024x683.jpg'
import img2 from '../../Images/Places/Beautiful-places-in-Bangladesh-WMC-hero.jpg'
import img3 from '../../Images/Places/tourist-places-in-bangladesh20.jpg'
import img4 from '../../Images/Places/dreamstime_xxl_55742473-1024x804.jpg'

const Gallery = () => {
    return (
        <div className='container mx-auto'>
            <section className="py-6 dark:bg-gray-800">
                <h2 className='text-4xl font-semibold text-center text-indigo-600'>Surjo's Gallery</h2>
                <div className="container flex flex-col justify-center p-4 mx-auto shadow-xl rounded-2xl">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                        <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={img1} alt='img1' />
                        <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={img2} alt='img2' />
                        <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={img3} alt='img3' />
                        <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={img4} alt='img4' />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;