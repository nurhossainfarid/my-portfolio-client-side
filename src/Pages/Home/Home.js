import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import MyService from './MyService/MyService';

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <About></About>
            <MyService></MyService>
        </div>
    );
};

export default Home;