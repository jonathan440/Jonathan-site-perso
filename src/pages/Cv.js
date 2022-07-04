import React from 'react';
import Menu from '../components/Menu';


const Cv = () => {
    return (

        <div className="cv-container">

            <Menu />
            <div className="cv-contains">


                <div className="info">
                    <h1>Clain Jonathan</h1>
                    <p>Diplômé d'un master en informatique, je suis adepte des nouvelles technologies et d'informatiques.</p>
                    <p>Concevoir du contenu est pour moi plus q'un métier, c'est une passion.</p>

                    <div className="btn-cv">

                        <a href="../assets/pdf/cv.pdf" download>
                            <input type="submit" value="cv" />
                        </a>

                    </div>
                </div>

                <div className="formExp">

                    <div className="formations">
                        <h1>Formations</h1>
                        <ul>
                            <li> <h2>Master informatique</h2>
                                <p>Université de la Réunion <span>2018-2020</span></p>
                            </li>
                            <li><h2>Licence informatique</h2>
                                <p>Université de la Réunion <span>2015-2018</span></p>
                            </li>
                            <li><h2>Baccalauréat Scientifique</h2>
                                <p>Lycée Sarda Garriga <span>2015</span></p>
                            </li>
                        </ul>
                    </div>

                    <div className="experiences">
                        <h1>Expériences</h1>

                        <ul>
                            <li>
                                <h2>Technicien informatique</h2>
                                <p>Ravate <span>2022</span></p>
                            </li>
                            <li>
                                <h2>Stagiaire</h2>
                                <p>Service DSI <span>2020</span></p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Cv;