;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="263342cf-a33f-0264-b8e4-0dda547f3aba")}catch(e){}}();
(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/portfolio/src/components/sections/GitHubActivity.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GitHubActivity",
    ()=>GitHubActivity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function GitHubActivity() {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GitHubActivity.useEffect": ()=>{
            let mounted = true;
            fetch("/api/github").then({
                "GitHubActivity.useEffect": (r)=>r.json()
            }["GitHubActivity.useEffect"]).then({
                "GitHubActivity.useEffect": (d)=>mounted && setData(d)
            }["GitHubActivity.useEffect"]).catch({
                "GitHubActivity.useEffect": ()=>{}
            }["GitHubActivity.useEffect"]);
            return ({
                "GitHubActivity.useEffect": ()=>{
                    mounted = false;
                }
            })["GitHubActivity.useEffect"];
        }
    }["GitHubActivity.useEffect"], []);
    if (!data || !data.contributionCalendar && data.repositories.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                background: "#111111",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "2px",
                padding: "2rem"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
    // Show full year (all 52 weeks) as required by blueprint §2.4
    const recentWeeks = calendar?.weeks ?? [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem"
        },
        children: [
            calendar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: "#111111",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "2px",
                    padding: "1.5rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "1rem"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: "3px",
                            overflowX: "auto",
                            paddingBottom: "4px"
                        },
                        children: recentWeeks.map((week, wi)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "3px"
                                },
                                children: week.contributionDays.map((day, di)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            repos.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: "#111111",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "2px",
                    padding: "1.5rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        style: {
                            listStyle: "none",
                            margin: 0,
                            padding: 0,
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.75rem"
                        },
                        children: repos.map((repo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                                        repo.primaryLanguage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                flex: 1,
                                                minWidth: 0
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                                repo.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                        repo.stargazerCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_s(GitHubActivity, "fQZRxy/+nAZ7NLS1X4dVhrlp8Go=");
_c = GitHubActivity;
var _c;
__turbopack_context__.k.register(_c, "GitHubActivity");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/portfolio/src/components/sections/GitHubActivity.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/portfolio/src/components/sections/GitHubActivity.tsx [app-client] (ecmascript)"));
}),
]);

//# debugId=263342cf-a33f-0264-b8e4-0dda547f3aba
//# sourceMappingURL=portfolio_src_components_sections_GitHubActivity_tsx_0rg9jtb._.js.map