import React from 'react';
import Navbar from '/src/components/Navbar.jsx'
import Hero from '/src/components/Hero.jsx';
import Services from '/src/components/Services.jsx';
import Footer from '/src/components/Footer.jsx';
import TransitionWithBorder from '/src/components/TransitionWithBorder.jsx';

const HomePage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar/>

            <div className={'bg-[url(/images/hero-home.png)] bg-no-repeat bg-cover pt-24 pb-12 rounded-bl-[5rem]'}>
                <Hero/>
            </div>

            <Services/>

            <TransitionWithBorder colorFrom={'bg-white'} colorTo={'bg-gray-800'}/>

            <Footer/>
        </div>
    );
};

export default HomePage;