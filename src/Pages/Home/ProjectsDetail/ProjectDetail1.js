import React from 'react';
import { Carousel } from 'react-bootstrap';
import ProjectPic1 from '../.../../../../images/firstProjectDemo.png'

const ProjectDetail1 = () => {
    return (
        <div>
            <div class="card card-compact w-3/4 mx-auto bg-base-100 shadow-xl">
                <figure>
                    <img src={ProjectPic1} alt="" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title text-3xl">Project Name : <span className='text-primary text-4xl font-bold'>.carBro</span></h2>
                    <h2 className="text-2xl font-semibold">Project Review : </h2>
                    <ul className='list-disc ml-10 text-xl'>
                        <li>This is the Car Parts Manufacturer website.</li>
                        <li>In the login page, you want to be created a new account and you have an account then you login and in sign page you create a new user</li>
                        <li>When you are valid user, you see dashboard. In dashboard, you see some nested route.</li>
                    </ul>
                    <div class="card-actions justify-start mt-5 gap-5">
                    <div class="badge badge-outline text-primary badge-lg hover:scale-110 hover:bg-primary hover:text-white">
                        <a  target="_blank" href="https://car-bro-4747.firebaseapp.com/">Live Demo</a>        
                    </div>
                    <div class="badge badge-outline text-secondary badge-lg hover:scale-110 hover:bg-secondary hover:text-white">
                        <a  target="_blank" href="https://car-bro-4747.firebaseapp.com/">Client Side Code</a>        
                    </div>
                    <div class="badge badge-outline text-accent badge-lg hover:scale-110 hover:bg-accent hover:text-white">
                        <a  target="_blank" href="https://car-bro-4747.firebaseapp.com/">Server Side Code</a>        
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail1;
       