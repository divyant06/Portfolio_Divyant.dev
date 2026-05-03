;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="8f8b8567-eb09-fed1-df7b-c947e90b7502")}catch(e){}}();
(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/portfolio/src/instrumentation-client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This file configures the initialization of Sentry on the client.
// The added config here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/
__turbopack_context__.s([
    "onRouterTransitionStart",
    ()=>onRouterTransitionStart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/nextjs/build/esm/client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$client$2f$routing$2f$appRouterRoutingInstrumentation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/nextjs/build/esm/client/routing/appRouterRoutingInstrumentation.js [app-client] (ecmascript)");
globalThis["_sentryRouteManifest"] = "{\"dynamicRoutes\":[],\"staticRoutes\":[{\"path\":\"/\"}],\"isrRoutes\":[]}";
globalThis["_sentryNextJsVersion"] = "16.2.4";
globalThis["_sentryRewritesTunnelPath"] = "/monitoring";
;
__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["init"]({
    dsn: "https://1e126446b46b1b313e8da483c690c9f0@o4511255004643328.ingest.us.sentry.io/4511255004774400",
    // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
    tracesSampleRate: 1,
    // Enable logs to be sent to Sentry
    enableLogs: true,
    // Enable sending user PII (Personally Identifiable Information)
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/options/#sendDefaultPii
    sendDefaultPii: true
});
const onRouterTransitionStart = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$client$2f$routing$2f$appRouterRoutingInstrumentation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureRouterTransitionStart"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# debugId=8f8b8567-eb09-fed1-df7b-c947e90b7502
//# sourceMappingURL=portfolio_src_instrumentation-client_ts_0ps3hp8._.js.map