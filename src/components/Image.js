import React from 'react';
import '../styles/Image.css';

const Image = () => {
  return (
    <div className="image-container">
      <img src={`${process.env.PUBLIC_URL}/Images/image.png.jpg`} alt="image" />
    </div>
  );
};

export default Image;
