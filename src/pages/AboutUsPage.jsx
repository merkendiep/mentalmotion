import React from 'react';
import Navbar from '@src/components/Navbar.jsx'
import Footer from '@src/components/Footer.jsx';
import Team from '@src/components/Team.jsx';
import TransitionWithBorder from '../components/TransitionWithBorder.jsx';

const AboutUsPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white md:pt-36 lg:pt-44">
            <Navbar/>

            <div className="hero-content flex-col mx-auto lg:min-h-[650px] lg:gap-16 lg:flex-row-reverse">
                <img
                    src="/images/portrait-people-with-plants.jpeg"
                    alt=""
                    className="max-w-xs rounded-b-box rounded-t-[14rem] shadow-2xl outline outline-base-content/5 md:max-w-md"
                />

                <div className="text-center lg:text-start">
                    <h1 className="text-3xl font-black text-gray-700 uppercase md:text-7xl">
                        <span>Onze visie</span>
                    </h1>

                    <p className="py-6 lg:max-w-lg">
                        Er wordt veel <strong>over</strong> studenten gepraat, vergaderd en geschreven.
                        Te vaak mist de <strong>stem van de student</strong> zelf.
                    </p>

                    <p className={'mb-6'}>
                        Daarom zijn we gestart met MentalMotion. Omdat we een beweging en een plek willen creëren waar
                        studenten zelf hun oplossing vinden om <strong>mentaal gezond</strong> te worden. We willen de eigen regie van en
                        studenten vergroten.
                    </p>

                    <p>Help jij mee?</p>
                </div>
            </div>

            <TransitionWithBorder colorFrom={'bg-white'} colorTo={'bg-[#58B095]'}/>

            <div className={'bg-[#58B095] text-white'}>
                <div className="hero-content flex-col mx-auto lg:gap-16 lg:flex-row">
                    <img
                        className="mask mask-squircle max-w-xs md:max-w-lg"
                        src="/images/business-seminar-group.jpeg"/>

                    <div className="text-center lg:text-start">
                        <h1 className="text-3xl font-black uppercase md:text-7xl">
                            <span>Onze doelstelling</span>
                        </h1>

                        <p className="py-6 lg:max-w-lg">
                            MentalMotion is een <strong>ontmoetingsplek</strong> én een <strong>kenniscentrum</strong> ineen.
                            Want als er iemand expert is in weten wat studenten nodig hebben, zijn het studenten zelf.
                            Zij begrijpen de problemen waar medestudenten tegenaanlopen als geen ander.
                        </p>

                        <p className={'mb-6'}>
                            Daarom werken we vanuit <strong>Peer-Support</strong>. Onder gelijkgestemden voel je je gezien.
                            Zo zorgen we voor een aanbod dat aansluit bij behoeften en voor verbinding met de
                            omgeving en elkaar. Zo ontstaat er een sterkere <strong>sociale basis</strong>.
                        </p>
                    </div>
                </div>
            </div>

            <TransitionWithBorder colorFrom={'bg-[#58B095]'} colorTo={'bg-white'}/>

            <div className={'mb-8 pt-16'}>
                <Team/>
            </div>

            <TransitionWithBorder colorFrom={'bg-white'} colorTo={'bg-gray-800'}/>

            <Footer/>
        </div>
    );
};

export default AboutUsPage;