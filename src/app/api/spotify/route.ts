import { NextResponse } from "next/server";

/**
 * /api/spotify — Spotify "Now Playing" API route
 *
 * Uses the Spotify Web API with a refresh token to get the current
 * or most recently played track. Gracefully falls back if env vars
 * are missing so the build never crashes.
 *
 * Required env vars:
 *  - SPOTIFY_CLIENT_ID
 *  - SPOTIFY_CLIENT_SECRET
 *  - SPOTIFY_REFRESH_TOKEN
 */

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";
const RECENTLY_PLAYED_ENDPOINT =
  "https://api.spotify.com/v1/me/player/recently-played?limit=1";

async function getAccessToken(): Promise<string | null> {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) return null;

  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const res = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  });

  if (!res.ok) return null;

  const data = await res.json();
  return data.access_token ?? null;
}

interface SpotifyTrack {
  isPlaying: boolean;
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string | null;
  songUrl: string;
}

export async function GET() {
  const accessToken = await getAccessToken();

  if (!accessToken) {
    return NextResponse.json({
      isPlaying: false,
      title: "Not playing anything currently",
      artist: "",
      album: "",
      albumImageUrl: null,
      songUrl: "",
    } satisfies SpotifyTrack);
  }

  try {
    // Try currently playing
    const nowRes = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: { Authorization: `Bearer ${accessToken}` },
      cache: "no-store",
    });

    if (nowRes.status === 200) {
      const data = await nowRes.json();
      if (data?.item) {
        const track: SpotifyTrack = {
          isPlaying: data.is_playing ?? false,
          title: data.item.name,
          artist: data.item.artists
            .map((a: { name: string }) => a.name)
            .join(", "),
          album: data.item.album.name,
          albumImageUrl: data.item.album.images?.[0]?.url ?? null,
          songUrl: data.item.external_urls?.spotify ?? "",
        };
        return NextResponse.json(track);
      }
    }

    // Fallback: recently played
    const recentRes = await fetch(RECENTLY_PLAYED_ENDPOINT, {
      headers: { Authorization: `Bearer ${accessToken}` },
      cache: "no-store",
    });

    if (recentRes.ok) {
      const data = await recentRes.json();
      const item = data.items?.[0]?.track;
      if (item) {
        const track: SpotifyTrack = {
          isPlaying: false,
          title: item.name,
          artist: item.artists
            .map((a: { name: string }) => a.name)
            .join(", "),
          album: item.album.name,
          albumImageUrl: item.album.images?.[0]?.url ?? null,
          songUrl: item.external_urls?.spotify ?? "",
        };
        return NextResponse.json(track);
      }
    }

    // Nothing found
    return NextResponse.json({
      isPlaying: false,
      title: "Not playing anything currently",
      artist: "",
      album: "",
      albumImageUrl: null,
      songUrl: "",
    } satisfies SpotifyTrack);
  } catch (err) {
    console.error("[Spotify API] Error:", err);
    return NextResponse.json({
      isPlaying: false,
      title: "Not playing anything currently",
      artist: "",
      album: "",
      albumImageUrl: null,
      songUrl: "",
    } satisfies SpotifyTrack);
  }
}
