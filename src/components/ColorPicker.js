// src/components/ColorPicker.js
import React from 'react';

const ColorPicker = ({ color, setColor }) => {
  return (
    <div className="color-picker">
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
};

export default ColorPicker;
