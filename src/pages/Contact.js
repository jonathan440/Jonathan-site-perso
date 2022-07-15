import React from 'react';
import ContactFooter from '../components/ContactFooter';
import Menu from '../components/Menu';

const Contact = () => {
    return (
        <div className="contact">
            <Menu />
            <h1>Formulaire</h1>
            <ContactFooter />
        </div>
    );
};

export default Contact;