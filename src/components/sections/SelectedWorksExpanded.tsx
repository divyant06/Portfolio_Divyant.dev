"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ── Blueprint §3 Asset Map ───────────────────────────────────────────
   All project images verified against /public/assets/ directory tree.
   GitHub links from github.com/divyant06 public repos.
─────────────────────────────────────────────────────────────────────── */
const PROJECTS = [
  {
    num: "01",
    title: "Amrit Sathi",
    tags: ["Next.js", "Supabase", "React", "TypeScript"],
    type: "Web Application",
    year: "2024",
    liveHref: "#",
    repoHref: "https://github.com/divyant06/amrit-sathi",
    description: "A comprehensive full-stack web application built with Next.js and Supabase. Features real-time data synchronization, role-based authentication flows, a responsive admin dashboard, and server-side rendering optimised for SEO and Core Web Vitals.",
    features: ["Real-time Supabase DB", "Role-based auth", "SSR + ISR", "Responsive dashboard"],
    images: ["/assets/amrit_sathi/AS-main-1.jpeg", "/assets/amrit_sathi/AS-img-2.jpeg", "/assets/amrit_sathi/AS-img-3.jpeg"],
  },
  {
    num: "02",
    title: "Beyond Intern",
    tags: ["Next.js", "Supabase", "LMS", "Tailwind", "Stripe"],
    type: "Ed-Tech Platform",
    year: "2024",
    liveHref: "https://beyondintern.com",
    repoHref: "https://github.com/divyant06/beyond-intern",
    description: "A full-featured Ed-Tech LMS platform powering internship programs at scale. Built on Next.js with Supabase for real-time course delivery, admin dashboards, Zoom webinar integration, Stripe payment flows, and a blog system.",
    features: ["LMS with curriculum builder", "Zoom webinar integration", "Stripe payments", "Admin dashboard"],
    images: ["/assets/beyondintern/BI-main-1.png", "/assets/beyondintern/BI-img-2.png", "/assets/beyondintern/BI-img-3.png"],
  },
  {
    num: "03",
    title: "Blockademia",
    tags: ["Solidity", "React", "Monad Testnet", "Web3", "MetaMask"],
    type: "Blockchain / DApp",
    year: "2024",
    liveHref: "https://blockademia.live",
    repoHref: "https://github.com/divyant06/blockademia",
    description: "A Web3 academic credential verification DApp deployed on Monad Testnet. Solidity smart contracts handle on-chain certificate issuance. The React frontend interfaces with MetaMask for seamless wallet interactions and credential verification.",
    features: ["On-chain certificate issuance", "MetaMask wallet integration", "Monad Testnet deployment", "Solidity smart contracts"],
    images: ["/assets/Blockademia/BLM-main-1.png", "/assets/Blockademia/BLM-img-2.png", "/assets/Blockademia/BLM-img-3.png"],
  },
  {
    num: "04",
    title: "Grant Pool DApp",
    tags: ["Solidity", "Web3", "Smart Contracts", "React"],
    type: "Decentralised Finance",
    year: "2024",
    liveHref: "#",
    repoHref: "https://github.com/divyant06/grant-pool-dapp",
    description: "A decentralised grant distribution protocol. Smart contracts handle pool creation, milestone-based fund release, and multi-sig approvals — removing intermediaries from the grant funding lifecycle entirely.",
    features: ["Milestone-based fund release", "Multi-sig approvals", "On-chain governance", "Grant pool creation"],
    images: ["/assets/grant-pool-Dapp/GPDAPP-main.jpeg"],
  },
  {
    num: "05",
    title: "Job Portal",
    tags: ["React", "Node.js", "PostgreSQL", "Express"],
    type: "Full-Stack Web App",
    year: "2023",
    liveHref: "#",
    repoHref: "https://github.com/divyant06/job-portal",
    description: "A full-stack job board with employer and candidate portals. Features resume parsing, ATS-style candidate tracking, real-time notifications, and PostgreSQL-backed search with full-text indexing.",
    features: ["Resume parsing", "ATS candidate tracking", "Full-text search", "Real-time notifications"],
    images: ["/assets/job_portal/JP-main-1.png", "/assets/job_portal/JP-img-2.png"],
  },
];

/* ── Deterministic commit graph (seeded per project so no hydration mismatch) */
function CommitGraph({ seed }: { seed: number }) {
  const weeks = 18; const days = 7;
  const pseudo = (w: number, d: number) => {
    const n = Math.sin(seed * 9301 + w * 49297 + d * 233) * 0.5 + 0.5;
    return n;
  };
  return (
    <div style={{ display: "flex", gap: "3px", overflowX: "auto", paddingBottom: "4px" }}>
      {Array.from({ length: weeks }).map((_, wi) => (
        <div key={wi} style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
          {Array.from({ length: days }).map((_, di) => {
            const v = pseudo(wi, di);
            const bg = v > 0.85 ? "#FF4500" : v > 0.65 ? "rgba(255,69,0,0.55)" : v > 0.45 ? "rgba(255,69,0,0.22)" : "rgba(255,255,255,0.04)";
            return <div key={di} style={{ width: "9px", height: "9px", borderRadius: "1px", background: bg }} />;
          })}
        </div>
      ))}
    </div>
  );
}

/* ── GitHub icon SVG */
const GHIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

export function SelectedWorksExpanded() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [imgIdx, setImgIdx] = useState<Record<string, number>>({});

  const toggle = (num: string) => setOpenId(openId === num ? null : num);
  const getImg = (num: string) => imgIdx[num] ?? 0;
  const nextImg = (num: string, total: number) =>
    setImgIdx((prev) => ({ ...prev, [num]: ((prev[num] ?? 0) + 1) % total }));
  const prevImg = (num: string, total: number) =>
    setImgIdx((prev) => ({ ...prev, [num]: ((prev[num] ?? 0) - 1 + total) % total }));

  return (
    <section id="works" style={{ padding: "7rem 3vw", background: "#050505" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "4rem", paddingBottom: "1.5rem", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#FF4500", display: "block", marginBottom: "1.5rem" }}>Selected Works</span>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, color: "#F3F4F6", margin: 0 }}>Case Studies</h2>
        </div>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.12em", color: "rgba(255,255,255,0.25)", maxWidth: "20ch", textAlign: "right" }}>Click a row to expand.</p>
      </div>

      {/* Accordion */}
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {PROJECTS.map((p, i) => {
          const isOpen = openId === p.num;
          const curImg = getImg(p.num);
          return (
            <li key={p.num} style={{ borderBottom: i < PROJECTS.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
              {/* Row button */}
              <button
                onClick={() => toggle(p.num)}
                style={{ width: "100%", background: "transparent", border: "none", cursor: "pointer", display: "grid", gridTemplateColumns: "3rem 1fr auto auto 2.5rem", alignItems: "center", gap: "1.5rem", padding: "1.75rem 0", textAlign: "left" }}
                onMouseEnter={(e) => { (e.currentTarget.querySelector(".wt") as HTMLElement).style.color = "#FF4500"; }}
                onMouseLeave={(e) => { if (!isOpen) (e.currentTarget.querySelector(".wt") as HTMLElement).style.color = "#F3F4F6"; }}
              >
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "rgba(255,255,255,0.3)" }}>{p.num}</span>
                <span className="wt" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.25rem, 2.5vw, 2.25rem)", fontWeight: 700, letterSpacing: "-0.03em", color: isOpen ? "#FF4500" : "#F3F4F6", transition: "color 0.15s" }}>{p.title}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>{p.type}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "rgba(255,255,255,0.2)" }}>{p.year}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "1rem", color: "#FF4500", transform: isOpen ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.25s ease", display: "flex", alignItems: "center", justifyContent: "center" }}>+</span>
              </button>

              {/* Expanded panel */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div key="panel" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }} style={{ overflow: "hidden" }}>
                    <div style={{ paddingBottom: "2.5rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: "2rem", alignItems: "start" }}>

                      {/* Image carousel */}
                      <div>
                        <div style={{ position: "relative", borderRadius: "4px", overflow: "hidden", aspectRatio: "16/9", border: "1px solid rgba(255,255,255,0.06)" }}>
                          <Image src={p.images[curImg]} alt={`${p.title} screenshot ${curImg + 1}`} fill style={{ objectFit: "cover", objectPosition: "top" }} sizes="50vw" />
                          {p.images.length > 1 && (
                            <>
                              <button onClick={(e) => { e.stopPropagation(); prevImg(p.num, p.images.length); }} style={{ position: "absolute", left: "0.5rem", top: "50%", transform: "translateY(-50%)", background: "rgba(5,5,5,0.7)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "50%", width: "2rem", height: "2rem", color: "#F3F4F6", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem" }}>‹</button>
                              <button onClick={(e) => { e.stopPropagation(); nextImg(p.num, p.images.length); }} style={{ position: "absolute", right: "0.5rem", top: "50%", transform: "translateY(-50%)", background: "rgba(5,5,5,0.7)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "50%", width: "2rem", height: "2rem", color: "#F3F4F6", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem" }}>›</button>
                              <div style={{ position: "absolute", bottom: "0.5rem", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "4px" }}>
                                {p.images.map((_, idx) => (
                                  <span key={idx} style={{ width: "5px", height: "5px", borderRadius: "50%", background: idx === curImg ? "#FF4500" : "rgba(255,255,255,0.3)" }} />
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                        {/* Image counter */}
                        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", color: "rgba(255,255,255,0.2)", marginTop: "0.4rem", letterSpacing: "0.1em" }}>
                          {curImg + 1} / {p.images.length}
                        </p>
                      </div>

                      {/* Info panel */}
                      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.92rem", lineHeight: 1.8, color: "rgba(243,244,246,0.65)", margin: 0 }}>{p.description}</p>

                        {/* Features list */}
                        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                          {p.features.map((f) => (
                            <li key={f} style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "rgba(243,244,246,0.5)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                              <span style={{ color: "#FF4500", fontSize: "0.7rem" }}>→</span> {f}
                            </li>
                          ))}
                        </ul>

                        {/* Tags */}
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                          {p.tags.map((tag) => (
                            <span key={tag} style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.28rem 0.65rem", borderRadius: "2px", background: "rgba(255,69,0,0.08)", color: "#FF4500", border: "1px solid rgba(255,69,0,0.2)" }}>{tag}</span>
                          ))}
                        </div>

                        {/* Commit graph */}
                        <div style={{ background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "4px", padding: "1.25rem" }}>
                          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.18em", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", margin: "0 0 0.75rem" }}>Commit activity</p>
                          <CommitGraph seed={parseInt(p.num)} />
                        </div>

                        {/* CTAs — Live Site + GitHub Repo */}
                        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                          {p.liveHref !== "#" && (
                            <a href={p.liveHref} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#FF4500", textDecoration: "none", borderBottom: "1px solid rgba(255,69,0,0.3)", paddingBottom: "2px" }}>
                              View Live ↗
                            </a>
                          )}
                          <a href={p.repoHref} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "2px" }}>
                            <GHIcon /> View Repo
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
