import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../assets/constants/animations.js';


const About = () => {
    useGSAP(() => {
        gsap.from('#about', {
            scrollTrigger: {
                trigger: '#about',
                start: '20% bottom'
            },
            opacity: 0,
            scale: 2,
            duration: 2,
            ease: 'power2.inOut'
        })

        animateWithGsap('.g_fadeIn', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.inOut'
        })
    }, []);

    return (
        <section id="about">
        <div>
            <h1 className="title g_fadeIn">À propos</h1>
        </div>
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
                    <div className=" w-full lg:w-3/4 me-5 mr-30 text-lg lg:text-xl text-justify lg:text-left leading-relaxed">
                        <p className="description g_fadeIn">
                            Dans un monde économique de plus en plus complexe et réglementé,
                            la comptabilité ne se limite plus à l’enregistrement des opérations financières.
                            Elle est devenue un levier stratégique essentiel à la performance, à la transparence
                            et à la pérennité des organisations. Que ce soit pour répondre aux exigences fiscales,
                            sécuriser des financements, anticiper les risques ou piloter la rentabilité,
                            les entreprises – en particulier les petites et moyennes structures –
                            ont un besoin croissant d’un accompagnement comptable personnalisé, rigoureux et fiable.
                        </p>
                        <p className="description g_fadeIn">
                            L’idée d’ÉlanFinance Conseil est à la fois innovante, réaliste, et scalable. ÉlanFinance Conseil se positionne ainsi comme un partenaire fiable et engagé,
                            au service des entrepreneurs, des indépendants et des structures sociales et professionnelles
                            qui souhaitent sécuriser leur croissance avec des bases financières solides.
                        </p>
                        <p className="description g_fadeIn">
                            ÉlanFinance Conseil est un cabinet 100 % digital, humain, éthique et écoresponsable,
                            conçu pour proposer un pilotage financier personnalisé, clair, respectueux de la réglementation,
                            et intégré dans une démarche globale de transparence et de responsabilité.
                        </p>
                    </div>

                <div className="photo-right g_fadeIn">
                    <img src="/about-pic.png" alt="ÉlanFinance Virtual Office Space" />
                </div>
            </div>
        </section>

    )
}
export default About
