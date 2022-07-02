import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import React from 'react';
import MyPic from '../../../images/mypic.png';
import Style from './Style.css';


const Banner = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
      };
    
      const particlesLoaded = (container) => {
        // console.log(container);
      };
    return (
        <div className="py-10">
        <Particles className={`${Style.tsparticles}`}
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
            fullScreen: {
              enable: true,
              zIndex: 0
            },
            particles: {
              number: {
                value: 400,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: "#fff"
              },
              shape: {
                type: "circle"
              },
              opacity: {
                value: 0.5,
                random: true,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 10,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false
                }
              },
              line_linked: {
                enable: false,
                distance: 500,
                color: "#ffffff",
                opacity: 0.4,
                width: 2
              },
              move: {
                enable: true,
                speed: 2,
                direction: "bottom",
                random: false,
                straight: false,
                out_mode: "out",
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble"
                },
                onclick: {
                  enable: true,
                  mode: "repulse"
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 0.5
                  }
                },
                bubble: {
                  distance: 400,
                  size: 4,
                  duration: 0.3,
                  opacity: 1,
                  speed: 3
                },
                repulse: {
                  distance: 200
                },
                push: {
                  particles_nb: 4
                },
                remove: {
                  particles_nb: 2
                }
              }
            },
            retina_detect: true,
            background: {
              color: "#000",
              image: "",
              position: "50% 50%",
              repeat: "no-repeat",
              size: "cover"
            }
          }}
        />
        <div className="hero ">
                <div className="hero-content flex-col px-10 lg:flex-row-reverse p-0 gap-5 h-full">
                    <img src={MyPic} className="rounded-bl-full shadow-2xl border-b-4 border-primary" data-aos="zoom-in-down"
                    data-aos-duration="2500" />
                    <div className="text-center md:text-left md:text-start" data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1500">
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