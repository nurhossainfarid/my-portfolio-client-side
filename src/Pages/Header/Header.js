import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo-symbol-dark.png';
import './Header.css';
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const Header = () => {
    return (
        <div className="navbar bg-black px-24">
            <div className="navbar-start hidden lg:flex">
                <Link className="text-xl text-white font-bold" to="/home"><img className="logo" src={Logo} alt="" /></Link>
                <ul className="menu menu-horizontal p-0 ml-8">
                <li><Link className="text-xl text-white font-bold" to="/home">Home</Link></li>
                <li><a className="text-xl text-white font-bold" href="#about">About</a></li>
                <li><a className="text-xl text-white font-bold" href="">Service</a></li>
                <li><a className="text-xl text-white font-bold" href="">Portfolio</a></li>
                <li><a className="text-xl text-white font-bold" href="">Blog</a></li>
                <li><a className="text-xl text-white font-bold" href="">Contact</a></li>
                </ul>
            </div>
            <div className="md:navbar-end">
                <ul className='text-2xl text-gray-400 mt-5 flex gap-16 justify-end'>
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
            <div className="navbar-end md:hidden block">
                <div className="dropdown">
                <label tabindex="0" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a className="text-xl text-white font-bold" href="">Home</a></li>
                    <li tabindex="0">
                    <a className="text-xl text-white font-bold" href="" className="justify-between">
                        Parent
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                    </a>
                    <ul className="p-2">
                        <li><a className="text-xl text-white font-bold" href="">Submenu 1</a></li>
                        <li><a className="text-xl text-white font-bold" href="">Submenu 2</a></li>
                    </ul>
                    </li>
                    <li><a className="text-xl text-white font-bold" href="">Item 3</a></li>
                </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;