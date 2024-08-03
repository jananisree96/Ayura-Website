import React from "react";
import NavBar from "./components/NavBar";
import Shop from "./components/Soap/Soap"
import Candles from "./components/FAVORITES/TopProducts";
 
function App() {
  return (
    <>
      <NavBar />
      <Shop/>
      <Candles/>
    </>
  );
}
 
export default App;