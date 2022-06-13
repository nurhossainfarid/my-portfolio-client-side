import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import React from 'react';
import MyPic from '../../../images/mypic.png';
import './Banner.css';


const Banner = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
      };
    
      const particlesLoaded = (container) => {
        // console.log(container);
      };
    return (
        <div className="bg-black pb-10">
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        background: {
                        color: {
                            value: "black",
                        },
                        },
                        fpsLimit: 120,
                        interactivity: {
                        events: {
                            onClick: {
                            enable: true,
                            mode: "push",
                            },
                            onHover: {
                            enable: true,
                            mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                            quantity: 4,
                            },
                            repulse: {
                            distance: 200,
                            duration: 0.4,
                            },
                        },
                        },
                        particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                            default: "bounce",
                            },
                            random: false,
                            speed: 6,
                            straight: false,
                        },
                        number: {
                            density: {
                            enable: true,
                            area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                        },
                        detectRetina: true,
                    }}
                    />
            <div className="hero bg-black ">
                <div className="hero-content flex-col px-10 lg:flex-row-reverse p-0 gap-5 h-full">
                    <img src={MyPic} className="rounded-bl-full shadow-2xl border-b-4 border-primary" />
                    <div className="text-center md:text-left md:text-start">
                    <h1 className="text-lg md:text-xl text-gray-400 uppercase">Welcome to my world</h1>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mt-1 md:mt-2">Hi, I'm Nur Hossain Farid</h1>
                    <h1 className="text-3xl md:text-5xl font-bold text-primary mt-2 md:mt-5 animation" data-text="MernStackDeveloPer...">MernStackDeveloPer...</h1>
                        <p className="py-6 text-white text-sm md:text-lg">I am a MERN STACK developer. I can provide clean code and pixel perfect design. I also make a dynamic website more & more interactive with web animations.</p>
                    <div className="flex gap-5 md:flex-row flex-col w-2/3 mx-auto md:w-full">
                        <button className="btn bg-inherit border-2 hover:bg-primary tex-md md:text-lg text-white hover:scale-110 hover:border-primary"><a target="_blank" href="https://drive.google.com/file/d/18Zk0ccjPUBqfvQAdg6IhBgngUQFxzW6S/view?fbclid=IwAR3EFSxrlq8YomNh7Uc46HIuWjHeEhYb7uFp1kv_zVe-lWZ2hEKXiyEdTz8">Download Resume</a></button>
                        <button className="btn bg-inherit border-2 hover:bg-primary tex-md md:text-lg text-white hover:scale-110 hover:border-primary">More Info</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;