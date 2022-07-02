import React from 'react';
import {  BsTwitter, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import './Footer.css';


const Footer = () => {
    return (
        <div className="bg-secondary relative md:px-24 border-t-2 border-gray-600 grid grid-cols-3 gap-24 items-center py-5">
            <h1 className="text-7xl footer-gradient-text rounded p-2">NHF</h1>
            <ul className='text-2xl text-gray-400 flex gap-10 md:gap-16 justify-end'>
                        <li className='hover:text-white hover:-translate-y-2 border-2 border-gray-400 rounded-full p-4 hover:border-primary hover:bg-primary'>
                            <a target="_blank" href='https://www.facebook.com/nurhossainfarid221'>
                                <FaFacebookF></FaFacebookF>
                            </a>
                            </li>
                            <li className='hover:text-white hover:-translate-y-2 border-2 border-gray-400 rounded-full p-4 hover:border-primary hover:bg-primary'>
                                <a target="_blank" href='https://www.linkedin.com/in/nur-hossain-farid-58725522a/'>
                                    <FaLinkedinIn></FaLinkedinIn>
                                </a>
                            </li>
                            <li className='hover:text-white hover:-translate-y-2 border-2 border-gray-400 rounded-full p-4 hover:border-primary hover:bg-primary'>
                                <a target="_blank" href='https://twitter.com/nurhossain221'>
                                    <BsTwitter></BsTwitter>
                                </a>
                            </li>
                        <li className='hover:text-white hover:-translate-y-2 border-2 border-gray-400 rounded-full p-4 hover:border-primary hover:bg-primary'>
                            <a target="_blank" href='https://github.com/nurhossainfarid'>
                                <BsGithub></BsGithub>
                            </a>
                        </li>
            </ul>
            <h1 className="text-xl text-white">Created By <span className="text-xl md:text-xl font-bold text-primary mt-2 md:mt-5 animation2" data-text="NurHossainFarid...">NurHossainFarid</span></h1>
        </div>
    );
};

export default Footer;