"use client";
import { useState } from "react";
import Image from "next/image";

const SERVICES = [
  {
    id: "web", label: "01 — Web Development", pricing: "Starting at $80+",
    title: "Beyond landing\npages.",
    story: "I build scalable, SEO-optimized web applications with clean Next.js/React architecture. Every feature—from custom payment gateways to bulletproof backend databases—is engineered for reliability. Whether you need a marketing site, SaaS dashboard, or full e-commerce platform with user-auth, I deliver architecture that holds under real-world load.",
    quote: "worth every penny and then some.",
    tags: ["Next.js", "React", "Supabase", "TypeScript", "Tailwind", "PostgreSQL"],
    img: "/assets/service-web.jpg", accent: "#FF4500",
  },
  {
    id: "app", label: "02 — App Development", pricing: "Starting at $200+",
    title: "Native feel,\ncross-platform.",
    story: "Crafted for modern performance. I specialize in cross-platform mobile experiences that feel native. I engineer with Flutter to provide speed, fluid UI, and complex API integrations that users trust — from MVP to production-ready, shipped to both the App Store and Google Play, built offline-first.",
    quote: "always coming up with mind-blowing ideas.",
    tags: ["Flutter", "Dart", "Firebase", "Supabase", "REST APIs"],
    img: "/assets/service-app.jpg", accent: "#54C5F8",
  },
  {
    id: "growth", label: "03 — Growth & Strategy", pricing: "Custom Quote",
    title: "Attention into\nmeasurable outcomes.",
    story: "Strategic digital campaigns that convert attention into measurable outcomes. SEO architecture, conversion-rate optimisation, analytics pipelines, and performance audits. We can discuss customized quotes for your unique project — feel free to reach out to make your brand scale and get better.",
    quote: "consistent results and never underperforms.",
    tags: ["SEO", "Analytics", "CRO", "Content", "Automation"],
    img: "/assets/service-growth.jpg", accent: "#CCFF00",
  },
];

export function ServicesSection() {
  const [hovered, setHovered] = useState<string | null>(null);
  return (
    <section id="services" style={{ padding: "7rem 3vw", background: "#050505" }}>
      <div style={{ marginBottom: "4rem" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#FF4500", display: "block", marginBottom: "1.5rem" }}>What I Do</span>
        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, color: "#F3F4F6", margin: 0 }}>Services that ship results.</h2>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", lineHeight: 1.7, color: "rgba(255,255,255,0.35)", marginTop: "1rem", maxWidth: "55ch" }}>
          Approachable. Authoritative. Partnership-focused. Let&apos;s stop looking and start building.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "1.25rem" }}>
        {SERVICES.map((svc) => {
          const isH = hovered === svc.id;
          return (
            <div key={svc.id} onMouseEnter={() => setHovered(svc.id)} onMouseLeave={() => setHovered(null)}
              style={{ position: "relative", borderRadius: "4px", overflow: "hidden", minHeight: "540px", cursor: "default", border: `1px solid ${isH ? svc.accent + "50" : "rgba(255,255,255,0.06)"}`, transition: "border-color 0.3s" }}>
              <Image src={svc.img} alt={svc.label} fill style={{ objectFit: "cover", transform: isH ? "scale(1.05)" : "scale(1)", transition: "transform 0.6s ease" }} sizes="(max-width: 768px) 100vw, 33vw" />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(5,5,5,0.45) 0%, rgba(5,5,5,0.80) 45%, rgba(5,5,5,0.98) 100%)", backdropFilter: "blur(1px)", WebkitBackdropFilter: "blur(1px)" }} />
              {isH && <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: `radial-gradient(ellipse at 50% 105%, ${svc.accent}20 0%, transparent 60%)` }} />}
              <div style={{ position: "absolute", inset: 0, padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: "0.9rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: isH ? svc.accent : "rgba(255,255,255,0.35)", transition: "color 0.2s" }}>{svc.label}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.1em", padding: "0.2rem 0.6rem", borderRadius: "2px", background: isH ? svc.accent + "20" : "rgba(255,255,255,0.06)", color: isH ? svc.accent : "rgba(255,255,255,0.4)", border: `1px solid ${isH ? svc.accent + "40" : "rgba(255,255,255,0.06)"}`, transition: "all 0.2s" }}>{svc.pricing}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 2.4vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, color: "#F3F4F6", margin: 0, whiteSpace: "pre-line" }}>{svc.title}</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", lineHeight: 1.75, color: "rgba(243,244,246,0.65)", margin: 0, maxHeight: isH ? "200px" : "0px", overflow: "hidden", opacity: isH ? 1 : 0, transition: "max-height 0.45s ease, opacity 0.3s ease" }}>{svc.story}</p>
                <p style={{ fontFamily: "var(--font-heading)", fontSize: "0.82rem", fontStyle: "italic", color: isH ? svc.accent : "rgba(255,255,255,0.18)", margin: 0, transition: "color 0.3s" }}>&ldquo;{svc.quote}&rdquo;</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", opacity: isH ? 1 : 0.5, transition: "opacity 0.3s" }}>
                  {svc.tags.map((tag) => (
                    <span key={tag} style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.2rem 0.55rem", borderRadius: "2px", background: isH ? svc.accent + "18" : "rgba(255,255,255,0.06)", color: isH ? svc.accent : "rgba(255,255,255,0.45)", border: `1px solid ${isH ? svc.accent + "35" : "rgba(255,255,255,0.06)"}`, transition: "all 0.2s" }}>{tag}</span>
                  ))}
                </div>
                {/* Blueprint §1 — per-card mailto CTA */}
                <a
                  href={`mailto:ansupoddar11@gmail.com?subject=Custom%20Quote%3A%20${encodeURIComponent(svc.label.replace(/^\d+ — /, ""))}`}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.35rem",
                    fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.12em",
                    textTransform: "uppercase", color: svc.accent, textDecoration: "none",
                    borderBottom: `1px solid ${svc.accent}50`, paddingBottom: "2px",
                    maxHeight: isH ? "2rem" : "0px", overflow: "hidden", opacity: isH ? 1 : 0,
                    transition: "max-height 0.4s ease, opacity 0.3s ease",
                    pointerEvents: isH ? "auto" : "none",
                  }}
                >
                  Get a Custom Quote ↗
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", lineHeight: 1.7, color: "rgba(255,255,255,0.25)", marginTop: "3rem", textAlign: "center" }}>
        While this represents my current core expertise, I hope to offer more in the future. We can discuss prices and customised quotes for your unique project —{" "}
        <a href="mailto:ansupoddar11@gmail.com" style={{ color: "#FF4500", textDecoration: "none" }}>feel free to reach out</a>{" "}
        to make your brand scale and get better.
      </p>
    </section>
  );
}
