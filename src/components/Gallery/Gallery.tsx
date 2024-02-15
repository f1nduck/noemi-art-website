import React, { useState } from 'react';
import './Gallery.css';

interface GalleryProps {
  images: { url: string; description: string }[]; // An array of image objects with URL and description
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openImage = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeImage = () => {
    setSelectedImageIndex(null);
  };

  const showNextImage = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (selectedImageIndex !== null && selectedImageIndex < images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const showPreviousImage = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
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
            onClick={() => openImage(index)}
          />
        ))}
      </div>

      {selectedImageIndex !== null && (
        <div className="overlay" onClick={closeImage}>
          <div className="modal">
            <img src={images[selectedImageIndex].url} alt="Enlarged Image" className="modal-image" />
            <span className="close-button" onClick={closeImage}>
              &times;
            </span>
            <div className="modal-description">{images[selectedImageIndex].description}</div>
            <button className="modal-button previous" onClick={showPreviousImage}>Previous</button>
            <button className="modal-button next" onClick={showNextImage}>Next</button>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
