"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorState = "default" | "link" | "drag" | "testimonial";

export function CustomCursor() {
  const [state, setState] = useState<CursorState>("default");
  const [mounted, setMounted] = useState(false);

  const rawX = useMotionValue(-200);
  const rawY = useMotionValue(-200);

  const springCfg = { damping: 28, stiffness: 500, mass: 0.3 };
  const x = useSpring(rawX, springCfg);
  const y = useSpring(rawY, springCfg);

  useEffect(() => {
    /* Blueprint §3.4 — never activate on touch devices */
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const timeoutId = setTimeout(() => {
      setMounted(true);
      document.body.style.cursor = "none";
    }, 0);

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("[data-cursor='testimonial']")) {
        setState("testimonial");
      } else if (t.closest("[data-cursor='drag']")) {
        setState("drag");
      } else if (
        t.closest("a") ||
        t.closest("button") ||
        t.closest("[data-cursor='link']")
      ) {
        setState("link");
      } else {
        setState("default");
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.body.style.cursor = "";
    };
  }, [rawX, rawY]);

  if (!mounted) return null;

  const isTestimonial = state === "testimonial";
  const isDrag = state === "drag";
  const isLink = state === "link";

  const size = isTestimonial ? 88 : isDrag ? 80 : isLink ? 36 : 12;

  // Testimonial cursor: opaque dark circle, NO blend mode (reads on both dark + orange bg)
  const isBlended = !isTestimonial;

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        width: size,
        height: size,
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999,
        background: isTestimonial
          ? "#0a0a0a"
          : isDrag || isLink
          ? "transparent"
          : "#ffffff",
        border: isTestimonial
          ? "1.5px solid rgba(255,255,255,0.25)"
          : isDrag
          ? "1.5px solid rgba(255,255,255,0.7)"
          : isLink
          ? "1.5px solid rgba(255,255,255,0.5)"
          : "none",
        mixBlendMode: isBlended ? "difference" : "normal",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2px",
      }}
      animate={{ width: size, height: size }}
      transition={{ type: "spring", damping: 24, stiffness: 450, mass: 0.35 }}
    >
      {/* Testimonial drag cursor: arrows + DRAG label */}
      {isTestimonial && (
        <>
          <span
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "0.55rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "rgba(255,255,255,0.9)",
              lineHeight: 1,
            }}
          >
            ← DRAG →
          </span>
        </>
      )}
      {/* Generic drag cursor: DRAG label (difference blended) */}
      {isDrag && (
        <span
          style={{
            fontFamily: "var(--font-mono, monospace)",
            fontSize: "0.5rem",
            fontWeight: 700,
            letterSpacing: "0.18em",
            color: "rgba(255,255,255,0.8)",
            mixBlendMode: "normal",
          }}
        >
          DRAG
        </span>
      )}
    </motion.div>
  );
}
