import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer";

function App() {
  const [images, setImages] = useState([
    { url: 'src/assets/images/paintings/castlegate.jpg', description: 'Castlegate, Aberdeen' },
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
  ]);

  const fineArt = [
    { url: 'src/assets/images/paintings/castlegate.jpg', description: 'Castlegate, Aberdeen' },
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

  const commissions = [
    { url: 'src/assets/images/commissions/vaglost12a.jpg', description: 'Castlegate, Aberdeen' },
    { url: 'src/assets/images/commissions/vaglost12b.jpg', description: 'Description 2' },
    { url: 'src/assets/images/commissions/vaglost13a.jpg', description: 'Description 3' },
    { url: 'src/assets/images/commissions/vaglost13b.jpg', description: 'Description 4' },
    { url: 'src/assets/images/commissions/vaglost13c.jpg', description: 'Description 5' },
    { url: 'src/assets/images/commissions/vaglost14a.jpg', description: 'Description 6' },
    { url: 'src/assets/images/commissions/vaglost14b.jpg', description: 'Description 7' },
  ];

  const sketchbook = [
    { url: 'src/assets/images/sketchbook/besties.jpg', description: 'Couple of Dorks' },
    { url: 'src/assets/images/sketchbook/moorland-birds.jpg', description: 'Description 2' },
    { url: 'src/assets/images/sketchbook/pasta-kitchen.jpg', description: 'Description 3' },
    { url: 'src/assets/images/sketchbook/puffins.jpg', description: 'Description 4' },
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
