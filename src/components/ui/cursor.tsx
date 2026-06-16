"use client";

import { useEffect, useRef } from 'react';

export const SplashCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let pointer = { x: width / 2, y: height / 2 };
    let params = {
      pointsNumber: 40,
      widthFactor: 0.3,
      mouseThreshold: 0.6,
      spring: 0.4,
      friction: 0.5,
    };

    let trail = new Array(params.pointsNumber).fill(null).map(() => ({
      x: pointer.x,
      y: pointer.y,
      dx: 0,
      dy: 0,
    }));

    const updateMousePosition = (e: MouseEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
    };

    window.addEventListener('mousemove', updateMousePosition);

    let animationFrameId: number;

    const update = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      
      trail[0].x = pointer.x;
      trail[0].y = pointer.y;

      for (let i = 1; i < params.pointsNumber; i++) {
        const dx = trail[i - 1].x - trail[i].x;
        const dy = trail[i - 1].y - trail[i].y;
        
        trail[i].dx += dx * params.spring;
        trail[i].dy += dy * params.spring;
        trail[i].dx *= params.friction;
        trail[i].dy *= params.friction;
        
        trail[i].x += trail[i].dx;
        trail[i].y += trail[i].dy;
      }

      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(trail[0].x, trail[0].y);

      for (let i = 1; i < params.pointsNumber - 1; i++) {
        const xc = 0.5 * (trail[i].x + trail[i + 1].x);
        const yc = 0.5 * (trail[i].y + trail[i + 1].y);
        ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
        ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);
        // Create an energetic neon stroke effect that cycles colors
        ctx.strokeStyle = `hsla(${(t / 10) % 360}, 100%, 70%, ${1 - i / params.pointsNumber})`;
        ctx.stroke();
      }
      ctx.lineTo(trail[params.pointsNumber - 1].x, trail[params.pointsNumber - 1].y);
      ctx.stroke();
      
      animationFrameId = requestAnimationFrame(update);
    };

    animationFrameId = requestAnimationFrame(update);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};
