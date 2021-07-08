import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'


import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Landing from './pages/Landing'
import Dapp from './pages/Dapp'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/dapp' component={Dapp} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
