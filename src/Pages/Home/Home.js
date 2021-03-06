import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import ContactMe from './ContactMe/ContactMe';
import MyProject from './MyProject/MyProject';
import MyService from './MyService/MyService';
import Skills from './Skills/Skills';

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <About></About>
            <MyService></MyService>
            <Skills></Skills>
            <MyProject></MyProject>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;