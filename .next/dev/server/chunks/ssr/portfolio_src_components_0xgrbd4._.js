;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="d84566c7-7de7-e4eb-893d-c126ad8868a2")}catch(e){}}();
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
];

//# debugId=d84566c7-7de7-e4eb-893d-c126ad8868a2
//# sourceMappingURL=portfolio_src_components_0xgrbd4._.js.map