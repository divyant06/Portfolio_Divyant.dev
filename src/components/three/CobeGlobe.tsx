"use client";

import { useEffect, useRef, useState } from "react";

/**
 * CSS-only interactive globe with dot-grid pattern.
 * Replaces cobe WebGL to avoid GPU context conflicts with the R3F torus.
 *
 * Technique: Two overlapping dot-pattern layers rotate at different speeds
 * on a masked sphere, creating a convincing 3D globe effect.
 * The Delhi marker pulses with a glow animation.
 */

export function CobeGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragStartRot = useRef(0);
  const rafRef = useRef<number>(0);

  // Auto-rotate
  useEffect(() => {
    if (dragging) return;

    let last = performance.now();
    const animate = (now: number) => {
      const delta = now - last;
      last = now;
      setRotation((r) => r + delta * 0.012);
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [dragging]);

  // Drag handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    setDragging(true);
    dragStartX.current = e.clientX;
    dragStartRot.current = rotation;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    const delta = e.clientX - dragStartX.current;
    setRotation(dragStartRot.current + delta * 0.5);
  };

  const handlePointerUp = () => {
    setDragging(false);
  };

  /* SVG dot-grid pattern — simulates the cobe dot map.
     Two layers at different densities create depth. */
  const dotPattern = (size: number, opacity: number, id: string) => (
    <pattern id={id} width={size} height={size} patternUnits="userSpaceOnUse">
      <circle cx={size / 2} cy={size / 2} r={1.2} fill={`rgba(220,220,230,${opacity})`} />
    </pattern>
  );

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        maxWidth: "380px",
        aspectRatio: "1",
        margin: "0 auto",
        position: "relative",
        cursor: dragging ? "grabbing" : "grab",
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      {/* Outer glow halo — glowColor [0.05,0.05,0.05] equiv */}
      <div style={{
        position: "absolute", inset: "-12px", borderRadius: "50%", zIndex: 0,
        background: "radial-gradient(circle at 50% 50%, rgba(255,69,0,0.10) 0%, transparent 68%)",
        filter: "blur(8px)",
        pointerEvents: "none",
      }} />

      {/* 3D sphere — baseColor [0.1,0.1,0.1] → #1a1a1a */}
      <div style={{
        width: "100%", height: "100%", borderRadius: "50%",
        position: "relative", overflow: "hidden", zIndex: 1,
        background: `radial-gradient(
          circle at 32% 32%,
          rgba(45,45,50,1) 0%,
          rgba(18,18,20,1) 40%,
          rgba(6,6,8,1) 72%,
          rgba(1,1,2,1) 100%
        )`,
        boxShadow: `
          0 0 80px rgba(255,69,0,0.12),
          0 0 20px rgba(255,69,0,0.06),
          inset -6px -6px 28px rgba(0,0,0,0.9),
          inset 3px 3px 12px rgba(120,120,130,0.08)
        `,
      }}>
        {/* Primary dot layer — high density */}
        <svg style={{
          position: "absolute", inset: "-20%", width: "140%", height: "140%",
          transform: `rotateY(${rotation}deg) rotateX(12deg)`,
          transformStyle: "preserve-3d", opacity: 0.75,
        }} xmlns="http://www.w3.org/2000/svg">
          <defs>{dotPattern(7, 0.65, "dots-main")}</defs>
          <rect width="100%" height="100%" fill="url(#dots-main)" />
        </svg>

        {/* Secondary dot layer — parallax */}
        <svg style={{
          position: "absolute", inset: "-10%", width: "120%", height: "120%",
          transform: `rotateY(${rotation * 0.65}deg) rotateX(-10deg)`,
          transformStyle: "preserve-3d", opacity: 0.35,
        }} xmlns="http://www.w3.org/2000/svg">
          <defs>{dotPattern(5, 0.5, "dots-layer2")}</defs>
          <rect width="100%" height="100%" fill="url(#dots-layer2)" />
        </svg>

        {/* glowColor [0.05,0.05,0.05] — dark atmospheric rim */}
        <div style={{
          position: "absolute", inset: 0, borderRadius: "50%", pointerEvents: "none",
          background: `radial-gradient(circle at 50% 50%,
            transparent 58%,
            rgba(255,69,0,0.18) 74%,
            rgba(255,69,0,0.10) 86%,
            rgba(255,30,0,0.04) 100%
          )`,
        }} />

        {/* Specular highlight */}
        <div style={{
          position: "absolute", top: "6%", left: "18%", width: "38%", height: "26%",
          borderRadius: "50%", pointerEvents: "none",
          background: "radial-gradient(ellipse, rgba(255,255,255,0.08) 0%, transparent 70%)",
        }} />

        {/* New Delhi marker — markerColor [1, 0.27, 0] = #FF4500 */}
        <div style={{
          position: "absolute", top: "42%", left: "62%", zIndex: 2, pointerEvents: "none",
          transform: `translateX(${Math.sin((rotation * Math.PI) / 180) * 20}px)`,
        }}>
          {/* Outer pulse ring */}
          <div style={{
            width: "28px", height: "28px", borderRadius: "50%",
            background: "rgba(255,69,0,0.2)", position: "absolute",
            top: "-10px", left: "-10px",
            animation: "globePulse 1.8s ease-in-out infinite",
          }} />
          {/* Middle ring */}
          <div style={{
            width: "16px", height: "16px", borderRadius: "50%",
            background: "rgba(255,69,0,0.35)", position: "absolute",
            top: "-4px", left: "-4px",
            animation: "globePulse 1.8s ease-in-out infinite 0.4s",
          }} />
          {/* Core dot — bright #FF4500 */}
          <div style={{
            width: "9px", height: "9px", borderRadius: "50%",
            background: "#FF4500",
            boxShadow: "0 0 14px 4px rgba(255,69,0,0.9), 0 0 28px rgba(255,69,0,0.5)",
          }} />
        </div>
      </div>

      <style>{`
        @keyframes globePulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(2); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
