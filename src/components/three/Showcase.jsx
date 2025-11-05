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
            <div className="media w-full lg:w-3/4 me-5 ml-20">
            <video src="/videos/video-showcase-one.mp4" loop muted autoPlay playsInline/>
            <div className="mask">
                <img src="/mask-logo.png"/>
            </div>
            </div>
        </div>
            <div className="w-full lg:w-1/2 ms-5 mr-20 ml-30 text-xl lg:text-xl text-justify lg:text-left leading-relaxed">
                <h2>Le projet « ÉlanFinance Conseil </h2>
                <p className="description">
                        est né d’une longue expérience en comptabilité,
                        analyse financière et gestion budgétaire acquise dans le secteur public et privé à l’international.
                        Après avoir accompagné des entreprises sur leurs problématiques de conformité,
                        de contrôle interne et de stratégie financière, l’ambition est désormais de proposer
                        <span className="text-black"> un service de contrôle de gestion externalisé </span>
                        à destination des PME françaises.
                    </p>

                <p className="description">
                        Ce projet répond à un besoin croissant de flexibilité et d’expertise sans
                        que les entreprises aient à recruter en interne.
                    </p>
                    <a href="#services" className="link" >En savoir plus sur nos services</a>
                <p className="description">Forte d’une expérience de plus de
                            <span className="text-black"> 15 ans </span>
                            dans le domaine de la comptabilité,
                            de l’analyse financière et de la gestion budgétaire, notamment dans le secteur public et en tant
                            que consultante, la fondatrice de ÉlanFinance Conseil a identifié un besoin croissant des petites
                            structures françaises : avoir accès à une expertise financière flexible, externalisée et fiable.</p>
            </div>

        </section>

    )
}
export default Showcase
