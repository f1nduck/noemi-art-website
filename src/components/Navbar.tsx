import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseOver = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="navbar">
      <div>
        {" "}
        <img id="title-icon"
          src="src\assets\images\noemileah-art-banner.png"
          alt="Noemileah-navbar"
          width={300}
          height={100}
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
            <a href="https://pyxis.nymag.com/v1/imgs/2cb/2e1/47a72da70b3f7a301273b06cac9ea615c8-06-bob-ross-painting.rsquare.w400.jpg">
              Fine Art
            </a>
            <a href="#">Commissions</a>
            <a href="#">Sketchbook</a>
          </div>
        )}
      </div>

      <div
        className="nav-item"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <button>About</button>
      </div>

      <div
        className="nav-item"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <button>Contact</button>
      </div>

      </div>
    
  );
};

export default Navbar;
