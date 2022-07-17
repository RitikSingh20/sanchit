import React from 'react'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import Home from './components/Home'
import Cardcom from './components/Cardcom'
import Slider from "./components/Slider"

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <Home />
      <Slider />
      <Cardcom />
    </div>
  )
}

export default App