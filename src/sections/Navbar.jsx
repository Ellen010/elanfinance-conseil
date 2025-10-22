import React from 'react';
import { navLinks } from '../assets/constants/index.js';


const Navbar = () => {
    return (
        <header>
            <nav className="flex flex-row flex-nowrap">
                <div className="w-140 flex-none">
                    <img src="/logo.png" alt="ÉlanFinance Conseil logo" className="logo"/>
                </div>
                <div className="w-94 flex-1">
                    <h1 className="text-3xl font bold text-red-800">ÉlanFinance Conseil </h1>
                </div>
                    <div className="w-150 flex-1 gap-1">
                        <ul className="navBarList">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                 <a href={link.label}>{link.label}</a>
                                </li>
                        ))}
                         </ul>
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
