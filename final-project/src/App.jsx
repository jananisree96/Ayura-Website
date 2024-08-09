import React from "react";
import { useState } from "react";
import Soap from "./components/Soap/Soap"
import Candles from "./components/FAVORITES/TopProducts";
import NavBar from "./components/Navbar/NavBar";
import MostPopular from "./components/ProductCarosuel/MostPopular";
import Cart from "./components/Cart/Cart"
 
function App() {
   const [cartOpen, setCartOpen] = useState(false);

   const toggleCart = () => {
     setCartOpen(!cartOpen);
   };
  return (
    <>
      <NavBar toggleCart={toggleCart} />
      <Cart cartOpen={cartOpen} toggleCart={toggleCart} />
      <Soap />
      <Candles />
      <MostPopular />
    </>
  );
}
 
export default App;