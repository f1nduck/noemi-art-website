import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer";

function App() {
  const [images, setImages] = useState([
    { url: 'src/assets/images/paintings/castlegate.jpg', description: 'Castlegate, Aberdeen' },
    { url: 'src/assets/images/paintings/christmas_market.jpg', description: 'Julmarknad, Stockholm' },
    { url: 'src/assets/images/paintings/sergels.jpg', description: 'Sergels Torg, Stockholm' },
    { url: 'src/assets/images/paintings/kungstradgarden.jpg', description: 'Kungsträdgården, Stockholm' },
    { url: 'src/assets/images/paintings/krakow.jpg', description: 'Rynek Główny, Kraków' },
    { url: 'src/assets/images/paintings/kiss.jpg', description: 'Cosmic Connections' },
    { url: 'src/assets/images/paintings/bottle.jpg', description: 'Still Life' },
    { url: 'src/assets/images/paintings/jellyfish.jpg', description: 'Jellyfish' },
    { url: 'src/assets/images/paintings/noemi.jpg', description: 'Self Portrait' },
    { url: 'src/assets/images/paintings/horse.jpg', description: 'Water Lily' },
    { url: 'src/assets/images/paintings/bjork.jpg', description: 'Björk' },
    { url: 'src/assets/images/paintings/kitchen_table.jpg', description: 'Still Life' },
    { url: 'src/assets/images/paintings/mushrooms.png', description: 'Mushrooms' },
    { url: 'src/assets/images/paintings/toucan.jpg', description: 'Toucan' },
  ]);

  const fineArt = [
    { url: 'src/assets/images/paintings/castlegate.jpg', description: 'Castlegate, Aberdeen' },
    { url: 'src/assets/images/paintings/christmas_market.jpg', description: 'Julmarknad, Stockholm' },
    { url: 'src/assets/images/paintings/sergels.jpg', description: 'Sergels Torg, Stockholm' },
    { url: 'src/assets/images/paintings/kungstradgarden.jpg', description: 'Kungsträdgården, Stockholm' },
    { url: 'src/assets/images/paintings/krakow.jpg', description: 'Rynek Główny, Kraków' },
    { url: 'src/assets/images/paintings/kiss.jpg', description: 'Cosmic Connections' },
    { url: 'src/assets/images/paintings/bottle.jpg', description: 'Still Life' },
    { url: 'src/assets/images/paintings/jellyfish.jpg', description: 'Jellyfish' },
    { url: 'src/assets/images/paintings/noemi.jpg', description: 'Self Portrait' },
    { url: 'src/assets/images/paintings/horse.jpg', description: 'Water Lily' },
    { url: 'src/assets/images/paintings/bjork.jpg', description: 'Björk' },
    { url: 'src/assets/images/paintings/kitchen_table.jpg', description: 'Still Life' },
    { url: 'src/assets/images/paintings/mushrooms.png', description: 'Mushrooms' },
    { url: 'src/assets/images/paintings/toucan.jpg', description: 'Toucan' },
  ];

  const commissions = [
    { url: 'src/assets/images/commissions/vaglost12a.jpg', description: 'Illustration for Väglöst Issue No.12' },
    { url: 'src/assets/images/commissions/vaglost12b.jpg', description: 'Illustration for Väglöst Issue No.12' },
    { url: 'src/assets/images/commissions/vaglost13a.jpg', description: 'Illustration for Väglöst Issue No.13' },
    { url: 'src/assets/images/commissions/vaglost13b.jpg', description: 'Illustration for Väglöst Issue No.13' },
    { url: 'src/assets/images/commissions/vaglost13c.jpg', description: 'Illustration for Väglöst Issue No.13' },
    { url: 'src/assets/images/commissions/vaglost14a.jpg', description: 'Illustration for Väglöst Issue No.14' },
    { url: 'src/assets/images/commissions/vaglost14b.jpg', description: 'Illustration for Väglöst Issue No.14' },
  ];

  const sketchbook = [
    { url: 'src/assets/images/sketchbook/besties.jpg', description: 'Couple of Dorks' },
    { url: 'src/assets/images/sketchbook/moorland-birds.jpg', description: 'Scottish Moorland Birds' },
    { url: 'src/assets/images/sketchbook/pasta-kitchen.jpg', description: 'Making Ravioli' },
    { url: 'src/assets/images/sketchbook/puffins.jpg', description: 'Puffins' },
    { url: 'src/assets/images/sketchbook/garden-birds.jpg', description: 'Garden Birds' },
    { url: 'src/assets/images/sketchbook/toadstools.jpg', description: 'Toadstools' },
   ];

  const artistEmail = 'noemileahn@gmail.com';
  const instagramLink = 'https://www.instagram.com/noemileah_art';
  
  return (
    <div className="App">
      <Navbar setImages={setImages} fineArt={fineArt} commissions={commissions} sketchbook={sketchbook} />
      <Gallery images={images}/>
      <Footer artistEmail={artistEmail} instagramLink={instagramLink} />
    </div>
  );
}

export default App;
