"use client";

import { useState, useCallback, useId } from "react";
import { motion } from "framer-motion";

/*
  Jelly distortion effect on project preview cells.
  Uses a pure CSS/SVG filter approach (feTurbulence + feDisplacementMap)
  instead of raw WebGL shaders — works everywhere, no Canvas overhead,
  and delivers the liquid-ripple aesthetic.
*/

export function WorksPreview({
  label,
  color = "#FF4500",
}: {
  label: string;
  color?: string;
}) {
  const [hovered, setHovered] = useState(false);
  const id = useId();
  const filterId = `jelly-${id.replace(/:/g, '')}`;

  const onEnter = useCallback(() => setHovered(true), []);
  const onLeave = useCallback(() => setHovered(false), []);

  return (
    <motion.div
      onHoverStart={onEnter}
      onHoverEnd={onLeave}
      animate={{
        borderColor: hovered
          ? "rgba(255,69,0,0.35)"
          : "rgba(255,255,255,0.06)",
      }}
      transition={{ duration: 0.25 }}
      style={{
        height: "60px",
        borderRadius: "2px",
        border: "1px solid rgba(255,255,255,0.06)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
        filter: hovered ? `url(#${filterId})` : "none",
        transition: "filter 0.3s ease",
      }}
    >
      {/* SVG filter definition (hidden) */}
      <svg
        style={{
          position: "absolute",
          width: 0,
          height: 0,
          pointerEvents: "none",
        }}
      >
        <defs>
          <filter id={filterId}>
            <feTurbulence
              type="turbulence"
              baseFrequency={hovered ? "0.015 0.02" : "0 0"}
              numOctaves={3}
              seed={2}
              result="turbulence"
            >
              <animate
                attributeName="baseFrequency"
                dur="2s"
                values="0.01 0.02;0.02 0.04;0.01 0.02"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulence"
              scale={hovered ? 12 : 0}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Glow bar on hover */}
      <motion.div
        animate={{
          opacity: hovered ? 1 : 0,
          scaleX: hovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: color,
          transformOrigin: "left",
        }}
      />

      {/* Label */}
      <motion.span
        animate={{
          color: hovered ? color : "rgba(255,255,255,0.15)",
          scale: hovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.2 }}
        style={{
          fontFamily: "var(--font-mono, monospace)",
          fontSize: "0.6rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          position: "relative",
          zIndex: 1,
        }}
      >
        {label}
      </motion.span>
    </motion.div>
  );
}
