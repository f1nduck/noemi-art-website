import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="container">
      <img src='assets\images\profile.jpg' alt="Profile" className="profilePic" />
      <div className="content">
        <h1 className="heading">About</h1>
        <p className="paragraph">
          Hello! My name is Noemi Naszarkowski, I am an artist by heart and a biologist by mind. Depicting and experiencing the world around me, especially nature, have been integral parts of me since I was a small child. I could spend hours exploring forests and meadows, identifying and drawing animal species. In my teens, I pursued portrait drawing, refining my skills with guidance from my father, an artist himself.

          I've had the privilege of creating commissioned artwork and photography, including an album cover and magazine illustrations. I'm always eager to embark on new artistic endeavors and collaborative projects, so feel free to reach out to discuss potential collaborations or commissions.
        </p>
      </div>
    </div>
  );
};

export default About;
