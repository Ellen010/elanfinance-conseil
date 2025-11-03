import React from 'react';
import { navLinks } from '../assets/constants/index.js';

const Navbar = () => {
    return (
        <header>
            <nav className="flex justify-between items-center w-full px-8 py-4 bg-orange-50">
                <div className="flex items-center gap-4">
                    <img src="/logo.png" alt="ÉlanFinance Conseil logo" className="logo" />
                    <h1 className="absolute left-1/2 transform -translate-x-1/2 text-3xl font-bold text-red-800">ÉlanFinance Conseil</h1>
                </div>
                <div className="flex items-center gap-6">
                    <ul className="flex items-center gap-6 navBarList">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href || '#'}
                                    className="text-red-950 opacity-80 text-m hover:scale-120 transition-all duration-300 ease-in-out"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex items-center gap-4">
                        <button className="hover:scale-110 transition-all">
                            <img src="/search.png" alt="Search" className="navBarIcon" />
                        </button>
                        <button className="hover:scale-110 transition-all">
                            <img src="/cart.png" alt="Cart" className="navBarIcon" />
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
