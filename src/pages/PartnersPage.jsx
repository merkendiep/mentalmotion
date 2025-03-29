import React from 'react';
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx';
import TransitionWithBorder from '../components/TransitionWithBorder.jsx';

const partners = [
    {
        name: 'Gemeente Utrecht',
        logo: '/images/partners/GemeenteUtrecht.png',
        description: 'Text over inzet van gemeente utrecht',
    },
    {
        name: 'Hogeschool Utrecht',
        logo: '/images/partners/HU.jpg',
        description: '',
    },
    {
        name: 'MBO Utrecht',
        logo: '/images/partners/MBO-Utrecht.jpg',
        description: '',
    },
    {
        name: 'Nimento Utrecht',
        logo: '/images/partners/NimentoUtrecht.png',
        description: '',
    },
    {
        name: 'Grafisch Lyceum Utrecht',
        logo: '/images/partners/GLU.png',
        description: '',
    },
];

const PartnersPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white md:pt-36 lg:pt-44">
            <Navbar/>

            <div className={'max-w-7xl mb-16 mx-auto'}>
                <div className="hero-content flex-col mx-auto gap-8 lg:flex-row">
                    <div className="text-center lg:text-center">
                        <h1 className="text-3xl font-black text-gray-700 mb-8 uppercase md:text-6xl">
                            <span>Onze Partners</span>
                        </h1>

                        <p className={'text-xl font-black text-gray-700 mb-8 md:text-2xl'}>
                            We zijn heel blij met onze partners die ons steunen en met ons Utrecht nog mooier maken.
                            Wil je je ook aansluiten bij onze beweging? We horen graag van je!
                        </p>
                    </div>
                </div>

                <div className={'flex justify-center flex-row flex-wrap gap-8'}>
                    {
                        partners.map((partner, index) => {
                            return <div key={index} className="card bg-white w-96 shadow-sm">
                                <figure>
                                    <img
                                        src={partner.logo}
                                        alt={partner.name + ' logo'}/>
                                </figure>

                                <div className="card-body">
                                    <h2 className="card-title">{partner.name}</h2>
                                    <p>{partner.description}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Ga naar de website</button>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>

            <TransitionWithBorder colorFrom={'bg-white'} colorTo={'bg-gray-800'}/>

            <Footer/>
        </div>
    );
};

export default PartnersPage;