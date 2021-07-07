import React from 'react'
import Card from '../Card'
import './about.css'
const About = () => {
    return (
        <>
            {/* About */}
            <section id={"about-eny"} >
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
        </>
    );
}

export default About
