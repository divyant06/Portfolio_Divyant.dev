;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="14086201-eadf-bc27-3896-a515ef60cb44")}catch(e){}}();
(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/portfolio/src/components/sections/ProjectStartSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectStartSection",
    ()=>ProjectStartSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
/* Blueprint §1 — real Cal.com booking URL */ const CAL_URL = "https://cal.com/divyant06/30min";
const CHAT_INTRO = "👋 Hey there! Ready to help you shape your next digital project. Just share a few details with me and I'll guide you to a tailored proposal.";
const PROMPTS = [
    {
        key: "name",
        question: "What's your name?"
    },
    {
        key: "project",
        question: "What kind of project are you thinking about? (e.g. Web App, Mobile App, Brand Site)"
    },
    {
        key: "budget",
        question: "What's your rough budget range?"
    },
    {
        key: "timeline",
        question: "When do you need this live?"
    }
];
function ProjectStartSection() {
    _s();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            role: "bot",
            text: CHAT_INTRO
        },
        {
            role: "bot",
            text: PROMPTS[0].question
        }
    ]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [done, setDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectStartSection.useEffect": ()=>{
            if (scrollRef.current) {
                scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
            }
        }
    }["ProjectStartSection.useEffect"], [
        messages
    ]);
    const handleSend = ()=>{
        const trimmed = input.trim();
        if (!trimmed) return;
        const userMsg = {
            role: "user",
            text: trimmed
        };
        const nextStep = step + 1;
        const botMsgs = [];
        if (nextStep < PROMPTS.length) {
            botMsgs.push({
                role: "bot",
                text: PROMPTS[nextStep].question
            });
        } else {
            botMsgs.push({
                role: "bot",
                text: "Perfect — I have everything I need. Use the calendar on the right to book your free 30-min discovery call. I'll come prepared. 🚀"
            });
            setDone(true);
        }
        setMessages((prev)=>[
                ...prev,
                userMsg,
                ...botMsgs
            ]);
        setInput("");
        setStep(nextStep);
        inputRef.current?.focus();
    };
    const handleKey = (e)=>{
        if (e.key === "Enter") handleSend();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: "2rem",
            alignItems: "stretch",
            minHeight: "520px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: "#0d0d0d",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "8px",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "0.75rem 1.25rem",
                            borderBottom: "1px solid rgba(255,255,255,0.06)",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            background: "#111111"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    width: 10,
                                    height: 10,
                                    borderRadius: "50%",
                                    background: "#FF5F57",
                                    display: "block"
                                }
                            }, void 0, false, {
                                fileName: "[project]/portfolio/src/components/sections/ProjectStartSection.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    width: 10,
                                    height: 10,
                                    borderRadius: "50%",
                                    background: "#FEBC2E",
                                    display: "block"
                                }
                            }, void 0, false, {
                                fileName: "[project]/portfolio/src/components/sections/ProjectStartSection.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    width: 10,
                                    height: 10,
                                    borderRadius: "50%",
                                    background: "#28C840",
                                    display: "block"
                                }
                            }, void 0, false, {
                                fileName: "[project]/portfolio/src/components/sections/ProjectStartSection.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "var(--font-mono)",
                                    fontSize: "0.6rem",
                                    color: "rgba(255,255,255,0.2)",
                                    letterSpacing: "0.15em",
                                    marginLeft: "0.5rem"
                                },
                                children: "project-discovery — bash"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/src/components/sections/ProjectStartSection.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/portfolio/src/components/sections/ProjectStartSection.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: scrollRef,
                        style: {
                            flex: 1,
                            overflowY: "auto",
                            padding: "1.5rem",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                            scrollbarWidth: "none"
                        },
                        children: [
                            messages.map((msg, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: msg.role === "user" ? "flex-end" : "flex-start"
                                    },
                                    children: [
                                        msg.role === "bot" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: "var(--font-mono)",
                                                fontSize: "0.65rem",
                                                color: "#FF4500",
                                                marginRight: "0.5rem",
                                                marginTop: "0.2rem",
                                                flexShrink: 0
                                            },
                                            children: ">_"
                                        }, void 0, false, {
                                            fileName: "[project]/portfolio/src/components/sections/ProjectStartSection.tsx",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                maxWidth: "80%",
                                                padding: "0.65rem 1rem",
                                                borderRadius: msg.role === "user" ? "12px 12px 2px 12px" : "2px 12px 12px 12px",
                                                background: msg.role === "user" ? "#FF4500" : "rgba(255,255,255,0.04)",
                                                border: msg.role === "user" ? "none" : "1px solid rgba(255,255,255,0.06)",
                                                fontFamily: "var(--font-body)",
                                                fontSize: "0.85rem",
                                                lineHeight: 1.6,
                                                color: msg.role === "user" ? "#050505" : "rgba(243,244,246,0.85)",
                                                fontWeight: msg.role === "user" ? 600 : 400
                                            },
                                            children: msg.text
                                        }, void 0, false, {
                                            fileName: "[project]/portfolio/src/components/sections/ProjectStartSection.tsx",
                                            lineNumber: 151,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/portfolio/src/components/sections/ProjectStartSection.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this)),
                            !done && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: "var(--font-mono)",
                                            fontSize: "0.65rem",
                                            color: "#FF4500"
                                        },
                                        children: ">_"
                                    }, void 0, false, {
                                        fileName: "[project]/portfolio/src/components/sections/ProjectStartSection.tsx",
                                        lineNumber: 178,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            display: "inline-block",
                                            width: "6px",
                                            height: "14px",
                                            background: "#FF4500",
                                            animation: "termBlink 1s step-end infinite"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/portfolio/src/components/sections/ProjectStartSection.tsx",
                                        lineNumber: 179,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/portfolio/src/components/sections/ProjectStartSection.tsx",
                                lineNumber: 177,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/portfolio/src/components/sections/ProjectStartSection.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    !done && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "1rem 1.25rem",
                            borderTop: "1px solid rgba(255,255,255,0.06)",
                            display: "flex",
                            gap: "0.75rem",
                            alignItems: "center",
                            background: "#0d0d0d"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "var(--font-mono)",
                                    fontSize: "0.7rem",
                                    color: "#FF4500",
                                    flexShrink: 0
                                },
                                children: "$"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/src/components/sections/ProjectStartSection.tsx",
                                lineNumber: 204,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ref: inputRef,
                                autoFocus: true,
                                type: "text",
                                value: input,
                                onChange: (e)=>setInput(e.target.value),
                                onKeyDown: handleKey,
                                placeholder: "Type your answer…",
                                style: {
                                    flex: 1,
                                    background: "transparent",
                                    border: "none",
                                    outline: "none",
                                    fontFamily: "var(--font-body)",
                                    fontSize: "0.875rem",
                                    color: "#F3F4F6",
                                    caretColor: "#FF4500"
                                }
                            }, void 0, false, {
                                fileName: "[project]/portfolio/src/components/sections/ProjectStartSection.tsx",
                                lineNumber: 207,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSend,
                                style: {
                                    background: "#FF4500",
                                    border: "none",
                                    color: "#050505",
                                    fontFamily: "var(--font-mono)",
                                    fontSize: "0.6rem",
                                    letterSpacing: "0.12em",
                                    textTransform: "uppercase",
                                    padding: "0.45rem 0.85rem",
                                    borderRadius: "4px",
                                    cursor: "pointer",
                                    fontWeight: 700,
                                    flexShrink: 0,
                                    transition: "opacity 0.15s"
                                },
                                onMouseEnter: (e)=>e.currentTarget.style.opacity = "0.8",
                                onMouseLeave: (e)=>e.currentTarget.style.opacity = "1",
                                children: "Hit Enter ↵"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/src/components/sections/ProjectStartSection.tsx",
                                lineNumber: 226,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/portfolio/src/components/sections/ProjectStartSection.tsx",
                        lineNumber: 194,
                        columnNumber: 11
                    }, this),
                    done && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "1rem 1.25rem",
                            borderTop: "1px solid rgba(255,255,255,0.06)",
                            display: "flex",
                            justifyContent: "center"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontFamily: "var(--font-mono)",
                                fontSize: "0.65rem",
                                letterSpacing: "0.12em",
                                color: "#FF4500",
                                textTransform: "uppercase"
                            },
                            children: "✓ Details captured — book your slot →"
                        }, void 0, false, {
                            fileName: "[project]/portfolio/src/components/sections/ProjectStartSection.tsx",
                            lineNumber: 260,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/portfolio/src/components/sections/ProjectStartSection.tsx",
                        lineNumber: 252,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/portfolio/src/components/sections/ProjectStartSection.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxHeight: "600px",
                            overflow: "hidden",
                            borderRadius: "8px",
                            border: "1px solid #333333",
                            background: "#0a0a0a",
                            flex: 1
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                            src: `${CAL_URL}?theme=dark&layout=month_view`,
                            style: {
                                width: "100%",
                                height: "600px",
                                border: "none",
                                colorScheme: "dark"
                            },
                            title: "Book a 30-minute project discovery call",
                            loading: "lazy"
                        }, void 0, false, {
                            fileName: "[project]/portfolio/src/components/sections/ProjectStartSection.tsx",
                            lineNumber: 287,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/portfolio/src/components/sections/ProjectStartSection.tsx",
                        lineNumber: 277,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: CAL_URL,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: {
                            display: "block",
                            textAlign: "center",
                            padding: "0.75rem",
                            background: "rgba(255,69,0,0.08)",
                            border: "1px solid rgba(255,69,0,0.2)",
                            borderRadius: "4px",
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.62rem",
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            color: "#FF4500",
                            textDecoration: "none"
                        },
                        children: "📅 Open booking directly — cal.com/divyant06/30min ↗"
                    }, void 0, false, {
                        fileName: "[project]/portfolio/src/components/sections/ProjectStartSection.tsx",
                        lineNumber: 295,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/portfolio/src/components/sections/ProjectStartSection.tsx",
                lineNumber: 276,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes termBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/portfolio/src/components/sections/ProjectStartSection.tsx",
                lineNumber: 312,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/portfolio/src/components/sections/ProjectStartSection.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_s(ProjectStartSection, "GzQPTNVpk/nb+hK595/2+VZ6SkY=");
_c = ProjectStartSection;
var _c;
__turbopack_context__.k.register(_c, "ProjectStartSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/portfolio/src/components/sections/ProjectStartSection.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/portfolio/src/components/sections/ProjectStartSection.tsx [app-client] (ecmascript)"));
}),
]);

//# debugId=14086201-eadf-bc27-3896-a515ef60cb44
//# sourceMappingURL=portfolio_src_components_sections_ProjectStartSection_tsx_0d5dvxu._.js.map