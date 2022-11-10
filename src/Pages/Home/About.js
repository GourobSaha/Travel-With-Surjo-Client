import React from 'react';
import profileImg from '../../Images/Profile/pp.jpg'
import placesImg from '../../Images/Places/places-to-visit-in-bangladesh.jpg'

const About = () => {
    return (
        <div className='container mx-auto my-10'>
            <h2 className='text-4xl font-semibold text-center text-indigo-600 mb-5'>About Surjo</h2>
            <div>
                <div className='flex flex-col md:flex-row shadow-lg rounded-lg p-5'>
                    <div className='mx-auto md:w-1/3 md:mr-10 text-center'>
                        <img src={profileImg} alt="profile" className='rounded-2xl w-1/2 mx-auto mb-5' />
                        <h2 className='text-3xl font-semibold text-center text-indigo-600 mb-5'>I'm Surjo</h2>
                        <p>Hello there! I am a passionate traveler. So, choose my passion as my work. I know all the places in our country very well. You can hire me as your travel guide. Because me as your travel guide is not just some tour, it will be the greatest experience of your life.</p>
                        <button className='btn btn-primary my-5'>Book Now</button>
                    </div>
                    <div className='mx-auto md:w-2/3 my-auto'>
                        <img src={placesImg} alt="places" className='rounded-lg m-auto w-full' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;