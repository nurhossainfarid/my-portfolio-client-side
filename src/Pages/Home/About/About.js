import React from 'react';
import mypic2 from '../../../images/mypic2.jpeg';
import './About.css'

const About = () => {
    return (
        <div id="about">
            <div class="hero " style={{backgroundColor:'#191919'}}>
                <div class="hero-content flex-col lg:flex-row gap-10 py-10 md:py-20">
                    <div className='w-3/4 md:w-2/6'>
                    <img className='w-full about-img' src={mypic2} />
                    </div>
                    <div className='w-3/4'>
                    <h1 class="text-3xl md:text-5xl font-bold text-white">About Me</h1>
                    <p class="py-6 text-gray-400 text-md md:text-lg">Hi, I'm Nur Hossain Farid a Junior MERN
                        STACK Developer. I am providing any kind of Web
                        solution you need. My first goal is to achieve client
                        satisfaction. I make a Dynamic website with
                        updated features and technology. I serve my
                        clients on any kind of Website. I am also working
                        on how to secure a website. And I am interested in
                        working in cyber security. 
                    </p>
                    <button className="btn bg-inherit border-2 hover:bg-primary text-lg text-white hover:scale-110 hover:border-primary">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;