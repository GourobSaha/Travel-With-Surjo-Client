import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import slideImg1 from '../../Images/Slider/full-shot-travel-concept-with-landmarks.jpg'
import slideImg2 from '../../Images/Slider/full-shot-woman-taking-selfie.jpg'
import slideImg3 from '../../Images/Slider/travel-world.jpg'

const Carousel = () => {
    return (
        <div>
            <div className="carousel w-full container mx-auto rounded-2xl">
                <div id="item1" className="carousel-item w-full grid justify-items-center items-center">
                    <img src={slideImg2} alt='slide1' className="w-full" />
                    <div className="absolute text-center">
                        <p className="text-2xl font-semibold text-white bg-black bg-opacity-40 p-2 rounded-lg mb-2">
                            “The journey of a thousand miles begins with a single step.”<br />
                            So, let Surjo be your travel guide.

                        </p>
                        <button className="btn btn-primary btn-sm">
                            My Services <FaArrowRight></FaArrowRight>
                        </button>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={slideImg1} alt='slide1' className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={slideImg3} alt='slide1' className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-primary btn-xs">1</a>
                <a href="#item2" className="btn btn-primary btn-xs">2</a>
                <a href="#item3" className="btn btn-primary btn-xs">3</a>
            </div>
        </div>
    );
};

export default Carousel;