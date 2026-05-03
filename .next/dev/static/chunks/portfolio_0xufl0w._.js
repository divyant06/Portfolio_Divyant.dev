;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="df82e141-bbee-d1af-1388-8333b825e7d8")}catch(e){}}();
(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/portfolio/src/components/ui/MagneticButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MagneticButton",
    ()=>MagneticButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function MagneticButton({ href, children }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rawX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const rawY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(rawX, {
        damping: 20,
        stiffness: 250,
        mass: 0.5
    });
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(rawY, {
        damping: 20,
        stiffness: 250,
        mass: 0.5
    });
    const handleMouseMove = (e)=>{
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        // Pull strength — 30% of the distance
        rawX.set((e.clientX - cx) * 0.3);
        rawY.set((e.clientY - cy) * 0.3);
    };
    const handleMouseLeave = ()=>{
        rawX.set(0);
        rawY.set(0);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
        ref: ref,
        href: href,
        target: "_blank",
        rel: "noopener noreferrer",
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        style: {
            x,
            y,
            display: "inline-flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "1.1rem 2.25rem",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "2px",
            fontFamily: "var(--font-body)",
            fontSize: "0.9rem",
            fontWeight: 600,
            color: "#F3F4F6",
            letterSpacing: "0.02em",
            textDecoration: "none",
            transition: "border-color 0.2s ease, background 0.2s ease",
            whiteSpace: "nowrap",
            cursor: "none"
        },
        whileHover: {
            borderColor: "rgba(255,69,0,0.6)",
            backgroundColor: "rgba(255,69,0,0.08)"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/portfolio/src/components/ui/MagneticButton.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(MagneticButton, "u5rMQMzzBrEEf9Mk74jkNCJS7Jk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c = MagneticButton;
var _c;
__turbopack_context__.k.register(_c, "MagneticButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/portfolio/src/components/three/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CobeGlobe",
    ()=>CobeGlobe,
    "GravityPitComp",
    ()=>GravityPitComp,
    "HeroTorus",
    ()=>HeroTorus,
    "WorksPreview",
    ()=>WorksPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
;
;
;
"use client";
;
;
/* ── Skeleton loaders ─────────────────────────── */ const SphereSkeleton = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "skeleton-pulse",
            style: {
                width: "clamp(200px, 35vw, 420px)",
                height: "clamp(200px, 35vw, 420px)",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.025)"
            }
        }, void 0, false, {
            fileName: "[project]/portfolio/src/components/three/index.tsx",
            lineNumber: 8,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/portfolio/src/components/three/index.tsx",
        lineNumber: 7,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = SphereSkeleton;
const PitSkeleton = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.75rem",
            flexWrap: "wrap",
            padding: "2rem"
        },
        children: Array.from({
            length: 8
        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "skeleton-pulse",
                style: {
                    height: "2.2rem",
                    width: `${60 + i % 3 * 30}px`,
                    borderRadius: "1.1rem",
                    background: "rgba(255,255,255,0.03)"
                }
            }, i, false, {
                fileName: "[project]/portfolio/src/components/three/index.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/portfolio/src/components/three/index.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = PitSkeleton;
const GlobeSkeleton = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "skeleton-pulse",
            style: {
                width: "280px",
                height: "280px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.025)"
            }
        }, void 0, false, {
            fileName: "[project]/portfolio/src/components/three/index.tsx",
            lineNumber: 22,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/portfolio/src/components/three/index.tsx",
        lineNumber: 21,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = GlobeSkeleton;
const HeroTorus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c3 = ()=>__turbopack_context__.A("[project]/portfolio/src/components/three/HeroTorus.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.HeroTorus), {
    loadableGenerated: {
        modules: [
            "[project]/portfolio/src/components/three/HeroTorus.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: SphereSkeleton
});
_c4 = HeroTorus;
const GravityPitComp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c5 = ()=>__turbopack_context__.A("[project]/portfolio/src/components/three/GravityPit.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.GravityPit), {
    loadableGenerated: {
        modules: [
            "[project]/portfolio/src/components/three/GravityPit.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: PitSkeleton
});
_c6 = GravityPitComp;
const CobeGlobe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c7 = ()=>__turbopack_context__.A("[project]/portfolio/src/components/three/CobeGlobe.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.CobeGlobe), {
    loadableGenerated: {
        modules: [
            "[project]/portfolio/src/components/three/CobeGlobe.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: GlobeSkeleton
});
_c8 = CobeGlobe;
const WorksPreview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c9 = ()=>__turbopack_context__.A("[project]/portfolio/src/components/three/WorksPreview.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.WorksPreview), {
    loadableGenerated: {
        modules: [
            "[project]/portfolio/src/components/three/WorksPreview.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c10 = WorksPreview;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
__turbopack_context__.k.register(_c, "SphereSkeleton");
__turbopack_context__.k.register(_c1, "PitSkeleton");
__turbopack_context__.k.register(_c2, "GlobeSkeleton");
__turbopack_context__.k.register(_c3, "HeroTorus$dynamic");
__turbopack_context__.k.register(_c4, "HeroTorus");
__turbopack_context__.k.register(_c5, "GravityPitComp$dynamic");
__turbopack_context__.k.register(_c6, "GravityPitComp");
__turbopack_context__.k.register(_c7, "CobeGlobe$dynamic");
__turbopack_context__.k.register(_c8, "CobeGlobe");
__turbopack_context__.k.register(_c9, "WorksPreview$dynamic");
__turbopack_context__.k.register(_c10, "WorksPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/portfolio/src/components/sections/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CalBookingEmbed",
    ()=>CalBookingEmbed,
    "GitHubActivity",
    ()=>GitHubActivity,
    "ProjectStartSection",
    ()=>ProjectStartSection,
    "SelectedWorksExpanded",
    ()=>SelectedWorksExpanded,
    "ServicesSection",
    ()=>ServicesSection,
    "SpotifyNowPlaying",
    ()=>SpotifyNowPlaying
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
;
;
;
;
;
"use client";
;
const SpotifyNowPlaying = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c = ()=>__turbopack_context__.A("[project]/portfolio/src/components/sections/SpotifyNowPlaying.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.SpotifyNowPlaying), {
    loadableGenerated: {
        modules: [
            "[project]/portfolio/src/components/sections/SpotifyNowPlaying.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c1 = SpotifyNowPlaying;
const CalBookingEmbed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c2 = ()=>__turbopack_context__.A("[project]/portfolio/src/components/sections/CalBookingEmbed.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.CalBookingEmbed), {
    loadableGenerated: {
        modules: [
            "[project]/portfolio/src/components/sections/CalBookingEmbed.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c3 = CalBookingEmbed;
const GitHubActivity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c4 = ()=>__turbopack_context__.A("[project]/portfolio/src/components/sections/GitHubActivity.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.GitHubActivity), {
    loadableGenerated: {
        modules: [
            "[project]/portfolio/src/components/sections/GitHubActivity.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c5 = GitHubActivity;
const ServicesSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c6 = ()=>__turbopack_context__.A("[project]/portfolio/src/components/sections/ServicesSection.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.ServicesSection), {
    loadableGenerated: {
        modules: [
            "[project]/portfolio/src/components/sections/ServicesSection.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c7 = ServicesSection;
const SelectedWorksExpanded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c8 = ()=>__turbopack_context__.A("[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.SelectedWorksExpanded), {
    loadableGenerated: {
        modules: [
            "[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c9 = SelectedWorksExpanded;
const ProjectStartSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c10 = ()=>__turbopack_context__.A("[project]/portfolio/src/components/sections/ProjectStartSection.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.ProjectStartSection), {
    loadableGenerated: {
        modules: [
            "[project]/portfolio/src/components/sections/ProjectStartSection.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c11 = ProjectStartSection;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "SpotifyNowPlaying$dynamic");
__turbopack_context__.k.register(_c1, "SpotifyNowPlaying");
__turbopack_context__.k.register(_c2, "CalBookingEmbed$dynamic");
__turbopack_context__.k.register(_c3, "CalBookingEmbed");
__turbopack_context__.k.register(_c4, "GitHubActivity$dynamic");
__turbopack_context__.k.register(_c5, "GitHubActivity");
__turbopack_context__.k.register(_c6, "ServicesSection$dynamic");
__turbopack_context__.k.register(_c7, "ServicesSection");
__turbopack_context__.k.register(_c8, "SelectedWorksExpanded$dynamic");
__turbopack_context__.k.register(_c9, "SelectedWorksExpanded");
__turbopack_context__.k.register(_c10, "ProjectStartSection$dynamic");
__turbopack_context__.k.register(_c11, "ProjectStartSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/portfolio/src/components/sections/TestimonialsCarousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TestimonialsCarousel",
    ()=>TestimonialsCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const TESTIMONIALS = [
    {
        name: "Tushar Roy",
        role: "Founder, Beyond Intern",
        quote: "Working with Divyant was an absolute pleasure. He has a masterful understanding of design and what it takes to create stunning visuals. He was able to reimagine our brand imagery and redesigned a brand new website in record time. I highly recommend him to any serious business owner who wants to create an unforgettable brand.",
        link: "https://www.linkedin.com/in/tushar-roy-547054216/"
    },
    {
        name: "Chirag Chanchal",
        role: "Co-developer & Blockchain Expert",
        quote: "Developed a BLA crypto token on-chain for our collaborated project Blockademia.live on monad testnet. Working with Divyant was an absolute help; we created an amazing idea and converted it into a real solution.",
        link: "https://www.linkedin.com/in/chirag-chanchal-48419a2b3/"
    },
    {
        name: "Kunal Kashyap",
        role: "AI/ML Developer",
        quote: "Everyone at this level has technical competence, but Divyant's actual superpowers are the care he takes to understand the goal, collaborate on solutions, communicate, and, yes, bring the vision to life. He was worth every penny and then some.",
        link: null
    },
    {
        name: "Twinkle Agrwal",
        role: "Founder / Owner",
        quote: "Divyant is a one-of-a-kind creative mind (in the best way possible!). He's always coming up with mind-blowing ideas, and I've had the pleasure of working with him over the years. Divyant consistently delivers exceptional results and never underperforms. I would highly recommend him for your next project — he's essentially a Swiss Army knife of content creation.",
        link: "https://www.linkedin.com/in/twinkle-agrwal/"
    }
];
/* Duplicate for seamless infinite loop */ const MARQUEE_ITEMS = [
    ...TESTIMONIALS,
    ...TESTIMONIALS
];
/* ── Individual card ─────────────────────────────── */ function TestimonialCard({ data }) {
    _s();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        onHoverStart: ()=>setHovered(true),
        onHoverEnd: ()=>setHovered(false),
        animate: {
            backgroundColor: hovered ? "#FF4500" : "#111111"
        },
        transition: {
            duration: 0.12,
            ease: "easeOut"
        },
        style: {
            width: "clamp(320px, 32vw, 440px)",
            padding: "2.5rem",
            borderRadius: "2px",
            border: `1px solid ${hovered ? "rgba(255,69,0,0.4)" : "rgba(255,255,255,0.06)"}`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "2rem",
            flexShrink: 0,
            userSelect: "none",
            WebkitUserSelect: "none"
        },
        "data-cursor": "drag",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                animate: {
                    color: hovered ? "#050505" : "rgba(255,69,0,0.4)"
                },
                transition: {
                    duration: 0.12
                },
                style: {
                    fontFamily: "var(--font-heading)",
                    fontSize: "3.5rem",
                    lineHeight: 1,
                    display: "block",
                    marginBottom: "-1rem"
                },
                children: "“"
            }, void 0, false, {
                fileName: "[project]/portfolio/src/components/sections/TestimonialsCarousel.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                animate: {
                    color: hovered ? "#050505" : "rgba(243,244,246,0.65)"
                },
                transition: {
                    duration: 0.12
                },
                style: {
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(0.85rem, 1.1vw, 1rem)",
                    lineHeight: 1.7,
                    flex: 1
                },
                children: data.quote
            }, void 0, false, {
                fileName: "[project]/portfolio/src/components/sections/TestimonialsCarousel.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.25rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        animate: {
                            color: hovered ? "#050505" : "#F3F4F6"
                        },
                        transition: {
                            duration: 0.12
                        },
                        style: {
                            fontFamily: "var(--font-body)",
                            fontSize: "0.9rem",
                            fontWeight: 600,
                            letterSpacing: "-0.01em"
                        },
                        children: data.link ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: data.link,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            onClick: (e)=>e.stopPropagation(),
                            style: {
                                textDecoration: "none",
                                color: "inherit"
                            },
                            children: [
                                data.name,
                                " ↗"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/portfolio/src/components/sections/TestimonialsCarousel.tsx",
                            lineNumber: 113,
                            columnNumber: 13
                        }, this) : data.name
                    }, void 0, false, {
                        fileName: "[project]/portfolio/src/components/sections/TestimonialsCarousel.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        animate: {
                            color: hovered ? "rgba(5,5,5,0.6)" : "rgba(255,255,255,0.35)"
                        },
                        transition: {
                            duration: 0.12
                        },
                        style: {
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.65rem",
                            letterSpacing: "0.12em",
                            textTransform: "uppercase"
                        },
                        children: data.role
                    }, void 0, false, {
                        fileName: "[project]/portfolio/src/components/sections/TestimonialsCarousel.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/portfolio/src/components/sections/TestimonialsCarousel.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/portfolio/src/components/sections/TestimonialsCarousel.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(TestimonialCard, "V8YbV+gTZxGliGj1g0fftBlvsq4=");
_c = TestimonialCard;
function TestimonialsCarousel() {
    _s1();
    const [isPaused, setIsPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `
            }, void 0, false, {
                fileName: "[project]/portfolio/src/components/sections/TestimonialsCarousel.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    overflow: "hidden",
                    position: "relative"
                },
                onMouseEnter: ()=>setIsPaused(true),
                onMouseLeave: ()=>setIsPaused(false),
                "data-cursor": "drag",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        gap: "1.25rem",
                        paddingLeft: "3vw",
                        paddingRight: "3vw",
                        paddingBottom: "0.5rem",
                        width: "max-content",
                        animation: "marqueeScroll 40s linear infinite",
                        animationPlayState: isPaused ? "paused" : "running"
                    },
                    children: MARQUEE_ITEMS.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TestimonialCard, {
                            data: t
                        }, `${t.name}-${i}`, false, {
                            fileName: "[project]/portfolio/src/components/sections/TestimonialsCarousel.tsx",
                            lineNumber: 178,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/portfolio/src/components/sections/TestimonialsCarousel.tsx",
                    lineNumber: 165,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/portfolio/src/components/sections/TestimonialsCarousel.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s1(TestimonialsCarousel, "X3NBeYcdtzR7N1pPpkWJDB4rGUI=");
_c1 = TestimonialsCarousel;
var _c, _c1;
__turbopack_context__.k.register(_c, "TestimonialCard");
__turbopack_context__.k.register(_c1, "TestimonialsCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/portfolio/src/components/sections/ContactForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactForm",
    ()=>ContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function ContactForm() {
    const inputStyle = {
        width: "100%",
        background: "#111111",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "2px",
        padding: "0.75rem 1rem",
        fontFamily: "var(--font-body)",
        fontSize: "0.875rem",
        color: "#F3F4F6",
        outline: "none",
        boxSizing: "border-box"
    };
    const onFocus = (e)=>e.currentTarget.style.borderColor = "rgba(255,69,0,0.5)";
    const onBlur = (e)=>e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
    const labelStyle = {
        fontFamily: "var(--font-mono)",
        fontSize: "0.58rem",
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        color: "rgba(255,255,255,0.35)",
        display: "block",
        marginBottom: "0.5rem"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        action: "mailto:ansupoddar11@gmail.com",
        method: "POST",
        encType: "text/plain",
        style: {
            display: "flex",
            flexDirection: "column",
            gap: "1rem"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "1rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "contact-name",
                                style: labelStyle,
                                children: "Name"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/src/components/sections/ContactForm.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "contact-name",
                                name: "Name",
                                type: "text",
                                required: true,
                                placeholder: "Your name",
                                style: inputStyle,
                                onFocus: onFocus,
                                onBlur: onBlur
                            }, void 0, false, {
                                fileName: "[project]/portfolio/src/components/sections/ContactForm.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/portfolio/src/components/sections/ContactForm.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "contact-email",
                                style: labelStyle,
                                children: "Email"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/src/components/sections/ContactForm.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "contact-email",
                                name: "Email",
                                type: "email",
                                required: true,
                                placeholder: "your@email.com",
                                style: inputStyle,
                                onFocus: onFocus,
                                onBlur: onBlur
                            }, void 0, false, {
                                fileName: "[project]/portfolio/src/components/sections/ContactForm.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/portfolio/src/components/sections/ContactForm.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/portfolio/src/components/sections/ContactForm.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "contact-subject",
                        style: labelStyle,
                        children: "Subject"
                    }, void 0, false, {
                        fileName: "[project]/portfolio/src/components/sections/ContactForm.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "contact-subject",
                        name: "Subject",
                        type: "text",
                        placeholder: "Project inquiry",
                        style: inputStyle,
                        onFocus: onFocus,
                        onBlur: onBlur
                    }, void 0, false, {
                        fileName: "[project]/portfolio/src/components/sections/ContactForm.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/portfolio/src/components/sections/ContactForm.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "contact-message",
                        style: labelStyle,
                        children: "Message"
                    }, void 0, false, {
                        fileName: "[project]/portfolio/src/components/sections/ContactForm.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        id: "contact-message",
                        name: "Message",
                        required: true,
                        rows: 5,
                        placeholder: "Tell me about your project…",
                        style: {
                            ...inputStyle,
                            resize: "vertical"
                        },
                        onFocus: onFocus,
                        onBlur: onBlur
                    }, void 0, false, {
                        fileName: "[project]/portfolio/src/components/sections/ContactForm.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/portfolio/src/components/sections/ContactForm.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                    flexWrap: "wrap"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        style: {
                            background: "#FF4500",
                            border: "none",
                            color: "#050505",
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.65rem",
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            fontWeight: 700,
                            padding: "0.85rem 2rem",
                            borderRadius: "2px",
                            cursor: "pointer",
                            transition: "opacity 0.15s"
                        },
                        onMouseEnter: (e)=>e.currentTarget.style.opacity = "0.85",
                        onMouseLeave: (e)=>e.currentTarget.style.opacity = "1",
                        children: "Send Message ↗"
                    }, void 0, false, {
                        fileName: "[project]/portfolio/src/components/sections/ContactForm.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://cal.com/divyant06/30min",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: {
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.62rem",
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            color: "rgba(255,255,255,0.3)",
                            textDecoration: "none",
                            borderBottom: "1px solid rgba(255,255,255,0.1)",
                            paddingBottom: "1px"
                        },
                        children: "Or Book a Meeting →"
                    }, void 0, false, {
                        fileName: "[project]/portfolio/src/components/sections/ContactForm.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/portfolio/src/components/sections/ContactForm.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/portfolio/src/components/sections/ContactForm.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c = ContactForm;
var _c;
__turbopack_context__.k.register(_c, "ContactForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/portfolio/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BailoutToCSR", {
    enumerable: true,
    get: function() {
        return BailoutToCSR;
    }
});
const _bailouttocsr = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)");
function BailoutToCSR({ reason, children }) {
    if (typeof window === 'undefined') {
        throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(reason), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    return children;
}
}),
"[project]/portfolio/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PreloadChunks", {
    enumerable: true,
    get: function() {
        return PreloadChunks;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _reactdom = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
const _encodeuripath = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/shared/lib/encode-uri-path.js [app-client] (ecmascript)");
const _deploymentid = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/shared/lib/deployment-id.js [app-client] (ecmascript)");
function PreloadChunks({ moduleIds }) {
    // Early return in client compilation and only load requestStore on server side
    if (typeof window !== 'undefined') {
        return null;
    }
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (workStore === undefined) {
        return null;
    }
    const allFiles = [];
    // Search the current dynamic call unique key id in react loadable manifest,
    // and find the corresponding CSS files to preload
    if (workStore.reactLoadableManifest && moduleIds) {
        const manifest = workStore.reactLoadableManifest;
        for (const key of moduleIds){
            if (!manifest[key]) continue;
            const chunks = manifest[key].files;
            allFiles.push(...chunks);
        }
    }
    if (allFiles.length === 0) {
        return null;
    }
    const query = (0, _deploymentid.getAssetTokenQuery)();
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: allFiles.map((chunk)=>{
            const href = `${workStore.assetPrefix}/_next/${(0, _encodeuripath.encodeURIPath)(chunk)}${query}`;
            const isCss = chunk.endsWith('.css');
            // If it's stylesheet we use `precedence` o help hoist with React Float.
            // For stylesheets we actually need to render the CSS because nothing else is going to do it so it needs to be part of the component tree.
            // The `preload` for stylesheet is not optional.
            if (isCss) {
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                    // @ts-ignore
                    precedence: "dynamic",
                    href: href,
                    rel: "stylesheet",
                    as: "style",
                    nonce: workStore.nonce
                }, chunk);
            } else {
                // If it's script we use ReactDOM.preload to preload the resources
                (0, _reactdom.preload)(href, {
                    as: 'script',
                    fetchPriority: 'low',
                    nonce: workStore.nonce
                });
                return null;
            }
        })
    });
}
}),
"[project]/portfolio/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _dynamicbailouttocsr = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-client] (ecmascript)");
const _preloadchunks = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-client] (ecmascript)");
// Normalize loader to return the module as form { default: Component } for `React.lazy`.
// Also for backward compatible since next/dynamic allows to resolve a component directly with loader
// Client component reference proxy need to be converted to a module.
function convertModule(mod) {
    // Check "default" prop before accessing it, as it could be client reference proxy that could break it reference.
    // Cases:
    // mod: { default: Component }
    // mod: Component
    // mod: { default: proxy(Component) }
    // mod: proxy(Component)
    const hasDefault = mod && 'default' in mod;
    return {
        default: hasDefault ? mod.default : mod
    };
}
const defaultOptions = {
    loader: ()=>Promise.resolve(convertModule(()=>null)),
    loading: null,
    ssr: true
};
function Loadable(options) {
    const opts = {
        ...defaultOptions,
        ...options
    };
    const Lazy = /*#__PURE__*/ (0, _react.lazy)(()=>opts.loader().then(convertModule));
    const Loading = opts.loading;
    function LoadableComponent(props) {
        const fallbackElement = Loading ? /*#__PURE__*/ (0, _jsxruntime.jsx)(Loading, {
            isLoading: true,
            pastDelay: true,
            error: null
        }) : null;
        // If it's non-SSR or provided a loading component, wrap it in a suspense boundary
        const hasSuspenseBoundary = !opts.ssr || !!opts.loading;
        const Wrap = hasSuspenseBoundary ? _react.Suspense : _react.Fragment;
        const wrapProps = hasSuspenseBoundary ? {
            fallback: fallbackElement
        } : {};
        const children = opts.ssr ? /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
            children: [
                typeof window === 'undefined' ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_preloadchunks.PreloadChunks, {
                    moduleIds: opts.modules
                }) : null,
                /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                    ...props
                })
            ]
        }) : /*#__PURE__*/ (0, _jsxruntime.jsx)(_dynamicbailouttocsr.BailoutToCSR, {
            reason: "next/dynamic",
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                ...props
            })
        });
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Wrap, {
            ...wrapProps,
            children: children
        });
    }
    LoadableComponent.displayName = 'LoadableComponent';
    return LoadableComponent;
}
const _default = Loadable;
}),
"[project]/portfolio/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return dynamic;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/portfolio/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _loadable = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/portfolio/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-client] (ecmascript)"));
function dynamic(dynamicOptions, options) {
    const loadableOptions = {};
    if (typeof dynamicOptions === 'function') {
        loadableOptions.loader = dynamicOptions;
    }
    const mergedOptions = {
        ...loadableOptions,
        ...options
    };
    return (0, _loadable.default)({
        ...mergedOptions,
        modules: mergedOptions.loadableGenerated?.modules
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
]);

//# debugId=df82e141-bbee-d1af-1388-8333b825e7d8
//# sourceMappingURL=portfolio_0xufl0w._.js.map