import React from 'react'
import Button from './Button'
import logoNav from "../public/img/logo-nav.svg"
import discord from "../public/img/discord.svg"
import telegram from "../public/img/telegram.svg"
import twitter from "../public/img/twitter.svg"

const Navbar = () => {
    return (
        <div id={"navbar-desktop"}>
            <img src={logoNav} alt="Logo en Y" />
            <ul className={"links-eny"} >
                <li>Home</li>
                <li>About</li>
                <li>Roadmap</li>
                <li>News</li>
                <li>White Paper</li>
                <li>
                    <a href="# " target="_blank" rel="noopener noreferrer">
                        <img src={discord} alt="Icon discord" />
                    </a>
                </li>
                <li>
                    <a href="# " target="_blank" rel="noopener noreferrer">
                        <img src={telegram} alt="Icon telegram" />
                    </a>
                </li>
                <li>
                    <a href="# " target="_blank" rel="noopener noreferrer">
                        <img src={twitter} alt="Icon twitter" />
                    </a>
                </li>
            </ul>
            <Button name="Get started" href="#" />

        </div>
    );
}

export default Navbar
