import React from 'react';
import Logo from '../../images/logo-symbol-dark.png';
import {  BsTwitter, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="bg-secondary relative md:px-24 border-t-2 border-gray-600 grid grid-cols-3 gap-24 items-center">
            <div>
                <img src={Logo} alt="" className="w-40" />
            </div>
            <ul className='text-2xl text-gray-400 mt-5 flex gap-10 md:gap-16 justify-end'>
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
            <h1 className="text-xl text-white">Created By Md Nur Hossain Farid | ©2017-2022 All rights reserved.</h1>
        </div>
    );
};

export default Footer;