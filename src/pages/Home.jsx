import React from 'react';
import Navbar from '../components/Navbar.jsx'
import HeroSection from '../components/HeroSection.jsx';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar/>

            <HeroSection/>

            {/* Content Sections */}
            <section className="py-16 px-6">
                <div className="container mx-auto">
                    {/* Peer Support Section */}
                    <div className="flex flex-col md:flex-row items-center gap-8 mb-24">
                        <div className="w-full md:w-1/2 bg-gray-50 p-8 rounded-lg">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Peer support</h2>
                            <p className="text-gray-700 mb-4">
                                Je kan bij ons terecht voor <span className="font-bold">gratis</span> gesprekken met
                                opgeleide peer guides. Ontvang ondersteuning en kom verder met onze opgeleide peers. Of
                                kom bij ons werken
                                als Peer!
                            </p>
                            <p className="text-gray-700 mb-6">
                                Je kan bij ons terecht voor gratis gesprekken met
                                opgeleide peer guides. Ontvang ondersteuning en kom verder met onze opgeleide peers. Of
                                kom bij ons werken
                                als Peer!
                            </p>
                            <button className="btn btn-primary">
                                Lees verder
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M9 5l7 7-7 7"/>
                                </svg>
                            </button>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img src="/api/placeholder/540/320" alt="Peer support session"
                                 className="rounded-lg w-full h-auto shadow-lg"/>
                        </div>
                    </div>

                    {/* Study Spaces Section */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-24">
                        <div className="w-full md:w-1/2 bg-gray-50 p-8 rounded-lg">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Studieruimtes</h2>
                            <p className="text-gray-700 mb-6">
                                Maak gebruik van onze <span className="font-bold">gratis</span> studie en
                                vergaderruimtes. Geniet van thee, koffie en koekjes
                                terwijl je bij ons komt studeren, ontmoeten vergaderen
                                of chillen op de bank. Ontmoet andere studenten en
                                deel samen je ideeën over studentenwelzijn.
                            </p>
                            <button className="btn btn-primary">
                                Lees verder
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M9 5l7 7-7 7"/>
                                </svg>
                            </button>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img src="/api/placeholder/540/320" alt="Student studying"
                                 className="rounded-lg w-full h-auto shadow-lg"/>
                        </div>
                    </div>

                    {/* Brainstorm Section */}
                    <div className="flex flex-col md:flex-row items-center gap-8 mb-24">
                        <div className="w-full md:w-1/2 bg-gray-50 p-8 rounded-lg">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Brainstormen over
                                studentenwelzijn</h2>
                            <p className="text-gray-700 mb-6">
                                Wat denk jij dat er moet gebeuren? Bij ons is
                                er de ruimte om samen met andere
                                studenten te onderzoeken wat er moet
                                gebeuren, zowel lokaal als landelijk aan
                                studentenwelzijn. Gericht op preventiezorg,
                                eigenaarschap, participatie en zingeving.
                            </p>
                            <button className="btn btn-primary">
                                Lees verder
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M9 5l7 7-7 7"/>
                                </svg>
                            </button>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img src="/api/placeholder/540/320" alt="Students brainstorming"
                                 className="rounded-lg w-full h-auto shadow-lg"/>
                        </div>
                    </div>

                    {/* New Initiatives Section */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                        <div className="w-full md:w-1/2 bg-gray-50 p-8 rounded-lg">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Samen nieuw initiatieven opzetten</h2>
                            <p className="text-gray-700 mb-6">
                                We werken samen aan nieuwe initiatieven en
                                iedereen is welkom om een idee op te zetten,
                                mee te denken en samen iets nieuws op te
                                zetten.
                            </p>
                            <button className="btn btn-primary">
                                Lees verder
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M9 5l7 7-7 7"/>
                                </svg>
                            </button>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img src="/api/placeholder/540/320" alt="Students collaborating"
                                 className="rounded-lg w-full h-auto shadow-lg"/>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12 mt-auto">
                <div className="container mx-auto px-6">
                    {/* Footer content would go here */}
                </div>
            </footer>
        </div>
    );
};

export default Home;