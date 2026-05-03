;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="5b708402-041f-5cf2-e7f8-71d272f90fb1")}catch(e){}}();
module.exports = [
"[project]/portfolio/sentry.server.config.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$cjs$2f$index$2e$server$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/nextjs/build/cjs/index.server.js [instrumentation] (ecmascript)");
;
__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$cjs$2f$index$2e$server$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["init"]({
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
];

//# debugId=5b708402-041f-5cf2-e7f8-71d272f90fb1
//# sourceMappingURL=portfolio_sentry_server_config_ts_01r-bae._.js.map