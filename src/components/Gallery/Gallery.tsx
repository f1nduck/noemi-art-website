import React, { useState } from 'react';
import './Gallery.css';

interface GalleryProps {
  images: string[]; // An array of image URLs
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImage = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="gallery">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Image ${index}`}
            className="gallery-image"
            onClick={() => openImage(imageUrl)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="overlay" onClick={closeImage}>
          <div className="modal">
            <img src={selectedImage} alt="Enlarged Image" className="modal-image" />
            <span className="close-button" onClick={closeImage}>
              &times;
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
