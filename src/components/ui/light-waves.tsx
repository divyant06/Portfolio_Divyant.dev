"use client";

import { useEffect, useRef, useCallback } from "react";

/* ─────────────────────────────────────────────────────────────
   LightWaves — interactive canvas fluid-wave background
   • Sinusoidal wave layers rendered in #FF4500 palette
   • Mouse proximity causes local amplitude swell + glow
   • Pauses via IntersectionObserver when off-screen
   • pointerEvents: none so it never steals clicks
───────────────────────────────────────────────────────────── */

interface Wave {
  y: number;         // base Y (fraction of height)
  amplitude: number; // base amplitude (px)
  frequency: number; // cycles across width
  speed: number;     // radians/frame
  phase: number;     // current phase offset
  opacity: number;   // layer opacity
  width: number;     // line width (px)
}

const WAVES: Wave[] = [
  { y: 0.30, amplitude: 28, frequency: 1.6, speed: 0.008, phase: 0, opacity: 0.18, width: 1.5 },
  { y: 0.42, amplitude: 22, frequency: 2.1, speed: 0.011, phase: 1.2, opacity: 0.22, width: 1.0 },
  { y: 0.54, amplitude: 35, frequency: 1.3, speed: 0.007, phase: 2.4, opacity: 0.15, width: 2.0 },
  { y: 0.63, amplitude: 18, frequency: 2.8, speed: 0.014, phase: 0.8, opacity: 0.25, width: 1.0 },
  { y: 0.72, amplitude: 40, frequency: 1.0, speed: 0.006, phase: 3.6, opacity: 0.12, width: 2.5 },
  { y: 0.81, amplitude: 24, frequency: 2.3, speed: 0.012, phase: 1.9, opacity: 0.20, width: 1.2 },
  { y: 0.90, amplitude: 30, frequency: 1.7, speed: 0.009, phase: 0.4, opacity: 0.14, width: 1.8 },
];

export function LightWaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const activeRef = useRef(true);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const wavesRef = useRef<Wave[]>(WAVES.map((w) => ({ ...w })));

  /* ── Draw one frame ───────────────────────────────────────── */
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;

    ctx.clearRect(0, 0, W, H);

    for (const wave of wavesRef.current) {
      wave.phase += wave.speed;

      const baseY = wave.y * H;

      ctx.beginPath();

      for (let x = 0; x <= W; x += 2) {
        /* Base sine */
        const t = (x / W) * Math.PI * 2 * wave.frequency + wave.phase;
        let y = baseY + Math.sin(t) * wave.amplitude;

        /* Mouse influence — swell within 200 px radius */
        const dx = x - mx;
        const dy = y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const radius = 200;
        if (dist < radius) {
          const strength = (1 - dist / radius) ** 2;
          /* Push wave outward from cursor */
          const pushY = (y - my) >= 0 ? 1 : -1;
          y += pushY * strength * 45;
        }

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      /* Mouse glow boost on opacity */
      let extraOpacity = 0;
      const mDist = Math.abs(my - baseY);
      if (mDist < 150) {
        extraOpacity = (1 - mDist / 150) * 0.25;
      }

      ctx.strokeStyle = `rgba(255,69,0,${Math.min(wave.opacity + extraOpacity, 0.55)})`;
      ctx.lineWidth = wave.width + (extraOpacity > 0.05 ? 1 : 0);
      ctx.shadowColor = "rgba(255,69,0,0.35)";
      ctx.shadowBlur = extraOpacity > 0.08 ? 18 : 6;
      ctx.stroke();
      ctx.shadowBlur = 0;
    }
  }, []);

  /* ── Animation loop ───────────────────────────────────────── */
  const loop = useCallback(() => {
    if (!activeRef.current) return;
    draw();
    rafRef.current = requestAnimationFrame(loop);
  }, [draw]);

  /* ── Resize canvas to match container ────────────────────── */
  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }, []);

  /* ── Mouse tracking (relative to canvas) ─────────────────── */
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current = { x: -9999, y: -9999 };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);

    /* IntersectionObserver — pause when off-screen */
    const io = new IntersectionObserver(
      ([entry]) => {
        activeRef.current = entry.isIntersecting;
        if (entry.isIntersecting) loop();
      },
      { threshold: 0.01 }
    );
    io.observe(canvas);

    /* Kick off */
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [loop, resize, handleMouseMove, handleMouseLeave]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        display: "block",
      }}
      aria-hidden="true"
    />
  );
}
