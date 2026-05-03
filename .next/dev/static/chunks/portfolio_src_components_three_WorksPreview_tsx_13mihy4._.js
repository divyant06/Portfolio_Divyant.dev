;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="22eed77a-02a3-0126-df74-973d660d4fa0")}catch(e){}}();
(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/portfolio/src/components/three/WorksPreview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WorksPreview",
    ()=>WorksPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
/*
  Jelly distortion effect on project preview cells.
  Uses a pure CSS/SVG filter approach (feTurbulence + feDisplacementMap)
  instead of raw WebGL shaders — works everywhere, no Canvas overhead,
  and delivers the liquid-ripple aesthetic.
*/ /* Unique SVG filter per component instance */ let instanceCounter = 0;
function WorksPreview({ label, color = "#FF4500" }) {
    _s();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const filterId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(`jelly-${++instanceCounter}`);
    const onEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WorksPreview.useCallback[onEnter]": ()=>setHovered(true)
    }["WorksPreview.useCallback[onEnter]"], []);
    const onLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WorksPreview.useCallback[onLeave]": ()=>setHovered(false)
    }["WorksPreview.useCallback[onLeave]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        onHoverStart: onEnter,
        onHoverEnd: onLeave,
        animate: {
            borderColor: hovered ? "rgba(255,69,0,0.35)" : "rgba(255,255,255,0.06)"
        },
        transition: {
            duration: 0.25
        },
        style: {
            height: "60px",
            borderRadius: "2px",
            border: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            position: "relative",
            filter: hovered ? `url(#${filterId.current})` : "none",
            transition: "filter 0.3s ease"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                style: {
                    position: "absolute",
                    width: 0,
                    height: 0,
                    pointerEvents: "none"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                        id: filterId.current,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feTurbulence", {
                                type: "turbulence",
                                baseFrequency: hovered ? "0.015 0.02" : "0 0",
                                numOctaves: 3,
                                seed: 2,
                                result: "turbulence",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                                    attributeName: "baseFrequency",
                                    dur: "2s",
                                    values: "0.01 0.02;0.02 0.04;0.01 0.02",
                                    repeatCount: "indefinite"
                                }, void 0, false, {
                                    fileName: "[project]/portfolio/src/components/three/WorksPreview.tsx",
                                    lineNumber: 70,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/portfolio/src/components/three/WorksPreview.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feDisplacementMap", {
                                in: "SourceGraphic",
                                in2: "turbulence",
                                scale: hovered ? 12 : 0,
                                xChannelSelector: "R",
                                yChannelSelector: "G"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/src/components/three/WorksPreview.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/portfolio/src/components/three/WorksPreview.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/portfolio/src/components/three/WorksPreview.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/portfolio/src/components/three/WorksPreview.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    opacity: hovered ? 1 : 0,
                    scaleX: hovered ? 1 : 0
                },
                transition: {
                    duration: 0.3
                },
                style: {
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: color,
                    transformOrigin: "left"
                }
            }, void 0, false, {
                fileName: "[project]/portfolio/src/components/three/WorksPreview.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                animate: {
                    color: hovered ? color : "rgba(255,255,255,0.15)",
                    scale: hovered ? 1.05 : 1
                },
                transition: {
                    duration: 0.2
                },
                style: {
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    position: "relative",
                    zIndex: 1
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/portfolio/src/components/three/WorksPreview.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/portfolio/src/components/three/WorksPreview.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(WorksPreview, "JDk6Dxny3eQuv6dp7R7G5BQJdSQ=");
_c = WorksPreview;
var _c;
__turbopack_context__.k.register(_c, "WorksPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/portfolio/src/components/three/WorksPreview.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/portfolio/src/components/three/WorksPreview.tsx [app-client] (ecmascript)"));
}),
]);

//# debugId=22eed77a-02a3-0126-df74-973d660d4fa0
//# sourceMappingURL=portfolio_src_components_three_WorksPreview_tsx_13mihy4._.js.map