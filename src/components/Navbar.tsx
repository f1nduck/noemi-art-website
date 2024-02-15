import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ setImages, fineArt, commissions, sketchbook }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseOver = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const handleFineArtClick = () => {
    setImages(fineArt);
  };

  const handleCommissionsClick = () => {
    setImages(commissions);
  };

  const handleSketchbookClick = () => {
    setImages(sketchbook);
  };

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
        <button>Portfolio</button>
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
        <button>About</button>
      </div>

      <div className="nav-item" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <button>Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
