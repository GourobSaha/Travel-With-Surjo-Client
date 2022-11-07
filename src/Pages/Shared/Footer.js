import React from 'react';
import logo from '../../Images/Logo/delivery_transportation_vehicle_transport_travel_icon_225386.png'
import { FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer footer-center p-5 bg-indigo-900 text-primary-content mt-auto">
            <div>
                <img className='w-16' src={logo} alt="logo" />
                <p className="font-bold text-xl">Travel More</p>
                <p>We care about your safe travel</p>
                <p className='text'>Copyright © 2022 - All right reserved</p>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4 text-xl">
                    <Link><FaFacebook /></Link>
                    <Link><FaYoutube /></Link>
                    <Link><FaTwitter /></Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;