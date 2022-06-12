import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo-symbol-dark.png';
import './Header.css';
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const Header = () => {
    return (
        <div className="relative">
            <div className="navbar bg-black md:px-24 top-0 left-0 sticky">
                <div className="navbar-start md:hidden block w-1/3 mt-5 ">
                    <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
                        <li><Link className="text-xl text-white font-bold" to="/home">Home</Link></li>
                        <li><a className="text-xl text-white font-bold" href="#about">About</a></li>
                        <li><a className="text-xl text-white font-bold" href="#service">Service</a></li>
                        <li><a className="text-xl text-white font-bold" href="#project">Portfolio</a></li>
                        <li><a className="text-xl text-white font-bold" href="">Blog</a></li>
                        <li><a className="text-xl text-white font-bold" href="">My Team</a></li>
                        <li><a className="text-xl text-white font-bold" href="#contact">Contact</a></li>
                    </ul>
                    </div>
                </div>
                <div className="lg:navbar-start hidden lg:flex">
                    <Link className="text-xl text-white font-bold" to="/home"><img className="logo" src={Logo} alt="" /></Link>
                    <ul className="menu menu-horizontal p-0 ml-8">
                    <li><Link className="text-xl text-white font-bold" to="/home">Home</Link></li>
                    <li><a className="text-xl text-white font-bold" href="#about">About</a></li>
                    <li><a className="text-xl text-white font-bold" href="#service">Service</a></li>
                    <li><a className="text-xl text-white font-bold" href="#project">Portfolio</a></li>
                    <li><a className="text-xl text-white font-bold" href="#blogs">Blog</a></li>
                    <li><a className="text-xl text-white font-bold" href="">Team</a></li>
                    <li><a className="text-xl text-white font-bold" href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-center md:navbar-end">
                    <ul className='text-2xl text-gray-400 mt-5 flex gap-10 md:gap-16 justify-end'>
                        <li className='hover:text-white hover:-translate-y-1'>
                            <a target="_blank" href='https://www.facebook.com/nurhossainfarid221'>
                                <BsFacebook></BsFacebook>
                            </a>
                            </li>
                            <li className='hover:text-white hover:-translate-y-1'>
                                <a target="_blank" href='https://www.linkedin.com/in/nur-hossain-farid-58725522a/'>
                                    <FaLinkedinIn></FaLinkedinIn>
                                </a>
                            </li>
                            <li className='hover:text-white hover:-translate-y-1'>
                                <a target="_blank" href='https://twitter.com/nurhossain221'>
                                    <BsTwitter></BsTwitter>
                                </a>
                            </li>
                            <li className='hover:text-white hover:-translate-y-1'>
                                <BsInstagram></BsInstagram>
                            </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;