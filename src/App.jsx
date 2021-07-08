import React, { useState } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Dapp from './pages/Dapp'

import Navbar from './components/Navbar'
import logoNav from "./public/img/logo-nav.svg"
import discord from "./public/img/discord.svg"
import telegram from "./public/img/telegram.svg"
import twitter from "./public/img/twitter.svg"


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}

        <nav id={"navbar-desktop"}>
          <div></div>
          <img src={logoNav} alt="Logo en Y" />
          <ul className={"links-eny"} >
            <li> <Link to={"/"}>{"Home"}</Link></li>
            <li><Link to={"/"}>{"About"}</Link></li>
            <li><Link to={"/"}>{"Roadmap"}</Link></li>
            <li><Link to={"/"}>{"News"}</Link></li>
            <li><Link to={"/"}>{"White Paper"}</Link></li>
            <li><img src={discord} alt="Icon discord" /></li>
            <li><img src={telegram} alt="Icon telegram" /></li>
            <li><img src={twitter} alt="Icon twitter" /></li>
          </ul>
          <button className={"eny-button"}>
                <Link to={"/dapp"}>{"Get Started"}</Link>
            </button>
        </nav>

        {/* <Dapp />
        <Landing /> */}

        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/dapp' component={Dapp} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
