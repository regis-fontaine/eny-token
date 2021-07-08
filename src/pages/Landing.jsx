import React from 'react'

import Footer from '../components/Footer'

import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Roadmap from '../components/sections/Roadmap'
import News from '../components/sections/News'
import Whitepaper from '../components/sections/Whitepaper'


const Landing = () => {
    return (
        <>

            <Hero />
            <About />
            <Roadmap />
            <News />
            <Whitepaper />
            <Footer />
        </>
    );
}

export default Landing;
