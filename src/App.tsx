import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const [images, setImages] = useState([
    { url: 'assets/images/paintings/castlegate.jpg', description: 'Castlegate, Aberdeen' },
    { url: 'assets/images/paintings/christmas_market.jpg', description: 'Julmarknad, Stockholm' },
    { url: 'assets/images/paintings/sergels.jpg', description: 'Sergels Torg, Stockholm' },
    { url: 'assets/images/paintings/kungstradgarden.jpg', description: 'Kungsträdgården, Stockholm' },
    { url: 'assets/images/paintings/krakow.jpg', description: 'Rynek Główny, Kraków' },
    { url: 'assets/images/paintings/kiss.jpg', description: 'Cosmic Connections' },
    { url: 'assets/images/paintings/bottle.jpg', description: 'Still Life' },
    { url: 'assets/images/paintings/jellyfish.jpg', description: 'Jellyfish' },
    { url: 'assets/images/paintings/noemi.jpg', description: 'Self Portrait' },
    { url: 'assets/images/paintings/horse.jpg', description: 'Water Lily' },
    { url: 'assets/images/paintings/bjork.jpg', description: 'Björk' },
    { url: 'assets/images/paintings/kitchen_table.jpg', description: 'Still Life' },
    { url: 'assets/images/paintings/mushrooms.png', description: 'Mushrooms' },
    { url: 'assets/images/paintings/toucan.jpg', description: 'Toucan' },
  ]);

  const fineArt = [
    { url: 'assets/images/paintings/castlegate.jpg', description: 'Castlegate, Aberdeen' },
    { url: 'assets/images/paintings/christmas_market.jpg', description: 'Julmarknad, Stockholm' },
    { url: 'assets/images/paintings/sergels.jpg', description: 'Sergels Torg, Stockholm' },
    { url: 'assets/images/paintings/kungstradgarden.jpg', description: 'Kungsträdgården, Stockholm' },
    { url: 'assets/images/paintings/krakow.jpg', description: 'Rynek Główny, Kraków' },
    { url: 'assets/images/paintings/kiss.jpg', description: 'Cosmic Connections' },
    { url: 'assets/images/paintings/bottle.jpg', description: 'Still Life' },
    { url: 'assets/images/paintings/jellyfish.jpg', description: 'Jellyfish' },
    { url: 'assets/images/paintings/noemi.jpg', description: 'Self Portrait' },
    { url: 'assets/images/paintings/horse.jpg', description: 'Water Lily' },
    { url: 'assets/images/paintings/bjork.jpg', description: 'Björk' },
    { url: 'assets/images/paintings/kitchen_table.jpg', description: 'Still Life' },
    { url: 'assets/images/paintings/mushrooms.png', description: 'Mushrooms' },
    { url: 'assets/images/paintings/toucan.jpg', description: 'Toucan' },
  ];

  const commissions = [
    { url: 'assets/images/commissions/vaglost12a.jpg', description: 'Illustration for Väglöst Issue No.12' },
    { url: 'assets/images/commissions/vaglost12b.jpg', description: 'Illustration for Väglöst Issue No.12' },
    { url: 'assets/images/commissions/vaglost13a.jpg', description: 'Illustration for Väglöst Issue No.13' },
    { url: 'assets/images/commissions/vaglost13b.jpg', description: 'Illustration for Väglöst Issue No.13' },
    { url: 'assets/images/commissions/vaglost13c.jpg', description: 'Illustration for Väglöst Issue No.13' },
    { url: 'assets/images/commissions/vaglost14a.jpg', description: 'Illustration for Väglöst Issue No.14' },
    { url: 'assets/images/commissions/vaglost14b.jpg', description: 'Illustration for Väglöst Issue No.14' },
  ];

  const sketchbook = [
    { url: 'assets/images/sketchbook/besties.jpg', description: 'Couple of Dorks' },
    { url: 'assets/images/sketchbook/moorland-birds.jpg', description: 'Scottish Moorland Birds' },
    { url: 'assets/images/sketchbook/pasta-kitchen.jpg', description: 'Making Ravioli' },
    { url: 'assets/images/sketchbook/puffins.jpg', description: 'Puffins' },
    { url: 'assets/images/sketchbook/garden-birds.jpg', description: 'Garden Birds' },
    { url: 'assets/images/sketchbook/toadstools.jpg', description: 'Toadstools' },
   ];

  const artistEmail = 'noemileahn@gmail.com';
  const instagramLink = 'https://www.instagram.com/noemileah_art';

  const [currentComponent, setCurrentComponent] = useState("Gallery"); // Initial state is Gallery
  

  // Function to switch to the Gallery component
  const switchToGallery = () => {
    setCurrentComponent("Gallery");
  };

  // Function to switch to the About component
  const switchToAbout = () => {
    setCurrentComponent("About");
  };

  return (
    <div className="App">
      <Navbar setImages={setImages} fineArt={fineArt} commissions={commissions} sketchbook={sketchbook} switchToGallery={switchToGallery} switchToAbout={switchToAbout} />
      {currentComponent === "Gallery" ? (
        <Gallery images={images} />
      ) : (
        <About />
      )}
      <Footer artistEmail={artistEmail} instagramLink={instagramLink} />
    </div>
  );
}

export default App;
