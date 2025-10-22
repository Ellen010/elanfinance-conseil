import React, {useEffect, useRef} from 'react'

const Hero = () => {
    const videoRef = useRef();
    useEffect(() => {
        if(videoRef.current) videoRef.current.playbackRate=1;
    }, [])
    return (
        <section id="hero">
            <div className="m-9">
                <h1 className=" text-3xl font bold text-red-800 w-4/5 max-w-2xl rounded-lg shadow-lg">La clarté financière au service de votre croissance</h1>
                    <video ref={videoRef} src="/videos/hero.mp4" controls width="80%" autoPlay playsInline />
            <button>Contactez-nous</button>
            </div>
        </section>)
}
export default Hero
