import React from 'react';

const About = () => {
    return (
        <div id="about">
            <div class="hero min-h-screen " style={{backgroundColor:'#191919'}}>
                <div class="hero-content flex-col lg:flex-row gap-10">
                    <div className='w-1/4'>
                    <img className='w-full' src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div className='w-3/4'>
                    <h1 class="text-5xl font-bold text-white">About Me</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;