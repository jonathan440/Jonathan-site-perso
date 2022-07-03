import React from 'react';

const About = () => {
    const metiers = ["Développeur web",
        "Développeur d'application",
        "Développeur fullstack"];


    const job = () => {
        let pos = 0;
        return (metiers[pos])
    };

    return (
        <div className="about-container">
            <div className="about-contain">

                <h1>Bonjour et bienvenue sur mon site, je m'appelle <span className='span'>CLAIN Jonathan</span> </h1>
                <h1>Je suis un <span className='span'>{job()}</span>|</h1>
                <h2>Diplômé d'un master en informatique, je suis aujourd hui
                    un développeur full stack, je m'intéresse à tout type de développement</h2>
                <input type="submit" value="Plus sur moi" />
            </div>

        </div>
    );
};

export default About;