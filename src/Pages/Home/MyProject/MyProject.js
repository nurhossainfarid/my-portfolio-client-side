import React from 'react';
import { Link } from 'react-router-dom';
import Project01 from '../../../images/project01.png';
import Project02 from '../../../images/project02.png';
import Project03 from '../../../images/project03.png';
import './MyProject.css';

const MyProject = () => {
    return (
        <div id='project' className="p-10 md:p-20 relative" style={{backgroundColor:'#191919'}}>
            <h1 className="text-4xl md:text-5xl text-white font-bold text-center">My Latest Project</h1>
            <p class="py-6 text-gray-400 text-md md:text-lg text-center">
                All kinds of web service in here that's you need. So, why are you late....
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-5">
                <div>
                    <div className="project-img relative hover:scale-110">
                        <img className='img' src={Project01} alt="" />
                        <div className="hover-div bg-primary">
                        </div>
                        <div className="absolute top-1/3 md:top-1/2 left-1/3 md:left-1/4 grid grid-cols-1 gap-5 caption-text">
                            <h1 className="text-4xl md:text-5xl text-white ">.carBro</h1>
                            <p className="text-lg md:text-xl text-white">This is the Car parts <br /> Manufacture websites.</p>
                            <button className="btn w-3/4 bg-primary hover:bg-white text-md text-white hover:scale-110 hover:text-primary border-none"><Link to="/project1">View Details</Link></button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="project-img relative hover:scale-110 h-full">
                        <img className="md:h-full img" src={Project02} alt="" />
                        <div className="hover-div bg-primary">
                        </div>
                        <div className="absolute top-1/4 md:top-1/3 left-1/4 grid grid-cols-1 gap-5 caption-text">
                            <h1 className="text-3xl text-white">Laptopo House <br /> Center</h1>
                            <p className="text-md md:text-lg text-white">This is the laptop <br /> warehouse/inventory <br />
                            management websites.</p>
                            <button className="btn w-3/4 bg-primary hover:bg-white text-md text-white hover:scale-110 hover:text-primary border-none"><Link to="/project2">View Details</Link></button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="project-img relative hover:scale-110 h-full">
                        <img className="md:h-full img" src={Project03} alt="" />
                        <div className="hover-div bg-primary">
                        </div>
                        <div className="absolute top-1/2 left-1/4 grid grid-cols-1 gap-5 caption-text">
                            <h1 className="text-3xl md:text-4xl text-white ">Doctor Portal</h1>
                            <p className="text-md md:text-xl text-white font-bold">This is the Doctor <br /> services website</p>
                            <button className="btn w-3/4 bg-primary hover:bg-white text-md text-white hover:scale-110 hover:text-primary border-none"><Link to="/project3">View Details</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProject;