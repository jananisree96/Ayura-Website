import React from "react";
import { useState } from "react";
import Home from "./components/Home/Home"
import Candles from "./components/FAVORITES/TopProducts";
import NavBar from "./components/Navbar/NavBar";
import MostPopular from "./components/ProductCarosuel/MostPopular";

import Footer from "./components/Footer/Footer";
import "./index.css"

 
function App() {
   const [cartOpen, setCartOpen] = useState(false);

   const toggleCart = () => {
     setCartOpen(!cartOpen);
   };
  return (
    <>
      <NavBar/>
      <Home/>
      <Candles/>
      <MostPopular/>
      <Footer/>
    </>
  );
}
 
export default App;