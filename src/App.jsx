import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './sections/Navbar.jsx';
import Footer from './sections/Footer.jsx';
import Hero from './sections/Hero.jsx';
import Showcase from "./components/three/Showcase.jsx";
import About from './sections/About.jsx';
import Counseling from './sections/Counseling.jsx';
import Services from './sections/Services.jsx';
import Contact from './sections/Contact.jsx';

import './index.css';

const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Showcase/>
            <About />
            <Counseling/>
            <Services />
            <Contact  />
            <Footer />

            <p className="text-s font bold text-red-800 text-center mt-4">
                All rights reserved to ÉlanFinance Conseil ©.
            </p>
            <p className="text-s font bold text-red-800 text-center">
                Website created by Yvelines Technologies.
            </p>
        </>
    );
};

export default App;
