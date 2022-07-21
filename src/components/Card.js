import React from 'react';

const Card = ({ projets }) => { // on récupere l'objet 'projets' qui se trouve dans le fichier portefolio.js
    return (
        <div className="card">
            <h2>{projets.nom}</h2>
            <img src={projets.image} alt="projet *" />

            <p> <span className='span'>{projets.langage}</span> </p>

            <p>{projets.description}</p>
        </div>
    );
};

export default Card;