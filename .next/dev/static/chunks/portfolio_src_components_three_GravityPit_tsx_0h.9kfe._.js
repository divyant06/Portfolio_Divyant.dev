;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="c2fce723-4e12-af3e-fb64-5120e651a3eb")}catch(e){}}();
(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/portfolio/src/components/three/GravityPit.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GravityPit",
    ()=>GravityPit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/matter-js/build/matter.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const TECH = [
    {
        name: "Next.js",
        bg: "#000000",
        fg: "#FFFFFF",
        // Vercel triangle
        icon: "M12 2L2 22h20L12 2z"
    },
    {
        name: "React",
        bg: "#20232A",
        fg: "#61DAFB",
        // Atom / ellipse symbol
        icon: "M12 10.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
    },
    {
        name: "Tailwind",
        bg: "#0F172A",
        fg: "#38BDF8",
        // Wind swoosh
        icon: "M4 12c1.5-5 5-7 8-4 3 3 6.5 1 8-4M4 18c1.5-5 5-7 8-4 3 3 6.5 1 8-4"
    },
    {
        name: "Flutter",
        bg: "#042B59",
        fg: "#54C5F8",
        // Flutter diamond
        icon: "M3 12l9-9h6L9 12l9 9h-6L3 12z"
    },
    {
        name: "Supabase",
        bg: "#1C1C1C",
        fg: "#3FCF8E",
        // Lightning bolt
        icon: "M13 2L3 14h7l-1 8 10-12h-7l1-8z"
    },
    {
        name: "Solidity",
        bg: "#1C1C1C",
        fg: "#8B5CF6",
        // Diamond / Ethereum shape
        icon: "M12 2l-8 10 8 10 8-10L12 2z"
    },
    {
        name: "Framer",
        bg: "#0055FF",
        fg: "#FFFFFF",
        // Framer three-stripe
        icon: "M4 4h16v5.33H12L4 4zM4 9.33h8l8 5.34H4V9.33zM4 14.67h8v5.33L4 14.67z"
    },
    {
        name: "Three.js",
        bg: "#000000",
        fg: "#FFFFFF",
        // 3D cube wireframe
        icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
    },
    {
        name: "Node.js",
        bg: "#1A1A1A",
        fg: "#68A063",
        // Hexagon
        icon: "M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z"
    },
    {
        name: "TypeScript",
        bg: "#3178C6",
        fg: "#FFFFFF",
        // TS letters
        icon: "M5 8h14M12 8v12M7 12h4"
    }
];
function GravityPit() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const engineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GravityPit.useEffect": ()=>{
            const container = containerRef.current;
            const canvas = canvasRef.current;
            if (!container || !canvas) return;
            const W = container.clientWidth;
            const H = container.clientHeight;
            const dpr = Math.min(window.devicePixelRatio, 2);
            canvas.width = W * dpr;
            canvas.height = H * dpr;
            canvas.style.width = `${W}px`;
            canvas.style.height = `${H}px`;
            const ctx = canvas.getContext("2d");
            ctx.scale(dpr, dpr);
            // Engine
            const engine = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Engine.create({
                gravity: {
                    x: 0,
                    y: 1.2
                }
            });
            engineRef.current = engine;
            // Walls (invisible)
            const wallOpts = {
                isStatic: true,
                render: {
                    visible: false
                },
                restitution: 0.4
            };
            const floor = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Bodies.rectangle(W / 2, H + 25, W + 100, 50, wallOpts);
            const leftWall = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Bodies.rectangle(-25, H / 2, 50, H * 2, wallOpts);
            const rightWall = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Bodies.rectangle(W + 25, H / 2, 50, H * 2, wallOpts);
            __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Composite.add(engine.world, [
                floor,
                leftWall,
                rightWall
            ]);
            // Create pill bodies for each tech
            const pills = [];
            TECH.forEach({
                "GravityPit.useEffect": (tech, i)=>{
                    const w = Math.max(tech.name.length * 11 + 52, 110);
                    const h = 42;
                    const x = W / (TECH.length + 1) * (i + 1) + (Math.random() - 0.5) * 60;
                    const y = -60 - i * 55; // Stagger drop
                    const body = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Bodies.rectangle(x, y, w, h, {
                        chamfer: {
                            radius: h / 2
                        },
                        restitution: 0.45,
                        friction: 0.3,
                        frictionAir: 0.01,
                        density: 0.002
                    });
                    pills.push({
                        body,
                        tech,
                        w,
                        h
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Composite.add(engine.world, body);
                }
            }["GravityPit.useEffect"]);
            // Mouse constraint for dragging
            const mouse = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Mouse.create(canvas);
            mouse.pixelRatio = dpr;
            const mouseConstraint = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].MouseConstraint.create(engine, {
                mouse,
                constraint: {
                    stiffness: 0.2,
                    render: {
                        visible: false
                    }
                }
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Composite.add(engine.world, mouseConstraint);
            // Pre-create SVG path objects for icon rendering
            const iconPaths = new Map();
            TECH.forEach({
                "GravityPit.useEffect": (tech)=>{
                    const path = new Path2D(tech.icon);
                    iconPaths.set(tech.name, path);
                }
            }["GravityPit.useEffect"]);
            // Render loop
            let rafId;
            const render = {
                "GravityPit.useEffect.render": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Engine.update(engine, 1000 / 60);
                    ctx.clearRect(0, 0, W, H);
                    for (const pill of pills){
                        const { body, tech, w, h } = pill;
                        const { x, y } = body.position;
                        const angle = body.angle;
                        ctx.save();
                        ctx.translate(x, y);
                        ctx.rotate(angle);
                        // Pill shape
                        const r = h / 2;
                        ctx.beginPath();
                        ctx.moveTo(-w / 2 + r, -h / 2);
                        ctx.lineTo(w / 2 - r, -h / 2);
                        ctx.arc(w / 2 - r, 0, r, -Math.PI / 2, Math.PI / 2);
                        ctx.lineTo(-w / 2 + r, h / 2);
                        ctx.arc(-w / 2 + r, 0, r, Math.PI / 2, -Math.PI / 2);
                        ctx.closePath();
                        // Fill with OFFICIAL brand background color
                        ctx.fillStyle = tech.bg;
                        ctx.fill();
                        // Subtle border glow
                        ctx.strokeStyle = tech.fg;
                        ctx.lineWidth = 1.2;
                        ctx.globalAlpha = 0.35;
                        ctx.stroke();
                        ctx.globalAlpha = 1;
                        // Draw icon (scale the 24x24 viewBox path down to fit)
                        const iconSize = 14;
                        ctx.save();
                        ctx.translate(-w / 2 + 16, -iconSize / 2);
                        ctx.scale(iconSize / 24, iconSize / 24);
                        ctx.fillStyle = tech.fg;
                        ctx.globalAlpha = 0.9;
                        const iconPath = iconPaths.get(tech.name);
                        if (iconPath) {
                            // Check if the path uses strokes (like Tailwind, Three.js, TypeScript)
                            if (tech.name === "Tailwind" || tech.name === "Three.js" || tech.name === "TypeScript") {
                                ctx.strokeStyle = tech.fg;
                                ctx.lineWidth = 2;
                                ctx.stroke(iconPath);
                            } else {
                                ctx.fill(iconPath);
                            }
                        }
                        ctx.globalAlpha = 1;
                        ctx.restore();
                        // Label text — offset right to make room for the icon
                        ctx.fillStyle = tech.fg;
                        ctx.font = "600 12px 'Space Grotesk', sans-serif";
                        ctx.textAlign = "center";
                        ctx.textBaseline = "middle";
                        ctx.globalAlpha = 0.95;
                        ctx.fillText(tech.name, 8, 0.5);
                        ctx.globalAlpha = 1;
                        ctx.restore();
                    }
                    rafId = requestAnimationFrame(render);
                }
            }["GravityPit.useEffect.render"];
            setReady(true);
            render();
            // Resize handler
            const onResize = {
                "GravityPit.useEffect.onResize": ()=>{
                    const nW = container.clientWidth;
                    const nH = container.clientHeight;
                    canvas.width = nW * dpr;
                    canvas.height = nH * dpr;
                    canvas.style.width = `${nW}px`;
                    canvas.style.height = `${nH}px`;
                    ctx.scale(dpr, dpr);
                    // Reposition walls
                    __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body.setPosition(floor, {
                        x: nW / 2,
                        y: nH + 25
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body.setPosition(rightWall, {
                        x: nW + 25,
                        y: nH / 2
                    });
                }
            }["GravityPit.useEffect.onResize"];
            window.addEventListener("resize", onResize);
            return ({
                "GravityPit.useEffect": ()=>{
                    cancelAnimationFrame(rafId);
                    window.removeEventListener("resize", onResize);
                    __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Engine.clear(engine);
                }
            })["GravityPit.useEffect"];
        }
    }["GravityPit.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        style: {
            position: "relative",
            width: "100%",
            height: "100%",
            minHeight: "350px",
            cursor: "grab"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvasRef,
            style: {
                position: "absolute",
                inset: 0,
                opacity: ready ? 1 : 0,
                transition: "opacity 0.6s ease"
            }
        }, void 0, false, {
            fileName: "[project]/portfolio/src/components/three/GravityPit.tsx",
            lineNumber: 280,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/portfolio/src/components/three/GravityPit.tsx",
        lineNumber: 270,
        columnNumber: 5
    }, this);
}
_s(GravityPit, "wi+RIBM7zaDuBhmZkZ/PvGduRa8=");
_c = GravityPit;
var _c;
__turbopack_context__.k.register(_c, "GravityPit");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/portfolio/src/components/three/GravityPit.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/portfolio/src/components/three/GravityPit.tsx [app-client] (ecmascript)"));
}),
]);

//# debugId=c2fce723-4e12-af3e-fb64-5120e651a3eb
//# sourceMappingURL=portfolio_src_components_three_GravityPit_tsx_0h.9kfe._.js.map