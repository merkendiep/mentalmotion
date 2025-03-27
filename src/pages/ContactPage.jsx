import React from 'react';
import Navbar from '../components/Navbar.jsx'
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';

const ContactPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar/>

            <div className={'mb-16'}>
                <Contact/>
            </div>

            <Footer/>
        </div>
    );
};

export default ContactPage;