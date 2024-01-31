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
        <h1>
          {" "}
          <img
            src="src\assets\images\paintbrush-icon.png"
            alt="Paintbrush Icon"
            width={40}
            height={40}
          ></img>
          Mrs Chimkin Art
        </h1>
      </div>
      <div
        className="nav-item"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <button>Photography</button>
        {dropdownVisible && (
          <div className="dropdown">
            <a href="https://pyxis.nymag.com/v1/imgs/2cb/2e1/47a72da70b3f7a301273b06cac9ea615c8-06-bob-ross-painting.rsquare.w400.jpg">
              Bobkins
            </a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        )}
      </div>

      <div
        className="nav-item"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <button>Paintings</button>
        {dropdownVisible && (
          <div className="dropdown">
            <a href="#">Link 4</a>
            <a href="#">Link 5</a>
            <a href="#">Link 6</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
