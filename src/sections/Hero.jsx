import React, {useEffect, useRef} from 'react'

const Hero = () => {
    const videoRef = useRef();
    useEffect(() => {
        if(videoRef.current) videoRef.current.playbackRate=2;
    }, [])
    return (
        <section id="hero">
            <div>
                <h1 className="text-3xl font bold text-red-800">La clarté financière au service de votre croissance</h1>
                <div className="flex-center flex-space-around">
                    <video ref={videoRef} src="/videos/hero.mp4" controls width="80%" autoPlay playsInline />
                </div>
            </div>
        </section>)
}
export default Hero
