import React from 'react'
import Timeline from '../Timeline'
import "./roadmap.css"

const Roadmap = () => {
    return (
        <>
            {/* Roadmap */}
            <section id={"roadmap-eny"}>
                <div className={"eny-title-container"} >
                    <h2>Roadmap</h2>
                    <p className={"eny-subtitle"} >Roadmap.Roadmap.Roadmap.Roadmap.Roadmap.Roadmap.Roadmap</p>
                </div>
                <div className={"timeline-container"} >
                    <Timeline />
                </div>
            </section>
        </>
    );
}

export default Roadmap;