import React from "react";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery/Gallery";

function App() {

  const images = [
    'src/assets/images/castlegate.jpg',
    'src/assets/images/christmas-market.jpg',
    'src/assets/images/little-peoples.jpg',
  ];

  return (
    <div className="App">
      <Navbar />
      <Gallery images={images}/>
    </div>
  );
}

export default App;