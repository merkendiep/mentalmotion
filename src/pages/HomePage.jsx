import React from 'react';
import Navbar from '../components/Navbar'
import Hero from '../components/Hero';
import Services from '../components/Services';
import Footer from '../components/Footer';
import TransitionWithBorder from '../components/TransitionWithBorder';

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