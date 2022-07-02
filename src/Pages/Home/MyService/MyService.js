import React from 'react';
import WebDesignPic from '../../../images/webDesign.jpg';
import DynamicApplication from '../../../images/Dynamic_application.jpg';
import WebDevelopmentPic from '../../../images/WebDevelopment.jpg';
import './MyService.css';

const MyService = () => {
    return (
        <div id='service' className="bg-black p-10 md:p-20 relative">
            <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
            <h1 className="text-4xl md:text-5xl text-white font-bold text-center">My Supper Service</h1>
            <p className="text-xl text-white text-center font-bold py-4">--- <span className="text-primary font-semibold">What i Provide</span> ---</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-5">
                <div style={{ backgroundColor: '#191919', }} class="card shadow-xl hover:bg-gradient-to-r from-primary to-pink-600 hover:-translate-y-5"  data-aos="flip-left" data-aos-duration="1500">
                    <figure><img className='p-3 service-img' src={WebDesignPic} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-3xl md:text-4xl text-white fond-bold">Web Design</h2>
                        <p className="text-white">If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                        <button className="btn bg-primary hover:bg-white text-lg text-white hover:scale-110 hover:text-primary border-none mt-5">Read Details</button>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: '#191919' }} class="card shadow-xl hover:bg-gradient-to-r from-primary to-pink-600 hover:hover:-translate-y-5 ease-in-out" data-aos="flip-up" data-aos-duration="2000">
                    <figure><img className='p-3 service-img' src={DynamicApplication} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-3xl text-white fond-bold">Dynamic Web Application</h2>
                        <p className="text-white">If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                        <button className="btn bg-primary hover:bg-white text-lg text-white hover:scale-110 hover:text-primary border-none mt-5">Read Details</button>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: '#191919' }} class="card shadow-xl hover:bg-gradient-to-r from-primary to-pink-600 hover:hover:-translate-y-5 ease-in-out" data-aos="flip-down" data-aos-duration="2500">
                    <figure><img className='p-3 service-img' src={WebDevelopmentPic} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-3xl md:text-4xl text-white fond-bold">Responsive Web Application</h2>
                        <p className="text-white">If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                        <button className="btn bg-primary hover:bg-white text-lg text-white hover:scale-110 hover:text-primary border-none mt-5">Read Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyService;