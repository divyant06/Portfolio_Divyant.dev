"use client";

import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/* ── Polished dark metallic torus knot ─────────────── 
   NO Environment preset — we simulate metallic reflections
   purely with multi-directional lighting to avoid GPU memory
   exhaustion (which was causing WebGL Context Lost).         */

function TorusKnotMesh() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const { viewport, pointer } = useThree();

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Slow auto-rotation
    meshRef.current.rotation.x += delta * 0.06;
    meshRef.current.rotation.y += delta * 0.1;

    // Mouse reactivity — subtle tilt toward cursor
    const targetRotX = pointer.y * 0.3;
    const targetRotZ = pointer.x * -0.15;
    meshRef.current.rotation.x +=
      (targetRotX - meshRef.current.rotation.x) * 0.02;
    meshRef.current.rotation.z +=
      (targetRotZ - meshRef.current.rotation.z) * 0.02;

    // Subtle breathing scale based on time
    const breathe = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.03;
    const baseScale = viewport.width < 6 ? 0.65 : 1;
    meshRef.current.scale.setScalar(baseScale * breathe);
  });

  return (
    <mesh ref={meshRef} position={[0.8, -0.3, 0]}>
      <torusKnotGeometry args={[1.6, 0.45, 256, 64]} />
      <meshPhysicalMaterial
        color="#111111"
        metalness={1}
        roughness={0.1}
        clearcoat={1}
        clearcoatRoughness={0.1}
        reflectivity={1}
      />
    </mesh>
  );
}

/* Forcefully null the scene background every frame */
function ForceTransparent() {
  const { scene, gl } = useThree();
  useFrame(() => {
    scene.background = null;
    gl.setClearColor(0x000000, 0);
  });
  return null;
}

/* ── Exported wrapper ──────────────────────────────── */
export function HeroTorus() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 1,
        opacity: 0.6,
      }}
    >
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        gl={{
          alpha: true,
          antialias: true,
          premultipliedAlpha: false,
          powerPreference: "high-performance",
          preserveDrawingBuffer: false,
        }}
        style={{ background: "transparent" }}
        onCreated={({ gl, scene }) => {
          gl.setClearColor(0x000000, 0);
          scene.background = null;
        }}
      >
        <ForceTransparent />

        {/* === Cinematic lighting rig ===
            Multiple directional + point lights create specular
            highlights on the clearcoat material that mimic
            environment reflections without GPU-heavy HDR maps. */}

        {/* Minimal ambient base */}
        <ambientLight intensity={0.04} />

        {/* Primary rim-light: hot orange from upper-right */}
        <directionalLight
          position={[5, 4, 5]}
          intensity={2.2}
          color="#FF4500"
        />

        {/* Secondary fill: cool slate from lower-left */}
        <directionalLight
          position={[-4, -3, 3]}
          intensity={0.6}
          color="#334155"
        />

        {/* Back-light for edge definition */}
        <directionalLight
          position={[0, 0, -5]}
          intensity={0.35}
          color="#1e293b"
        />

        {/* Top-down soft white for clearcoat sparkle */}
        <directionalLight
          position={[0, 6, 2]}
          intensity={0.5}
          color="#e2e8f0"
        />

        {/* Tight specular point on the front face */}
        <pointLight
          position={[2, -1, 4]}
          intensity={1.2}
          color="#FF4500"
          distance={12}
          decay={2}
        />

        {/* Secondary cool point for depth */}
        <pointLight
          position={[-3, 2, 3]}
          intensity={0.4}
          color="#64748b"
          distance={10}
          decay={2}
        />

        <TorusKnotMesh />
      </Canvas>
    </div>
  );
}
