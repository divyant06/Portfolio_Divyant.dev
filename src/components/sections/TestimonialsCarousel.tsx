"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    name: "Tushar Roy",
    role: "Founder, Beyond Intern",
    quote:
      "Working with Divyant was an absolute pleasure. He has a masterful understanding of design and what it takes to create stunning visuals. He was able to reimagine our brand imagery and redesigned a brand new website in record time. I highly recommend him to any serious business owner who wants to create an unforgettable brand.",
    link: "https://www.linkedin.com/in/tushar-roy-547054216/",
  },
  {
    name: "Chirag Chanchal",
    role: "Co-developer & Blockchain Expert",
    quote:
      "Developed a BLA crypto token on-chain for our collaborated project Blockademia.live on monad testnet. Working with Divyant was an absolute help; we created an amazing idea and converted it into a real solution.",
    link: "https://www.linkedin.com/in/chirag-chanchal-48419a2b3/",
  },
  {
    name: "Kunal Kashyap",
    role: "AI/ML Developer",
    quote:
      "Everyone at this level has technical competence, but Divyant's actual superpowers are the care he takes to understand the goal, collaborate on solutions, communicate, and, yes, bring the vision to life. He was worth every penny and then some.",
    link: null,
  },
  {
    name: "Twinkle Agrwal",
    role: "Founder / Owner",
    quote:
      "Divyant is a one-of-a-kind creative mind (in the best way possible!). He's always coming up with mind-blowing ideas, and I've had the pleasure of working with him over the years. Divyant consistently delivers exceptional results and never underperforms. I would highly recommend him for your next project — he's essentially a Swiss Army knife of content creation.",
    link: "https://www.linkedin.com/in/twinkle-agrwal/",
  },
];

/* Duplicate for seamless infinite loop */
const MARQUEE_ITEMS = [...TESTIMONIALS, ...TESTIMONIALS];

/* ── Individual card ─────────────────────────────── */
function TestimonialCard({
  data,
}: {
  data: (typeof TESTIMONIALS)[0];
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{
        backgroundColor: hovered ? "#FF4500" : "#111111",
      }}
      transition={{ duration: 0.12, ease: "easeOut" }}
      style={{
        width: "clamp(320px, 32vw, 440px)",
        padding: "2.5rem",
        borderRadius: "2px",
        border: `1px solid ${hovered ? "rgba(255,69,0,0.4)" : "rgba(255,255,255,0.06)"}`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "2rem",
        flexShrink: 0,
        userSelect: "none",
        WebkitUserSelect: "none",
      }}
      data-cursor="drag"
    >
      {/* Quote mark */}
      <motion.span
        animate={{ color: hovered ? "#050505" : "rgba(255,69,0,0.4)" }}
        transition={{ duration: 0.12 }}
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "3.5rem",
          lineHeight: 1,
          display: "block",
          marginBottom: "-1rem",
        }}
      >
        &ldquo;
      </motion.span>

      {/* Body quote */}
      <motion.p
        animate={{ color: hovered ? "#050505" : "rgba(243,244,246,0.65)" }}
        transition={{ duration: 0.12 }}
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "clamp(0.85rem, 1.1vw, 1rem)",
          lineHeight: 1.7,
          flex: 1,
        }}
      >
        {data.quote}
      </motion.p>

      {/* Author */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
        <motion.span
          animate={{ color: hovered ? "#050505" : "#F3F4F6" }}
          transition={{ duration: 0.12 }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.9rem",
            fontWeight: 600,
            letterSpacing: "-0.01em",
          }}
        >
          {data.link ? (
            <a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {data.name} ↗
            </a>
          ) : (
            data.name
          )}
        </motion.span>
        <motion.span
          animate={{
            color: hovered ? "rgba(5,5,5,0.6)" : "rgba(255,255,255,0.35)",
          }}
          transition={{ duration: 0.12 }}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          {data.role}
        </motion.span>
      </div>
    </motion.div>
  );
}

/* ── Infinite Marquee via CSS animation ──────────── */
export function TestimonialsCarousel() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <>
      {/* CSS keyframes for the infinite scroll */}
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div
        style={{ overflow: "hidden", position: "relative" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        data-cursor="drag"
      >
        <div
          style={{
            display: "flex",
            gap: "1.25rem",
            paddingLeft: "3vw",
            paddingRight: "3vw",
            paddingBottom: "0.5rem",
            width: "max-content",
            animation: "marqueeScroll 40s linear infinite",
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {MARQUEE_ITEMS.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} data={t} />
          ))}
        </div>
      </div>
    </>
  );
}
