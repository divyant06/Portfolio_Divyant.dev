"use client";

import dynamic from "next/dynamic";

/* ── Skeleton loaders ─────────────────────────── */
const SphereSkeleton = () => (
  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
    <div className="skeleton-pulse" style={{ width: "clamp(200px, 35vw, 420px)", height: "clamp(200px, 35vw, 420px)", borderRadius: "50%", background: "rgba(255,255,255,0.025)" }} />
  </div>
);

const PitSkeleton = () => (
  <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", flexWrap: "wrap", padding: "2rem" }}>
    {Array.from({ length: 8 }).map((_, i) => (
      <div key={i} className="skeleton-pulse" style={{ height: "2.2rem", width: `${60 + (i % 3) * 30}px`, borderRadius: "1.1rem", background: "rgba(255,255,255,0.03)" }} />
    ))}
  </div>
);

const GlobeSkeleton = () => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
    <div className="skeleton-pulse" style={{ width: "280px", height: "280px", borderRadius: "50%", background: "rgba(255,255,255,0.025)" }} />
  </div>
);

/* ── Heavy 3D/physics components — client-only, no SSR ── */
export const HeroTorus = dynamic(
  () => import("@/components/three/HeroTorus").then((m) => m.HeroTorus),
  { ssr: false, loading: SphereSkeleton }
);

export const GravityPitComp = dynamic(
  () => import("@/components/three/GravityPit").then((m) => m.GravityPit),
  { ssr: false, loading: PitSkeleton }
);

export const CobeGlobe = dynamic(
  () => import("@/components/three/CobeGlobe").then((m) => m.CobeGlobe),
  { ssr: false, loading: GlobeSkeleton }
);

export const WorksPreview = dynamic(
  () => import("@/components/three/WorksPreview").then((m) => m.WorksPreview),
  { ssr: false }
);
