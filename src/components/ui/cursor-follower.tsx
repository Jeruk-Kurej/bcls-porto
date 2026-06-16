"use client";

import { useEffect, useRef, useState } from "react";

class Point {
  x: number;
  y: number;
  lifetime: number;

  constructor(x: number, y: number, lifetime: number) {
    this.x = x;
    this.y = y;
    this.lifetime = lifetime;
  }
}

export const CursorFollower = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useRef<Point[]>([]);
  const isMounted = useRef(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    isMounted.current = true;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const onMouseMove = (e: MouseEvent) => {
      points.current.push(new Point(e.clientX, e.clientY, 1.0));
    };

    window.addEventListener("mousemove", onMouseMove);

    const render = () => {
      if (!isMounted.current) return;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < points.current.length; i++) {
        points.current[i].lifetime -= 0.015;
        if (points.current[i].lifetime <= 0) {
          points.current.splice(i, 1);
          i--;
        }
      }

      if (points.current.length > 1) {
        ctx.beginPath();
        ctx.moveTo(points.current[0].x, points.current[0].y);

        for (let i = 1; i < points.current.length; i++) {
          const xc = (points.current[i].x + points.current[i - 1].x) / 2;
          const yc = (points.current[i].y + points.current[i - 1].y) / 2;
          ctx.quadraticCurveTo(points.current[i - 1].x, points.current[i - 1].y, xc, yc);
        }

        ctx.lineTo(
          points.current[points.current.length - 1].x,
          points.current[points.current.length - 1].y
        );

        ctx.strokeStyle = "rgba(100, 200, 255, 0.4)";
        ctx.lineWidth = 12;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.shadowBlur = 15;
        ctx.shadowColor = "rgba(100, 200, 255, 0.6)";
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      isMounted.current = false;
      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!mounted) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999]"
    />
  );
};
