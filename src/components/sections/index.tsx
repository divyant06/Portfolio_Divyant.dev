"use client";

import dynamic from "next/dynamic";

/* ── Phase 4: Client-only section components (no SSR) ── */
export const SpotifyNowPlaying = dynamic(
  () => import("@/components/sections/SpotifyNowPlaying").then((m) => m.SpotifyNowPlaying),
  { ssr: false }
);

export const CalBookingEmbed = dynamic(
  () => import("@/components/sections/CalBookingEmbed").then((m) => m.CalBookingEmbed),
  { ssr: false }
);

export const GitHubActivity = dynamic(
  () => import("@/components/sections/GitHubActivity").then((m) => m.GitHubActivity),
  { ssr: false }
);

export const ServicesSection = dynamic(
  () => import("@/components/sections/ServicesSection").then((m) => m.ServicesSection),
  { ssr: false }
);

export const SelectedWorksExpanded = dynamic(
  () => import("@/components/sections/SelectedWorksExpanded").then((m) => m.SelectedWorksExpanded),
  { ssr: false }
);

export const ProjectStartSection = dynamic(
  () => import("@/components/sections/ProjectStartSection").then((m) => m.ProjectStartSection),
  { ssr: false }
);
