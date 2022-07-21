import React from 'react';
import Card from '../components/Card';
import Menu from '../components/Menu';

const Portefolio = () => {

    const dataProjets = [
        {
            id: 1,
            nom: "App cinéma",
            image: "chemin image",
            langage: "React, html/sass, js",
            description: "Site web crée en react pour accéder aux informations des films en manipulant une base de données"
        },
        {
            id: 2,
            nom: "BPMS-GED",
            image: "chemin image",
            langage: "C#, asp.net",
            description: "Configuration de la solution process studio de Avantean pour la gestion des processus métiers, développemnt d'agent en C#, de composant"
        },
        {
            id: 3,
            nom: "Mon site perso",
            image: "chemin image",
            langage: "React, html/sass , js",
            description: "Mon site web personnelle ainsi que mon portefolio"
        }

    ];



    return (
        <div className="portefolioC">
            <Menu />


            <div className="portefolio">

                <h1>Mes realisations</h1>

                <div className="listeProjets">
                    {dataProjets.map((projet) => (
                        <Card projets={projet} />

                    ))}

                </div>


            </div>
        </div>
    );
};

export default Portefolio;