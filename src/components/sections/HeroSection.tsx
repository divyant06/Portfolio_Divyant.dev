"use client";

import { Suspense, useEffect } from "react";
import { motion } from "framer-motion";
import { HeroTorus } from "@/components/three";
import { ScrollToTopLink } from "@/components/ui/ScrollToTopLink";

export function HeroSection() {
  /* ── Fix 1: Force scroll to top on every fresh page load ── */
  useEffect(() => {
    if (typeof window !== "undefined") {
      history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
    }
  }, []);

  /* ── Framer Motion variants ── */
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.18 } },
  };

  const slideInVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const massiveSlideVariant = {
    hidden: { opacity: 0, x: -120 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        height: "100dvh",
        overflow: "hidden",
        background: "#050505",
      }}
    >
      {/* Blueprint §3 Suspense — dark skeleton while 3D loads */}
      <Suspense
        fallback={
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
            }}
          >
            <div
              className="skeleton-pulse"
              style={{
                width: "320px",
                height: "320px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.03)",
              }}
            />
          </div>
        }
      >
        <HeroTorus />
      </Suspense>

      {/* Top-right: label + descriptor */}
      <div
        style={{
          position: "absolute",
          top: "clamp(5.5rem, 10vh, 8rem)",
          right: "3vw",
          maxWidth: "28ch",
          textAlign: "right",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          zIndex: 10,
          padding: "1.25rem 1.5rem",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#FF4500",
            margin: 0,
            textShadow: "0 2px 10px rgba(0,0,0,0.8)",
          }}
        >
          Full-Stack Developer&nbsp;&nbsp;/&nbsp;&nbsp;2024
        </p>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(0.75rem, 1vw, 0.875rem)",
            lineHeight: 1.7,
            color: "rgba(243,244,246,0.6)",
            margin: 0,
            textShadow: "0 2px 10px rgba(0,0,0,0.8)",
          }}
        >
          Divyant this side. A developer bridging the gap between heavy technical
          engineering and flawless, modern design. I&nbsp;don&apos;t just build
          templates; I&nbsp;craft custom digital solutions designed to scale.
        </p>
      </div>

      {/* Bottom-left: cinematic entrance headline */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          position: "absolute",
          bottom: "4vh",
          left: 0,
          width: "100%",
          paddingLeft: "3vw",
          paddingRight: "3vw",
          zIndex: 2,
        }}
      >
        {/* Small italic intro line — slides in first */}
        <motion.p
          variants={slideInVariant}
          style={{
            fontFamily: "var(--font-body)",
            /* Fix 3: responsive size */
            fontSize: "clamp(1.1rem, 3.5vw, 2rem)",
            fontStyle: "italic",
            color: "rgba(243,244,246,0.55)",
            margin: 0,
            marginBottom: "0.25rem",
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
          }}
        >
          Creating experiences that
        </motion.p>

        {/* Massive headline — slides in second */}
        <motion.h1 variants={massiveSlideVariant} style={{ margin: 0 }}>
          <ScrollToTopLink
            href="/"
            style={{ color: "inherit", textDecoration: "none", outline: "none" }}
          >
            {/* Fix 3: 16vw on mobile → proper leading-[1.1]; 11vw on desktop → tight leading-[0.85] */}
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.5rem, 16vw, 13rem)",
                fontWeight: 800,
                /* lineHeight via CSS custom: 1.1 on mobile, 0.85 on desktop via clamp */
                lineHeight: "clamp(0.85, 1.1 - 0.25 * ((100vw - 390px) / 690), 1.1)",
                letterSpacing: "-0.05em",
                color: "#F3F4F6",
              }}
            >
              <em
                style={{
                  color: "#FF4500",
                  fontStyle: "italic",
                  display: "inline",
                  marginRight: "0.06em",
                }}
              >
                refuse
              </em>{" "}
              to be ignored.
            </span>
          </ScrollToTopLink>
        </motion.h1>
      </motion.div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "clamp(1rem, 2vh, 1.75rem)",
          left: "3vw",
          display: "flex",
          alignItems: "center",
          gap: "0.625rem",
          zIndex: 2,
        }}
      >
        <span
          style={{
            display: "block",
            width: "32px",
            height: "1px",
            background: "rgba(255,255,255,0.18)",
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.58rem",
            letterSpacing: "0.22em",
            color: "rgba(255,255,255,0.22)",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
      </div>
    </section>
  );
}
