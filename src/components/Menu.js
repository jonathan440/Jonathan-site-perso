import React from 'react';
import { useState } from 'react';
import { NavLink } from "react-router-dom";


const Menu = () => {
    const [isActive, setIsactive] = useState(true);
    const handleClick = () => {
        isActive ? setIsactive(false) : setIsactive(true);
    }
    return (

        <div className="menu">
            <div className={isActive ? "menu-active" : ""}>


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

        </div>


    );
};

export default Menu;