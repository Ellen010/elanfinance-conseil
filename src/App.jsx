import React from 'react'
import Navbar from './sections/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import Showcase from './components/three/Showcase.jsx'
import About from './sections/About.jsx'
import Contact from './sections/Contact.jsx'
import Counseling  from './sections/Counseling.jsx'
import Services from './sections/Services.jsx'
import Footer from './sections/Footer.jsx'
import './index.css'
import gsap from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const App = () => {
    return (
        <>
            <div>
                <Navbar />
                <Hero />
                <Showcase/>
                <About />
                <Counseling/>
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