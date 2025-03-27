import React from 'react';
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx';
import Team from '../components/Team.jsx';

const AboutUsPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white pt-32">
            <Navbar/>

            <div className="hero-content flex-col mx-auto lg:min-h-[650px] lg:gap-16 lg:flex-row-reverse">
                <img
                    src="/images/portrait-people-with-plants.jpeg"
                    alt=""
                    className="max-w-xs rounded-b-box rounded-t-[14rem] shadow-2xl outline outline-base-content/5 md:max-w-md"
                />

                <div className="text-center font-urbanist lg:text-start">
                    <h1 className="text-3xl font-black text-gray-700 uppercase md:text-7xl">
                        <span>Onze visie</span>
                    </h1>

                    <p className="py-6 lg:max-w-lg">
                        Er wordt veel <strong>over</strong> studenten gepraat, vergaderd en geschreven.
                        Te vaak mist de <strong>stem van de student</strong> zelf.
                    </p>

                    <p className={'mb-6'}>
                        Daarom zijn we gestart met MentalMotion. Omdat we een beweging en een plek willen creëren waar
                        studenten zelf hun oplossing vinden om mentaal gezond te worden. We willen de eigen regie van en
                        studenten vergroten.
                    </p>

                    <p>Help jij mee?</p>
                </div>
            </div>

            <div className="hero-content flex-col mx-auto lg:mb-16 lg:min-h-[650px] lg:gap-16 lg:flex-row">
                <img
                    className="mask mask-squircle max-w-xs md:max-w-lg"
                    src="/images/business-seminar-group.jpeg"/>

                <div className="text-center font-urbanist lg:text-start">
                    <h1 className="text-3xl font-black text-gray-700 uppercase md:text-7xl">
                        <span>Onze doelstelling</span>
                    </h1>

                    <p className="py-6 lg:max-w-lg">
                        Er wordt veel <strong>over</strong> studenten gepraat, vergaderd en geschreven. Te vaak mist de
                        <strong>stem van de student</strong> zelf.
                    </p>

                    <p className={'mb-6'}>
                        Daarom zijn we gestart met MentalMotion. Omdat we een beweging en een plek willen creëren waar
                        studenten zelf hun oplossing vinden om mentaal gezond te worden. We willen de eigen regie van en
                        studenten vergroten.
                    </p>

                    <p>Help jij mee?</p>
                </div>
            </div>

            <div className={'mb-16'}>
                <Team/>
            </div>

            <Footer/>
        </div>
    );
};

export default AboutUsPage;