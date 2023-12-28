import React, { useEffect, useState } from 'react';

const ImageList = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  const images = [
    { id: 1, src: screenWidth <= 700 ? 'src/images/html.webp' : 'src/images/css.webp', alt: 'Image 1' },
  ];

  return (
    <div style={{ textAlign: 'center' }}>
      {images.map((image) => (
        <img key={image.id} src={image.src} alt={image.alt} style={{ maxWidth: '100%', height: 'auto', margin: '10px' }} />
      ))}
    </div>
  );
};

export default ImageList;
