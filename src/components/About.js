import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logocj from '../assets/img/logocj.gif'

const About = () => {


    const metiers = ["Développeur web",
        "Développeur d'application",
        "Développeur fullstack"];
    const [metier, setMetier] = useState(metiers[0]);


    return (
        <div className="about-container">

            <div className="about-contain">

                <div className="logo"><img src={logocj} alt="logo" /></div>


                <h2>Bonjour et bienvenue sur mon site, je m'appelle <span className='span'>CLAIN Jonathan</span> </h2>
                <h2>Je suis un <span className='span'>{metier}</span>|</h2>
                <h2>Diplômé d'un master en informatique, je suis aujourd hui
                    un développeur full stack, je m'intéresse à tout type de développement</h2>


                <NavLink to="/cv">
                    <input type="submit" value="Plus sur moi" />
                </NavLink>

            </div>

        </div>
    );
};

export default About;