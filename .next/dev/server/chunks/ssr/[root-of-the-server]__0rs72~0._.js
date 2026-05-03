;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="4df8aa54-9f87-8e3a-ad3c-9d7fcd2d95f6")}catch(e){}}();
module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/portfolio/src/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.0x3dzn~oxb6tn.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/portfolio/src/app/favicon.ico.mjs { IMAGE => \"[project]/portfolio/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/portfolio/src/app/favicon.ico (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 256,
    height: 256
};
}),
"[project]/portfolio/src/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* ── Hero Layout: Movie-poster framing ─────────────────
   Section  = position:relative  height:100dvh  overflow:hidden
   All children are absolutely positioned — zero document-flow pushing.
   - Label + descriptor → top-right, float independently
   - H1               → anchored bottom-left, no overflow
   - Scroll indicator  → bottom-left, above viewport edge
   Font: clamp(3rem, 9vw, 12rem)  leading-[0.85]  tracking tight
   'refuse' = solid #FF4500 italic. No gradients.
───────────────────────────────────────────────────────── */ __turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "hero",
                style: {
                    position: "relative",
                    height: "100dvh",
                    /* Strict: exactly one viewport — no overflow */ overflow: "hidden",
                    background: "#050505"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: "clamp(6rem, 11vh, 9rem)",
                            /* below navbar */ right: "3vw",
                            maxWidth: "28ch",
                            textAlign: "right",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: "var(--font-mono)",
                                    fontSize: "0.65rem",
                                    letterSpacing: "0.18em",
                                    textTransform: "uppercase",
                                    color: "#FF4500"
                                },
                                children: "Full-Stack Developer  /  2024"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/src/app/page.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: "var(--font-body)",
                                    fontSize: "clamp(0.75rem, 1vw, 0.875rem)",
                                    lineHeight: "1.7",
                                    color: "rgba(243,244,246,0.45)"
                                },
                                children: "Divyant this side. A developer bridging the gap between heavy technical engineering and flawless, modern design. I don't just build templates; I craft custom digital solutions designed to scale."
                            }, void 0, false, {
                                fileName: "[project]/portfolio/src/app/page.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/portfolio/src/app/page.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            position: "absolute",
                            bottom: "4vh",
                            left: 0,
                            paddingLeft: "3vw",
                            paddingRight: "3vw",
                            /* Typography */ fontFamily: "var(--font-heading)",
                            fontSize: "clamp(2.5rem, 6.2vw, 8rem)",
                            fontWeight: 800,
                            lineHeight: 0.87,
                            letterSpacing: "-0.05em",
                            color: "#F3F4F6",
                            width: "100%",
                            margin: 0
                        },
                        children: [
                            "Creating digital",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/portfolio/src/app/page.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            "experiences that",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/portfolio/src/app/page.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                style: {
                                    color: "#FF4500",
                                    fontStyle: "italic",
                                    display: "inline-block",
                                    marginRight: "0.1em"
                                },
                                children: "refuse"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/src/app/page.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            " ",
                            "to be",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/portfolio/src/app/page.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            "ignored."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/portfolio/src/app/page.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            bottom: "clamp(1.25rem, 2.5vh, 2rem)",
                            left: "3vw",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.625rem"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    display: "block",
                                    width: "32px",
                                    height: "1px",
                                    background: "rgba(255,255,255,0.2)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/portfolio/src/app/page.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "var(--font-mono)",
                                    fontSize: "0.6rem",
                                    letterSpacing: "0.22em",
                                    color: "rgba(255,255,255,0.25)",
                                    textTransform: "uppercase"
                                },
                                children: "Scroll"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/src/app/page.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/portfolio/src/app/page.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/portfolio/src/app/page.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "nav-invert-test",
                "data-nav-invert": "true",
                style: {
                    background: "#F3F4F6",
                    padding: "8rem 3vw"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.65rem",
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                            color: "#FF4500",
                            marginBottom: "1.5rem"
                        },
                        children: "Nav Inversion — Live"
                    }, void 0, false, {
                        fileName: "[project]/portfolio/src/app/page.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontFamily: "var(--font-heading)",
                            fontSize: "clamp(2rem, 4vw, 3.5rem)",
                            fontWeight: 700,
                            letterSpacing: "-0.03em",
                            lineHeight: 1,
                            color: "#050505",
                            maxWidth: "18ch"
                        },
                        children: "Navbar reads dark over light backgrounds automatically."
                    }, void 0, false, {
                        fileName: "[project]/portfolio/src/app/page.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/portfolio/src/app/page.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "cursor-test",
                style: {
                    minHeight: "40vh",
                    display: "flex",
                    alignItems: "center",
                    padding: "8rem 3vw"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-cursor": "drag",
                    style: {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "280px",
                        height: "160px",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "4px",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        color: "rgba(255,255,255,0.3)",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase"
                    },
                    children: "Hover → DRAG"
                }, void 0, false, {
                    fileName: "[project]/portfolio/src/app/page.tsx",
                    lineNumber: 181,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/portfolio/src/app/page.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/portfolio/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/portfolio/src/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# debugId=4df8aa54-9f87-8e3a-ad3c-9d7fcd2d95f6
//# sourceMappingURL=%5Broot-of-the-server%5D__0rs72~0._.js.map