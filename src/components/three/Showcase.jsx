import React from 'react'

const Showcase = () => {
    return (
        <section id="showcase">
        <div className="media">
            <video src="/videos/video-showcase-one.mp4" loop muted autoPlay playsInline/>
            <div className="mask">
                <img src="/videos/mask-showcase-two.mp4"/>

            </div>
        </div>
        </section>

    )
}
export default Showcase
