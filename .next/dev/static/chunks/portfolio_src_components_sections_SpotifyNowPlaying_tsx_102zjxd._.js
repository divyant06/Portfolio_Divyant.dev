;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="e26ac8bf-6dc0-a2ec-1d02-e13440676ae5")}catch(e){}}();
(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/portfolio/src/components/sections/SpotifyNowPlaying.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpotifyNowPlaying",
    ()=>SpotifyNowPlaying
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const FALLBACK = {
    isPlaying: false,
    title: "Not playing anything currently",
    artist: "",
    album: "",
    albumImageUrl: null,
    songUrl: ""
};
function SpotifyNowPlaying() {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(FALLBACK);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SpotifyNowPlaying.useEffect": ()=>{
            let mounted = true;
            const fetchTrack = {
                "SpotifyNowPlaying.useEffect.fetchTrack": async ()=>{
                    try {
                        const res = await fetch("/api/spotify", {
                            cache: "no-store"
                        });
                        if (res.ok && mounted) {
                            const json = await res.json();
                            setData(json);
                        }
                    } catch  {
                    // Silently fallback
                    }
                }
            }["SpotifyNowPlaying.useEffect.fetchTrack"];
            fetchTrack();
            const interval = setInterval(fetchTrack, 30_000);
            return ({
                "SpotifyNowPlaying.useEffect": ()=>{
                    mounted = false;
                    clearInterval(interval);
                }
            })["SpotifyNowPlaying.useEffect"];
        }
    }["SpotifyNowPlaying.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: "#111111",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "2px",
            padding: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "1.25rem"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: "52px",
                    height: "52px",
                    borderRadius: "4px",
                    background: data.albumImageUrl ? `url(${data.albumImageUrl}) center/cover no-repeat` : "rgba(29,185,84,0.12)",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden"
                },
                children: !data.albumImageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "28",
                    height: "28",
                    viewBox: "0 0 24 24",
                    fill: "#1DB954",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.503 17.309a.75.75 0 01-1.03.254c-2.82-1.723-6.37-2.112-10.553-1.157a.75.75 0 01-.334-1.462c4.577-1.045 8.504-.595 11.664 1.335a.75.75 0 01.253 1.03zm1.468-3.263a.937.937 0 01-1.288.309c-3.228-1.984-8.148-2.56-11.964-1.401a.937.937 0 11-.544-1.793c4.352-1.322 9.762-.682 13.488 1.597a.937.937 0 01.308 1.288zm.126-3.403C15.696 8.563 9.117 8.344 5.312 9.5a1.125 1.125 0 11-.652-2.153c4.37-1.327 11.628-1.071 16.214 1.614a1.125 1.125 0 01-1.777 1.382z"
                    }, void 0, false, {
                        fileName: "[project]/portfolio/src/components/sections/SpotifyNowPlaying.tsx",
                        lineNumber: 84,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/portfolio/src/components/sections/SpotifyNowPlaying.tsx",
                    lineNumber: 83,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/portfolio/src/components/sections/SpotifyNowPlaying.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.55rem",
                            letterSpacing: "0.18em",
                            color: data.isPlaying ? "#1DB954" : "rgba(255,255,255,0.3)",
                            textTransform: "uppercase",
                            margin: "0 0 0.35rem"
                        },
                        children: data.isPlaying ? "● Now Playing" : "● Recently Played"
                    }, void 0, false, {
                        fileName: "[project]/portfolio/src/components/sections/SpotifyNowPlaying.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    data.songUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: data.songUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: {
                            fontFamily: "var(--font-body)",
                            fontSize: "0.875rem",
                            fontWeight: 600,
                            color: "#F3F4F6",
                            margin: "0 0 0.15rem",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            display: "block",
                            textDecoration: "none"
                        },
                        children: data.title
                    }, void 0, false, {
                        fileName: "[project]/portfolio/src/components/sections/SpotifyNowPlaying.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: "var(--font-body)",
                            fontSize: "0.875rem",
                            fontWeight: 600,
                            color: "#F3F4F6",
                            margin: "0 0 0.15rem",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap"
                        },
                        children: data.title
                    }, void 0, false, {
                        fileName: "[project]/portfolio/src/components/sections/SpotifyNowPlaying.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: "var(--font-body)",
                            fontSize: "0.75rem",
                            color: "rgba(255,255,255,0.35)",
                            margin: 0,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap"
                        },
                        children: data.artist || "Spotify"
                    }, void 0, false, {
                        fileName: "[project]/portfolio/src/components/sections/SpotifyNowPlaying.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/portfolio/src/components/sections/SpotifyNowPlaying.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "flex-end",
                    gap: "3px",
                    height: "20px",
                    flexShrink: 0
                },
                children: [
                    [
                        14,
                        20,
                        11,
                        18,
                        9
                    ].map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "eq-bar",
                            style: {
                                width: "3px",
                                height: data.isPlaying ? `${h}px` : "4px",
                                background: "#1DB954",
                                borderRadius: "1px",
                                opacity: 0.8,
                                transition: "height 0.4s ease"
                            }
                        }, i, false, {
                            fileName: "[project]/portfolio/src/components/sections/SpotifyNowPlaying.tsx",
                            lineNumber: 165,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 24 24",
                        fill: "#1DB954",
                        style: {
                            marginLeft: "6px",
                            opacity: 0.6,
                            flexShrink: 0
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.503 17.309a.75.75 0 01-1.03.254c-2.82-1.723-6.37-2.112-10.553-1.157a.75.75 0 01-.334-1.462c4.577-1.045 8.504-.595 11.664 1.335a.75.75 0 01.253 1.03zm1.468-3.263a.937.937 0 01-1.288.309c-3.228-1.984-8.148-2.56-11.964-1.401a.937.937 0 11-.544-1.793c4.352-1.322 9.762-.682 13.488 1.597a.937.937 0 01.308 1.288zm.126-3.403C15.696 8.563 9.117 8.344 5.312 9.5a1.125 1.125 0 11-.652-2.153c4.37-1.327 11.628-1.071 16.214 1.614a1.125 1.125 0 01-1.777 1.382z"
                        }, void 0, false, {
                            fileName: "[project]/portfolio/src/components/sections/SpotifyNowPlaying.tsx",
                            lineNumber: 185,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/portfolio/src/components/sections/SpotifyNowPlaying.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/portfolio/src/components/sections/SpotifyNowPlaying.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this),
            data.isPlaying && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
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
        `
            }, void 0, false, {
                fileName: "[project]/portfolio/src/components/sections/SpotifyNowPlaying.tsx",
                lineNumber: 191,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/portfolio/src/components/sections/SpotifyNowPlaying.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_s(SpotifyNowPlaying, "E1BD+L0PgyFijpghvj6sarTq5rU=");
_c = SpotifyNowPlaying;
var _c;
__turbopack_context__.k.register(_c, "SpotifyNowPlaying");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/portfolio/src/components/sections/SpotifyNowPlaying.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/portfolio/src/components/sections/SpotifyNowPlaying.tsx [app-client] (ecmascript)"));
}),
]);

//# debugId=e26ac8bf-6dc0-a2ec-1d02-e13440676ae5
//# sourceMappingURL=portfolio_src_components_sections_SpotifyNowPlaying_tsx_102zjxd._.js.map