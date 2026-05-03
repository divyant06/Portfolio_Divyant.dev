(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push(["chunks/[root-of-the-server]__0tx6ps2._.js",
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[externals]/node:events [external] (node:events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:events", () => require("node:events"));

module.exports = mod;
}),
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[project]/portfolio/sentry.edge.config.ts [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
// This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// The config you add here will be used whenever one of the edge features is loaded.
// Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$edge$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/nextjs/build/esm/edge/index.js [instrumentation-edge] (ecmascript) <locals>");
;
__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$edge$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["init"]({
    dsn: "https://1e126446b46b1b313e8da483c690c9f0@o4511255004643328.ingest.us.sentry.io/4511255004774400",
    // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
    tracesSampleRate: 1,
    // Enable logs to be sent to Sentry
    enableLogs: true,
    // Enable sending user PII (Personally Identifiable Information)
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/options/#sendDefaultPii
    sendDefaultPii: true
});
}),
"[project]/portfolio/src/instrumentation.ts [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "onRequestError",
    ()=>onRequestError,
    "register",
    ()=>register
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$captureRequestError$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/nextjs/build/esm/common/captureRequestError.js [instrumentation-edge] (ecmascript)");
globalThis["__SENTRY_SERVER_MODULES__"] = {
    "@sentry/nextjs": "^10.49.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "framer-motion": "^12.38.0",
    "lenis": "^1.3.23",
    "lucide-react": "^1.8.0",
    "next": "16.2.4",
    "radix-ui": "^1.4.3",
    "react": "19.2.4",
    "react-dom": "19.2.4",
    "shadcn": "^4.3.1",
    "tailwind-merge": "^3.5.0",
    "tw-animate-css": "^1.4.0",
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.2.4",
    "tailwindcss": "^4",
    "typescript": "^5"
};
globalThis["_sentryNextJsVersion"] = "16.2.4";
globalThis["_sentryRewritesTunnelPath"] = "/monitoring";
;
async function register() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if ("TURBOPACK compile-time truthy", 1) {
        await Promise.resolve().then(()=>__turbopack_context__.i("[project]/portfolio/sentry.edge.config.ts [instrumentation-edge] (ecmascript)"));
    }
}
const onRequestError = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$captureRequestError$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["captureRequestError"];
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__0tx6ps2._.js.map