import React from "react";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery/Gallery";

function App() {

  const images = [
    'src/assets/images/paintings/castlegate.jpg',
    'src/assets/images/paintings/christmas_market.jpg',
    'src/assets/images/paintings/sergels.jpg',
    'src/assets/images/paintings/kungstradgarden.jpg',
    'src/assets/images/paintings/krakow.jpg',
    'src/assets/images/paintings/kiss.jpg',
    'src/assets/images/paintings/bottle.jpg',
    'src/assets/images/paintings/jellyfish.jpg',
    'src/assets/images/paintings/noemi.jpg',
    'src/assets/images/paintings/horse.jpg',
    'src/assets/images/paintings/bjork.jpg',
    'src/assets/images/paintings/kitchen_table.jpg',
    'src/assets/images/paintings/mushrooms.png',
    'src/assets/images/paintings/toucan.jpg',
  ];
  
  return (
    <div className="App">
      <Navbar />
      <Gallery images={images}/>
    </div>
  );
}

export default App;