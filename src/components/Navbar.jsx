import React, { useState } from 'react'
import Button from './Button'
import logoNav from "../public/img/logo-nav.svg"
import discord from "../public/img/discord.svg"
import telegram from "../public/img/telegram.svg"
import twitter from "../public/img/twitter.svg"

const Navbar = () => {

    const [isOpen, setOpen] = useState(false)


    const handleCLick = (linkTo) => {

    };
    return (
        <nav id={"navbar-desktop"}>
            <img src={logoNav} alt="Logo en Y" />
            <ul className={"links-eny"} >
                <li
                >
                    Home
                </li>
                <li
                >
                    About
                </li>
                <li
                >
                    Roadmap
                </li>
                <li
                >
                    News
                </li>
                <li
                >
                    White Paper
                </li>
                <li>
                    <a>
                        <img src={discord} alt="Icon discord" />
                    </a>
                </li>
                <li>
                    <a>
                        <img src={telegram} alt="Icon telegram" />
                    </a>
                </li>
                <li>
                    <a>
                        <img src={twitter} alt="Icon twitter" />
                    </a>
                </li>
            </ul>
            <Button name="Get started" href="#" />
            <div className="navbar-brand">
                <a
                    role="button"
                    className={`navbar-burger ${isOpen && "is-active"}`}
                    aria-label="menu"
                    aria-expanded="false"
                    onClick={() => setOpen(!isOpen)}
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
        </nav>
    );
}

export default Navbar
