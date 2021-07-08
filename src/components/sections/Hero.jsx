import React from 'react';
import Button from '../Button'
import illustration from '../../public/img/uillustration.png'
import "./hero.css"

const Hero = () => {
    return (
        <>
            {/* Hero */}
            <section id={"hero-eny"}>
                <div className={"hero-container"} >
                    <div className={"col-r"} >
                        <h1>En Y, le token qui cabre sur le marché ! </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat bibendum dolor ut consequat. Nam commodo tortor id tortor tincidunt maximus. </p>
                        <div className={"hero-btn-container"}>
                            <Button name="Get started" to={"/dapp"} />
                            <Button name="White Paper" to={"/"} />
                        </div>
                    </div>
                    <div className={"col-l"} >
                        <img src={illustration} alt="En y illustration" />
                    </div>
                </div>
                <div className={"counter-container"} >
                    <div className={"counter"} >
                        <span className={"counter-number"} >$0.30</span>
                        <p className={"counter-title"} >Current Price</p>
                    </div>
                    <div className={"counter"} >
                        <span className={"counter-number"} >35,766</span>
                        <p className={"counter-title"} >Holders</p>
                    </div>
                    <div className={"counter"} >
                        <span className={"counter-number"} >6,350,000,000</span>
                        <p className={"counter-title"} >Supply</p>
                    </div>
                    <div className={"counter"} >
                        <span className={"counter-number"} >$10729.80</span>
                        <p className={"counter-title"} >Market Cap</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;
