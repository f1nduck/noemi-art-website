import React from "react";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery/Gallery";

function App() {

  const images = [
    { url: 'src/assets/images/paintings/castlegate.jpg', description: 'Description 1' },
    { url: 'src/assets/images/paintings/christmas_market.jpg', description: 'Description 2' },
    { url: 'src/assets/images/paintings/sergels.jpg', description: 'Description 3' },
    { url: 'src/assets/images/paintings/kungstradgarden.jpg', description: 'Description 4' },
    { url: 'src/assets/images/paintings/krakow.jpg', description: 'Description 5' },
    { url: 'src/assets/images/paintings/kiss.jpg', description: 'Description 6' },
    { url: 'src/assets/images/paintings/bottle.jpg', description: 'Description 7' },
    { url: 'src/assets/images/paintings/jellyfish.jpg', description: 'Description 8' },
    { url: 'src/assets/images/paintings/noemi.jpg', description: 'Description 9' },
    { url: 'src/assets/images/paintings/horse.jpg', description: 'Description 10' },
    { url: 'src/assets/images/paintings/bjork.jpg', description: 'Description 11' },
    { url: 'src/assets/images/paintings/kitchen_table.jpg', description: 'Description 12' },
    { url: 'src/assets/images/paintings/mushrooms.png', description: 'Description 13' },
    { url: 'src/assets/images/paintings/toucan.jpg', description: 'Description 14' },
  ];
  
  return (
    <div className="App">
      <Navbar />
      <Gallery images={images}/>
    </div>
  );
}

export default App;
