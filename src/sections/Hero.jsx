import React, { useEffect, useRef } from "react";

const Hero = () => {
    const videoRef = useRef();

    useEffect(() => {
        if (videoRef.current) videoRef.current.playbackRate = 1;
    }, []);

    return (
        <section id="hero" className="pt-32 pb-20 md:pt-40">
            <div className="container mx-auto flex flex-col items-center text-center px-5">

                <h1 className="hero-title">
                    La clarté financière au service de votre croissance
                </h1>
                <video
                    ref={videoRef}
                    src="/videos/hero.mp4"
                    className="w-full max-w-3xl rounded-lg shadow-lg mb-10"
                    autoPlay
                    playsInline
                    muted
                    loop
                />
                <button>
                    Contactez-nous
                </button>
            </div>
        </section>
    );
};

export default Hero;
