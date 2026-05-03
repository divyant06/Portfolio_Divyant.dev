;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="dfd7c1fc-59f4-5baf-2298-323b1a75252d")}catch(e){}}();
module.exports = [
"[project]/portfolio/src/components/sections/TestimonialsCarousel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TestimonialsCarousel",
    ()=>TestimonialsCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
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
/* ── Individual card ─────────────────────────────── */ function TestimonialCard({ data, isDragging }) {
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const active = hovered && !isDragging;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        onHoverStart: ()=>setHovered(true),
        onHoverEnd: ()=>setHovered(false),
        animate: {
            backgroundColor: active ? "#FF4500" : "#111111"
        },
        transition: {
            duration: 0.12,
            ease: "easeOut"
        },
        style: {
            minWidth: "clamp(300px, 30vw, 420px)",
            padding: "2.5rem",
            borderRadius: "2px",
            border: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "2rem",
            flexShrink: 0,
            userSelect: "none",
            WebkitUserSelect: "none"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                animate: {
                    color: active ? "#050505" : "rgba(255,69,0,0.4)"
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
                children: '"'
            }, void 0, false, {
                fileName: "[project]/portfolio/src/components/sections/TestimonialsCarousel.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                animate: {
                    color: active ? "#050505" : "rgba(243,244,246,0.65)"
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
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.25rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                        animate: {
                            color: active ? "#050505" : "#F3F4F6"
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
                        children: data.link ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                            lineNumber: 112,
                            columnNumber: 13
                        }, this) : data.name
                    }, void 0, false, {
                        fileName: "[project]/portfolio/src/components/sections/TestimonialsCarousel.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                        animate: {
                            color: active ? "rgba(5,5,5,0.6)" : "rgba(255,255,255,0.35)"
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
                        lineNumber: 125,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/portfolio/src/components/sections/TestimonialsCarousel.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/portfolio/src/components/sections/TestimonialsCarousel.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
function TestimonialsCarousel() {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        "data-cursor": "testimonial",
        style: {
            overflow: "hidden"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            drag: "x",
            dragConstraints: containerRef,
            dragTransition: {
                bounceStiffness: 80,
                bounceDamping: 18
            },
            onDragStart: ()=>setIsDragging(true),
            onDragEnd: ()=>setIsDragging(false),
            style: {
                display: "flex",
                gap: "1.25rem",
                paddingLeft: "3vw",
                paddingRight: "3vw",
                paddingBottom: "0.5rem"
            },
            whileTap: {
                cursor: "grabbing"
            },
            children: TESTIMONIALS.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TestimonialCard, {
                    data: t,
                    isDragging: isDragging
                }, t.name, false, {
                    fileName: "[project]/portfolio/src/components/sections/TestimonialsCarousel.tsx",
                    lineNumber: 169,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/portfolio/src/components/sections/TestimonialsCarousel.tsx",
            lineNumber: 153,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/portfolio/src/components/sections/TestimonialsCarousel.tsx",
        lineNumber: 148,
        columnNumber: 5
    }, this);
}
}),
"[project]/portfolio/src/components/ui/MagneticButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MagneticButton",
    ()=>MagneticButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function MagneticButton({ href, children }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rawX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const rawY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(rawX, {
        damping: 20,
        stiffness: 250,
        mass: 0.5
    });
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(rawY, {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].a, {
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
}),
"[externals]/module [external] (module, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("module", () => require("module"));

module.exports = mod;
}),
"[project]/portfolio/src/components/three/HeroTorus.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroTorus",
    ()=>HeroTorus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@react-three/fiber/dist/events-b389eeca.esm.js [app-ssr] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@react-three/fiber/dist/events-b389eeca.esm.js [app-ssr] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@react-three/drei/core/shapes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@react-three/drei/core/Environment.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
/* ── Torus scene (lives inside the Canvas) ─────────── */ function RotatingTorusKnot() {
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mouse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const { viewport } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    // Track the mouse in NDC space
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const handler = undefined;
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])((_, delta)=>{
        if (!meshRef.current) return;
        // Slow auto-rotation
        meshRef.current.rotation.x += delta * 0.08;
        meshRef.current.rotation.y += delta * 0.12;
        // Subtle mouse influence
        meshRef.current.rotation.z += (mouse.current.x * 0.02 - meshRef.current.rotation.z * 0.01) * 0.5;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TorusKnot"], {
        ref: meshRef,
        args: [
            1.6,
            0.45,
            256,
            64
        ],
        position: [
            0,
            0,
            0
        ],
        scale: viewport.width < 6 ? 0.7 : 1,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
            color: "#1a1a1a",
            metalness: 0.92,
            roughness: 0.18,
            envMapIntensity: 1.4
        }, void 0, false, {
            fileName: "[project]/portfolio/src/components/three/HeroTorus.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/portfolio/src/components/three/HeroTorus.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
function HeroTorus() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 1,
            opacity: 0.55
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
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
                antialias: true
            },
            style: {
                background: "transparent"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                    intensity: 0.15
                }, void 0, false, {
                    fileName: "[project]/portfolio/src/components/three/HeroTorus.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                    position: [
                        5,
                        5,
                        5
                    ],
                    intensity: 0.6,
                    color: "#FF4500"
                }, void 0, false, {
                    fileName: "[project]/portfolio/src/components/three/HeroTorus.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                    position: [
                        -3,
                        -2,
                        4
                    ],
                    intensity: 0.3,
                    color: "#334155"
                }, void 0, false, {
                    fileName: "[project]/portfolio/src/components/three/HeroTorus.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                    position: [
                        0,
                        0,
                        3
                    ],
                    intensity: 0.4,
                    color: "#FF4500",
                    distance: 8
                }, void 0, false, {
                    fileName: "[project]/portfolio/src/components/three/HeroTorus.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Environment"], {
                    preset: "city"
                }, void 0, false, {
                    fileName: "[project]/portfolio/src/components/three/HeroTorus.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RotatingTorusKnot, {}, void 0, false, {
                    fileName: "[project]/portfolio/src/components/three/HeroTorus.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/portfolio/src/components/three/HeroTorus.tsx",
            lineNumber: 64,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/portfolio/src/components/three/HeroTorus.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
}),
"[project]/portfolio/src/components/three/GravityPit.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GravityPit",
    ()=>GravityPit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/matter-js/build/matter.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const TECH = [
    "Next.js",
    "React",
    "Tailwind",
    "Flutter",
    "Supabase",
    "Solidity",
    "Framer Motion",
    "Three.js",
    "Node.js",
    "TypeScript"
];
const COLORS = [
    "#FF4500",
    "#F3F4F6",
    "#CCFF00",
    "#FF4500",
    "#3FCF8E",
    "#8B5CF6",
    "#F3F4F6",
    "#F3F4F6",
    "#68A063",
    "#3178C6"
];
function GravityPit() {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const engineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const container = containerRef.current;
        const canvas = canvasRef.current;
        if (!container || !canvas) return;
        const W = container.clientWidth;
        const H = container.clientHeight;
        canvas.width = W * window.devicePixelRatio;
        canvas.height = H * window.devicePixelRatio;
        canvas.style.width = `${W}px`;
        canvas.style.height = `${H}px`;
        const ctx = canvas.getContext("2d");
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        // Engine
        const engine = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Engine.create({
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
        const floor = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Bodies.rectangle(W / 2, H + 25, W + 100, 50, wallOpts);
        const leftWall = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Bodies.rectangle(-25, H / 2, 50, H * 2, wallOpts);
        const rightWall = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Bodies.rectangle(W + 25, H / 2, 50, H * 2, wallOpts);
        __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Composite.add(engine.world, [
            floor,
            leftWall,
            rightWall
        ]);
        // Create pill bodies for each tech
        const pills = [];
        TECH.forEach((name, i)=>{
            const w = Math.max(name.length * 10 + 40, 90);
            const h = 38;
            const x = W / (TECH.length + 1) * (i + 1) + (Math.random() - 0.5) * 60;
            const y = -60 - i * 55; // Stagger drop
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Bodies.rectangle(x, y, w, h, {
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
                label: name,
                color: COLORS[i],
                w,
                h
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Composite.add(engine.world, body);
        });
        // Mouse constraint for dragging
        const mouse = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Mouse.create(canvas);
        mouse.pixelRatio = window.devicePixelRatio;
        const mouseConstraint = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].MouseConstraint.create(engine, {
            mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Composite.add(engine.world, mouseConstraint);
        // Render loop
        let rafId;
        const render = ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Engine.update(engine, 1000 / 60);
            ctx.clearRect(0, 0, W, H);
            for (const pill of pills){
                const { body, label, color, w, h } = pill;
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
                // Fill with subtle transparency
                ctx.fillStyle = "rgba(17,17,17,0.85)";
                ctx.fill();
                // Border
                ctx.strokeStyle = color;
                ctx.lineWidth = 1;
                ctx.globalAlpha = 0.5;
                ctx.stroke();
                ctx.globalAlpha = 1;
                // Label
                ctx.fillStyle = color;
                ctx.font = "600 12px 'Space Grotesk', sans-serif";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.globalAlpha = 0.9;
                ctx.fillText(label, 0, 0.5);
                ctx.globalAlpha = 1;
                ctx.restore();
            }
            rafId = requestAnimationFrame(render);
        };
        setReady(true);
        render();
        // Resize handler
        const onResize = ()=>{
            const nW = container.clientWidth;
            const nH = container.clientHeight;
            canvas.width = nW * window.devicePixelRatio;
            canvas.height = nH * window.devicePixelRatio;
            canvas.style.width = `${nW}px`;
            canvas.style.height = `${nH}px`;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
            // Reposition walls
            __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Body.setPosition(floor, {
                x: nW / 2,
                y: nH + 25
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Body.setPosition(rightWall, {
                x: nW + 25,
                y: nH / 2
            });
        };
        window.addEventListener("resize", onResize);
        return ()=>{
            cancelAnimationFrame(rafId);
            window.removeEventListener("resize", onResize);
            __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Engine.clear(engine);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        style: {
            position: "relative",
            width: "100%",
            height: "100%",
            minHeight: "350px",
            cursor: "grab"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvasRef,
            style: {
                position: "absolute",
                inset: 0,
                opacity: ready ? 1 : 0,
                transition: "opacity 0.6s ease"
            }
        }, void 0, false, {
            fileName: "[project]/portfolio/src/components/three/GravityPit.tsx",
            lineNumber: 191,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/portfolio/src/components/three/GravityPit.tsx",
        lineNumber: 181,
        columnNumber: 5
    }, this);
}
}),
"[project]/portfolio/src/components/three/CobeGlobe.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CobeGlobe",
    ()=>CobeGlobe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$cobe$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/cobe/dist/index.esm.js [app-ssr] (ecmascript)");
"use client";
;
;
;
/* New Delhi coords → cobe uses [lat, long] in radians internally,
   but the markers API accepts degrees. We convert below. */ const DELHI_LAT = 28.6139;
const DELHI_LNG = 77.209;
function CobeGlobe() {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pointerDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const pointerX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const phi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        let width = 0;
        const onResize = ()=>{
            if (canvas.parentElement) {
                width = canvas.parentElement.clientWidth;
            }
        };
        onResize();
        window.addEventListener("resize", onResize);
        const globe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$cobe$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(canvas, {
            devicePixelRatio: Math.min(window.devicePixelRatio, 2),
            width: width * 2,
            height: width * 2,
            phi: 0,
            theta: 0.25,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 20000,
            mapBrightness: 2.5,
            baseColor: [
                0.15,
                0.15,
                0.15
            ],
            markerColor: [
                1,
                0.27,
                0
            ],
            glowColor: [
                0.08,
                0.08,
                0.08
            ],
            markers: [
                {
                    location: [
                        DELHI_LAT,
                        DELHI_LNG
                    ],
                    size: 0.08
                }
            ],
            onRender: (state)=>{
                // Auto-rotate unless the user is dragging
                if (!pointerDown.current) {
                    phi.current += 0.003;
                }
                state.phi = phi.current;
                state.width = width * 2;
                state.height = width * 2;
            }
        });
        // Drag interaction
        const onPointerDown = (e)=>{
            pointerDown.current = true;
            pointerX.current = e.clientX;
        };
        const onPointerUp = ()=>{
            pointerDown.current = false;
        };
        const onPointerMove = (e)=>{
            if (pointerDown.current) {
                const delta = e.clientX - pointerX.current;
                pointerX.current = e.clientX;
                phi.current += delta / 200;
            }
        };
        canvas.addEventListener("pointerdown", onPointerDown);
        window.addEventListener("pointerup", onPointerUp);
        window.addEventListener("pointermove", onPointerMove);
        return ()=>{
            globe.destroy();
            window.removeEventListener("resize", onResize);
            canvas.removeEventListener("pointerdown", onPointerDown);
            window.removeEventListener("pointerup", onPointerUp);
            window.removeEventListener("pointermove", onPointerMove);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%",
            maxWidth: "420px",
            aspectRatio: "1",
            margin: "0 auto",
            position: "relative"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvasRef,
            style: {
                width: "100%",
                height: "100%",
                cursor: "grab",
                contain: "layout paint size"
            }
        }, void 0, false, {
            fileName: "[project]/portfolio/src/components/three/CobeGlobe.tsx",
            lineNumber: 95,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/portfolio/src/components/three/CobeGlobe.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
}),
"[project]/portfolio/src/components/three/WorksPreview.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WorksPreview",
    ()=>WorksPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
/*
  Jelly distortion effect on project preview cells.
  Uses a pure CSS/SVG filter approach (feTurbulence + feDisplacementMap)
  instead of raw WebGL shaders — works everywhere, no Canvas overhead,
  and delivers the liquid-ripple aesthetic.
*/ /* Unique SVG filter per component instance */ let instanceCounter = 0;
function WorksPreview({ label, color = "#FF4500" }) {
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const filterId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(`jelly-${++instanceCounter}`);
    const onEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setHovered(true), []);
    const onLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setHovered(false), []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                style: {
                    position: "absolute",
                    width: 0,
                    height: 0,
                    pointerEvents: "none"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                        id: filterId.current,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feTurbulence", {
                                type: "turbulence",
                                baseFrequency: hovered ? "0.015 0.02" : "0 0",
                                numOctaves: 3,
                                seed: 2,
                                result: "turbulence",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feDisplacementMap", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
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
}),
];

//# debugId=dfd7c1fc-59f4-5baf-2298-323b1a75252d
//# sourceMappingURL=%5Broot-of-the-server%5D__0sfcshp._.js.map