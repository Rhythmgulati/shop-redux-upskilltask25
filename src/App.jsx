import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import ProductList from './components/ProductList'
import { Cart } from './components/Cart'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Payment from './components/Payment'

function App() {
  

  return (
    <>
   <Router>
    <Routes>
    
    <Route path="/"  element={<Home/>} />
        <Route path="/payment" element={<Payment/>} />
    </Routes>
    </Router>
    </>
  )
}

export default App
