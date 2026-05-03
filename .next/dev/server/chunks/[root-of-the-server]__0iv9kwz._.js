;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="c7714bf7-c651-6f02-d8d9-fb4a29cc23ee")}catch(e){}}();
module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/portfolio/src/app/api/spotify/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/server.js [app-route] (ecmascript)");
;
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
 */ const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";
const RECENTLY_PLAYED_ENDPOINT = "https://api.spotify.com/v1/me/player/recently-played?limit=1";
async function getAccessToken() {
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
    const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;
    if (!clientId || !clientSecret || !refreshToken) return null;
    const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
    const res = await fetch(TOKEN_ENDPOINT, {
        method: "POST",
        headers: {
            Authorization: `Basic ${basic}`,
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token: refreshToken
        })
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.access_token ?? null;
}
async function GET() {
    const accessToken = await getAccessToken();
    if (!accessToken) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            isPlaying: false,
            title: "Not playing anything currently",
            artist: "",
            album: "",
            albumImageUrl: null,
            songUrl: ""
        });
    }
    try {
        // Try currently playing
        const nowRes = await fetch(NOW_PLAYING_ENDPOINT, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            cache: "no-store"
        });
        if (nowRes.status === 200) {
            const data = await nowRes.json();
            if (data?.item) {
                const track = {
                    isPlaying: data.is_playing ?? false,
                    title: data.item.name,
                    artist: data.item.artists.map((a)=>a.name).join(", "),
                    album: data.item.album.name,
                    albumImageUrl: data.item.album.images?.[0]?.url ?? null,
                    songUrl: data.item.external_urls?.spotify ?? ""
                };
                return __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(track);
            }
        }
        // Fallback: recently played
        const recentRes = await fetch(RECENTLY_PLAYED_ENDPOINT, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            cache: "no-store"
        });
        if (recentRes.ok) {
            const data = await recentRes.json();
            const item = data.items?.[0]?.track;
            if (item) {
                const track = {
                    isPlaying: false,
                    title: item.name,
                    artist: item.artists.map((a)=>a.name).join(", "),
                    album: item.album.name,
                    albumImageUrl: item.album.images?.[0]?.url ?? null,
                    songUrl: item.external_urls?.spotify ?? ""
                };
                return __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(track);
            }
        }
        // Nothing found
        return __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            isPlaying: false,
            title: "Not playing anything currently",
            artist: "",
            album: "",
            albumImageUrl: null,
            songUrl: ""
        });
    } catch (err) {
        console.error("[Spotify API] Error:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            isPlaying: false,
            title: "Not playing anything currently",
            artist: "",
            album: "",
            albumImageUrl: null,
            songUrl: ""
        });
    }
}
}),
];

//# debugId=c7714bf7-c651-6f02-d8d9-fb4a29cc23ee
//# sourceMappingURL=%5Broot-of-the-server%5D__0iv9kwz._.js.map