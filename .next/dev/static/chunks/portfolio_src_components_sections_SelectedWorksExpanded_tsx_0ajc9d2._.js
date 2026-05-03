;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="d153b55b-23f8-a23b-af55-fb3c4029ad98")}catch(e){}}();
(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectedWorksExpanded",
    ()=>SelectedWorksExpanded
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
/* ── Blueprint §3 Asset Map ───────────────────────────────────────────
   All project images verified against /public/assets/ directory tree.
   GitHub links from github.com/divyant06 public repos.
─────────────────────────────────────────────────────────────────────── */ const PROJECTS = [
    {
        num: "01",
        title: "Amrit Sathi",
        tags: [
            "Next.js",
            "Supabase",
            "React",
            "TypeScript"
        ],
        type: "Web Application",
        year: "2024",
        liveHref: "#",
        repoHref: "https://github.com/divyant06/amrit-sathi",
        description: "A comprehensive full-stack web application built with Next.js and Supabase. Features real-time data synchronization, role-based authentication flows, a responsive admin dashboard, and server-side rendering optimised for SEO and Core Web Vitals.",
        features: [
            "Real-time Supabase DB",
            "Role-based auth",
            "SSR + ISR",
            "Responsive dashboard"
        ],
        images: [
            "/assets/amrit_sathi/AS-main-1.jpeg",
            "/assets/amrit_sathi/AS-img-2.jpeg",
            "/assets/amrit_sathi/AS-img-3.jpeg"
        ]
    },
    {
        num: "02",
        title: "Beyond Intern",
        tags: [
            "Next.js",
            "Supabase",
            "LMS",
            "Tailwind",
            "Stripe"
        ],
        type: "Ed-Tech Platform",
        year: "2024",
        liveHref: "https://beyondintern.com",
        repoHref: "https://github.com/divyant06/beyond-intern",
        description: "A full-featured Ed-Tech LMS platform powering internship programs at scale. Built on Next.js with Supabase for real-time course delivery, admin dashboards, Zoom webinar integration, Stripe payment flows, and a blog system.",
        features: [
            "LMS with curriculum builder",
            "Zoom webinar integration",
            "Stripe payments",
            "Admin dashboard"
        ],
        images: [
            "/assets/beyondintern/BI-main-1.png",
            "/assets/beyondintern/BI-img-2.png",
            "/assets/beyondintern/BI-img-3.png"
        ]
    },
    {
        num: "03",
        title: "Blockademia",
        tags: [
            "Solidity",
            "React",
            "Monad Testnet",
            "Web3",
            "MetaMask"
        ],
        type: "Blockchain / DApp",
        year: "2024",
        liveHref: "https://blockademia.live",
        repoHref: "https://github.com/divyant06/blockademia",
        description: "A Web3 academic credential verification DApp deployed on Monad Testnet. Solidity smart contracts handle on-chain certificate issuance. The React frontend interfaces with MetaMask for seamless wallet interactions and credential verification.",
        features: [
            "On-chain certificate issuance",
            "MetaMask wallet integration",
            "Monad Testnet deployment",
            "Solidity smart contracts"
        ],
        images: [
            "/assets/Blockademia/BLM-main-1.png",
            "/assets/Blockademia/BLM-img-2.png",
            "/assets/Blockademia/BLM-img-3.png"
        ]
    },
    {
        num: "04",
        title: "Grant Pool DApp",
        tags: [
            "Solidity",
            "Web3",
            "Smart Contracts",
            "React"
        ],
        type: "Decentralised Finance",
        year: "2024",
        liveHref: "#",
        repoHref: "https://github.com/divyant06/grant-pool-dapp",
        description: "A decentralised grant distribution protocol. Smart contracts handle pool creation, milestone-based fund release, and multi-sig approvals — removing intermediaries from the grant funding lifecycle entirely.",
        features: [
            "Milestone-based fund release",
            "Multi-sig approvals",
            "On-chain governance",
            "Grant pool creation"
        ],
        images: [
            "/assets/grant-pool-Dapp/GPDAPP-main.jpeg"
        ]
    },
    {
        num: "05",
        title: "Job Portal",
        tags: [
            "React",
            "Node.js",
            "PostgreSQL",
            "Express"
        ],
        type: "Full-Stack Web App",
        year: "2023",
        liveHref: "#",
        repoHref: "https://github.com/divyant06/job-portal",
        description: "A full-stack job board with employer and candidate portals. Features resume parsing, ATS-style candidate tracking, real-time notifications, and PostgreSQL-backed search with full-text indexing.",
        features: [
            "Resume parsing",
            "ATS candidate tracking",
            "Full-text search",
            "Real-time notifications"
        ],
        images: [
            "/assets/job_portal/JP-main-1.png",
            "/assets/job_portal/JP-img-2.png"
        ]
    }
];
/* ── Deterministic commit graph (seeded per project so no hydration mismatch) */ function CommitGraph({ seed }) {
    const weeks = 18;
    const days = 7;
    const pseudo = (w, d)=>{
        const n = Math.sin(seed * 9301 + w * 49297 + d * 233) * 0.5 + 0.5;
        return n;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            gap: "3px",
            overflowX: "auto",
            paddingBottom: "4px"
        },
        children: Array.from({
            length: weeks
        }).map((_, wi)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "3px"
                },
                children: Array.from({
                    length: days
                }).map((_, di)=>{
                    const v = pseudo(wi, di);
                    const bg = v > 0.85 ? "#FF4500" : v > 0.65 ? "rgba(255,69,0,0.55)" : v > 0.45 ? "rgba(255,69,0,0.22)" : "rgba(255,255,255,0.04)";
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: "9px",
                            height: "9px",
                            borderRadius: "1px",
                            background: bg
                        }
                    }, di, false, {
                        fileName: "[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx",
                        lineNumber: 87,
                        columnNumber: 20
                    }, this);
                })
            }, wi, false, {
                fileName: "[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx",
                lineNumber: 83,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
_c = CommitGraph;
/* ── GitHub icon SVG */ const GHIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
        }, void 0, false, {
            fileName: "[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx",
            lineNumber: 98,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx",
        lineNumber: 97,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = GHIcon;
function SelectedWorksExpanded() {
    _s();
    const [openId, setOpenId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [imgIdx, setImgIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const toggle = (num)=>setOpenId(openId === num ? null : num);
    const getImg = (num)=>imgIdx[num] ?? 0;
    const nextImg = (num, total)=>setImgIdx((prev)=>({
                ...prev,
                [num]: ((prev[num] ?? 0) + 1) % total
            }));
    const prevImg = (num, total)=>setImgIdx((prev)=>({
                ...prev,
                [num]: ((prev[num] ?? 0) - 1 + total) % total
            }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "works",
        style: {
            padding: "7rem 3vw",
            background: "#050505"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    marginBottom: "4rem",
                    paddingBottom: "1.5rem",
                    borderBottom: "1px solid rgba(255,255,255,0.07)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "var(--font-mono)",
                                    fontSize: "0.65rem",
                                    letterSpacing: "0.18em",
                                    textTransform: "uppercase",
                                    color: "#FF4500",
                                    display: "block",
                                    marginBottom: "1.5rem"
                                },
                                children: "Selected Works"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontFamily: "var(--font-heading)",
                                    fontSize: "clamp(2rem, 4vw, 3.5rem)",
                                    fontWeight: 800,
                                    letterSpacing: "-0.04em",
                                    lineHeight: 1,
                                    color: "#F3F4F6",
                                    margin: 0
                                },
                                children: "Case Studies"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.65rem",
                            letterSpacing: "0.12em",
                            color: "rgba(255,255,255,0.25)",
                            maxWidth: "20ch",
                            textAlign: "right"
                        },
                        children: "Click a row to expand."
                    }, void 0, false, {
                        fileName: "[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                style: {
                    listStyle: "none",
                    margin: 0,
                    padding: 0
                },
                children: PROJECTS.map((p, i)=>{
                    const isOpen = openId === p.num;
                    const curImg = getImg(p.num);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        style: {
                            borderBottom: i < PROJECTS.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>toggle(p.num),
                                style: {
                                    width: "100%",
                                    background: "transparent",
                                    border: "none",
                                    cursor: "pointer",
                                    display: "grid",
                                    gridTemplateColumns: "3rem 1fr auto auto 2.5rem",
                                    alignItems: "center",
                                    gap: "1.5rem",
                                    padding: "1.75rem 0",
                                    textAlign: "left"
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.querySelector(".wt").style.color = "#FF4500";
                                },
                                onMouseLeave: (e)=>{
                                    if (!isOpen) e.currentTarget.querySelector(".wt").style.color = "#F3F4F6";
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: "var(--font-mono)",
                                            fontSize: "0.65rem",
                                            color: "rgba(255,255,255,0.3)"
                                        },
                                        children: p.num
                                    }, void 0, false, {
                                        fileName: "[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx",
                                        lineNumber: 138,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "wt",
                                        style: {
                                            fontFamily: "var(--font-heading)",
                                            fontSize: "clamp(1.25rem, 2.5vw, 2.25rem)",
                                            fontWeight: 700,
                                            letterSpacing: "-0.03em",
                                            color: isOpen ? "#FF4500" : "#F3F4F6",
                                            transition: "color 0.15s"
                                        },
                                        children: p.title
                                    }, void 0, false, {
                                        fileName: "[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx",
                                        lineNumber: 139,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: "var(--font-mono)",
                                            fontSize: "0.65rem",
                                            letterSpacing: "0.1em",
                                            textTransform: "uppercase",
                                            color: "rgba(255,255,255,0.3)"
                                        },
                                        children: p.type
                                    }, void 0, false, {
                                        fileName: "[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx",
                                        lineNumber: 140,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: "var(--font-mono)",
                                            fontSize: "0.6rem",
                                            color: "rgba(255,255,255,0.2)"
                                        },
                                        children: p.year
                                    }, void 0, false, {
                                        fileName: "[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx",
                                        lineNumber: 141,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: "var(--font-mono)",
                                            fontSize: "1rem",
                                            color: "#FF4500",
                                            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                                            transition: "transform 0.25s ease",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        },
                                        children: "+"
                                    }, void 0, false, {
                                        fileName: "[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx",
                                        lineNumber: 142,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx",
                                lineNumber: 132,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                initial: false,
                                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        height: 0,
                                        opacity: 0
                                    },
                                    animate: {
                                        height: "auto",
                                        opacity: 1
                                    },
                                    exit: {
                                        height: 0,
                                        opacity: 0
                                    },
                                    transition: {
                                        duration: 0.35,
                                        ease: [
                                            0.4,
                                            0,
                                            0.2,
                                            1
                                        ]
                                    },
                                    style: {
                                        overflow: "hidden"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            paddingBottom: "2.5rem",
                                            display: "grid",
                                            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
                                            gap: "2rem",
                                            alignItems: "start"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            position: "relative",
                                                            borderRadius: "4px",
                                                            overflow: "hidden",
                                                            aspectRatio: "16/9",
                                                            border: "1px solid rgba(255,255,255,0.06)"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: p.images[curImg],
                                                                alt: `${p.title} screenshot ${curImg + 1}`,
                                                                fill: true,
                                                                style: {
                                                                    objectFit: "cover",
                                                                    objectPosition: "top"
                                                                },
                                                                sizes: "50vw"
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx",
                                                                lineNumber: 154,
                                                                columnNumber: 27
                                                            }, this),
                                                            p.images.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: (e)=>{
                                                                            e.stopPropagation();
                                                                            prevImg(p.num, p.images.length);
                                                                        },
                                                                        style: {
                                                                            position: "absolute",
                                                                            left: "0.5rem",
                                                                            top: "50%",
                                                                            transform: "translateY(-50%)",
                                                                            background: "rgba(5,5,5,0.7)",
                                                                            border: "1px solid rgba(255,255,255,0.1)",
                                                                            borderRadius: "50%",
                                                                            width: "2rem",
                                                                            height: "2rem",
                                                                            color: "#F3F4F6",
                                                                            cursor: "pointer",
                                                                            display: "flex",
                                                                            alignItems: "center",
                                                                            justifyContent: "center",
                                                                            fontSize: "0.8rem"
                                                                        },
                                                                        children: "‹"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx",
                                                                        lineNumber: 157,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: (e)=>{
                                                                            e.stopPropagation();
                                                                            nextImg(p.num, p.images.length);
                                                                        },
                                                                        style: {
                                                                            position: "absolute",
                                                                            right: "0.5rem",
                                                                            top: "50%",
                                                                            transform: "translateY(-50%)",
                                                                            background: "rgba(5,5,5,0.7)",
                                                                            border: "1px solid rgba(255,255,255,0.1)",
                                                                            borderRadius: "50%",
                                                                            width: "2rem",
                                                                            height: "2rem",
                                                                            color: "#F3F4F6",
                                                                            cursor: "pointer",
                                                                            display: "flex",
                                                                            alignItems: "center",
                                                                            justifyContent: "center",
                                                                            fontSize: "0.8rem"
                                                                        },
                                                                        children: "›"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx",
                                                                        lineNumber: 158,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            position: "absolute",
                                                                            bottom: "0.5rem",
                                                                            left: "50%",
                                                                            transform: "translateX(-50%)",
                                                                            display: "flex",
                                                                            gap: "4px"
                                                                        },
                                                                        children: p.images.map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    width: "5px",
                                                                                    height: "5px",
                                                                                    borderRadius: "50%",
                                                                                    background: idx === curImg ? "#FF4500" : "rgba(255,255,255,0.3)"
                                                                                }
                                                                            }, idx, false, {
                                                                                fileName: "[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx",
                                                                                lineNumber: 161,
                                                                                columnNumber: 35
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx",
                                                                        lineNumber: 159,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontFamily: "var(--font-mono)",
                                                            fontSize: "0.55rem",
                                                            color: "rgba(255,255,255,0.2)",
                                                            marginTop: "0.4rem",
                                                            letterSpacing: "0.1em"
                                                        },
                                                        children: [
                                                            curImg + 1,
                                                            " / ",
                                                            p.images.length
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx",
                                                lineNumber: 152,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: "1.25rem"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontFamily: "var(--font-body)",
                                                            fontSize: "0.92rem",
                                                            lineHeight: 1.8,
                                                            color: "rgba(243,244,246,0.65)",
                                                            margin: 0
                                                        },
                                                        children: p.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx",
                                                        lineNumber: 175,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        style: {
                                                            listStyle: "none",
                                                            margin: 0,
                                                            padding: 0,
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: "0.4rem"
                                                        },
                                                        children: p.features.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                style: {
                                                                    fontFamily: "var(--font-body)",
                                                                    fontSize: "0.82rem",
                                                                    color: "rgba(243,244,246,0.5)",
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    gap: "0.5rem"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            color: "#FF4500",
                                                                            fontSize: "0.7rem"
                                                                        },
                                                                        children: "→"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx",
                                                                        lineNumber: 181,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    " ",
                                                                    f
                                                                ]
                                                            }, f, true, {
                                                                fileName: "[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx",
                                                                lineNumber: 180,
                                                                columnNumber: 29
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "flex",
                                                            flexWrap: "wrap",
                                                            gap: "0.4rem"
                                                        },
                                                        children: p.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontFamily: "var(--font-mono)",
                                                                    fontSize: "0.58rem",
                                                                    letterSpacing: "0.1em",
                                                                    textTransform: "uppercase",
                                                                    padding: "0.28rem 0.65rem",
                                                                    borderRadius: "2px",
                                                                    background: "rgba(255,69,0,0.08)",
                                                                    color: "#FF4500",
                                                                    border: "1px solid rgba(255,69,0,0.2)"
                                                                },
                                                                children: tag
                                                            }, tag, false, {
                                                                fileName: "[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx",
                                                                lineNumber: 189,
                                                                columnNumber: 29
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            background: "#0d0d0d",
                                                            border: "1px solid rgba(255,255,255,0.06)",
                                                            borderRadius: "4px",
                                                            padding: "1.25rem"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    fontFamily: "var(--font-mono)",
                                                                    fontSize: "0.55rem",
                                                                    letterSpacing: "0.18em",
                                                                    color: "rgba(255,255,255,0.3)",
                                                                    textTransform: "uppercase",
                                                                    margin: "0 0 0.75rem"
                                                                },
                                                                children: "Commit activity"
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx",
                                                                lineNumber: 195,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CommitGraph, {
                                                                seed: parseInt(p.num)
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx",
                                                                lineNumber: 196,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx",
                                                        lineNumber: 194,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "flex",
                                                            gap: "1rem",
                                                            flexWrap: "wrap"
                                                        },
                                                        children: [
                                                            p.liveHref !== "#" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: p.liveHref,
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                style: {
                                                                    display: "inline-flex",
                                                                    alignItems: "center",
                                                                    gap: "0.4rem",
                                                                    fontFamily: "var(--font-mono)",
                                                                    fontSize: "0.62rem",
                                                                    letterSpacing: "0.12em",
                                                                    textTransform: "uppercase",
                                                                    color: "#FF4500",
                                                                    textDecoration: "none",
                                                                    borderBottom: "1px solid rgba(255,69,0,0.3)",
                                                                    paddingBottom: "2px"
                                                                },
                                                                children: "View Live ↗"
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx",
                                                                lineNumber: 202,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: p.repoHref,
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                style: {
                                                                    display: "inline-flex",
                                                                    alignItems: "center",
                                                                    gap: "0.4rem",
                                                                    fontFamily: "var(--font-mono)",
                                                                    fontSize: "0.62rem",
                                                                    letterSpacing: "0.12em",
                                                                    textTransform: "uppercase",
                                                                    color: "rgba(255,255,255,0.45)",
                                                                    textDecoration: "none",
                                                                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                                                                    paddingBottom: "2px"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GHIcon, {}, void 0, false, {
                                                                        fileName: "[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx",
                                                                        lineNumber: 207,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    " View Repo"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx",
                                                                lineNumber: 206,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx",
                                                lineNumber: 174,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx",
                                        lineNumber: 149,
                                        columnNumber: 21
                                    }, this)
                                }, "panel", false, {
                                    fileName: "[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx",
                                    lineNumber: 148,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx",
                                lineNumber: 146,
                                columnNumber: 15
                            }, this)
                        ]
                    }, p.num, true, {
                        fileName: "[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx",
                        lineNumber: 130,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx",
        lineNumber: 114,
        columnNumber: 5
    }, this);
}
_s(SelectedWorksExpanded, "hBODiN4VGTzUdawnSglrom672H0=");
_c2 = SelectedWorksExpanded;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "CommitGraph");
__turbopack_context__.k.register(_c1, "GHIcon");
__turbopack_context__.k.register(_c2, "SelectedWorksExpanded");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/portfolio/src/components/sections/SelectedWorksExpanded.tsx [app-client] (ecmascript)"));
}),
]);

//# debugId=d153b55b-23f8-a23b-af55-fb3c4029ad98
//# sourceMappingURL=portfolio_src_components_sections_SelectedWorksExpanded_tsx_0ajc9d2._.js.map