import React, { useState } from 'react'
import './App.css'
import Landing from './pages/Landing'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Navbar />
      <Landing />
      <Footer />

    </div>
  )
}

export default App
