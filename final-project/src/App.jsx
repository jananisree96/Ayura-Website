import React from "react";
import Soap from "./components/Soap/Soap"
import Candles from "./components/FAVORITES/TopProducts";
import NavBar from "./components/Navbar/NavBar";
import MostPopular from "./components/ProductCarosuel/MostPopular";
 
function App() {
  return (
    <>
      <NavBar/>
      <Soap/>
      <Candles/>
      <MostPopular/>
    </>
  );
}
 
export default App;