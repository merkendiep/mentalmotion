import React from 'react';
import Navbar from '/src/components/Navbar.jsx'
import Contact from '/src/components/Contact.jsx';
import Footer from '/src/components/Footer.jsx';

const NewsletterPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar/>

            <div className={'mb-16 pt-32 lg:pt-44'}>
                <Contact/>
            </div>

            <Footer/>
        </div>
    );
};

export default NewsletterPage;