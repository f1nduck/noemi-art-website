import React from 'react';
import { FaEnvelope, FaInstagram } from 'react-icons/fa'; // Assuming you're using react-icons for icons
import './Footer.css';

const Footer = ({ artistEmail, instagramLink }) => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${artistEmail}`;
  };

  return (
    <footer>
      <div className="brand-icon">
        {/* Insert your artist's brand icon image here */}
        <img src="src\assets\images\logo1.png" alt="Artist Brand Icon" />
      </div>
      <div className="contact">
        <button onClick={handleEmailClick}>
          <FaEnvelope /> {/*text for button can go here */}
        </button>
        <a href={instagramLink} target="_blank" rel="noopener noreferrer">
          <FaInstagram /> {/*text for button can go here */}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
