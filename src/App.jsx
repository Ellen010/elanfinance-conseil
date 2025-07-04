import React from 'react'
import Navbar from './sections/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Contact from './sections/Contact.jsx'
import Services from './sections/Services.jsx'
import Footer from './sections/Footer.jsx'



function App() {

    return (
        <>
            <div>
                <Navbar />
                <Hero />
                <About />
                <Contact  />
                <Services />
                <Footer />
            </div>

            <p className="read-the-docs">
                All rights reserved to ÉlanFinance Conseil ©.
            </p>
            <p className="read-the-docs">
                Website created by Yvelines Technologies.
            </p>
        </>
    )
}

export default App