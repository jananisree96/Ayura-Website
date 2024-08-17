import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Candles from './components/FAVORITES/TopProducts';
import NavBar from './components/Navbar/NavBar';
import MostPopular from './components/ProductCarosuel/MostPopular';
import Footer from './components/Footer/Footer';
import Dashboard from './components/DashBoard/Dashboard';


function App() {
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <Router>
      <NavBar toggleCart={toggleCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/candles" element={<Candles />} />
        <Route path="/most-popular" element={<MostPopular />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/" element={<Footer />} />
      </Routes>
     
    </Router>
  );
}

export default App;