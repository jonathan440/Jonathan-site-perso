import React from 'react';
import Card from '../components/Card';
import Menu from '../components/Menu';

const Portefolio = () => {
    const projets = {
        nom: "App cinéma",
        image: "chemin image",
        description: "Site web crée en react pour accéder aux informations des films en manipulant une base de données"
    };

    console.log(projets);

    return (
        <div className="portefolioC">
            <Menu />


            <div className="portefolio">

                <h1>Mes realisations</h1>

                <div className="listeProjets">
                    <Card projets={projets} />
                </div>


            </div>
        </div>
    );
};

export default Portefolio;