import {useMediaQuery} from "react-responsive";
import {useGSAP} from "@gsap/react";
import gsap from 'gsap';

const Showcase = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)'});

    useGSAP(() => {
        if(!isTablet) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#showcase',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    pin: true,
                }
            });

            timeline
                .to('.mask img', {
                    transform: 'scale(1.1)'
                }).to('.content', { opacity: 1, y: 0, ease: 'power1.in' });
        }
    }, [isTablet])

    return (
        <section id="showcase" className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="media">
            <div className="media w-full lg:w-3/4 me-5 ml-20 rounded-lg">
            <video src="/videos/video-showcase-one.mp4" loop muted autoPlay playsInline/>
            <div className="mask">
                <img src="/mask-logo.png"/>
            </div>
            </div>
        </div>
            <div className="w-full lg:w-1/2 ms-5 mr-20 ml-30 text-xl lg:text-xl text-justify lg:text-left leading-relaxed">
                <h2 className="mini-title">Le projet « ÉlanFinance Conseil </h2>
                <p className="description">
                        est né d’une longue expérience en comptabilité,
                        analyse financière et gestion budgétaire acquise dans le secteur public et privé à l’international.
                        Après avoir accompagné des entreprises sur leurs problématiques de conformité,
                        de contrôle interne et de stratégie financière, l’ambition est désormais de proposer
                        <span className="text-black"> un service de contrôle de gestion externalisé </span>
                        à destination des PME françaises.
                    </p>

                    <a href="#services" className=" mini-title link" >En savoir plus sur nos services</a>
                <p className="description">La conjonction de l’importance économique des TPE, de leurs fragilités persistantes,
                    et de leurs besoins précis en pilotage financier constitue une opportunité manifeste
                    pour un projet comme
                            <span className="text-black"> ÉlanFinance Conseil </span>
                     . En se positionnant comme un partenaire de
                    proximité, en proposant un suivi digitalisé, modulable, éthique et responsable,
                    l’entreprise répondra non seulement à un besoin économique, mais aussi à une
                    vocation sociale : accompagner les structures essentielles à la vitalité territoriale française. </p>
            </div>

        </section>

    )
}
export default Showcase
