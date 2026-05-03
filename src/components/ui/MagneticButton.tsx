"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticButtonProps {
  href: string;
  children: React.ReactNode;
}

export function MagneticButton({ href, children }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { damping: 20, stiffness: 250, mass: 0.5 });
  const y = useSpring(rawY, { damping: 20, stiffness: 250, mass: 0.5 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    // Pull strength — 30% of the distance
    rawX.set((e.clientX - cx) * 0.3);
    rawY.set((e.clientY - cy) * 0.3);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x,
        y,
        display: "inline-flex",
        alignItems: "center",
        gap: "0.75rem",
        padding: "1.1rem 2.25rem",
        border: "1px solid rgba(255,255,255,0.15)",
        borderRadius: "2px",
        fontFamily: "var(--font-body)",
        fontSize: "0.9rem",
        fontWeight: 600,
        color: "#F3F4F6",
        letterSpacing: "0.02em",
        textDecoration: "none",
        transition: "border-color 0.2s ease, background 0.2s ease",
        whiteSpace: "nowrap",
        cursor: "none",
      }}
      whileHover={{
        borderColor: "rgba(255,69,0,0.6)",
        backgroundColor: "rgba(255,69,0,0.08)",
      }}
    >
      {children}
    </motion.a>
  );
}
