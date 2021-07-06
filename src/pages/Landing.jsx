import React from 'react'
import illustration from '../public/img/uillustration.png'
import Button from '../components/Button'
import Card from '../components/Card'
import Timeline from '../components/Timeline'

const Landing = () => {
    return (
        <>
            <main>
                {/* Hero */}
                <section className={"hero-eny"}>
                    <div className={"hero-container"} >
                        <div className={"col-r"} >
                            <h1>En Y, le token qui cabre sur le marché ! </h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat bibendum dolor ut consequat. Nam commodo tortor id tortor tincidunt maximus. </p>
                            <div className={"hero-btn-container"}>
                                <Button name="Getting start" href="#" />
                                <Button name="White Paper" href="#" />
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

                {/* About */}
                <section className={"about-eny"} >
                    <div className={"eny-title-container"} >
                        <h2>About</h2>
                        <p className={"eny-subtitle"} >About.About.About.About.About.About.About</p>
                    </div>
                    <div className={"about-container"}>
                        <div className={"about-col-r"} >
                            <h3>Lorem ipsum bla bla bla bla </h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. </p>
                        </div>
                        <div className={"about-col-l"} >
                            <Card title={"Community"} desc={"Donec odio nisl, finibus imperdiet vehicula nec, tempus eu sem. Curabitur eget nulla erat."} />
                            <Card title={"ICO"} desc={"Donec odio nisl, finibus imperdiet vehicula nec, tempus eu sem. Curabitur eget nulla erat."} />
                            <Card title={"Utility"} desc={"Donec odio nisl, finibus imperdiet vehicula nec, tempus eu sem. Curabitur eget nulla erat."} />
                        </div>
                    </div>
                </section>

                {/* Roadmap */}
                <section className={"roadmap-eny"}>
                    <div className={"eny-title-container"} >
                        <h2>Roadmap</h2>
                        <p className={"eny-subtitle"} >Roadmap.Roadmap.Roadmap.Roadmap.Roadmap.Roadmap.Roadmap</p>
                    </div>
                    <div className={"timeline-container"} >
                        <Timeline />
                    </div>
                </section>
            </main>
        </>
    );
}

export default Landing;
