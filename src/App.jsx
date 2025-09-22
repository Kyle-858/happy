import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Barinfo from './pages/Barinfo.jsx'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/barinfo" element={<Barinfo/>}/>
      </Routes>
    </Router>
  )
}

export default App
