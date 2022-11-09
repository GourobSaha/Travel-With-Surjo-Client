import React from 'react';
import useTitle from '../../Hooks/useTitle';
import About from './About';
import Carousel from './Carousel';
import Gallery from './Gallery';
import HomeServices from './HomeServices';

const Home = () => {
    useTitle('Home')
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