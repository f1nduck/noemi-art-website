import React from "react";

let image1 = "src/assets/images/castlegate.jpg";
let image2 = "src/assets/images/christmas-market.jpg";
let image3 = "src/assets/images/poland.jpg"

const Gallery = () => {
  const images = [image1, image2, image3];
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className="gallery-image"
        />
      ))}
    </div>
  );
};


export default Gallery;