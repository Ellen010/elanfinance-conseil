import React from 'react';
import { navLinks } from '../assets/constants/index.js';

const Navbar = () => {
    return (
        <header>

            <nav>
                <img src="/logo.png" alt={"ÉlanFinance Conseil logo"}/>
                <ul>
                    {[
                        {label: 'Accueil'},
                        {label: 'Conseil & Stratégie'},
                        {label: 'Accompagnement'},
                        {label: 'À propos'},
                        {label: 'Contact'},
                    ].map((link) => (
                        <li key={label}>
                        <a href={label}>{label}</a>
                            </li>
                        ))}
                </ul>
            </nav>
            <h1 className="text-3xl font bold text-red-800">ÉlanFinance Conseil </h1>
        </header>

    )
}
export default Navbar
