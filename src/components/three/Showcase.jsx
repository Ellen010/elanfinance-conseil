import React from 'react'

const Showcase = () => {
    return (
        <section className="section">
        <div className="media">
            <video src="/videos/video-showcase-one.mp4" loop muted autoPlay playsInline/>
            <video src="/videos/video-showcase-two.mp4" loop muted autoPlay playsInline/>
        </div>
        </section>

    )
}
export default Showcase
