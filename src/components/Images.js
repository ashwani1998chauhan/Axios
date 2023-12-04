import React, { useState } from 'react';
import './Images.css'; // Import the external stylesheet

const Images = () => {
  const [imageUrl, setImageUrl] = useState('');

  const generateRandomImage = async () => {
    try {
      const response = await fetch('https://source.unsplash.com/random');
      const url = response.url;
      setImageUrl(url);
    } catch (error) {
      console.error('Error fetching random image:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Random Image Generator</h1>
      {imageUrl && <img src={imageUrl} alt="Random" className="image" />}<br/>

      <button className="button" onClick={generateRandomImage}>
        Generate Random Image
      </button>
    </div>
  );
};

export default Images;
