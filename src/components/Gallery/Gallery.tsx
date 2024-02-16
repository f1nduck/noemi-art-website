import React, { useState, useEffect } from 'react';
import './Gallery.css';

interface GalleryProps {
  images: { url: string; description: string }[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImageIndex !== null) {
        switch (event.key) {
          case 'ArrowLeft':
            showPreviousImage(event);
            break;
          case 'ArrowRight':
            showNextImage(event);
            break;
          default:
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImageIndex]); // Re-add the event listener if selectedImageIndex changes

  const openImage = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeImage = () => {
    setSelectedImageIndex(null);
  };

  const showNextImage = (event: React.MouseEvent<HTMLButtonElement> | KeyboardEvent) => {
    event.stopPropagation();
    if (selectedImageIndex !== null && selectedImageIndex < images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const showPreviousImage = (event: React.MouseEvent<HTMLButtonElement> | KeyboardEvent) => {
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
            <div className="modal-button-container">
              <button className="modal-button previous" onClick={showPreviousImage}>{'\u02c2'}</button>
              <button className="modal-button next" onClick={showNextImage}>{'\u02c3'}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
