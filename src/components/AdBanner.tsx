"use client";

import { useEffect, useRef } from "react";

// Add this to prevent TypeScript errors on the window object
declare global {
  interface Window {
    adsbygoogle: Record<string, unknown>[];
  }
}

export function AdBanner() {
  const reference = useRef<HTMLModElement>(null);

  const isDev = process.env.NODE_ENV === "development";

  useEffect(() => {
    if (isDev) return;

    // Check if the ref exists AND if we haven't already pushed to it
    if (reference.current && !reference.current.getAttribute("data-ad-status")) {
      try {
        // Mark it as pushed so React Strict Mode can't trigger it twice
        reference.current.setAttribute("data-ad-status", "pushed");
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense error gracefully caught:", e);
      }
    }
  }, [isDev]);

  // Render the safe placeholder in development
  if (isDev) {
    return (
      <div style={{ 
        display: "flex", justifyContent: "center", alignItems: "center", 
        width: "100%", height: "90px", 
        border: "1px dashed rgba(255, 69, 0, 0.5)", color: "rgba(255, 69, 0, 0.5)", 
        fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.1em", 
        marginTop: "2rem" 
      }}>
        []
      </div>
    );
  }

  // Render the actual AdSense code in production
  return (
    <div style={{ display: "block", width: "100%", minWidth: "250px", overflow: "hidden" }}>
      <ins
        ref={reference}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-7958603436560948" // <-- REPLACE THIS
        data-ad-slot="4887322173"           // <-- REPLACE THIS
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}