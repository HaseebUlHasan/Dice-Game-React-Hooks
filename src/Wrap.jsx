import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from './Components/Game';
import Navbar from "./Components/Navbar"
const Wrap = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>

    </div>
  )
}

export default Wrap