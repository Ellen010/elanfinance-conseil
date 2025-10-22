import React from 'react'
import Navbar from './sections/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Contact from './sections/Contact.jsx'
import Services from './sections/Services.jsx'
import Footer from './sections/Footer.jsx'
import './App.css';




function App() {

    return (
        <>
            <div>
                <Navbar />
                <Hero />
                <About />
                <Services />
                <Contact  />
                <Footer />
            </div>

            <p className="text-s font bold text-red-800">
                All rights reserved to ÉlanFinance Conseil ©.
            </p>
            <p className="text-s font bold text-red-800">
                Website created by Yvelines Technologies.
            </p>
        </>
    )
}

export default App