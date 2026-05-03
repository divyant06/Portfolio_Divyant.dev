;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="9bcb91aa-826a-b6c1-2287-b9539148893d")}catch(e){}}();
(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/portfolio/src/components/three/CobeGlobe.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CobeGlobe",
    ()=>CobeGlobe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function CobeGlobe() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [rotation, setRotation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [dragging, setDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dragStartX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const dragStartRot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Auto-rotate
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CobeGlobe.useEffect": ()=>{
            if (dragging) return;
            let last = performance.now();
            const animate = {
                "CobeGlobe.useEffect.animate": (now)=>{
                    const delta = now - last;
                    last = now;
                    setRotation({
                        "CobeGlobe.useEffect.animate": (r)=>r + delta * 0.012
                    }["CobeGlobe.useEffect.animate"]);
                    rafRef.current = requestAnimationFrame(animate);
                }
            }["CobeGlobe.useEffect.animate"];
            rafRef.current = requestAnimationFrame(animate);
            return ({
                "CobeGlobe.useEffect": ()=>cancelAnimationFrame(rafRef.current)
            })["CobeGlobe.useEffect"];
        }
    }["CobeGlobe.useEffect"], [
        dragging
    ]);
    // Drag handlers
    const handlePointerDown = (e)=>{
        setDragging(true);
        dragStartX.current = e.clientX;
        dragStartRot.current = rotation;
    };
    const handlePointerMove = (e)=>{
        if (!dragging) return;
        const delta = e.clientX - dragStartX.current;
        setRotation(dragStartRot.current + delta * 0.5);
    };
    const handlePointerUp = ()=>{
        setDragging(false);
    };
    /* SVG dot-grid pattern — simulates the cobe dot map.
     Two layers at different densities create depth. */ const dotPattern = (size, opacity, id)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
            id: id,
            width: size,
            height: size,
            patternUnits: "userSpaceOnUse",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: size / 2,
                cy: size / 2,
                r: 1.2,
                fill: `rgba(220,220,230,${opacity})`
            }, void 0, false, {
                fileName: "[project]/portfolio/src/components/three/CobeGlobe.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/portfolio/src/components/three/CobeGlobe.tsx",
            lineNumber: 57,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        style: {
            width: "100%",
            maxWidth: "380px",
            aspectRatio: "1",
            margin: "0 auto",
            position: "relative",
            cursor: dragging ? "grabbing" : "grab"
        },
        onPointerDown: handlePointerDown,
        onPointerMove: handlePointerMove,
        onPointerUp: handlePointerUp,
        onPointerLeave: handlePointerUp,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    inset: "-12px",
                    borderRadius: "50%",
                    zIndex: 0,
                    background: "radial-gradient(circle at 50% 50%, rgba(255,69,0,0.10) 0%, transparent 68%)",
                    filter: "blur(8px)",
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/portfolio/src/components/three/CobeGlobe.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    position: "relative",
                    overflow: "hidden",
                    zIndex: 1,
                    background: `radial-gradient(
          circle at 32% 32%,
          rgba(45,45,50,1) 0%,
          rgba(18,18,20,1) 40%,
          rgba(6,6,8,1) 72%,
          rgba(1,1,2,1) 100%
        )`,
                    boxShadow: `
          0 0 80px rgba(255,69,0,0.12),
          0 0 20px rgba(255,69,0,0.06),
          inset -6px -6px 28px rgba(0,0,0,0.9),
          inset 3px 3px 12px rgba(120,120,130,0.08)
        `
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        style: {
                            position: "absolute",
                            inset: "-20%",
                            width: "140%",
                            height: "140%",
                            transform: `rotateY(${rotation}deg) rotateX(12deg)`,
                            transformStyle: "preserve-3d",
                            opacity: 0.75
                        },
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: dotPattern(7, 0.65, "dots-main")
                            }, void 0, false, {
                                fileName: "[project]/portfolio/src/components/three/CobeGlobe.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                width: "100%",
                                height: "100%",
                                fill: "url(#dots-main)"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/src/components/three/CobeGlobe.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/portfolio/src/components/three/CobeGlobe.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        style: {
                            position: "absolute",
                            inset: "-10%",
                            width: "120%",
                            height: "120%",
                            transform: `rotateY(${rotation * 0.65}deg) rotateX(-10deg)`,
                            transformStyle: "preserve-3d",
                            opacity: 0.35
                        },
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: dotPattern(5, 0.5, "dots-layer2")
                            }, void 0, false, {
                                fileName: "[project]/portfolio/src/components/three/CobeGlobe.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                width: "100%",
                                height: "100%",
                                fill: "url(#dots-layer2)"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/src/components/three/CobeGlobe.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/portfolio/src/components/three/CobeGlobe.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            borderRadius: "50%",
                            pointerEvents: "none",
                            background: `radial-gradient(circle at 50% 50%,
            transparent 58%,
            rgba(255,69,0,0.18) 74%,
            rgba(255,69,0,0.10) 86%,
            rgba(255,30,0,0.04) 100%
          )`
                        }
                    }, void 0, false, {
                        fileName: "[project]/portfolio/src/components/three/CobeGlobe.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: "6%",
                            left: "18%",
                            width: "38%",
                            height: "26%",
                            borderRadius: "50%",
                            pointerEvents: "none",
                            background: "radial-gradient(ellipse, rgba(255,255,255,0.08) 0%, transparent 70%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/portfolio/src/components/three/CobeGlobe.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: "42%",
                            left: "62%",
                            zIndex: 2,
                            pointerEvents: "none",
                            transform: `translateX(${Math.sin(rotation * Math.PI / 180) * 20}px)`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: "28px",
                                    height: "28px",
                                    borderRadius: "50%",
                                    background: "rgba(255,69,0,0.2)",
                                    position: "absolute",
                                    top: "-10px",
                                    left: "-10px",
                                    animation: "globePulse 1.8s ease-in-out infinite"
                                }
                            }, void 0, false, {
                                fileName: "[project]/portfolio/src/components/three/CobeGlobe.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: "16px",
                                    height: "16px",
                                    borderRadius: "50%",
                                    background: "rgba(255,69,0,0.35)",
                                    position: "absolute",
                                    top: "-4px",
                                    left: "-4px",
                                    animation: "globePulse 1.8s ease-in-out infinite 0.4s"
                                }
                            }, void 0, false, {
                                fileName: "[project]/portfolio/src/components/three/CobeGlobe.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: "9px",
                                    height: "9px",
                                    borderRadius: "50%",
                                    background: "#FF4500",
                                    boxShadow: "0 0 14px 4px rgba(255,69,0,0.9), 0 0 28px rgba(255,69,0,0.5)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/portfolio/src/components/three/CobeGlobe.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/portfolio/src/components/three/CobeGlobe.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/portfolio/src/components/three/CobeGlobe.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes globePulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(2); opacity: 0; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/portfolio/src/components/three/CobeGlobe.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/portfolio/src/components/three/CobeGlobe.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_s(CobeGlobe, "cLifTHH9iCp23XteG0Jwmyee2V8=");
_c = CobeGlobe;
var _c;
__turbopack_context__.k.register(_c, "CobeGlobe");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/portfolio/src/components/three/CobeGlobe.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/portfolio/src/components/three/CobeGlobe.tsx [app-client] (ecmascript)"));
}),
]);

//# debugId=9bcb91aa-826a-b6c1-2287-b9539148893d
//# sourceMappingURL=portfolio_src_components_three_CobeGlobe_tsx_0c1vx42._.js.map