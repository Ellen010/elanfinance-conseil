import React from 'react';
import { navLinks } from '../assets/constants/index.js';


const Navbar = () => {
    return (
        <header>

            <nav className="flex flex-row gap-6">
                <img src="/logo.png" alt="ÉlanFinance Conseil logo" className="logo"/>
                <h1 className="text-3xl font bold text-red-800">ÉlanFinance Conseil </h1>
                <ul className=" flex flex-row gap-3 text-l font bold text-red-800">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                        <a href={link.label}>{link.label}</a>
                            </li>
                        ))}
                </ul>
                <div className={"flex-center gap-3"}>
                    <button>
                        <img src="/search.png" alt="Search" className="navBarIcon"/>
                    </button>
                    <button>
                        <img src="/cart.png" alt="Cart" className="navBarIcon"/>
                    </button>
                </div>
            </nav>
        </header>

    )
}
export default Navbar
