// src/App.js
import React, { useState, useRef } from 'react';
import Canvas from './components/Canvas';
import ColorPicker from './components/ColorPicker';
import PenPicker from './components/PenPicker';
import './App.css';

function App() {
  const [color, setColor] = useState('#000000');
  const [penSize, setPenSize] = useState(4);
  const canvasRef = useRef(null);

  const resetCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    // Reset background to white
    context.fillStyle = '#FFFFFF';
    context.fillRect(0, 0, canvas.width, canvas.height);
  };

  const downloadImage = () => {
    const canvas = canvasRef.current;
    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = image;
    link.download = 'signature.png';
    link.click();
  };

  return (
    <div className="App">
      <h1>Signature Creator</h1>
      <ColorPicker color={color} setColor={setColor} />
      <PenPicker penSize={penSize} setPenSize={setPenSize} />
      <Canvas color={color} penSize={penSize} ref={canvasRef} />
      <div className="button-container">
        <button onClick={resetCanvas} className="reset-button">
          Reset
        </button>
        <button onClick={downloadImage} className="download-button">
          Download
        </button>
      </div>
    </div>
  );
}

export default App;
