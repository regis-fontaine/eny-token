import React from 'react'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Roadmap from '../components/sections/Roadmap'
import News from '../components/sections/News'
import Whitepaper from '../components/sections/Whitepaper'

const Landing = () => {
    return (
        <>
            <Hero />
            {/* <LinkScroll section={"Roadmap"} idSection={"roadmap-eny"} /> */}
            <About />
            <Roadmap />
            <News />
            <Whitepaper />
        </>
    );
}

export default Landing;
