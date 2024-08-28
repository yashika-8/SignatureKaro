// src/components/PenPicker.js
import React from 'react';

const PenPicker = ({ penSize, setPenSize }) => {
  return (
    <div className="pen-picker">
      <input
        type="range"
        min="1"
        max="20"
        value={penSize}
        onChange={(e) => setPenSize(e.target.value)}
      />
      <span>{penSize}px</span>
    </div>
  );
};

export default PenPicker;
