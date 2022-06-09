import React from 'react';
import WebDesignPic from '../../../images/webDesign.jpg';
import DynamicApplication from '../../../images/Dynamic_application.jpg';
import WebDevelopmentPic from '../../../images/WebDevelopment.jpg';
import './MyService.css';

const MyService = () => {
    return (
        <div className="bg-black p-20">
            <h1 className="text-5xl text-white font-bold text-center">My Supper Service</h1>
            <p class="py-6 text-gray-400 text-lg text-center">
                All kinds of web service in here that's you need. So, why are you late....
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-5">
                <div style={{ backgroundColor: '#191919' }} class="card shadow-xl hover:bg-gradient-to-r from-primary to-pink-600 hover:hover:-translate-y-5 ease-in-out">
                    <figure><img className='p-3 service-img' src={WebDesignPic} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-2xl text-white fond-bold">Web Design</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: '#191919' }} class="card shadow-xl hover:bg-gradient-to-r from-primary to-pink-600 hover:hover:-translate-y-5 ease-in-out">
                    <figure><img className='p-3 service-img' src={DynamicApplication} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-2xl text-white fond-bold">Create Dynamic Web Application</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: '#191919' }} class="card shadow-xl hover:bg-gradient-to-r from-primary to-pink-600 hover:hover:-translate-y-5 ease-in-out">
                    <figure><img className='p-3 service-img' src={WebDevelopmentPic} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-2xl text-white fond-bold">Web Development</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyService;