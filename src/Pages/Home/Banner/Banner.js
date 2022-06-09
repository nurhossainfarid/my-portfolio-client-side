import React from 'react';
import MyPic from '../../../images/mypic.png'

const Banner = () => {
    return (
        <div className="bg-black">
            <div className="hero min-h-screen bg-black">
                <div className="hero-content flex-col lg:flex-row-reverse p-0 gap-5 h-full">
                    <img src={MyPic} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                    <h1 className="text-xl text-gray-400 uppercase">Welcome to my world</h1>
                    <h1 className="text-5xl font-bold text-white mt-2">Hi, I'm Nur Hossain Farid</h1>
                    <h1 className="text-5xl font-bold text-primary mt-5">MERN STACK DEVELOPER</h1>
                        <p className="py-6 text-white text-lg">I am a MERN developer. I can provide clean code and pixel perfect design. I also make a dynamic website more & more interactive with web animations.</p>
                    <div className="flex gap-5">
                        <button className="btn bg-inherit border-2 hover:bg-primary text-lg text-white hover:scale-110 hover:border-primary"><a target="_blank" href="https://drive.google.com/file/d/18Zk0ccjPUBqfvQAdg6IhBgngUQFxzW6S/view?fbclid=IwAR3EFSxrlq8YomNh7Uc46HIuWjHeEhYb7uFp1kv_zVe-lWZ2hEKXiyEdTz8">Download Resume</a></button>
                        <button className="btn bg-inherit border-2 hover:bg-primary text-lg text-white hover:scale-110 hover:border-primary">More Info</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;