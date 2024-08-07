import React from "react";
import Soap from "./components/Soap/Soap"
import Candles from "./components/FAVORITES/TopProducts";
import NavBar from "./components/Navbar/NavBar";
import MostPopular from "./components/ProductCarosuel/MostPopular";
import Footer from "./components/Footer/Footer";
 
function App() {
  return (
    <>
      <NavBar/>
      <Soap/>
      <Candles/>
      <MostPopular/>
      <Footer/>
    </>
  );
}
 
export default App;