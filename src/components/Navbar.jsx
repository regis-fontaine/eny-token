import React, { useState } from 'react'
import { Link as Internal } from 'react-scroll'
import { Link } from 'react-router-dom'

import Button from './Button'
import logoNav from "../public/img/logo-nav.svg"
import discord from "../public/img/discord.svg"
import telegram from "../public/img/telegram.svg"
import twitter from "../public/img/twitter.svg"

const Navbar = () => {

    const [isOpen, setOpen] = useState(false)
    const [page, setpage] = useState("")

    return (
        <nav id={"navbar-desktop"}>
            <img src={logoNav} alt="Logo en Y" />
            <ul className={"links-eny"} >
                <li> <Link to={"/"}>{"Home"}</Link></li>
                <li><Internal
                    to={"about-eny"}
                    smooth={true}
                    duration={1000}
                    isDynamic={true}
                    offset={-50}

                >
                    {"About"}
                </Internal>
                </li>
                <li>
                    <Internal
                        to={"roadmap-eny"}
                        smooth={true}
                        duration={1000}
                        isDynamic={true}
                        offset={-50}
                    >
                        {"Roadmap"}
                    </Internal>

                </li>
                <li><Internal
                    to={"news-eny"}
                    smooth={true}
                    duration={1000}
                    isDynamic={true}
                    offset={-50}
                >
                    {"News"}
                </Internal>
                </li>
                <li><Link to={"/whitepaper"} target="_blank" rel="noopener noreferrer" >{"White Paper"}</Link></li>
                <li>
                    <Link target="_blank" rel="noopener noreferrer"
                        to={{ pathname: "https://discord.com" }}
                    >
                        <img src={discord} alt="Icon discord" />
                    </Link>
                </li>
                <li>
                    <Link target="_blank" rel="noopener noreferrer"
                        to={{ pathname: "https://telegram.com" }}
                    >
                        <img src={telegram} alt="Icon telegram" />
                    </Link>
                </li>
                <li>
                    <Link target="_blank" rel="noopener noreferrer"
                        to={{ pathname: "https://twitter.com" }}
                    >
                        <img src={twitter} alt="Icon twitter" />
                    </Link>
                </li>
            </ul>
            <Button name="Get started" classSup={"nav-btn"} to={"/dapp"} />
            {/* <div className="navbar-brand">
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
                </div> */}

        </nav>
    );
}

export default Navbar
