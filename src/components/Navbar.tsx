import React, { useState } from "react";
import "./Navbar.css";

interface NavbarProps {
  setImages: (images: any) => void; // Adjust 'any' to the appropriate type if possible
  fineArt: any; // Adjust 'any' to the appropriate type if possible
  commissions: any; // Adjust 'any' to the appropriate type if possible
  sketchbook: any; // Adjust 'any' to the appropriate type if possible
  switchToGallery: () => void; // Add switchToGallery function
  switchToAbout: () => void; // Add switchToAbout function
}

const Navbar: React.FC<NavbarProps> = ({ setImages, fineArt, commissions, sketchbook, switchToGallery, switchToAbout }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseOver = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const handleFineArtClick = () => {
    setImages(fineArt);
    switchToGallery();
  };

  const handleCommissionsClick = () => {
    setImages(commissions);
    switchToGallery();
  };

  const handleSketchbookClick = () => {
    setImages(sketchbook);
    switchToGallery();
  };

  const handlePortfolioClick = () => {
    setImages(fineArt);
    switchToGallery
  }

  return (
    <div className="navbar">
      <div>
        {" "}
        <img
          id="title-icon"
          src="src\assets\images\logo1.png"
          alt="Noemileah-navbar"
          width={800}
          height={228}
        ></img>
      </div>

      <div
        className="nav-item"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <button onClick={handleFineArtClick}>Portfolio</button>
        {dropdownVisible && (
          <div className="dropdown">
            <a href="#" onClick={handleFineArtClick}>Fine Art</a>
            <a href="#" onClick={handleCommissionsClick}>
              Commissions
            </a>
            <a href="#" onClick={handleSketchbookClick}>
              Sketchbook
            </a>
          </div>
        )}
      </div>

      <div className="nav-item" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <button onClick={switchToAbout}>About</button>
      </div>      
    </div>
  );
};

export default Navbar;
