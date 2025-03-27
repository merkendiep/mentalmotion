import React from 'react';
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx';
import Services from '../components/Services.jsx';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';

const ContactPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white pt-16">
            <Navbar/>

            <Contact/>

            <Footer/>
        </div>
    );
};

export default ContactPage;