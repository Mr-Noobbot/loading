"use client";

import React, { useEffect, useRef } from "react";

const SnakeLines = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    const NUM_LINES = 6;
    const lines = [];

    // Initialize lines
    for (let i = 0; i < NUM_LINES; i++) {
      lines.push({
        points: Array.from({ length: 20 }, () => ({
          x: Math.random() * width,
          y: Math.random() * height,
        })),
        vx: Math.random() * 1 - 0.5,
        vy: Math.random() * 1 - 0.5,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      lines.forEach(line => {
        // Move points
        line.points.forEach(p => {
          p.x += line.vx;
          p.y += line.vy;

          if (p.x < 0 || p.x > width) line.vx *= -1;
          if (p.y < 0 || p.y > height) line.vy *= -1;
        });

        // Draw lines connecting points
        ctx.beginPath();
        ctx.moveTo(line.points[0].x, line.points[0].y);
        for (let i = 1; i < line.points.length; i++) {
          ctx.lineTo(line.points[i].x, line.points[i].y);
        }
        ctx.strokeStyle = "rgba(253,224,71,0.6)"; // yellow
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};

export default SnakeLines;
