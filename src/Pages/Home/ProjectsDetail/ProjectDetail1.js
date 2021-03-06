import React from 'react';
import ProjectPic1 from '../.../../../../images/firstProjectDemo.png'

const ProjectDetail1 = () => {
    return (
        <div className="pt-5 z-10 bg-black " style={{backgroundColor:'#191919'}}>
            <div class="card card-compact w-5/6 md:w-2/3 mx-auto bg-base-100 shadow-xl mt-10 pb-10">
                <figure className="p-3">
                    <img src={ProjectPic1} alt="" />
                </figure>
                <div class="card-body mx-5 mt-5">
                    <h2 class="card-title text-xl md:text-3xl">Project Name : <span className='text-primary md:text-4xl text-2xl font-bold'>.carBro</span></h2>
                    <h2 className="text-md md:text-2xl font-bold md:font-semibold">Project Review : </h2>
                    <ul className='list-disc ml-10 text-sm md:text-xl'>
                        <li>This is the Doctor services website where patient get appointment in appointment page Only allow valid user</li>
                        <li>In the Login page, you want to be created a new account and you have an account then you login and in sign page you create a new user.</li>
                        <li>When you are valid user, you see dashboard. In dashboard, you see some nested route.</li>
                    </ul>
                    <div class="card-actions justify-start mt-5 gap-5">
                    <div class="badge badge-outline text-primary badge-lg hover:scale-110 hover:bg-primary hover:text-white">
                        <a  target="_blank" href="https://car-bro-4747.firebaseapp.com/">Live Demo</a>        
                    </div>
                    <div class="badge badge-outline text-secondary badge-lg hover:scale-110 hover:bg-secondary hover:text-white">
                        <a  target="_blank" href="https://github.com/nurhossainfarid/-manufacturer-website-client-side">Client Side Code</a>        
                    </div>
                    <div class="badge badge-outline text-accent badge-lg hover:scale-110 hover:bg-accent hover:text-white">
                        <a  target="_blank" href="https://github.com/nurhossainfarid/manufacturer-website-server-side">Server Side Code</a>        
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail1;
       