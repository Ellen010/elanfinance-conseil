import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../assets/constants/animations.js';

const Counseling = () => {
    useGSAP(() => {
        gsap.from('#counseling', {
            scrollTrigger: {
                trigger: '#counseling',
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
        <section id="counseling" >
            <div>
                <h1 className="title g_fadeIn">Accompagnement</h1>
            </div>
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
                <div className="photo-left">
                    <img src="/counseling-pic.png" alt="ÉlanFinance Virtual Office Space" />
                </div>


                <div className="w-full text-xl lg:w-1/2 ms-5 ml-30 text-justify lg:text-left leading-relaxed">
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
                    <p className="description g_fadeIn">
                    La stratégie technologique d’ÉlanFinance Conseil repose sur une infrastructure 100 % numérique,
                    conçue pour garantir accessibilité, sécurité, efficacité opérationnelle et expérience utilisateur fluide.
                    Cette orientation digitale s’inscrit non seulement dans un souci d’optimisation des processus, mais aussi
                    dans une démarche écologique et responsable.
                    </p>
                </div>

            </div>


        </section>
    )
}
export default Counseling
