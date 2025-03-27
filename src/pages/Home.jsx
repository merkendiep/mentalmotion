import React from 'react';
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx';
import Services from '../components/Services.jsx';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar/>

            <div className={'bg-[url(/images/hero-home.png)] bg-no-repeat bg-cover pt-24 pb-12 rounded-b-[8rem]'}>
                <Hero/>
            </div>

            <Services/>

            <Contact/>

            <Footer/>
        </div>
    );
};

export default Home;