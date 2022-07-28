import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from "react-router-dom";


const Menu = () => {
    const [isActive, setIsactive] = useState(true);

    // visibilité du menu
    const [visible, setVisible] = useState(true);
    const controlMenu = () => {
        if (window.scrollY > 100) {
            setVisible(false);
        }
        else {
            setVisible(true);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', controlMenu);
        return () => {
            window.removeEventListener('scroll', controlMenu);
        }
    }, [])

    return (

        <div className={visible ? "menu" : "menuHide"}>

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