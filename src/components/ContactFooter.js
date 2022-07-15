import React from 'react';
import mail from '../assets/img/mail.jpg';
import linkedin from '../assets/img/linkedin.jpg';

const ContactFooter = () => {
    return (
        <div className='Cfooter'>
            <h1>Contactez moi</h1>
            <ul>
                <li>
                    <img className='img' src={mail} alt="logo mail" />

                    <p><span>jclain52@gmail.com</span></p>
                </li>
                <li>
                    <img className='img' src={linkedin} alt="logo linkedin" />

                    <p><span>Clain Jonathan</span></p>
                </li>
            </ul>
        </div>
    );
};

export default ContactFooter;