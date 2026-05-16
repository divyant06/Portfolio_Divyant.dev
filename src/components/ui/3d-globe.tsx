"use client";

import { useRef, useState, useEffect, useCallback, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTexture, Html } from "@react-three/drei";
import * as THREE from "three";

/* ─── Types ─────────────────────────────────────────────────── */
export interface GlobeMarker {
  lat: number;
  lng: number;
  src: string;
  label?: string;
}

export interface GlobeConfig {
  atmosphereColor?: string;
  atmosphereIntensity?: number;
  bumpScale?: number;
  autoRotateSpeed?: number;
  globeColor?: string;
}

interface Globe3DProps {
  markers?: GlobeMarker[];
  config?: GlobeConfig;
  onMarkerClick?: (marker: GlobeMarker) => void;
  onMarkerHover?: (marker: GlobeMarker | null) => void;
}

/* ─── Helpers ───────────────────────────────────────────────── */
function latLngToXYZ(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

/* ─── Atmosphere shell ──────────────────────────────────────── */
function Atmosphere({ color, intensity }: { color: string; intensity: number }) {
  return (
    <mesh scale={[1.15, 1.15, 1.15]}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.04 * (intensity / 20)}
        side={THREE.BackSide}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}

/* ─── Single marker pin ─────────────────────────────────────── */
function MarkerPin({
  marker,
  onClick,
  onHover,
}: {
  marker: GlobeMarker;
  onClick?: (m: GlobeMarker) => void;
  onHover?: (m: GlobeMarker | null) => void;
}) {
  const [hovered, setHovered] = useState(false);
  const pos = latLngToXYZ(marker.lat, marker.lng, 1.02);
  const texture = useTexture(marker.src);

  return (
    <group position={pos}>
      {/* Invisible hit sphere */}
      <mesh
        onPointerOver={() => { setHovered(true); onHover?.(marker); }}
        onPointerOut={() => { setHovered(false); onHover?.(null); }}
        onClick={() => onClick?.(marker)}
      >
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>

      {/* Avatar disc */}
      <mesh>
        <circleGeometry args={[hovered ? 0.055 : 0.042, 32]} />
        <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
      </mesh>

      {/* Glow ring */}
      <mesh>
        <ringGeometry args={[hovered ? 0.058 : 0.044, hovered ? 0.068 : 0.054, 32]} />
        <meshBasicMaterial
          color="#ff4500"
          transparent
          opacity={hovered ? 0.9 : 0.5}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Label on hover */}
      {hovered && marker.label && (
        <Html distanceFactor={3} style={{ pointerEvents: "none" }}>
          <div style={{
            background: "rgba(10,10,10,0.92)",
            border: "1px solid rgba(255,69,0,0.6)",
            borderRadius: "3px",
            padding: "3px 8px",
            color: "#f3f4f6",
            fontFamily: "var(--font-mono, monospace)",
            fontSize: "10px",
            letterSpacing: "0.1em",
            whiteSpace: "nowrap",
            transform: "translate(-50%, -130%)",
          }}>
            {marker.label}
          </div>
        </Html>
      )}
    </group>
  );
}

/* ─── Globe mesh ────────────────────────────────────────────── */
/*
  All mutable refs live INSIDE this component so the React compiler
  never sees them being mutated via props/arguments.
  The parent is notified of dragging state via the `onDragChange` callback
  so the cursor CSS can update without reading a ref during render.
*/
function GlobeMesh({
  markers,
  config,
  onMarkerClick,
  onMarkerHover,
  onDragChange,
}: {
  markers: GlobeMarker[];
  config: Required<GlobeConfig>;
  onMarkerClick?: (m: GlobeMarker) => void;
  onMarkerHover?: (m: GlobeMarker | null) => void;
  onDragChange: (dragging: boolean) => void;
}) {
  const groupRef = useRef<THREE.Group>(null);
  // Both refs are fully local — never passed as props, never read during render.
  const isDraggingRef = useRef(false);
  const groupRotationRef = useRef(0);
  const dragStartRef = useRef({ x: 0, y: 0, rot: 0 });
  const { gl } = useThree();
  const earthTexture = useTexture("https://unpkg.com/three-globe/example/img/earth-dark.jpg");

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    if (!isDraggingRef.current) {
      groupRef.current.rotation.y += delta * config.autoRotateSpeed;
      groupRotationRef.current = groupRef.current.rotation.y;
    }
  });

  /* Pointer drag — all logic stays inside event handlers / effects */
  useEffect(() => {
    const canvas = gl.domElement;

    const onDown = (e: PointerEvent) => {
      isDraggingRef.current = true;
      onDragChange(true);
      dragStartRef.current = { x: e.clientX, y: e.clientY, rot: groupRotationRef.current };
    };

    const onMove = (e: PointerEvent) => {
      if (!isDraggingRef.current || !groupRef.current) return;
      const dx = (e.clientX - dragStartRef.current.x) * 0.005;
      groupRef.current.rotation.y = dragStartRef.current.rot + dx;
      groupRotationRef.current = groupRef.current.rotation.y;
    };

    const onUp = () => {
      isDraggingRef.current = false;
      onDragChange(false);
    };

    canvas.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      canvas.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [gl, onDragChange]);

  return (
    <group ref={groupRef}>
      {/* Globe sphere */}
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          map={earthTexture}
          roughness={0.85}
          metalness={0.1}
        />
      </mesh>

      {/* Atmosphere */}
      <Atmosphere color={config.atmosphereColor} intensity={config.atmosphereIntensity} />

      {/* Markers */}
      {markers.map((m, i) => (
        <MarkerPin
          key={i}
          marker={m}
          onClick={onMarkerClick}
          onHover={onMarkerHover}
        />
      ))}
    </group>
  );
}

/* ─── Public component ──────────────────────────────────────── */
export function Globe3D({
  markers = [],
  config = {},
  onMarkerClick,
  onMarkerHover,
}: Globe3DProps) {
  const mergedConfig: Required<GlobeConfig> = {
    atmosphereColor: config.atmosphereColor ?? "#4da6ff",
    atmosphereIntensity: config.atmosphereIntensity ?? 20,
    bumpScale: config.bumpScale ?? 5,
    autoRotateSpeed: config.autoRotateSpeed ?? 0.3,
    globeColor: config.globeColor ?? "#111827",
  };

  // Cursor state is proper React state — safe to read during render.
  const [isDragging, setIsDragging] = useState(false);

  const handleDragChange = useCallback((dragging: boolean) => {
    setIsDragging(dragging);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 2.6], fov: 45 }}
      style={{ width: "100%", height: "100%", cursor: isDragging ? "grabbing" : "grab" }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 3, 5]} intensity={1.2} />
      <directionalLight position={[-3, -2, -3]} intensity={0.3} color="#ff4500" />

      <Suspense fallback={null}>
        <GlobeMesh
          markers={markers}
          config={mergedConfig}
          onMarkerClick={onMarkerClick}
          onMarkerHover={onMarkerHover}
          onDragChange={handleDragChange}
        />
      </Suspense>
    </Canvas>
  );
}
