import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import MenuBar from "./Components/MenuBar/MenuBar";
import Products from "./Components/Products/Products";
import Slider from "./Components/Slider/Slider";

function App() {
  return <div className="App">

    <Header />
    <MenuBar />
    <Slider />
    <Hero />
    <Products />
  </div>;
}

export default App;
