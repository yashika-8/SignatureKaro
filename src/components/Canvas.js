// src/components/Canvas.js
import React, { useRef, useState, useEffect, forwardRef } from 'react';

const Canvas = forwardRef(({ color, penSize }, ref) => {
  const localCanvasRef = useRef(null);
  const canvasRef = ref || localCanvasRef;
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.5;
    canvas.style.width = `${window.innerWidth * 0.8}px`;
    canvas.style.height = `${window.innerHeight * 0.5}px`;

    const context = canvas.getContext('2d');
    context.scale(1, 1); // No scaling applied to keep the coordinates accurate
    context.lineCap = 'round';
    context.strokeStyle = color;
    context.lineWidth = penSize;
    contextRef.current = context;

    // Set the background to white
    context.fillStyle = '#FFFFFF';
    context.fillRect(0, 0, canvas.width, canvas.height);
  }, [color, penSize, canvasRef]);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  return (
    <canvas
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
      ref={canvasRef}
      className="signature-canvas"
      style={{ cursor: 'crosshair' }}
    />
  );
});

export default Canvas;
