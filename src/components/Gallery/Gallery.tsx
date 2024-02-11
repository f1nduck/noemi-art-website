import React, { useState } from 'react';
import './Gallery.css';

interface GalleryProps {
  images: { url: string; description: string }[]; // An array of image objects with URL and description
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<{ url: string; description: string } | null>(null);

  const openImage = (imageUrl: string, imageDescription: string) => {
    setSelectedImage({ url: imageUrl, description: imageDescription });
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={`Image ${index}`}
            className="gallery-image"
            onClick={() => openImage(image.url, image.description)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="overlay" onClick={closeImage}>
          <div className="modal">
            <img src={selectedImage.url} alt="Enlarged Image" className="modal-image" />
            <span className="close-button" onClick={closeImage}>
              &times;
            </span>
            <div className="modal-description">{selectedImage.description}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
