"use client";

import { useEffect, useState } from "react";

interface SpotifyData {
  isPlaying: boolean;
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string | null;
  songUrl: string;
}

const FALLBACK: SpotifyData = {
  isPlaying: false,
  title: "Not playing anything currently",
  artist: "",
  album: "",
  albumImageUrl: null,
  songUrl: "",
};

/**
 * Live Spotify "Now Playing" widget.
 * Polls /api/spotify every 30 seconds.
 * Falls back gracefully to a static UI when API is unavailable.
 */
export function SpotifyNowPlaying() {
  const [data, setData] = useState<SpotifyData>(FALLBACK);

  useEffect(() => {
    let mounted = true;

    const fetchTrack = async () => {
      try {
        const res = await fetch("/api/spotify", { cache: "no-store" });
        if (res.ok && mounted) {
          const json: SpotifyData = await res.json();
          setData(json);
        }
      } catch {
        // Silently fallback
      }
    };

    fetchTrack();
    const interval = setInterval(fetchTrack, 30_000);
    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      style={{
        background: "#111111",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "2px",
        padding: "1.5rem",
        display: "flex",
        alignItems: "center",
        gap: "1.25rem",
      }}
    >
      {/* Album art / Spotify logo fallback */}
      <div
        style={{
          width: "52px",
          height: "52px",
          borderRadius: "4px",
          background: data.albumImageUrl
            ? `url(${data.albumImageUrl}) center/cover no-repeat`
            : "rgba(29,185,84,0.12)",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {!data.albumImageUrl && (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#1DB954">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.503 17.309a.75.75 0 01-1.03.254c-2.82-1.723-6.37-2.112-10.553-1.157a.75.75 0 01-.334-1.462c4.577-1.045 8.504-.595 11.664 1.335a.75.75 0 01.253 1.03zm1.468-3.263a.937.937 0 01-1.288.309c-3.228-1.984-8.148-2.56-11.964-1.401a.937.937 0 11-.544-1.793c4.352-1.322 9.762-.682 13.488 1.597a.937.937 0 01.308 1.288zm.126-3.403C15.696 8.563 9.117 8.344 5.312 9.5a1.125 1.125 0 11-.652-2.153c4.37-1.327 11.628-1.071 16.214 1.614a1.125 1.125 0 01-1.777 1.382z" />
          </svg>
        )}
      </div>

      {/* Track info */}
      <div style={{ flex: 1, overflow: "hidden" }}>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.55rem",
            letterSpacing: "0.18em",
            color: data.isPlaying ? "#1DB954" : "rgba(255,255,255,0.3)",
            textTransform: "uppercase",
            margin: "0 0 0.35rem",
          }}
        >
          {data.isPlaying ? "● Now Playing" : "● Recently Played"}
        </p>
        {data.songUrl ? (
          <a
            href={data.songUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "#F3F4F6",
              margin: "0 0 0.15rem",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              display: "block",
              textDecoration: "none",
            }}
          >
            {data.title}
          </a>
        ) : (
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "#F3F4F6",
              margin: "0 0 0.15rem",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {data.title}
          </p>
        )}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            color: "rgba(255,255,255,0.35)",
            margin: 0,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {data.artist || "Spotify"}
        </p>
      </div>

      {/* Animated equalizer bars */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: "3px",
          height: "20px",
          flexShrink: 0,
        }}
      >
        {[14, 20, 11, 18, 9].map((h, i) => (
          <span
            key={i}
            className="eq-bar"
            style={{
              width: "3px",
              height: data.isPlaying ? `${h}px` : "4px",
              background: "#1DB954",
              borderRadius: "1px",
              opacity: 0.8,
              transition: "height 0.4s ease",
            }}
          />
        ))}
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="#1DB954"
          style={{ marginLeft: "6px", opacity: 0.6, flexShrink: 0 }}
        >
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.503 17.309a.75.75 0 01-1.03.254c-2.82-1.723-6.37-2.112-10.553-1.157a.75.75 0 01-.334-1.462c4.577-1.045 8.504-.595 11.664 1.335a.75.75 0 01.253 1.03zm1.468-3.263a.937.937 0 01-1.288.309c-3.228-1.984-8.148-2.56-11.964-1.401a.937.937 0 11-.544-1.793c4.352-1.322 9.762-.682 13.488 1.597a.937.937 0 01.308 1.288zm.126-3.403C15.696 8.563 9.117 8.344 5.312 9.5a1.125 1.125 0 11-.652-2.153c4.37-1.327 11.628-1.071 16.214 1.614a1.125 1.125 0 01-1.777 1.382z" />
        </svg>
      </div>

      {/* Animated equalizer CSS (plays when isPlaying) */}
      {data.isPlaying && (
        <style>{`
          @keyframes eqBounce {
            0%, 100% { transform: scaleY(0.4); }
            50% { transform: scaleY(1); }
          }
          .eq-bar {
            animation: eqBounce 0.8s ease-in-out infinite;
            transform-origin: bottom;
          }
          .eq-bar:nth-child(1) { animation-delay: 0s; }
          .eq-bar:nth-child(2) { animation-delay: 0.15s; }
          .eq-bar:nth-child(3) { animation-delay: 0.3s; }
          .eq-bar:nth-child(4) { animation-delay: 0.1s; }
          .eq-bar:nth-child(5) { animation-delay: 0.25s; }
        `}</style>
      )}
    </div>
  );
}
