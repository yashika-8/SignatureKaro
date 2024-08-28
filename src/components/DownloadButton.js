// src/components/DownloadButton.js
import React from 'react';

const DownloadButton = ({ canvasRef }) => {
  const downloadImage = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'signature.png';
      link.click();
    }
  };

  return (
    <button onClick={downloadImage} className="download-button">
      Download Signature
    </button>
  );
};

export default DownloadButton;
