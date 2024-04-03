import React from 'react';
import { FaEnvelope, FaInstagram } from 'react-icons/fa';
import './Footer.css';

interface FooterProps {
  artistEmail: string;
  instagramLink: string;
}

const Footer = ({ artistEmail, instagramLink }: FooterProps) => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${artistEmail}`;
  };

  return (
    <footer>
      <div className="brand-container">
        <div className="brand-icon">
          <img src="assets\images\logo1.png" alt="Artist Brand Icon" />
        </div>  
        <div className="copyright">
          © 2024 Noemi Naszarkowski
        </div>
      </div>  
      <div className="contact">
        <button onClick={handleEmailClick}>
          <FaEnvelope /> {/* text for button can go here */}
        </button>
        <a href={instagramLink} target="_blank" rel="noopener noreferrer">
          <FaInstagram /> {/* text for button can go here */}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
