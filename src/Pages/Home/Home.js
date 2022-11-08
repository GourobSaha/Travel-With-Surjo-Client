import React from 'react';
import About from './About';
import Carousel from './Carousel';
import Gallery from './Gallery';
import HomeServices from './HomeServices';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <HomeServices></HomeServices>
            <About></About>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;