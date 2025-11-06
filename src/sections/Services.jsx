import React from 'react'

const Services = () => {
    return (
        <section id="services" >
            <div>
                <h1 className="title">Services</h1>
            </div>
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
                <div className="photo-left">
                    <img src="/services-pic.png" alt="ÉlanFinance Virtual Office Space" />
                 </div>


        <div className="w-full text-xl lg:w-1/2 ms-5 ml-30 text-justify lg:text-left leading-relaxed">
            <p className="description">
                L’idée d’ÉlanFinance Conseil est à la fois innovante, réaliste, et scalable. ÉlanFinance Conseil se positionne ainsi comme un partenaire fiable et engagé,
                au service des entrepreneurs, des indépendants et des structures sociales et professionnelles
                qui souhaitent sécuriser leur croissance avec des bases financières solides.
            </p>
            <p className="description">
                ÉlanFinance Conseil est un cabinet 100 % digital, humain, éthique et écoresponsable,
                conçu pour proposer un pilotage financier personnalisé, clair, respectueux de la réglementation,
                et intégré dans une démarche globale de transparence et de responsabilité.
            </p>
            <p className="description">
                L’offre de service est structurée en trois types de missions adaptées à la variété des besoins :
                <p className="description"><span className="text-black my-5"> 1. Mission de base — Forfait mensuel (Abonnement) </span></p>
                    <p className="sub-descriptiondescription ml-15">Reporting financier mensuel (chiffre d’affaires, marges, bilan, trésorerie)</p>
                    <p className="sub-description ml-15">Réunion de suivi  en visioconférence</p>
                    <p className="sub-description ml-15">Accès à l’espace client partagé</p>
                    <p className="sub-description ml-15">Recommandations personnalisées</p>
                    <p className="sub-description ml-15"> Assistance ponctuelle via messagerie ou appel</p>
                <p className="description"> <span className="text-black"> 2. Mission avancée — Forfait plus </span></p>
                <p className="sub-description ml-15">Tout ce qui figure dans le forfait de base</p>
                <p className="sub-description ml-15">Tableaux de bord avancés ou automatisés (Excel ou PowerBI)</p>
                <p className="sub-description ml-15">Formation spécifique (1h par mois)</p>
                <p className="sub-description ml-15">Analyse plus poussée des écarts, pilotage projet, appui à la trésorerie</p>
                <p className="description"><span className="text-black"> 3. Mission ponctuelle ou projet  </span></p>
                <p className="sub-description ml-15">Diagnostic flash structuré (1 journée) : audit du pilotage, recommandations immédiates </p>
                <p className="sub-description ml-15">Construction de budget prévisionnel sur-mesure</p>
                <p className="sub-description ml-15">Création d’un reporting santé : mise en place d’un tableau de bord évolutif</p>
                <p className="sub-description ml-15">Accompagnement à un contrôle fiscal : support documenté</p>
                <p className="sub-description ml-15">Formations thématiques : webinaires ou ateliers courts</p>
                <p className="sub-description ml-15">Vente de supports numériques : guides, checklists, modèles</p>
            </p>
        </div>

            </div>


        </section>
    )
}
export default Services
