import React from 'react';
import Navbar from '../components/Navbar.jsx'
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';
import TransitionWithBorder from '../components/TransitionWithBorder.jsx';

const ContactPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar/>

            <div className={'pt-32 lg:pt-44'}>
                <Contact/>
            </div>

            <TransitionWithBorder colorFrom={'bg-white'} colorTo={'bg-gray-800'}/>

            <Footer/>
        </div>
    );
};

export default ContactPage;