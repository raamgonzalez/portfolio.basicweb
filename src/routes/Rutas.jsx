import React from 'react'
import { Route, Routes } from 'react-router-dom'

//Views
import Home from '../views/Home'
import NotFound from '../views/NotFound'


const Rutas = () => {
  return (
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

  )
}

export default Rutas