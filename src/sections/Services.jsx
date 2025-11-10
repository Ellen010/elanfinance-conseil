import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../assets/constants/animations.js';

const Services = () => {
    useGSAP(() => {
        gsap.from('#services', {
            scrollTrigger: {
                trigger: '#services',
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
        <section id="services" >
            <div>
                <h1 className="title g_fadeIn">Nos Services</h1>
            </div>

                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
                    <div className=" w-full lg:w-3/4 me-5 mr-30 text-lg lg:text-xl text-justify lg:text-left leading-relaxed">

                        <p className="description g_fadeIn"> L’entreprise adopte dès son lancement une charte éthique accessible à tous,
                            affirmant explicitement son engagement en faveur de la transparence intégrale dans la relation client.
                            L’offre tarifaire est présentée de manière claire et modulable, permettant à chaque structure de composer
                            une solution adaptée : abonnement mensuel ajustable, prestations à la carte ou séances ponctuelles de coaching.
                            Le suivi du temps consacré et de la valeur réellement fournie est rigoureux, documenté et restitué sous
                            forme de rapports clairs, afin de garantir la compréhension totale par le client des actions menées.
                            Aucun frais caché n’est appliqué : tout coût additionnel éventuel est toujours déterminé à l’avance,
                            expliqué et validé par écrit, assurant un cadre de collaboration fondé sur la confiance et la lisibilité.</p>
                        <p className="description g_fadeIn">L’offre de service est structurée en trois types de missions adaptées à la variété des besoins :
                         <p className="description"><span className="text-black my-5"> 1. Mission de base — Forfait mensuel (Abonnement) </span></p>
                            <p className="sub-descriptiondescription ml-15">Reporting financier mensuel (chiffre d’affaires, marges, bilan, trésorerie)</p>
                             <p className="sub-description ml-15">Réunion de suivi  en visioconférence</p>
                             <p className="sub-description ml-15">Accès à l’espace client partagé</p>
                             <p className="sub-description ml-15">Recommandations personnalisées</p>
                             <p className="sub-description ml-15"> Assistance ponctuelle via messagerie ou appel</p>
                        <p className="description g_fadeIn"> <span className="text-black"> 2. Mission avancée — Forfait plus </span></p>
                             <p className="sub-description ml-15">Tout ce qui figure dans le forfait de base</p>
                             <p className="sub-description ml-15">Tableaux de bord avancés ou automatisés (Excel ou PowerBI)</p>
                             <p className="sub-description ml-15">Formation spécifique (1h par mois)</p>
                             <p className="sub-description ml-15">Analyse plus poussée des écarts, pilotage projet, appui à la trésorerie</p>
                        <p className="description g_fadeIn"><span className="text-black"> 3. Mission ponctuelle ou projet  </span></p>
                            <p className="sub-description ml-15">Diagnostic flash structuré (1 journée) : audit du pilotage, recommandations immédiates </p>
                            <p className="sub-description ml-15">Construction de budget prévisionnel sur-mesure</p>
                            <p className="sub-description ml-15">Création d’un reporting santé : mise en place d’un tableau de bord évolutif</p>
                            <p className="sub-description ml-15">Accompagnement à un contrôle fiscal : support documenté</p>
                            <p className="sub-description ml-15">Formations thématiques : webinaires ou ateliers courts</p>
                            <p className="sub-description ml-15">Vente de supports numériques : guides, checklists, modèles</p>
                </p>
        </div>
                <div className="photo-right g_fadeIn">
                    <img src="/services-pic.png" alt="ÉlanFinance Sevices Offer" />
                </div>

            </div>


        </section>
    )
}
export default Services
