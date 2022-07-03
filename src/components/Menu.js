import React from 'react';
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (

        <div className="menu">

            <div className="logo"><img src="#" alt="logo" /></div>
            <nav>
                <ul>
                    <NavLink to="/"
                        className={(nav) => (nav.isActive ? "nav-active" : "")}
                    >
                        <li>Accueil</li>
                    </NavLink>

                    <NavLink to="/cv"
                        className={(nav) => (nav.isActive ? "nav-active" : "")}
                    >
                        <li>Cv</li>
                    </NavLink>

                    <NavLink to="/portefolio"
                        className={(nav) => (nav.isActive ? "nav-active" : "")}
                    >
                        <li>Portefolio</li>
                    </NavLink>

                    <NavLink to="/contact"
                        className={(nav) => (nav.isActive ? "nav-active" : "")}
                    >
                        <li>Contact</li>
                    </NavLink>

                </ul>
            </nav>
        </div>


    );
};

export default Menu;