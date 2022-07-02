import React from 'react';
import { BsGithub } from "react-icons/bs";
import { FaGitAlt, FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiExpress, SiFirebase, SiHeroku } from "react-icons/si";



const Skills = () => {
    return (
        <div className="p-10 md:p-20 relative" style={{backgroundColor:'#191919'}}>
            <h1 className="text-4xl md:text-5xl text-white font-bold text-center">My Skills</h1>
            <p className="text-xl text-white text-center py-4">--- <span className="text-primary font-semibold">What i Know</span> ---</p>
            <div className="grid grid-cols-2 gap-10 pt-5">
                <div>
                    <h1 className="text-3xl text-white font-bold">My Creative Skills and Experience</h1>
                    <p className="text-xl text-gray-100 pt-5 w-5/6">As a fullstack web developer, everyone needs to know about frontend and backend technology. Over 6 months I have been working hard on various frontend and backend technologies. I also created Website front-end design from PSD, xD, Figma with HTML5, CSS3, JavaScript, JQuery, React. Below are links to some of the responsive sites I have created.</p>
                    <button class="btn bg-primary text-xl mt-10 hover:bg-inherit text-white hover:border-2 hover:border-primary hover:text-primary"><a target="_blank" href="https://github.com/nurhossainfarid">View Activity in My GitHub</a></button>
                </div>
                <div className="grid grid-cols-1 gap-5">
                    <div>
                        <div className="flex justify-between md:w-3/4 text-white text-xl font-semibold">
                            <div className="flex items-center gap-3">
                                <span className="flex items-center gap-1"><FaHtml5></FaHtml5>HTML5</span> | <span className="flex items-center gap-1"><FaCss3Alt></FaCss3Alt>CSS3</span>
                            </div>
                            <span className="text-end">90%</span>
                        </div>
                        <progress class="progress progress-primary w-3/4" value="90" max="100"></progress>
                    </div>
                    <div>
                        <div className="flex justify-between md:w-3/4 text-white text-xl font-semibold">
                            <div className="flex items-center gap-3">
                                <span className="flex items-center gap-1"><FaBootstrap></FaBootstrap>Bootstrap</span> | <span className="flex items-center gap-1"><SiTailwindcss></SiTailwindcss>Tailwind</span>
                            </div>
                            <span className="text-end">95%</span>
                        </div>
                        <progress class="progress progress-primary md:w-3/4" value="95" max="100"></progress>
                    </div>
                    <div>
                        <div className="flex justify-between md:w-3/4 text-white text-xl font-semibold">
                            <div className="flex items-center gap-3">
                                <span className="flex items-center gap-2"><SiJavascript></SiJavascript>Javascript</span> 
                            </div>
                            <span className="text-end">80%</span>
                        </div>
                        <progress class="progress progress-primary w-3/4" value="80" max="100"></progress>
                    </div>
                    <div>
                        <div className="flex justify-between md:w-3/4 text-white text-xl font-semibold">
                            <div className="flex items-center gap-3">
                                <span className="flex items-center gap-1"><FaReact></FaReact>React</span>
                            </div>
                            <span className="text-end">75%</span>
                        </div>
                        <progress class="progress progress-primary md:w-3/4" value="75" max="100"></progress>
                    </div>
                    <div>
                        <div className="flex justify-between md:w-3/4 text-white text-xl font-semibold">
                            <div className="flex items-center gap-3">
                                <span className="flex items-center gap-1"><FaNodeJs></FaNodeJs></span>Node.js | <span className="flex items-center gap-1"><SiExpress></SiExpress>Express</span>
                            </div>
                            <span className="text-end">70%</span>
                        </div>
                        <progress class="progress progress-primary md:w-3/4" value="70" max="100"></progress>
                    </div>
                    <div>
                        <div className="flex justify-between md:w-3/4 text-white text-xl font-semibold">
                            <div className="flex items-center gap-3">
                                <span className="flex items-center gap-1"><SiFirebase></SiFirebase>Firebase</span> | <span className="flex items-center gap-1"><SiHeroku></SiHeroku>Heroku</span>
                            </div>
                            <span className="text-end">75%</span>
                        </div>
                        <progress class="progress progress-primary md:w-3/4" value="75" max="100"></progress>
                    </div>
                    <div>
                        <div className="flex justify-between md:w-3/4 text-white text-xl font-semibold">
                            <div className="flex items-center gap-3">
                                <span className="flex items-center gap-1"><FaGitAlt></FaGitAlt>Git</span> | <span className="flex items-center gap-1"><BsGithub></BsGithub>GitHub</span>
                            </div>
                            <span className="text-end">80%</span>
                        </div>
                        <progress class="progress progress-primary md:w-3/4" value="80" max="100"></progress>
                    </div>
                    <div>
                        <div className="flex justify-between md:w-3/4 text-white text-xl font-semibold">
                            <div className="flex items-center gap-3">
                                <span className="flex items-center gap-1">C Programming</span> 
                            </div>
                            <span className="text-end">30%</span>
                        </div>
                        <progress class="progress progress-primary md:w-3/4" value="30" max="100"></progress>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;