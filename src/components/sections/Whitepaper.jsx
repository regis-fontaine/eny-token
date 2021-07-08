import React from 'react'
import Button from '../Button'

import "./whitepaper.css"

const Whitepaper = () => {
    return (
        <>
            {/* White Paper */}
            <section id={"whitepaper-eny"} >
                <div className={"eny-title-container"} >
                    <h2>White Paper</h2>
                    <p className={"eny-subtitle"} >WhitePaper.WhitePaper.WhitePaper.WhitePaper.WhitePaper</p>
                </div>
                <Button name="White Paper" to={"/"} />
            </section>
        </>
    );
}

export default Whitepaper
