"use client";

import dynamic from "next/dynamic";

// 1. Safely lazy-load the base Spline component
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div style={{ 
      display: "flex", justifyContent: "center", alignItems: "center", 
      width: "100%", height: "100%", 
      color: "rgba(255, 69, 0, 0.7)", fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.1em" 
    }}>
      [ LOADING 3D SCENE... ]
    </div>
  ),
});

export function InteractiveKeyboard() {
  return (
    // 2. Taller container (500px)
    <div style={{ 
      width: "100%", 
      height: "500px", 
      borderRadius: "12px", 
      border: "1px solid rgba(255,255,255,0.05)", 
      overflow: "hidden", 
      background: "#050505", 
      position: "relative", 
      marginBottom: "2rem" 
    }}>
      <Spline scene="https://prod.spline.design/WFSf8u42kb8A8Jtp/scene.splinecode" />

      {/* 3. THE CENSOR HACK: This completely covers the Spline Logo */}
      <div style={{
        position: "absolute",
        bottom: 0,
        right: 0,
        width: "160px",
        height: "60px",
        background: "#050505",
        zIndex: 50,
        pointerEvents: "none" // Ensures it doesn't block mouse interactions
      }} />
    </div>
  );
}