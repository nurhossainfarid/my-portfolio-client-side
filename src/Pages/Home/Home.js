import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Blogs from './Blogs/Blogs';
import ContactMe from './ContactMe/ContactMe';
import MyProject from './MyProject/MyProject';
import MyService from './MyService/MyService';

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <About></About>
            <Blogs></Blogs>
            <MyService></MyService>
            <MyProject></MyProject>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;