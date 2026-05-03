;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="db97fc4e-888b-59be-3084-903e00a9be48")}catch(e){}}();
(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/portfolio/src/components/three/HeroTorus.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroTorus",
    ()=>HeroTorus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@react-three/fiber/dist/events-b389eeca.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@react-three/fiber/dist/events-b389eeca.esm.js [app-client] (ecmascript) <export C as useThree>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
/* ── Polished dark metallic torus knot ─────────────── 
   NO Environment preset — we simulate metallic reflections
   purely with multi-directional lighting to avoid GPU memory
   exhaustion (which was causing WebGL Context Lost).         */ function TorusKnotMesh() {
    _s();
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { viewport, pointer } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "TorusKnotMesh.useFrame": (state, delta)=>{
            if (!meshRef.current) return;
            // Slow auto-rotation
            meshRef.current.rotation.x += delta * 0.06;
            meshRef.current.rotation.y += delta * 0.1;
            // Mouse reactivity — subtle tilt toward cursor
            const targetRotX = pointer.y * 0.3;
            const targetRotZ = pointer.x * -0.15;
            meshRef.current.rotation.x += (targetRotX - meshRef.current.rotation.x) * 0.02;
            meshRef.current.rotation.z += (targetRotZ - meshRef.current.rotation.z) * 0.02;
            // Subtle breathing scale based on time
            const breathe = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.03;
            const baseScale = viewport.width < 6 ? 0.65 : 1;
            meshRef.current.scale.setScalar(baseScale * breathe);
        }
    }["TorusKnotMesh.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        ref: meshRef,
        position: [
            0.8,
            -0.3,
            0
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("torusKnotGeometry", {
                args: [
                    1.6,
                    0.45,
                    256,
                    64
                ]
            }, void 0, false, {
                fileName: "[project]/portfolio/src/components/three/HeroTorus.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshPhysicalMaterial", {
                color: "#111111",
                metalness: 1,
                roughness: 0.1,
                clearcoat: 1,
                clearcoatRoughness: 0.1,
                reflectivity: 1
            }, void 0, false, {
                fileName: "[project]/portfolio/src/components/three/HeroTorus.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/portfolio/src/components/three/HeroTorus.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(TorusKnotMesh, "SUCsAUvJKfDnqsFNFEf9I1rw0G8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = TorusKnotMesh;
/* Forcefully null the scene background every frame */ function ForceTransparent() {
    _s1();
    const { scene, gl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "ForceTransparent.useFrame": ()=>{
            scene.background = null;
            gl.setClearColor(0x000000, 0);
        }
    }["ForceTransparent.useFrame"]);
    return null;
}
_s1(ForceTransparent, "I09BJLOygNbL+Luyz2CCrvQJp5s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c1 = ForceTransparent;
function HeroTorus() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 1,
            opacity: 0.6
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
            dpr: [
                1,
                1.5
            ],
            camera: {
                position: [
                    0,
                    0,
                    5.5
                ],
                fov: 45
            },
            gl: {
                alpha: true,
                antialias: true,
                premultipliedAlpha: false,
                powerPreference: "high-performance",
                preserveDrawingBuffer: false
            },
            style: {
                background: "transparent"
            },
            onCreated: ({ gl, scene })=>{
                gl.setClearColor(0x000000, 0);
                scene.background = null;
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ForceTransparent, {}, void 0, false, {
                    fileName: "[project]/portfolio/src/components/three/HeroTorus.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                    intensity: 0.04
                }, void 0, false, {
                    fileName: "[project]/portfolio/src/components/three/HeroTorus.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                    position: [
                        5,
                        4,
                        5
                    ],
                    intensity: 2.2,
                    color: "#FF4500"
                }, void 0, false, {
                    fileName: "[project]/portfolio/src/components/three/HeroTorus.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                    position: [
                        -4,
                        -3,
                        3
                    ],
                    intensity: 0.6,
                    color: "#334155"
                }, void 0, false, {
                    fileName: "[project]/portfolio/src/components/three/HeroTorus.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                    position: [
                        0,
                        0,
                        -5
                    ],
                    intensity: 0.35,
                    color: "#1e293b"
                }, void 0, false, {
                    fileName: "[project]/portfolio/src/components/three/HeroTorus.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                    position: [
                        0,
                        6,
                        2
                    ],
                    intensity: 0.5,
                    color: "#e2e8f0"
                }, void 0, false, {
                    fileName: "[project]/portfolio/src/components/three/HeroTorus.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                    position: [
                        2,
                        -1,
                        4
                    ],
                    intensity: 1.2,
                    color: "#FF4500",
                    distance: 12,
                    decay: 2
                }, void 0, false, {
                    fileName: "[project]/portfolio/src/components/three/HeroTorus.tsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                    position: [
                        -3,
                        2,
                        3
                    ],
                    intensity: 0.4,
                    color: "#64748b",
                    distance: 10,
                    decay: 2
                }, void 0, false, {
                    fileName: "[project]/portfolio/src/components/three/HeroTorus.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TorusKnotMesh, {}, void 0, false, {
                    fileName: "[project]/portfolio/src/components/three/HeroTorus.tsx",
                    lineNumber: 146,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/portfolio/src/components/three/HeroTorus.tsx",
            lineNumber: 74,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/portfolio/src/components/three/HeroTorus.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_c2 = HeroTorus;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "TorusKnotMesh");
__turbopack_context__.k.register(_c1, "ForceTransparent");
__turbopack_context__.k.register(_c2, "HeroTorus");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/portfolio/src/components/three/HeroTorus.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/portfolio/src/components/three/HeroTorus.tsx [app-client] (ecmascript)"));
}),
]);

//# debugId=db97fc4e-888b-59be-3084-903e00a9be48
//# sourceMappingURL=portfolio_src_components_three_HeroTorus_tsx_01so4es._.js.map