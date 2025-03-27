import React from 'react';
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx';

const AboutUsPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white pt-32">
            <Navbar/>

            <div className="hero-content flex-col lg:flex-row-reverse mx-auto">
                <img
                    src="/images/portrait-people-with-plants.jpeg"
                    alt=""
                    className="max-w-xs rounded-b-box rounded-t-[14rem] shadow-2xl outline outline-base-content/5 md:max-w-md"
                />

                <div className="text-center font-urbanist lg:text-start">
                    <h1 className="text-3xl font-black text-gray-700 uppercase md:text-7xl">
                        <span>Over ons</span>
                    </h1>

                    <p className="py-6 lg:max-w-lg">
                        Door middel van peer support zorgen wij voor een mentaal gezonder Utrecht!
                    </p>
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default AboutUsPage;