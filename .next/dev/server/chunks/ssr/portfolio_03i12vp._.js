;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="e0b985c0-2d99-926f-f6c8-fcb9befe5b4a")}catch(e){}}();
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
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-ssr] (ecmascript)");
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
/* Duplicate for seamless infinite loop */ const MARQUEE_ITEMS = [
    ...TESTIMONIALS,
    ...TESTIMONIALS
];
/* ── Individual card ─────────────────────────────── */ function TestimonialCard({ data }) {
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
            minWidth: "clamp(320px, 32vw, 440px)",
            padding: "2.5rem",
            borderRadius: "2px",
            border: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "2rem",
            flexShrink: 0,
            userSelect: "none",
            WebkitUserSelect: "none",
            cursor: "none"
        },
        "data-cursor": "drag",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
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
                children: '"'
            }, void 0, false, {
                fileName: "[project]/portfolio/src/components/sections/TestimonialsCarousel.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
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
                lineNumber: 88,
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
                            lineNumber: 114,
                            columnNumber: 13
                        }, this) : data.name
                    }, void 0, false, {
                        fileName: "[project]/portfolio/src/components/sections/TestimonialsCarousel.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
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
                        lineNumber: 127,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/portfolio/src/components/sections/TestimonialsCarousel.tsx",
                lineNumber: 102,
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
    const [isPaused, setIsPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAnimationControls"])();
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    /* Calculate total width of one set (4 cards + gaps).
     We use a CSS-based approach for the continuous loop:
     animate x from 0 to -(total width of one set) */ const cardMinWidth = 380; // approximate in px
    const gap = 20;
    const oneSetWidth = TESTIMONIALS.length * (cardMinWidth + gap);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            overflow: "hidden",
            position: "relative"
        },
        onMouseEnter: ()=>setIsPaused(true),
        onMouseLeave: ()=>setIsPaused(false),
        "data-cursor": "drag",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            ref: trackRef,
            animate: {
                x: [
                    `0px`,
                    `-${oneSetWidth}px`
                ]
            },
            transition: {
                x: {
                    duration: 35,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear"
                }
            },
            style: {
                display: "flex",
                gap: `${gap}px`,
                paddingLeft: "3vw",
                paddingRight: "3vw",
                paddingBottom: "0.5rem",
                animationPlayState: isPaused ? "paused" : "running"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: `
          .marquee-track {
            /* fallback */
          }
        `
                }, void 0, false, {
                    fileName: "[project]/portfolio/src/components/sections/TestimonialsCarousel.tsx",
                    lineNumber: 191,
                    columnNumber: 9
                }, this),
                MARQUEE_ITEMS.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TestimonialCard, {
                        data: t
                    }, `${t.name}-${i}`, false, {
                        fileName: "[project]/portfolio/src/components/sections/TestimonialsCarousel.tsx",
                        lineNumber: 197,
                        columnNumber: 11
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/portfolio/src/components/sections/TestimonialsCarousel.tsx",
            lineNumber: 166,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/portfolio/src/components/sections/TestimonialsCarousel.tsx",
        lineNumber: 160,
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
"[project]/portfolio/src/components/three/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
;
;
;
;
"use client";
;
const HeroTorus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/portfolio/src/components/three/HeroTorus.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
const GravityPitComp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/portfolio/src/components/three/GravityPit.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
const CobeGlobe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/portfolio/src/components/three/CobeGlobe.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
const WorksPreview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/portfolio/src/components/three/WorksPreview.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
}),
"[project]/portfolio/src/components/sections/SpotifyNowPlaying.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpotifyNowPlaying",
    ()=>SpotifyNowPlaying
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
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
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(FALLBACK);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let mounted = true;
        const fetchTrack = async ()=>{
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
        };
        fetchTrack();
        const interval = setInterval(fetchTrack, 30_000);
        return ()=>{
            mounted = false;
            clearInterval(interval);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                children: !data.albumImageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "28",
                    height: "28",
                    viewBox: "0 0 24 24",
                    fill: "#1DB954",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    data.songUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    ].map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 24 24",
                        fill: "#1DB954",
                        style: {
                            marginLeft: "6px",
                            opacity: 0.6,
                            flexShrink: 0
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
            data.isPlaying && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
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
}),
"[project]/portfolio/src/components/sections/CalBookingEmbed.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CalBookingEmbed",
    ()=>CalBookingEmbed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
/**
 * Cal.com dark-mode booking embed.
 * Uses a responsive iframe pointing to the user's Cal.com scheduling page.
 * Set the CAL_LINK prop to your actual Cal.com slug.
 */ const CAL_LINK = "divyant/project-discovery";
function CalBookingEmbed() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%",
            minHeight: "580px",
            borderRadius: "2px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.06)",
            position: "relative",
            background: "#0a0a0a"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
            src: `https://cal.com/${CAL_LINK}?theme=dark&layout=month_view`,
            style: {
                width: "100%",
                height: "100%",
                minHeight: "580px",
                border: "none",
                borderRadius: "2px",
                colorScheme: "dark"
            },
            title: "Schedule a project discovery call",
            loading: "lazy",
            allow: "camera;microphone"
        }, void 0, false, {
            fileName: "[project]/portfolio/src/components/sections/CalBookingEmbed.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/portfolio/src/components/sections/CalBookingEmbed.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/portfolio/src/components/sections/GitHubActivity.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GitHubActivity",
    ()=>GitHubActivity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function GitHubActivity() {
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let mounted = true;
        fetch("/api/github").then((r)=>r.json()).then((d)=>mounted && setData(d)).catch(()=>{});
        return ()=>{
            mounted = false;
        };
    }, []);
    if (!data || !data.contributionCalendar && data.repositories.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                background: "#111111",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "2px",
                padding: "2rem"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.18em",
                    color: "rgba(255,255,255,0.3)",
                    textTransform: "uppercase"
                },
                children: "Loading GitHub activity..."
            }, void 0, false, {
                fileName: "[project]/portfolio/src/components/sections/GitHubActivity.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/portfolio/src/components/sections/GitHubActivity.tsx",
            lineNumber: 54,
            columnNumber: 7
        }, this);
    }
    const calendar = data.contributionCalendar;
    const repos = data.repositories;
    // Take last 20 weeks for a compact graph
    const recentWeeks = calendar?.weeks.slice(-20) ?? [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem"
        },
        children: [
            calendar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: "#111111",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "2px",
                    padding: "1.5rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "1rem"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: "var(--font-mono)",
                                    fontSize: "0.55rem",
                                    letterSpacing: "0.18em",
                                    color: "#FF4500",
                                    textTransform: "uppercase",
                                    margin: 0
                                },
                                children: "GitHub Contributions"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/src/components/sections/GitHubActivity.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: "var(--font-heading)",
                                    fontSize: "1.25rem",
                                    fontWeight: 700,
                                    color: "#F3F4F6",
                                    margin: 0
                                },
                                children: [
                                    calendar.totalContributions.toLocaleString(),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: "var(--font-mono)",
                                            fontSize: "0.6rem",
                                            color: "rgba(255,255,255,0.35)",
                                            fontWeight: 400
                                        },
                                        children: "in the last year"
                                    }, void 0, false, {
                                        fileName: "[project]/portfolio/src/components/sections/GitHubActivity.tsx",
                                        lineNumber: 125,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/portfolio/src/components/sections/GitHubActivity.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/portfolio/src/components/sections/GitHubActivity.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: "3px",
                            overflowX: "auto",
                            paddingBottom: "4px"
                        },
                        children: recentWeeks.map((week, wi)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "3px"
                                },
                                children: week.contributionDays.map((day, di)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        title: `${day.date}: ${day.contributionCount} contributions`,
                                        style: {
                                            width: "10px",
                                            height: "10px",
                                            borderRadius: "2px",
                                            background: day.contributionCount === 0 ? "rgba(255,255,255,0.04)" : day.contributionCount < 3 ? "rgba(255,69,0,0.25)" : day.contributionCount < 6 ? "rgba(255,69,0,0.5)" : day.contributionCount < 10 ? "rgba(255,69,0,0.75)" : "#FF4500"
                                        }
                                    }, di, false, {
                                        fileName: "[project]/portfolio/src/components/sections/GitHubActivity.tsx",
                                        lineNumber: 157,
                                        columnNumber: 19
                                    }, this))
                            }, wi, false, {
                                fileName: "[project]/portfolio/src/components/sections/GitHubActivity.tsx",
                                lineNumber: 148,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/portfolio/src/components/sections/GitHubActivity.tsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/portfolio/src/components/sections/GitHubActivity.tsx",
                lineNumber: 87,
                columnNumber: 9
            }, this),
            repos.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: "#111111",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "2px",
                    padding: "1.5rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.55rem",
                            letterSpacing: "0.18em",
                            color: "rgba(255,255,255,0.3)",
                            textTransform: "uppercase",
                            margin: "0 0 1rem"
                        },
                        children: "Currently Working On"
                    }, void 0, false, {
                        fileName: "[project]/portfolio/src/components/sections/GitHubActivity.tsx",
                        lineNumber: 193,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        style: {
                            listStyle: "none",
                            margin: 0,
                            padding: 0,
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.75rem"
                        },
                        children: repos.map((repo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: repo.url,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.75rem",
                                        textDecoration: "none",
                                        color: "inherit",
                                        padding: "0.75rem",
                                        borderRadius: "2px",
                                        border: "1px solid rgba(255,255,255,0.04)",
                                        transition: "border-color 0.2s, background 0.2s"
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.borderColor = "rgba(255,69,0,0.3)";
                                        e.currentTarget.style.background = "rgba(255,69,0,0.04)";
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.04)";
                                        e.currentTarget.style.background = "transparent";
                                    },
                                    children: [
                                        repo.primaryLanguage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                width: "8px",
                                                height: "8px",
                                                borderRadius: "50%",
                                                background: repo.primaryLanguage.color,
                                                flexShrink: 0
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/portfolio/src/components/sections/GitHubActivity.tsx",
                                            lineNumber: 247,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                flex: 1,
                                                minWidth: 0
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontFamily: "var(--font-body)",
                                                        fontSize: "0.85rem",
                                                        fontWeight: 600,
                                                        color: "#F3F4F6",
                                                        margin: 0,
                                                        overflow: "hidden",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap"
                                                    },
                                                    children: repo.name
                                                }, void 0, false, {
                                                    fileName: "[project]/portfolio/src/components/sections/GitHubActivity.tsx",
                                                    lineNumber: 258,
                                                    columnNumber: 21
                                                }, this),
                                                repo.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontFamily: "var(--font-body)",
                                                        fontSize: "0.72rem",
                                                        color: "rgba(255,255,255,0.35)",
                                                        margin: "0.2rem 0 0",
                                                        overflow: "hidden",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap"
                                                    },
                                                    children: repo.description
                                                }, void 0, false, {
                                                    fileName: "[project]/portfolio/src/components/sections/GitHubActivity.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/portfolio/src/components/sections/GitHubActivity.tsx",
                                            lineNumber: 257,
                                            columnNumber: 19
                                        }, this),
                                        repo.stargazerCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: "var(--font-mono)",
                                                fontSize: "0.6rem",
                                                color: "rgba(255,255,255,0.3)",
                                                flexShrink: 0
                                            },
                                            children: [
                                                "★ ",
                                                repo.stargazerCount
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/portfolio/src/components/sections/GitHubActivity.tsx",
                                            lineNumber: 290,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/portfolio/src/components/sections/GitHubActivity.tsx",
                                    lineNumber: 217,
                                    columnNumber: 17
                                }, this)
                            }, repo.name, false, {
                                fileName: "[project]/portfolio/src/components/sections/GitHubActivity.tsx",
                                lineNumber: 216,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/portfolio/src/components/sections/GitHubActivity.tsx",
                        lineNumber: 205,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/portfolio/src/components/sections/GitHubActivity.tsx",
                lineNumber: 185,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/portfolio/src/components/sections/GitHubActivity.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
}),
"[project]/portfolio/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This has to be a shared module which is shared between client component error boundary and dynamic component
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    BailoutToCSRError: null,
    isBailoutToCSRError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    BailoutToCSRError: function() {
        return BailoutToCSRError;
    },
    isBailoutToCSRError: function() {
        return isBailoutToCSRError;
    }
});
const BAILOUT_TO_CSR = 'BAILOUT_TO_CLIENT_SIDE_RENDERING';
class BailoutToCSRError extends Error {
    constructor(reason){
        super(`Bail out to client-side rendering: ${reason}`), this.reason = reason, this.digest = BAILOUT_TO_CSR;
    }
}
function isBailoutToCSRError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err)) {
        return false;
    }
    return err.digest === BAILOUT_TO_CSR;
}
}),
"[project]/portfolio/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
const _bailouttocsr = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-ssr] (ecmascript)");
function BailoutToCSR({ reason, children }) {
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(reason), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    return children;
}
}),
"[project]/portfolio/node_modules/next/dist/shared/lib/encode-uri-path.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "encodeURIPath", {
    enumerable: true,
    get: function() {
        return encodeURIPath;
    }
});
function encodeURIPath(file) {
    return file.split('/').map((p)=>encodeURIComponent(p)).join('/');
}
}),
"[project]/portfolio/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
const _jsxruntime = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
const _reactdom = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _encodeuripath = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/shared/lib/encode-uri-path.js [app-ssr] (ecmascript)");
const _deploymentid = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/shared/lib/deployment-id.js [app-ssr] (ecmascript)");
function PreloadChunks({ moduleIds }) {
    // Early return in client compilation and only load requestStore on server side
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
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
"[project]/portfolio/node_modules/framer-motion/dist/es/animation/hooks/animation-controls.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "animationControls",
    ()=>animationControls,
    "setValues",
    ()=>setValues
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$interfaces$2f$visual$2d$element$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/motion-dom/dist/es/animation/interfaces/visual-element.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$setters$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/motion-dom/dist/es/render/utils/setters.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/motion-utils/dist/es/errors.mjs [app-ssr] (ecmascript)");
;
;
function stopAnimation(visualElement) {
    visualElement.values.forEach((value)=>value.stop());
}
function setVariants(visualElement, variantLabels) {
    const reversedLabels = [
        ...variantLabels
    ].reverse();
    reversedLabels.forEach((key)=>{
        const variant = visualElement.getVariant(key);
        variant && (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$setters$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setTarget"])(visualElement, variant);
        if (visualElement.variantChildren) {
            visualElement.variantChildren.forEach((child)=>{
                setVariants(child, variantLabels);
            });
        }
    });
}
function setValues(visualElement, definition) {
    if (Array.isArray(definition)) {
        return setVariants(visualElement, definition);
    } else if (typeof definition === "string") {
        return setVariants(visualElement, [
            definition
        ]);
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$setters$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setTarget"])(visualElement, definition);
    }
}
/**
 * @public
 */ function animationControls() {
    /**
     * Track whether the host component has mounted.
     */ let hasMounted = false;
    /**
     * A collection of linked component animation controls.
     */ const subscribers = new Set();
    const controls = {
        subscribe (visualElement) {
            subscribers.add(visualElement);
            return ()=>void subscribers.delete(visualElement);
        },
        start (definition, transitionOverride) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(hasMounted, "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");
            const animations = [];
            subscribers.forEach((visualElement)=>{
                animations.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$interfaces$2f$visual$2d$element$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animateVisualElement"])(visualElement, definition, {
                    transitionOverride
                }));
            });
            return Promise.all(animations);
        },
        set (definition) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(hasMounted, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.");
            return subscribers.forEach((visualElement)=>{
                setValues(visualElement, definition);
            });
        },
        stop () {
            subscribers.forEach((visualElement)=>{
                stopAnimation(visualElement);
            });
        },
        mount () {
            hasMounted = true;
            return ()=>{
                hasMounted = false;
                controls.stop();
            };
        }
    };
    return controls;
}
;
}),
"[project]/portfolio/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAnimation",
    ()=>useAnimation,
    "useAnimationControls",
    ()=>useAnimationControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$animation$2d$controls$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/framer-motion/dist/es/animation/hooks/animation-controls.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
/**
 * Creates `LegacyAnimationControls`, which can be used to manually start, stop
 * and sequence animations on one or more components.
 *
 * The returned `LegacyAnimationControls` should be passed to the `animate` property
 * of the components you want to animate.
 *
 * These components can then be animated with the `start` method.
 *
 * ```jsx
 * import * as React from 'react'
 * import { motion, useAnimation } from 'framer-motion'
 *
 * export function MyComponent(props) {
 *    const controls = useAnimation()
 *
 *    controls.start({
 *        x: 100,
 *        transition: { duration: 0.5 },
 *    })
 *
 *    return <motion.div animate={controls} />
 * }
 * ```
 *
 * @returns Animation controller with `start` and `stop` methods
 *
 * @public
 */ function useAnimationControls() {
    const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConstant"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$animation$2d$controls$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animationControls"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])(controls.mount, []);
    return controls;
}
const useAnimation = useAnimationControls;
;
}),
"[project]/portfolio/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports._ = _interop_require_default;
}),
"[project]/portfolio/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
const _jsxruntime = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
const _react = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
const _dynamicbailouttocsr = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-ssr] (ecmascript)");
const _preloadchunks = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-ssr] (ecmascript)");
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
                ("TURBOPACK compile-time truthy", 1) ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_preloadchunks.PreloadChunks, {
                    moduleIds: opts.modules
                }) : "TURBOPACK unreachable",
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
"[project]/portfolio/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
const _interop_require_default = __turbopack_context__.r("[project]/portfolio/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)");
const _loadable = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/portfolio/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-ssr] (ecmascript)"));
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
];

//# debugId=e0b985c0-2d99-926f-f6c8-fcb9befe5b4a
//# sourceMappingURL=portfolio_03i12vp._.js.map