import React, { useState } from 'react'
import './App.css'
import Landing from './pages/Landing'
import Navbar from './components/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Navbar />
      <Landing />
    </div>
  )
}

export default App
