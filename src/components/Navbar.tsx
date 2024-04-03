import React, { useState } from "react";
import "./Navbar.css";

interface NavbarProps {
  setImages: (images: any) => void;
  fineArt: any;
  commissions: any;
  sketchbook: any;
  switchToGallery: () => void;
  switchToAbout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ setImages, fineArt, commissions, sketchbook, switchToGallery, switchToAbout }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

  return (
    <div className="navbar">
      <div className="hamburger-menu" onClick={toggleMenu}>
        MENU
      </div>

      <div>
        <img
          id="title-icon"
          src="assets/images/logo1.png"
          alt="Noemileah-navbar"
          width={800}
          height={228}
        />
      </div>

      {/* Apply the conditional 'active' class at this level */}
      <div
        className={`nav-item ${isMenuOpen ? "active" : ""}`}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <button onClick={handleFineArtClick}>Portfolio</button>
        {dropdownVisible && (
          <div className="dropdown">
            <a href="#" onClick={handleFineArtClick}>Fine Art</a>
            <a href="#" onClick={handleCommissionsClick}>Commissions</a>
            <a href="#" onClick={handleSketchbookClick}>Sketchbook</a>
          </div>
        )}
      </div>

      <div className={`nav-item ${isMenuOpen ? "active" : ""}`} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <button onClick={switchToAbout}>About</button>
      </div>
    </div>
);

};

export default Navbar;
