import { Suspense } from "react";
import Image from "next/image";
import { ScrollToTopLink } from "@/components/ui/ScrollToTopLink";
import { MagneticButton } from "@/components/ui/MagneticButton";
import {
  HeroTorus,
  GravityPitComp,
  CobeGlobe,
} from "@/components/three";
import {
  SpotifyNowPlaying,
  GitHubActivity,
  ServicesSection,
  SelectedWorksExpanded,
  ProjectStartSection,
} from "@/components/sections";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { ContactForm } from "@/components/sections/ContactForm";

/* ── Shared style tokens ──────────────────────────────── */
const LABEL: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.65rem",
  letterSpacing: "0.18em",
  textTransform: "uppercase" as const,
  color: "#FF4500",
  marginBottom: "1.5rem",
  display: "block",
};

const SECTION_PAD: React.CSSProperties = {
  padding: "7rem 3vw",
  background: "#050505",
};

const RULE: React.CSSProperties = {
  border: "none",
  borderTop: "1px solid rgba(255,255,255,0.07)",
  margin: 0,
};

export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════
          §1  HERO  —  100dvh, absolute children, 10vw type
      ═══════════════════════════════════════════════════ */}
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
        <Suspense fallback={
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
            <div className="skeleton-pulse" style={{ width: "320px", height: "320px", borderRadius: "50%", background: "rgba(255,255,255,0.03)" }} />
          </div>
        }>
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
            Divyant this side. A developer bridging the gap between heavy
            technical engineering and flawless, modern design. I&nbsp;don&apos;t just
            build templates; I&nbsp;craft custom digital solutions designed to scale.
          </p>
        </div>

        {/* Bottom-left: massive headline — §3.1 responsive VW sizing */}
        <h1
          style={{
            position: "absolute",
            bottom: "4vh",
            left: 0,
            width: "100%",
            paddingLeft: "3vw",
            paddingRight: "3vw",
            fontFamily: "var(--font-heading)",
            /* Blueprint §3.1: 16vw on mobile, 10vw on desktop */
            fontSize: "clamp(2.5rem, 16vw, 13rem)",
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: "-0.05em",
            color: "#F3F4F6",
            margin: 0,
            zIndex: 2,
          }}
        >
          <ScrollToTopLink
            href="/"
            style={{ color: "inherit", textDecoration: "none", outline: "none" }}
          >
            Creating
            <br />
            <span style={{ fontSize: "clamp(1.25rem, 3vw, 1.5rem)", fontStyle: "italic", fontWeight: 400, opacity: 0.8, display: "block", marginBottom: "-0.2em", letterSpacing: "0" }}>
              experiences.
            </span>
            experiences that
            <br />
            <em
              style={{
                color: "#FF4500",
                fontStyle: "italic",
                display: "inline-block",
                marginRight: "0.08em",
              }}
            >
              refuse
            </em>{" "}
            to be
            <br />
            ignored.
          </ScrollToTopLink>
        </h1>

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

      {/* ═══════════════════════════════════════════════════
          §2  GRAVITY PIT  —  matter-js physics
      ═══════════════════════════════════════════════════ */}
      <section
        id="gravity-pit"
        style={{
          height: "55vh",
          minHeight: "380px",
          background: "#050505",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <span
          style={{
            ...LABEL,
            position: "absolute",
            top: "1.5rem",
            left: "3vw",
            zIndex: 2,
          }}
        >
          Tech Stack
        </span>
        <GravityPitComp />
      </section>

      {/* ═══════════════════════════════════════════════════
          §3  SELECTED WORKS — accordion with image reveals
      ═══════════════════════════════════════════════════ */}
      <SelectedWorksExpanded />

      <hr style={RULE} />

      {/* ═══════════════════════════════════════════════════
          §4  SERVICES — 3 premium image cards
      ═══════════════════════════════════════════════════ */}
      <ServicesSection />

      <hr style={RULE} />

      {/* ═══════════════════════════════════════════════════
          §5  PEER PERSPECTIVES  —  infinite marquee
      ═══════════════════════════════════════════════════ */}
      <section
        id="testimonials"
        style={{ ...SECTION_PAD, paddingLeft: 0, paddingRight: 0 }}
      >
        <div style={{ paddingLeft: "3vw", paddingRight: "3vw", marginBottom: "3rem" }}>
          <span style={LABEL}>Peer Perspectives</span>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1,
              color: "#F3F4F6",
              margin: 0,
            }}
          >
            What they said.
          </h2>
        </div>
        <TestimonialsCarousel />
      </section>

      <hr style={RULE} />



      {/* ═══════════════════════════════════════════════════
          §6  THE SETUP — bento grid + globe
      ═══════════════════════════════════════════════════ */}
      <section id="bento" style={SECTION_PAD}>
        <span style={LABEL}>The Setup</span>

        <div
          style={{
            display: "grid",
            /* Blueprint §2.5 — grid-cols-1 on mobile, 2-col on md+ */
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: "1.5rem",
            alignItems: "stretch",
          }}
        >
          {/* ── LEFT STACK ────────────────────────── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {/* Spotify Now Playing */}
            <SpotifyNowPlaying />

            {/* Magnetic Resume Button */}
            <div
              style={{
                background: "#111111",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "2px",
                padding: "1.5rem",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.18em",
                  color: "rgba(255,255,255,0.3)",
                  textTransform: "uppercase",
                  margin: "0 0 1rem",
                }}
              >
                Grab the technical specs.
              </p>
              <MagneticButton href="https://drive.google.com/file/d/1kyUDBcpisiUJbRXqzZfXp1r-x2SZavTW/view?usp=drivesdk">
                <span style={{ fontSize: "1.1rem" }}>↓</span>
                Resume.pdf
              </MagneticButton>
            </div>

            {/* GitHub Activity */}
            <GitHubActivity />

            {/* Closing quote */}
            <div
              style={{
                background: "#111111",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "2px",
                padding: "2rem 1.5rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.1rem, 1.8vw, 1.6rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.2,
                  color: "#F3F4F6",
                  margin: 0,
                }}
              >
                &ldquo;I am highly cultured,
                <br />
                and I am ready to work.&rdquo;
              </p>
            </div>
          </div>

          {/* ── RIGHT: COBE GLOBE ─────────────────── */}
          <div
            style={{
              background: "#0a0a0a",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "2px",
              minHeight: "480px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.25rem",
              position: "relative",
              overflow: "hidden",
              padding: "2rem",
            }}
          >
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "radial-gradient(circle at 50% 50%, rgba(255,69,0,0.05) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />
            <CobeGlobe />
            {/* §3 Globe story text — blueprint exact phrasing */}
            <div style={{ textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-heading)", fontSize: "0.9rem", fontWeight: 700, color: "#F3F4F6", letterSpacing: "-0.02em", margin: "0 0 0.35rem" }}>
                Based in India.
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.04em", margin: "0 0 0.25rem" }}>
                Shipping code worldwide.
              </p>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,69,0,0.6)", margin: 0 }}>
                New Delhi, India · 28.6°N 77.2°E
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr style={RULE} />

      {/* ═══════════════════════════════════════════════════
          §2.3  CONTACT FORM & ABOUT MINDSET
      ═══════════════════════════════════════════════════ */}
      <section id="about" style={{ ...SECTION_PAD, paddingBottom: "4rem" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))",
          gap: "4rem",
          alignItems: "start"
        }}>
          {/* Left Side: Contact Form */}
          <div style={{ maxWidth: "640px" }}>
            <span style={LABEL}>Get In Touch / About</span>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, color: "#F3F4F6", margin: "0 0 1rem" }}>
              Let&apos;s make something exceptional.
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", lineHeight: 1.7, color: "rgba(255,255,255,0.35)", marginBottom: "2.5rem", maxWidth: "48ch" }}>
              Drop me a message directly. I&apos;ll get back within 24 hours. Or{" "}
              <a href="https://cal.com/divyant06/30min" target="_blank" rel="noopener noreferrer" style={{ color: "#FF4500", textDecoration: "none", borderBottom: "1px solid rgba(255,69,0,0.3)" }}>
                book a call →
              </a>
            </p>
            <ContactForm />
          </div>

          {/* Right Side: Mindset Image & Quote */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <Image
              src="/assets/about-mindset.jpg"
              alt="About Mindset"
              width={800}
              height={600}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "4px",
                border: "1px solid rgba(255,255,255,0.08)"
              }}
            />
            <blockquote style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "clamp(1rem, 1.25vw, 1.125rem)",
              lineHeight: 1.7,
              color: "rgba(243,244,246,0.6)",
              margin: 0,
              borderLeft: "2px solid #FF4500",
              paddingLeft: "1.5rem"
            }}>
              &ldquo;I don&apos;t just write code; I architect cinematic digital experiences. As a relentless Computer Science guy and full-stack freelancer, I have dedicated countless nights to turning abstract, impactful ideas into flawless, high-performance realities. This isn&apos;t just a career path&mdash;it&apos;s an obsession with great solutions that refuse to be overlooked.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      <hr style={RULE} />

      {/* ═══════════════════════════════════════════════════
          §7  START A PROJECT — Cappen Bot + Cal.com
      ═══════════════════════════════════════════════════ */}
      <section id="start" style={SECTION_PAD}>
        <div style={{ marginBottom: "3rem" }}>
          <span style={LABEL}>Start a Project</span>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, color: "#F3F4F6", margin: 0 }}>
            Let&apos;s build something exceptional.
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.85rem, 1vw, 1rem)", lineHeight: 1.7, color: "rgba(255,255,255,0.35)", marginTop: "1rem", maxWidth: "50ch" }}>
            I initialize my projects here. Put your project on my calendar now, or get on board by scheduling a call.
          </p>
        </div>
        <ProjectStartSection />
      </section>

      {/* ═══════════════════════════════════════════════════
          §8  FOOTER — minimal + AdSense
      ═══════════════════════════════════════════════════ */}
      <footer
        id="footer"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.07)",
          background: "#050505",
        }}
      >
        <div
          style={{
            padding: "2.5rem 3vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <span style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "rgba(255,255,255,0.25)" }}>
            Divyant Poddar. — Full-Stack Developer
          </span>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.25rem" }}>
            {/* Blueprint §3.7 closing line */}
            <span style={{ fontFamily: "var(--font-heading)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,69,0,0.7)" }}>
              ARCHITECTED FOR THE BOLD
            </span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.14em", color: "rgba(255,255,255,0.15)", textTransform: "uppercase" }}>
              © {new Date().getFullYear()}
            </span>
          </div>
        </div>

        {/* Social links row */}
        <div style={{ padding: "0 3vw 1.5rem", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          {/* Blueprint §1 — Social icon links (SVG, no text) */}
          {[
            {
              label: "GitHub", href: "https://github.com/divyant06",
              svg: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>,
            },
            {
              label: "LinkedIn", href: "https://www.linkedin.com/in/divyant-poddar-4b6672313",
              svg: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
            },
            {
              label: "X / Twitter", href: "https://x.com/divyantpr",
              svg: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L2.25 2.25h6.962l4.265 5.638 4.767-5.638zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
            },
            {
              label: "YouTube", href: "https://www.youtube.com/channel/UCBTG0FKw84iRTZ8qRB05eGw",
              svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
            },
            {
              label: "Discord", href: "https://discord.gg/hYG4U3GNJ",
              svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.031.056a19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>,
            },
          ].map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              aria-label={s.label} className="footer-social-link footer-social-icon">
              {s.svg}
            </a>
          ))}
        </div>

        {/* AdSense banner — pub-7958603436560948 — dark bg fix */}
        <div className="adsense-container" style={{ borderTop: "1px solid rgba(255,255,255,0.04)", padding: "1rem 3vw", background: "#050505" }}>
          <ins className="adsbygoogle" style={{ display: "block", width: "100%", maxWidth: "970px" }}
            data-ad-client="ca-pub-7958603436560948" data-ad-slot="auto"
            data-ad-format="horizontal" data-full-width-responsive="true" />
        </div>
      </footer>
    </>
  );
}
