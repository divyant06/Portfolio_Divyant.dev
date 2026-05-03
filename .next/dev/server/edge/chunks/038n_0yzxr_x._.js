(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push(["chunks/038n_0yzxr_x._.js",
"[project]/portfolio/node_modules/@sentry/nextjs/build/esm/common/debug-build.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEBUG_BUILD",
    ()=>DEBUG_BUILD
]);
/**
 * This serves as a build time flag that will be true by default, but false in non-debug builds or if users replace `__SENTRY_DEBUG__` in their generated code.
 *
 * ATTENTION: This constant must never cross package boundaries (i.e. be exported) to guarantee that it can be used for tree shaking.
 */ const DEBUG_BUILD = typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__;
;
}),
"[project]/portfolio/node_modules/@sentry/nextjs/build/esm/common/utils/responseEnd.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cloudflareWaitUntil",
    ()=>cloudflareWaitUntil,
    "flushSafelyWithTimeout",
    ()=>flushSafelyWithTimeout,
    "isCloudflareWaitUntilAvailable",
    ()=>isCloudflareWaitUntilAvailable,
    "waitUntil",
    ()=>waitUntil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$vercelWaitUntil$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/utils/vercelWaitUntil.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/utils/debug-logger.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$exports$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/exports.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$worldwide$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/utils/worldwide.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$debug$2d$build$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/nextjs/build/esm/common/debug-build.js [instrumentation-edge] (ecmascript)");
;
;
/**
 * Flushes pending Sentry events with a 2 second timeout and in a way that cannot create unhandled promise rejections.
 */ async function flushSafelyWithTimeout() {
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$debug$2d$build$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["debug"].log('Flushing events...');
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$exports$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["flush"])(2000);
        __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$debug$2d$build$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["debug"].log('Done flushing events');
    } catch (e) {
        __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$debug$2d$build$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["debug"].log('Error while flushing events:\n', e);
    }
}
/**
 * Uses platform-specific waitUntil function to wait for the provided task to complete without blocking.
 */ function waitUntil(task) {
    // If deployed on Cloudflare, use the Cloudflare waitUntil function to flush the events
    if (isCloudflareWaitUntilAvailable()) {
        cloudflareWaitUntil(task);
        return;
    }
    // otherwise, use vercel's
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$vercelWaitUntil$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["vercelWaitUntil"])(task);
}
/**
 * Gets the Cloudflare context from the global object.
 * Relevant to opennext
 * https://github.com/opennextjs/opennextjs-cloudflare/blob/b53a046bd5c30e94a42e36b67747cefbf7785f9a/packages/cloudflare/src/cli/templates/init.ts#L17
 */ function _getOpenNextCloudflareContext() {
    const openNextCloudflareContextSymbol = Symbol.for('__cloudflare-context__');
    return __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$worldwide$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"][openNextCloudflareContextSymbol]?.ctx;
}
/**
 * Function that delays closing of a Cloudflare lambda until the provided promise is resolved.
 */ function cloudflareWaitUntil(task) {
    _getOpenNextCloudflareContext()?.waitUntil(task);
}
/**
 * Checks if the Cloudflare waitUntil function is available globally.
 */ function isCloudflareWaitUntilAvailable() {
    return typeof _getOpenNextCloudflareContext()?.waitUntil === 'function';
}
;
}),
"[project]/portfolio/node_modules/@sentry/nextjs/build/esm/common/captureRequestError.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "captureRequestError",
    ()=>captureRequestError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/currentScopes.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$request$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/utils/request.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$exports$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/exports.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$utils$2f$responseEnd$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/nextjs/build/esm/common/utils/responseEnd.js [instrumentation-edge] (ecmascript)");
;
;
/**
 * Reports errors passed to the the Next.js `onRequestError` instrumentation hook.
 */ function captureRequestError(error, request, errorContext) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["withScope"])((scope)=>{
        scope.setSDKProcessingMetadata({
            normalizedRequest: {
                headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$request$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["headersToDict"])(request.headers),
                method: request.method
            }
        });
        scope.setContext('nextjs', {
            request_path: request.path,
            router_kind: errorContext.routerKind,
            router_path: errorContext.routePath,
            route_type: errorContext.routeType
        });
        scope.setTransactionName(`${request.method} ${errorContext.routePath}`);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$exports$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["captureException"])(error, {
            mechanism: {
                handled: false,
                type: 'auto.function.nextjs.on_request_error'
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$utils$2f$responseEnd$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["waitUntil"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$utils$2f$responseEnd$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["flushSafelyWithTimeout"])());
    });
}
;
}),
"[project]/portfolio/node_modules/@sentry/nextjs/build/esm/common/nextSpanAttributes.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ATTR_NEXT_ROUTE",
    ()=>ATTR_NEXT_ROUTE,
    "ATTR_NEXT_SEGMENT",
    ()=>ATTR_NEXT_SEGMENT,
    "ATTR_NEXT_SPAN_NAME",
    ()=>ATTR_NEXT_SPAN_NAME,
    "ATTR_NEXT_SPAN_TYPE",
    ()=>ATTR_NEXT_SPAN_TYPE
]);
const ATTR_NEXT_SPAN_TYPE = 'next.span_type';
const ATTR_NEXT_SPAN_NAME = 'next.span_name';
const ATTR_NEXT_ROUTE = 'next.route';
const ATTR_NEXT_SEGMENT = 'next.segment';
;
}),
"[project]/portfolio/node_modules/@sentry/nextjs/build/esm/common/span-attributes-with-logic-attached.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TRANSACTION_ATTR_SENTRY_ROUTE_BACKFILL",
    ()=>TRANSACTION_ATTR_SENTRY_ROUTE_BACKFILL,
    "TRANSACTION_ATTR_SENTRY_TRACE_BACKFILL",
    ()=>TRANSACTION_ATTR_SENTRY_TRACE_BACKFILL,
    "TRANSACTION_ATTR_SHOULD_DROP_TRANSACTION",
    ()=>TRANSACTION_ATTR_SHOULD_DROP_TRANSACTION
]);
/**
 * If this attribute is attached to a transaction, the Next.js SDK will drop that transaction.
 */ const TRANSACTION_ATTR_SHOULD_DROP_TRANSACTION = 'sentry.drop_transaction';
const TRANSACTION_ATTR_SENTRY_TRACE_BACKFILL = 'sentry.sentry_trace_backfill';
const TRANSACTION_ATTR_SENTRY_ROUTE_BACKFILL = 'sentry.route_backfill';
;
}),
"[project]/portfolio/node_modules/@sentry/nextjs/build/esm/common/utils/addHeadersAsAttributes.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addHeadersAsAttributes",
    ()=>addHeadersAsAttributes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$request$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/utils/request.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/currentScopes.js [instrumentation-edge] (ecmascript)");
;
/**
 * Extracts HTTP request headers as span attributes and optionally applies them to a span.
 */ function addHeadersAsAttributes(headers, span) {
    if (!headers) {
        return {};
    }
    const headersDict = headers instanceof Headers || typeof headers === 'object' && 'get' in headers ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$request$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["winterCGHeadersToDict"])(headers) : headers;
    const headerAttributes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$request$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["httpHeadersToSpanAttributes"])(headersDict, (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["getClient"])()?.getOptions().sendDefaultPii ?? false);
    if (span) {
        span.setAttributes(headerAttributes);
    }
    return headerAttributes;
}
;
}),
"[project]/portfolio/node_modules/@sentry/nextjs/build/esm/common/utils/dropMiddlewareTunnelRequests.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dropMiddlewareTunnelRequests",
    ()=>dropMiddlewareTunnelRequests
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$trace$2f$SemanticAttributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/semantic-conventions/build/esm/trace/SemanticAttributes.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/currentScopes.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/semanticAttributes.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$worldwide$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/utils/worldwide.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$opentelemetry$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/opentelemetry/build/esm/index.js [instrumentation-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$nextSpanAttributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/nextjs/build/esm/common/nextSpanAttributes.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$span$2d$attributes$2d$with$2d$logic$2d$attached$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/nextjs/build/esm/common/span-attributes-with-logic-attached.js [instrumentation-edge] (ecmascript)");
;
;
;
;
;
const globalWithInjectedValues = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$worldwide$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"];
/**
 * Drops spans for tunnel requests from middleware, fetch instrumentation, or BaseServer.handleRequest.
 * This catches:
 * 1. Requests to the local tunnel route (before rewrite) via middleware or BaseServer.handleRequest
 * 2. Requests to Sentry ingest (after rewrite) via fetch spans
 */ function dropMiddlewareTunnelRequests(span, attrs) {
    // When the user brings their own OTel setup (skipOpenTelemetrySetup: true), we should not
    // mutate their spans with Sentry-internal attributes as it pollutes their tracing backends.
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["getClient"])()?.getOptions()?.skipOpenTelemetrySetup) {
        return;
    }
    // Only filter middleware spans, HTTP fetch spans, or BaseServer.handleRequest spans
    const isMiddleware = attrs?.[__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$nextSpanAttributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["ATTR_NEXT_SPAN_TYPE"]] === 'Middleware.execute';
    // The fetch span could be originating from rewrites re-writing a tunnel request
    // So we want to filter it out
    const isFetchSpan = attrs?.[__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN"]] === 'auto.http.otel.node_fetch';
    const isBaseServerHandleRequest = attrs?.[__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$nextSpanAttributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["ATTR_NEXT_SPAN_TYPE"]] === 'BaseServer.handleRequest';
    // If the span is not a middleware span, fetch span, or BaseServer.handleRequest span, return
    if (!isMiddleware && !isFetchSpan && !isBaseServerHandleRequest) {
        return;
    }
    // Check if this is either a tunnel route request or a Sentry ingest request
    const isTunnel = isTunnelRouteSpan(attrs || {});
    const isSentry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$opentelemetry$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isSentryRequestSpan"])(span);
    if (isTunnel || isSentry) {
        // Mark the span to be dropped
        span.setAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$span$2d$attributes$2d$with$2d$logic$2d$attached$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["TRANSACTION_ATTR_SHOULD_DROP_TRANSACTION"], true);
    }
}
/**
 * Checks if a span's HTTP target matches the tunnel route.
 */ function isTunnelRouteSpan(spanAttributes) {
    const tunnelPath = globalWithInjectedValues._sentryRewritesTunnelPath || ("TURBOPACK compile-time value", "/monitoring");
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // eslint-disable-next-line deprecation/deprecation
    const httpTarget = spanAttributes[__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$trace$2f$SemanticAttributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["SEMATTRS_HTTP_TARGET"]];
    if (typeof httpTarget === 'string') {
        // Extract pathname from the target (e.g., "/tunnel?o=123&p=456" -> "/tunnel")
        const pathname = httpTarget.split('?')[0] || '';
        return pathname === tunnelPath || pathname.startsWith(`${tunnelPath}/`);
    }
    return false;
}
;
}),
"[project]/portfolio/node_modules/@sentry/nextjs/build/esm/common/utils/isBuild.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isBuild",
    ()=>isBuild
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/constants.js [instrumentation-edge] (ecmascript)");
;
/**
 * Decide if the currently running process is part of the build phase or happening at runtime.
 */ function isBuild() {
    return process.env.NEXT_PHASE === __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["PHASE_PRODUCTION_BUILD"];
}
;
}),
"[project]/portfolio/node_modules/@sentry/nextjs/build/esm/common/utils/urls.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildUrlFromComponentRoute",
    ()=>buildUrlFromComponentRoute,
    "extractSanitizedUrlFromRefererHeader",
    ()=>extractSanitizedUrlFromRefererHeader,
    "getSanitizedRequestUrl",
    ()=>getSanitizedRequestUrl,
    "sanitizeRoutePath",
    ()=>sanitizeRoutePath,
    "substituteRouteParams",
    ()=>substituteRouteParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$url$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/utils/url.js [instrumentation-edge] (ecmascript)");
;
const HeaderKeys = {
    FORWARDED_PROTO: 'x-forwarded-proto',
    FORWARDED_HOST: 'x-forwarded-host',
    HOST: 'host',
    REFERER: 'referer'
};
/**
 * Replaces route parameters in a path template with their values
 * @param path - The path template containing parameters in [paramName] format
 * @param params - Optional route parameters to replace in the template
 * @returns The path with parameters replaced
 */ function substituteRouteParams(path, params) {
    return path;
}
/**
 * Normalizes a path by removing route groups
 * @param path - The path to normalize
 * @returns The normalized path
 */ function sanitizeRoutePath(path) {
    const cleanedSegments = path.split('/').filter((segment)=>segment && !(segment.startsWith('(') && segment.endsWith(')')));
    return cleanedSegments.length > 0 ? `/${cleanedSegments.join('/')}` : '/';
}
/**
 * Constructs a full URL from the component route, parameters, and headers.
 *
 * @param componentRoute - The route template to construct the URL from
 * @param params - Optional route parameters to replace in the template
 * @param headersDict - Optional headers containing protocol and host information
 * @param pathname - Optional pathname coming from parent span "http.target"
 * @returns A sanitized URL string
 */ function buildUrlFromComponentRoute(componentRoute, params, headersDict, pathname) {
    const parameterizedPath = substituteRouteParams(componentRoute);
    // If available, the pathname from the http.target of the HTTP request server span takes precedence over the parameterized path.
    // Spans such as generateMetadata and Server Component rendering are typically direct children of that span.
    const path = pathname ?? sanitizeRoutePath(parameterizedPath);
    const protocol = headersDict?.[HeaderKeys.FORWARDED_PROTO];
    const host = headersDict?.[HeaderKeys.FORWARDED_HOST] || headersDict?.[HeaderKeys.HOST];
    if (!protocol || !host) {
        return path;
    }
    const fullUrl = `${protocol}://${host}${path}`;
    const urlObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$url$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["parseStringToURLObject"])(fullUrl);
    if (!urlObject) {
        return path;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$url$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["getSanitizedUrlStringFromUrlObject"])(urlObject);
}
/**
 * Returns a sanitized URL string from the referer header if it exists and is valid.
 *
 * @param headersDict - Optional headers containing the referer
 * @returns A sanitized URL string or undefined if referer is missing/invalid
 */ function extractSanitizedUrlFromRefererHeader(headersDict) {
    const referer = headersDict?.[HeaderKeys.REFERER];
    if (!referer) {
        return undefined;
    }
    try {
        const refererUrl = new URL(referer);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$url$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["getSanitizedUrlStringFromUrlObject"])(refererUrl);
    } catch  {
        return undefined;
    }
}
/**
 * Returns a sanitized URL string using the referer header if available,
 * otherwise constructs the URL from the component route, params, and headers.
 *
 * @param componentRoute - The route template to construct the URL from
 * @param params - Optional route parameters to replace in the template
 * @param headersDict - Optional headers containing protocol, host, and referer
 * @param pathname - Optional pathname coming from root span "http.target"
 * @returns A sanitized URL string
 */ function getSanitizedRequestUrl(componentRoute, params, headersDict, pathname) {
    const refererUrl = extractSanitizedUrlFromRefererHeader(headersDict);
    if (refererUrl) {
        return refererUrl;
    }
    return buildUrlFromComponentRoute(componentRoute, params, headersDict, pathname);
}
;
}),
"[project]/portfolio/node_modules/@sentry/nextjs/build/esm/common/utils/setUrlProcessingMetadata.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setUrlProcessingMetadata",
    ()=>setUrlProcessingMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/currentScopes.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$utils$2f$urls$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/nextjs/build/esm/common/utils/urls.js [instrumentation-edge] (ecmascript)");
;
;
/**
 * Sets the URL processing metadata for the event.
 */ function setUrlProcessingMetadata(event) {
    // Skip if not a server-side transaction
    if (event.type !== 'transaction' || event.contexts?.trace?.op !== 'http.server' || !event.contexts?.trace?.data) {
        return;
    }
    // Only add URL if sendDefaultPii is enabled, as URLs may contain PII
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["getClient"])();
    if (!client?.getOptions().sendDefaultPii) {
        return;
    }
    const traceData = event.contexts.trace.data;
    // Get the route from trace data
    const componentRoute = traceData['next.route'] || traceData['http.route'];
    const httpTarget = traceData['http.target'];
    if (!componentRoute) {
        return;
    }
    // Extract headers
    const isolationScopeData = event.sdkProcessingMetadata?.capturedSpanIsolationScope?.getScopeData();
    const headersDict = isolationScopeData?.sdkProcessingMetadata?.normalizedRequest?.headers;
    const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$utils$2f$urls$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["getSanitizedRequestUrl"])(componentRoute, undefined, headersDict, httpTarget?.toString());
    // Add URL to the isolation scope's normalizedRequest so requestDataIntegration picks it up
    if (url && isolationScopeData?.sdkProcessingMetadata) {
        isolationScopeData.sdkProcessingMetadata.normalizedRequest = isolationScopeData.sdkProcessingMetadata.normalizedRequest || {};
        isolationScopeData.sdkProcessingMetadata.normalizedRequest.url = url;
    }
}
;
}),
"[project]/portfolio/node_modules/@sentry/nextjs/build/esm/edge/distDirRewriteFramesIntegration.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "distDirRewriteFramesIntegration",
    ()=>distDirRewriteFramesIntegration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/integration.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$vendor$2f$escapeStringForRegex$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/vendor/escapeStringForRegex.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integrations$2f$rewriteframes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/integrations/rewriteframes.js [instrumentation-edge] (ecmascript)");
;
const distDirRewriteFramesIntegration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["defineIntegration"])(({ distDirName })=>{
    const distDirAbsPath = distDirName.replace(/(\/|\\)$/, ''); // We strip trailing slashes because "app:///_next" also doesn't have one
    // Normally we would use `path.resolve` to obtain the absolute path we will strip from the stack frame to align with
    // the uploaded artifacts, however we don't have access to that API in edge so we need to be a bit more lax.
    // oxlint-disable-next-line sdk/no-regexp-constructor -- user input is escaped
    const SOURCEMAP_FILENAME_REGEX = new RegExp(`.*${(0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$vendor$2f$escapeStringForRegex$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["escapeStringForRegex"])(distDirAbsPath)}`);
    const rewriteFramesIntegrationInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integrations$2f$rewriteframes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["rewriteFramesIntegration"])({
        iteratee: (frame)=>{
            frame.filename = frame.filename?.replace(SOURCEMAP_FILENAME_REGEX, 'app:///_next');
            return frame;
        }
    });
    return {
        ...rewriteFramesIntegrationInstance,
        name: 'DistDirRewriteFrames'
    };
});
;
}),
"[project]/portfolio/node_modules/@sentry/nextjs/build/esm/edge/index.js [instrumentation-edge] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "init",
    ()=>init,
    "withSentryConfig",
    ()=>withSentryConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2d$api$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/context-api.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$errors$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/tracing/errors.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$worldwide$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/utils/worldwide.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$sdkMetadata$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/utils/sdkMetadata.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/utils/spanUtils.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/semanticAttributes.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/tracing/utils.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/currentScopes.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$url$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/utils/url.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$opentelemetry$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/opentelemetry/build/esm/index.js [instrumentation-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$vercel$2d$edge$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/vercel-edge/build/esm/index.js [instrumentation-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$debug$2d$build$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/nextjs/build/esm/common/debug-build.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$nextSpanAttributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/nextjs/build/esm/common/nextSpanAttributes.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$span$2d$attributes$2d$with$2d$logic$2d$attached$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/nextjs/build/esm/common/span-attributes-with-logic-attached.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$utils$2f$addHeadersAsAttributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/nextjs/build/esm/common/utils/addHeadersAsAttributes.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$utils$2f$dropMiddlewareTunnelRequests$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/nextjs/build/esm/common/utils/dropMiddlewareTunnelRequests.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$utils$2f$isBuild$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/nextjs/build/esm/common/utils/isBuild.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$utils$2f$responseEnd$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/nextjs/build/esm/common/utils/responseEnd.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$utils$2f$setUrlProcessingMetadata$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/nextjs/build/esm/common/utils/setUrlProcessingMetadata.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$edge$2f$distDirRewriteFramesIntegration$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/nextjs/build/esm/edge/distDirRewriteFramesIntegration.js [instrumentation-edge] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// import/export got a false positive, and affects most of our index barrel files
// can be removed once following issue is fixed: https://github.com/import-js/eslint-plugin-import/issues/703
/* eslint-disable import/export */ const globalWithInjectedValues = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$worldwide$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"];
/** Inits the Sentry NextJS SDK on the Edge Runtime. */ function init(options = {}) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$errors$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["registerSpanErrorInstrumentation"])();
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$utils$2f$isBuild$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["isBuild"])()) {
        return;
    }
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$debug$2d$build$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && options.debug) {
        // eslint-disable-next-line no-console
        console.warn('[@sentry/nextjs] You have enabled `debug: true`, but Sentry debug logging was removed from your bundle (likely via `withSentryConfig({ disableLogger: true })` / `webpack.treeshake.removeDebugLogging: true`). Set that option to `false` to see Sentry debug output.');
    }
    const customDefaultIntegrations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$vercel$2d$edge$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDefaultIntegrations"])(options);
    // This value is injected at build time, based on the output directory specified in the build config. Though a default
    // is set there, we set it here as well, just in case something has gone wrong with the injection.
    const distDirName = ("TURBOPACK compile-time value", ".next") || globalWithInjectedValues._sentryRewriteFramesDistDir;
    if ("TURBOPACK compile-time truthy", 1) {
        customDefaultIntegrations.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$edge$2f$distDirRewriteFramesIntegration$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["distDirRewriteFramesIntegration"])({
            distDirName
        }));
    }
    // Detect if running on OpenNext/Cloudflare
    const isRunningOnCloudflare = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$utils$2f$responseEnd$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["isCloudflareWaitUntilAvailable"])();
    const opts = {
        defaultIntegrations: customDefaultIntegrations,
        environment: options.environment || process.env.SENTRY_ENVIRONMENT,
        release: process.env._sentryRelease || globalWithInjectedValues._sentryRelease,
        ...options,
        // Override runtime to 'cloudflare' when running on OpenNext/Cloudflare
        ...isRunningOnCloudflare && {
            runtime: {
                name: 'cloudflare'
            }
        }
    };
    // Use appropriate SDK metadata based on the runtime environment
    if (isRunningOnCloudflare) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$sdkMetadata$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["applySdkMetadata"])(opts, 'nextjs', [
            'nextjs',
            'cloudflare'
        ]);
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$sdkMetadata$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["applySdkMetadata"])(opts, 'nextjs', [
            'nextjs',
            'vercel-edge'
        ]);
    }
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$vercel$2d$edge$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["init"])(opts);
    client?.on('spanStart', (span)=>{
        const spanAttributes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["spanToJSON"])(span).data;
        const rootSpan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["getRootSpan"])(span);
        const isRootSpan = span === rootSpan;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$utils$2f$dropMiddlewareTunnelRequests$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["dropMiddlewareTunnelRequests"])(span, spanAttributes);
        // Mark all spans generated by Next.js as 'auto'
        if (spanAttributes?.['next.span_type'] !== undefined) {
            span.setAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN"], 'auto');
        }
        // Make sure middleware spans get the right op
        if (spanAttributes?.['next.span_type'] === 'Middleware.execute') {
            span.setAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_OP"], 'http.server.middleware');
            span.setAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_SOURCE"], 'url');
        }
        // We want to fork the isolation scope for incoming requests
        if (spanAttributes?.[__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$nextSpanAttributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["ATTR_NEXT_SPAN_TYPE"]] === 'BaseServer.handleRequest' && isRootSpan) {
            const scopes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["getCapturedScopesOnSpan"])(span);
            const isolationScope = (scopes.isolationScope || (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["getIsolationScope"])()).clone();
            const scope = scopes.scope || (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["getCurrentScope"])();
            const currentScopesPointer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$opentelemetry$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getScopesFromContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2d$api$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["context"].active());
            if (currentScopesPointer) {
                currentScopesPointer.isolationScope = isolationScope;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["setCapturedScopesOnSpan"])(span, scope, isolationScope);
        }
        if (isRootSpan) {
            // todo: check if we can set request headers for edge on sdkProcessingMetadata
            const headers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["getIsolationScope"])().getScopeData().sdkProcessingMetadata?.normalizedRequest?.headers;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$utils$2f$addHeadersAsAttributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["addHeadersAsAttributes"])(headers, rootSpan);
        }
    });
    // Use the preprocessEvent hook instead of an event processor, so that the users event processors receive the most
    // up-to-date value, but also so that the logic that detects changes to the transaction names to set the source to
    // "custom", doesn't trigger.
    client?.on('preprocessEvent', (event)=>{
        // The otel auto inference will clobber the transaction name because the span has an http.target
        if (event.type === 'transaction' && event.contexts?.trace?.data?.['next.span_type'] === 'Middleware.execute' && event.contexts?.trace?.data?.['next.span_name']) {
            if (event.transaction) {
                // Older nextjs versions pass the full url appended to the middleware name, which results in high cardinality transaction names.
                // We want to remove the url from the name here.
                const spanName = event.contexts.trace.data['next.span_name'];
                if (typeof spanName === 'string') {
                    const match = spanName.match(/^middleware (GET|POST|PUT|DELETE|PATCH|HEAD|OPTIONS)/);
                    if (match) {
                        const normalizedName = `middleware ${match[1]}`;
                        event.transaction = normalizedName;
                    } else {
                        event.transaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$url$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["stripUrlQueryAndFragment"])(event.contexts.trace.data['next.span_name']);
                    }
                }
            }
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$utils$2f$setUrlProcessingMetadata$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["setUrlProcessingMetadata"])(event);
    });
    client?.on('spanEnd', (span)=>{
        if (span === (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["getRootSpan"])(span)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$utils$2f$responseEnd$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["waitUntil"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$utils$2f$responseEnd$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["flushSafelyWithTimeout"])());
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["getGlobalScope"])().addEventProcessor(Object.assign((event)=>{
        // Filter transactions that we explicitly want to drop.
        if (event.type === 'transaction') {
            if (event.contexts?.trace?.data?.[__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$common$2f$span$2d$attributes$2d$with$2d$logic$2d$attached$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["TRANSACTION_ATTR_SHOULD_DROP_TRANSACTION"]]) {
                return null;
            }
            return event;
        } else {
            return event;
        }
    }, {
        id: 'NextLowQualityTransactionsFilter'
    }));
    try {
        // @ts-expect-error `process.turbopack` is a magic string that will be replaced by Next.js
        if ("TURBOPACK compile-time truthy", 1) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["getGlobalScope"])().setTag('turbopack', true);
        }
    } catch  {
    // Noop
    // The statement above can throw because process is not defined on the client
    }
}
/**
 * Just a passthrough in case this is imported from the client.
 */ function withSentryConfig(exportedUserNextConfig) {
    return exportedUserNextConfig;
}
;
}),
"[project]/portfolio/node_modules/@opentelemetry/api/build/esm/context/context.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * Get a key to uniquely identify a context value
 *
 * @since 1.0.0
 */ __turbopack_context__.s([
    "ROOT_CONTEXT",
    ()=>ROOT_CONTEXT,
    "createContextKey",
    ()=>createContextKey
]);
function createContextKey(description) {
    // The specification states that for the same input, multiple calls should
    // return different keys. Due to the nature of the JS dependency management
    // system, this creates problems where multiple versions of some package
    // could hold different keys for the same property.
    //
    // Therefore, we use Symbol.for which returns the same key for the same input.
    return Symbol.for(description);
}
class BaseContext {
    /**
     * Construct a new context which inherits values from an optional parent context.
     *
     * @param parentContext a context from which to inherit values
     */ constructor(parentContext){
        // for minification
        const self = this;
        self._currentContext = parentContext ? new Map(parentContext) : new Map();
        self.getValue = (key)=>self._currentContext.get(key);
        self.setValue = (key, value)=>{
            const context = new BaseContext(self._currentContext);
            context._currentContext.set(key, value);
            return context;
        };
        self.deleteValue = (key)=>{
            const context = new BaseContext(self._currentContext);
            context._currentContext.delete(key);
            return context;
        };
    }
}
const ROOT_CONTEXT = new BaseContext();
}),
"[project]/portfolio/node_modules/@opentelemetry/api/build/esm/context/NoopContextManager.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NoopContextManager",
    ()=>NoopContextManager
]);
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2f$context$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/context/context.js [instrumentation-edge] (ecmascript)");
;
class NoopContextManager {
    active() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2f$context$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["ROOT_CONTEXT"];
    }
    with(_context, fn, thisArg, ...args) {
        return fn.call(thisArg, ...args);
    }
    bind(_context, target) {
        return target;
    }
    enable() {
        return this;
    }
    disable() {
        return this;
    }
}
}),
"[project]/portfolio/node_modules/@opentelemetry/api/build/esm/version.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ // this is autogenerated file, see scripts/version-update.js
__turbopack_context__.s([
    "VERSION",
    ()=>VERSION
]);
const VERSION = '1.9.1';
}),
"[project]/portfolio/node_modules/@opentelemetry/api/build/esm/internal/semver.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_makeCompatibilityCheck",
    ()=>_makeCompatibilityCheck,
    "isCompatible",
    ()=>isCompatible
]);
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$version$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/version.js [instrumentation-edge] (ecmascript)");
;
const re = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
function _makeCompatibilityCheck(ownVersion) {
    const acceptedVersions = new Set([
        ownVersion
    ]);
    const rejectedVersions = new Set();
    const myVersionMatch = ownVersion.match(re);
    if (!myVersionMatch) {
        // we cannot guarantee compatibility so we always return noop
        return ()=>false;
    }
    const ownVersionParsed = {
        major: +myVersionMatch[1],
        minor: +myVersionMatch[2],
        patch: +myVersionMatch[3],
        prerelease: myVersionMatch[4]
    };
    // if ownVersion has a prerelease tag, versions must match exactly
    if (ownVersionParsed.prerelease != null) {
        return function isExactmatch(globalVersion) {
            return globalVersion === ownVersion;
        };
    }
    function _reject(v) {
        rejectedVersions.add(v);
        return false;
    }
    function _accept(v) {
        acceptedVersions.add(v);
        return true;
    }
    return function isCompatible(globalVersion) {
        if (acceptedVersions.has(globalVersion)) {
            return true;
        }
        if (rejectedVersions.has(globalVersion)) {
            return false;
        }
        const globalVersionMatch = globalVersion.match(re);
        if (!globalVersionMatch) {
            // cannot parse other version
            // we cannot guarantee compatibility so we always noop
            return _reject(globalVersion);
        }
        const globalVersionParsed = {
            major: +globalVersionMatch[1],
            minor: +globalVersionMatch[2],
            patch: +globalVersionMatch[3],
            prerelease: globalVersionMatch[4]
        };
        // if globalVersion has a prerelease tag, versions must match exactly
        if (globalVersionParsed.prerelease != null) {
            return _reject(globalVersion);
        }
        // major versions must match
        if (ownVersionParsed.major !== globalVersionParsed.major) {
            return _reject(globalVersion);
        }
        if (ownVersionParsed.major === 0) {
            if (ownVersionParsed.minor === globalVersionParsed.minor && ownVersionParsed.patch <= globalVersionParsed.patch) {
                return _accept(globalVersion);
            }
            return _reject(globalVersion);
        }
        if (ownVersionParsed.minor <= globalVersionParsed.minor) {
            return _accept(globalVersion);
        }
        return _reject(globalVersion);
    };
}
const isCompatible = _makeCompatibilityCheck(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$version$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["VERSION"]);
}),
"[project]/portfolio/node_modules/@opentelemetry/api/build/esm/internal/global-utils.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getGlobal",
    ()=>getGlobal,
    "registerGlobal",
    ()=>registerGlobal,
    "unregisterGlobal",
    ()=>unregisterGlobal
]);
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$version$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/version.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$semver$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/internal/semver.js [instrumentation-edge] (ecmascript)");
;
;
const major = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$version$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["VERSION"].split('.')[0];
const GLOBAL_OPENTELEMETRY_API_KEY = Symbol.for(`opentelemetry.js.api.${major}`);
const _global = typeof globalThis === 'object' ? globalThis : typeof self === 'object' ? self : ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ("TURBOPACK compile-time truthy", 1) ? /*TURBOPACK member replacement*/ __turbopack_context__.g : "TURBOPACK unreachable";
function registerGlobal(type, instance, diag, allowOverride = false) {
    var _a;
    const api = _global[GLOBAL_OPENTELEMETRY_API_KEY] = (_a = _global[GLOBAL_OPENTELEMETRY_API_KEY]) !== null && _a !== void 0 ? _a : {
        version: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$version$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["VERSION"]
    };
    if (!allowOverride && api[type]) {
        // already registered an API of this type
        const err = new Error(`@opentelemetry/api: Attempted duplicate registration of API: ${type}`);
        diag.error(err.stack || err.message);
        return false;
    }
    if (api.version !== __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$version$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["VERSION"]) {
        // All registered APIs must be of the same version exactly
        const err = new Error(`@opentelemetry/api: Registration of version v${api.version} for ${type} does not match previously registered API v${__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$version$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["VERSION"]}`);
        diag.error(err.stack || err.message);
        return false;
    }
    api[type] = instance;
    diag.debug(`@opentelemetry/api: Registered a global for ${type} v${__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$version$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["VERSION"]}.`);
    return true;
}
function getGlobal(type) {
    var _a, _b;
    const globalVersion = (_a = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _a === void 0 ? void 0 : _a.version;
    if (!globalVersion || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$semver$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["isCompatible"])(globalVersion)) {
        return;
    }
    return (_b = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _b === void 0 ? void 0 : _b[type];
}
function unregisterGlobal(type, diag) {
    diag.debug(`@opentelemetry/api: Unregistering a global for ${type} v${__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$version$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["VERSION"]}.`);
    const api = _global[GLOBAL_OPENTELEMETRY_API_KEY];
    if (api) {
        delete api[type];
    }
}
}),
"[project]/portfolio/node_modules/@opentelemetry/api/build/esm/diag/ComponentLogger.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DiagComponentLogger",
    ()=>DiagComponentLogger
]);
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/internal/global-utils.js [instrumentation-edge] (ecmascript)");
;
class DiagComponentLogger {
    constructor(props){
        this._namespace = props.namespace || 'DiagComponentLogger';
    }
    debug(...args) {
        return logProxy('debug', this._namespace, args);
    }
    error(...args) {
        return logProxy('error', this._namespace, args);
    }
    info(...args) {
        return logProxy('info', this._namespace, args);
    }
    warn(...args) {
        return logProxy('warn', this._namespace, args);
    }
    verbose(...args) {
        return logProxy('verbose', this._namespace, args);
    }
}
function logProxy(funcName, namespace, args) {
    const logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["getGlobal"])('diag');
    // shortcut if logger not set
    if (!logger) {
        return;
    }
    return logger[funcName](namespace, ...args);
}
}),
"[project]/portfolio/node_modules/@opentelemetry/api/build/esm/diag/types.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * Defines the available internal logging levels for the diagnostic logger, the numeric values
 * of the levels are defined to match the original values from the initial LogLevel to avoid
 * compatibility/migration issues for any implementation that assume the numeric ordering.
 */ __turbopack_context__.s([
    "DiagLogLevel",
    ()=>DiagLogLevel
]);
var DiagLogLevel;
(function(DiagLogLevel) {
    /** Diagnostic Logging level setting to disable all logging (except and forced logs) */ DiagLogLevel[DiagLogLevel["NONE"] = 0] = "NONE";
    /** Identifies an error scenario */ DiagLogLevel[DiagLogLevel["ERROR"] = 30] = "ERROR";
    /** Identifies a warning scenario */ DiagLogLevel[DiagLogLevel["WARN"] = 50] = "WARN";
    /** General informational log message */ DiagLogLevel[DiagLogLevel["INFO"] = 60] = "INFO";
    /** General debug log message */ DiagLogLevel[DiagLogLevel["DEBUG"] = 70] = "DEBUG";
    /**
     * Detailed trace level logging should only be used for development, should only be set
     * in a development environment.
     */ DiagLogLevel[DiagLogLevel["VERBOSE"] = 80] = "VERBOSE";
    /** Used to set the logging level to include all logging */ DiagLogLevel[DiagLogLevel["ALL"] = 9999] = "ALL";
})(DiagLogLevel || (DiagLogLevel = {}));
}),
"[project]/portfolio/node_modules/@opentelemetry/api/build/esm/diag/internal/logLevelLogger.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createLogLevelDiagLogger",
    ()=>createLogLevelDiagLogger
]);
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/diag/types.js [instrumentation-edge] (ecmascript)");
;
function createLogLevelDiagLogger(maxLevel, logger) {
    if (maxLevel < __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["DiagLogLevel"].NONE) {
        maxLevel = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["DiagLogLevel"].NONE;
    } else if (maxLevel > __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["DiagLogLevel"].ALL) {
        maxLevel = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["DiagLogLevel"].ALL;
    }
    // In case the logger is null or undefined
    logger = logger || {};
    function _filterFunc(funcName, theLevel) {
        const theFunc = logger[funcName];
        if (typeof theFunc === 'function' && maxLevel >= theLevel) {
            return theFunc.bind(logger);
        }
        return function() {};
    }
    return {
        error: _filterFunc('error', __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["DiagLogLevel"].ERROR),
        warn: _filterFunc('warn', __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["DiagLogLevel"].WARN),
        info: _filterFunc('info', __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["DiagLogLevel"].INFO),
        debug: _filterFunc('debug', __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["DiagLogLevel"].DEBUG),
        verbose: _filterFunc('verbose', __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["DiagLogLevel"].VERBOSE)
    };
}
}),
"[project]/portfolio/node_modules/@opentelemetry/api/build/esm/api/diag.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DiagAPI",
    ()=>DiagAPI
]);
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$ComponentLogger$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/diag/ComponentLogger.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$internal$2f$logLevelLogger$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/diag/internal/logLevelLogger.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/diag/types.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/internal/global-utils.js [instrumentation-edge] (ecmascript)");
;
;
;
;
const API_NAME = 'diag';
class DiagAPI {
    /** Get the singleton instance of the DiagAPI API */ static instance() {
        if (!this._instance) {
            this._instance = new DiagAPI();
        }
        return this._instance;
    }
    /**
     * Private internal constructor
     * @private
     */ constructor(){
        function _logProxy(funcName) {
            return function(...args) {
                const logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["getGlobal"])('diag');
                // shortcut if logger not set
                if (!logger) return;
                return logger[funcName](...args);
            };
        }
        // Using self local variable for minification purposes as 'this' cannot be minified
        const self = this;
        // DiagAPI specific functions
        const setLogger = (logger, optionsOrLogLevel = {
            logLevel: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["DiagLogLevel"].INFO
        })=>{
            var _a, _b, _c;
            if (logger === self) {
                // There isn't much we can do here.
                // Logging to the console might break the user application.
                // Try to log to self. If a logger was previously registered it will receive the log.
                const err = new Error('Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation');
                self.error((_a = err.stack) !== null && _a !== void 0 ? _a : err.message);
                return false;
            }
            if (typeof optionsOrLogLevel === 'number') {
                optionsOrLogLevel = {
                    logLevel: optionsOrLogLevel
                };
            }
            const oldLogger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["getGlobal"])('diag');
            const newLogger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$internal$2f$logLevelLogger$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["createLogLevelDiagLogger"])((_b = optionsOrLogLevel.logLevel) !== null && _b !== void 0 ? _b : __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["DiagLogLevel"].INFO, logger);
            // There already is an logger registered. We'll let it know before overwriting it.
            if (oldLogger && !optionsOrLogLevel.suppressOverrideMessage) {
                const stack = (_c = new Error().stack) !== null && _c !== void 0 ? _c : '<failed to generate stacktrace>';
                oldLogger.warn(`Current logger will be overwritten from ${stack}`);
                newLogger.warn(`Current logger will overwrite one already registered from ${stack}`);
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["registerGlobal"])('diag', newLogger, self, true);
        };
        self.setLogger = setLogger;
        self.disable = ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["unregisterGlobal"])(API_NAME, self);
        };
        self.createComponentLogger = (options)=>{
            return new __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$ComponentLogger$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["DiagComponentLogger"](options);
        };
        self.verbose = _logProxy('verbose');
        self.debug = _logProxy('debug');
        self.info = _logProxy('info');
        self.warn = _logProxy('warn');
        self.error = _logProxy('error');
    }
}
}),
"[project]/portfolio/node_modules/@opentelemetry/api/build/esm/api/context.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContextAPI",
    ()=>ContextAPI
]);
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2f$NoopContextManager$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/context/NoopContextManager.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/internal/global-utils.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$diag$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/api/diag.js [instrumentation-edge] (ecmascript)");
;
;
;
const API_NAME = 'context';
const NOOP_CONTEXT_MANAGER = new __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2f$NoopContextManager$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["NoopContextManager"]();
class ContextAPI {
    /** Empty private constructor prevents end users from constructing a new instance of the API */ constructor(){}
    /** Get the singleton instance of the Context API */ static getInstance() {
        if (!this._instance) {
            this._instance = new ContextAPI();
        }
        return this._instance;
    }
    /**
     * Set the current context manager.
     *
     * @returns true if the context manager was successfully registered, else false
     */ setGlobalContextManager(contextManager) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["registerGlobal"])(API_NAME, contextManager, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$diag$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["DiagAPI"].instance());
    }
    /**
     * Get the currently active context
     */ active() {
        return this._getContextManager().active();
    }
    /**
     * Execute a function with an active context
     *
     * @param context context to be active during function execution
     * @param fn function to execute in a context
     * @param thisArg optional receiver to be used for calling fn
     * @param args optional arguments forwarded to fn
     */ with(context, fn, thisArg, ...args) {
        return this._getContextManager().with(context, fn, thisArg, ...args);
    }
    /**
     * Bind a context to a target function or event emitter
     *
     * @param context context to bind to the event emitter or function. Defaults to the currently active context
     * @param target function or event emitter to bind
     */ bind(context, target) {
        return this._getContextManager().bind(context, target);
    }
    _getContextManager() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["getGlobal"])(API_NAME) || NOOP_CONTEXT_MANAGER;
    }
    /** Disable and remove the global context manager */ disable() {
        this._getContextManager().disable();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["unregisterGlobal"])(API_NAME, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$diag$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["DiagAPI"].instance());
    }
}
}),
"[project]/portfolio/node_modules/@opentelemetry/api/build/esm/context-api.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "context",
    ()=>context
]);
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ // Split module-level variable definition into separate files to allow
// tree-shaking on each api instance.
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$context$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/api/context.js [instrumentation-edge] (ecmascript)");
;
const context = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$context$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["ContextAPI"].getInstance();
}),
"[project]/portfolio/node_modules/@opentelemetry/api/build/esm/trace/trace_flags.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * @since 1.0.0
 */ __turbopack_context__.s([
    "TraceFlags",
    ()=>TraceFlags
]);
var TraceFlags;
(function(TraceFlags) {
    /** Represents no flag set. */ TraceFlags[TraceFlags["NONE"] = 0] = "NONE";
    /** Bit to represent whether trace is sampled in trace flags. */ TraceFlags[TraceFlags["SAMPLED"] = 1] = "SAMPLED";
})(TraceFlags || (TraceFlags = {}));
}),
"[project]/portfolio/node_modules/@opentelemetry/api/build/esm/trace/invalid-span-constants.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INVALID_SPANID",
    ()=>INVALID_SPANID,
    "INVALID_SPAN_CONTEXT",
    ()=>INVALID_SPAN_CONTEXT,
    "INVALID_TRACEID",
    ()=>INVALID_TRACEID
]);
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$trace_flags$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/trace/trace_flags.js [instrumentation-edge] (ecmascript)");
;
const INVALID_SPANID = '0000000000000000';
const INVALID_TRACEID = '00000000000000000000000000000000';
const INVALID_SPAN_CONTEXT = {
    traceId: INVALID_TRACEID,
    spanId: INVALID_SPANID,
    traceFlags: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$trace_flags$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["TraceFlags"].NONE
};
}),
"[project]/portfolio/node_modules/@opentelemetry/api/build/esm/trace/NonRecordingSpan.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NonRecordingSpan",
    ()=>NonRecordingSpan
]);
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$invalid$2d$span$2d$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/trace/invalid-span-constants.js [instrumentation-edge] (ecmascript)");
;
class NonRecordingSpan {
    constructor(spanContext = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$invalid$2d$span$2d$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["INVALID_SPAN_CONTEXT"]){
        this._spanContext = spanContext;
    }
    // Returns a SpanContext.
    spanContext() {
        return this._spanContext;
    }
    // By default does nothing
    setAttribute(_key, _value) {
        return this;
    }
    // By default does nothing
    setAttributes(_attributes) {
        return this;
    }
    // By default does nothing
    addEvent(_name, _attributes) {
        return this;
    }
    addLink(_link) {
        return this;
    }
    addLinks(_links) {
        return this;
    }
    // By default does nothing
    setStatus(_status) {
        return this;
    }
    // By default does nothing
    updateName(_name) {
        return this;
    }
    // By default does nothing
    end(_endTime) {}
    // isRecording always returns false for NonRecordingSpan.
    isRecording() {
        return false;
    }
    // By default does nothing
    recordException(_exception, _time) {}
}
}),
"[project]/portfolio/node_modules/@opentelemetry/api/build/esm/trace/context-utils.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteSpan",
    ()=>deleteSpan,
    "getActiveSpan",
    ()=>getActiveSpan,
    "getSpan",
    ()=>getSpan,
    "getSpanContext",
    ()=>getSpanContext,
    "setSpan",
    ()=>setSpan,
    "setSpanContext",
    ()=>setSpanContext
]);
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2f$context$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/context/context.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NonRecordingSpan$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/trace/NonRecordingSpan.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$context$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/api/context.js [instrumentation-edge] (ecmascript)");
;
;
;
/**
 * span key
 */ const SPAN_KEY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2f$context$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["createContextKey"])('OpenTelemetry Context Key SPAN');
function getSpan(context) {
    return context.getValue(SPAN_KEY) || undefined;
}
function getActiveSpan() {
    return getSpan(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$context$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["ContextAPI"].getInstance().active());
}
function setSpan(context, span) {
    return context.setValue(SPAN_KEY, span);
}
function deleteSpan(context) {
    return context.deleteValue(SPAN_KEY);
}
function setSpanContext(context, spanContext) {
    return setSpan(context, new __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NonRecordingSpan$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["NonRecordingSpan"](spanContext));
}
function getSpanContext(context) {
    var _a;
    return (_a = getSpan(context)) === null || _a === void 0 ? void 0 : _a.spanContext();
}
}),
"[project]/portfolio/node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isSpanContextValid",
    ()=>isSpanContextValid,
    "isValidSpanId",
    ()=>isValidSpanId,
    "isValidTraceId",
    ()=>isValidTraceId,
    "wrapSpanContext",
    ()=>wrapSpanContext
]);
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$invalid$2d$span$2d$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/trace/invalid-span-constants.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NonRecordingSpan$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/trace/NonRecordingSpan.js [instrumentation-edge] (ecmascript)");
;
;
// Valid characters (0-9, a-f, A-F) are marked as 1.
const isHex = new Uint8Array([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1
]);
function isValidHex(id, length) {
    // As of 1.9.0 the id was allowed to be a non-string value,
    // even though it was not possible in the types.
    if (typeof id !== 'string' || id.length !== length) return false;
    let r = 0;
    for(let i = 0; i < id.length; i += 4){
        r += (isHex[id.charCodeAt(i)] | 0) + (isHex[id.charCodeAt(i + 1)] | 0) + (isHex[id.charCodeAt(i + 2)] | 0) + (isHex[id.charCodeAt(i + 3)] | 0);
    }
    return r === length;
}
function isValidTraceId(traceId) {
    return isValidHex(traceId, 32) && traceId !== __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$invalid$2d$span$2d$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["INVALID_TRACEID"];
}
function isValidSpanId(spanId) {
    return isValidHex(spanId, 16) && spanId !== __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$invalid$2d$span$2d$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["INVALID_SPANID"];
}
function isSpanContextValid(spanContext) {
    return isValidTraceId(spanContext.traceId) && isValidSpanId(spanContext.spanId);
}
function wrapSpanContext(spanContext) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NonRecordingSpan$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["NonRecordingSpan"](spanContext);
}
}),
"[project]/portfolio/node_modules/@opentelemetry/api/build/esm/trace/NoopTracer.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NoopTracer",
    ()=>NoopTracer
]);
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$context$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/api/context.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$context$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/trace/context-utils.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NonRecordingSpan$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/trace/NonRecordingSpan.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$spancontext$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js [instrumentation-edge] (ecmascript)");
;
;
;
;
const contextApi = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$context$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["ContextAPI"].getInstance();
class NoopTracer {
    // startSpan starts a noop span.
    startSpan(name, options, context = contextApi.active()) {
        const root = Boolean(options === null || options === void 0 ? void 0 : options.root);
        if (root) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NonRecordingSpan$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["NonRecordingSpan"]();
        }
        const parentFromContext = context && (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$context$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["getSpanContext"])(context);
        if (isSpanContext(parentFromContext) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$spancontext$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["isSpanContextValid"])(parentFromContext)) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NonRecordingSpan$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["NonRecordingSpan"](parentFromContext);
        } else {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NonRecordingSpan$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["NonRecordingSpan"]();
        }
    }
    startActiveSpan(name, arg2, arg3, arg4) {
        let opts;
        let ctx;
        let fn;
        if (arguments.length < 2) {
            return;
        } else if (arguments.length === 2) {
            fn = arg2;
        } else if (arguments.length === 3) {
            opts = arg2;
            fn = arg3;
        } else {
            opts = arg2;
            ctx = arg3;
            fn = arg4;
        }
        const parentContext = ctx !== null && ctx !== void 0 ? ctx : contextApi.active();
        const span = this.startSpan(name, opts, parentContext);
        const contextWithSpanSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$context$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["setSpan"])(parentContext, span);
        return contextApi.with(contextWithSpanSet, fn, undefined, span);
    }
}
function isSpanContext(spanContext) {
    return spanContext !== null && typeof spanContext === 'object' && 'spanId' in spanContext && typeof spanContext['spanId'] === 'string' && 'traceId' in spanContext && typeof spanContext['traceId'] === 'string' && 'traceFlags' in spanContext && typeof spanContext['traceFlags'] === 'number';
}
}),
"[project]/portfolio/node_modules/@opentelemetry/api/build/esm/trace/ProxyTracer.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProxyTracer",
    ()=>ProxyTracer
]);
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NoopTracer$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/trace/NoopTracer.js [instrumentation-edge] (ecmascript)");
;
const NOOP_TRACER = new __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NoopTracer$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["NoopTracer"]();
class ProxyTracer {
    constructor(provider, name, version, options){
        this._provider = provider;
        this.name = name;
        this.version = version;
        this.options = options;
    }
    startSpan(name, options, context) {
        return this._getTracer().startSpan(name, options, context);
    }
    startActiveSpan(_name, _options, _context, _fn) {
        const tracer = this._getTracer();
        return Reflect.apply(tracer.startActiveSpan, tracer, arguments);
    }
    /**
     * Try to get a tracer from the proxy tracer provider.
     * If the proxy tracer provider has no delegate, return a noop tracer.
     */ _getTracer() {
        if (this._delegate) {
            return this._delegate;
        }
        const tracer = this._provider.getDelegateTracer(this.name, this.version, this.options);
        if (!tracer) {
            return NOOP_TRACER;
        }
        this._delegate = tracer;
        return this._delegate;
    }
}
}),
"[project]/portfolio/node_modules/@opentelemetry/api/build/esm/trace/NoopTracerProvider.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NoopTracerProvider",
    ()=>NoopTracerProvider
]);
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NoopTracer$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/trace/NoopTracer.js [instrumentation-edge] (ecmascript)");
;
class NoopTracerProvider {
    getTracer(_name, _version, _options) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NoopTracer$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["NoopTracer"]();
    }
}
}),
"[project]/portfolio/node_modules/@opentelemetry/api/build/esm/trace/ProxyTracerProvider.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProxyTracerProvider",
    ()=>ProxyTracerProvider
]);
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$ProxyTracer$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/trace/ProxyTracer.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NoopTracerProvider$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/trace/NoopTracerProvider.js [instrumentation-edge] (ecmascript)");
;
;
const NOOP_TRACER_PROVIDER = new __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NoopTracerProvider$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["NoopTracerProvider"]();
class ProxyTracerProvider {
    /**
     * Get a {@link ProxyTracer}
     */ getTracer(name, version, options) {
        var _a;
        return (_a = this.getDelegateTracer(name, version, options)) !== null && _a !== void 0 ? _a : new __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$ProxyTracer$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["ProxyTracer"](this, name, version, options);
    }
    getDelegate() {
        var _a;
        return (_a = this._delegate) !== null && _a !== void 0 ? _a : NOOP_TRACER_PROVIDER;
    }
    /**
     * Set the delegate tracer provider
     */ setDelegate(delegate) {
        this._delegate = delegate;
    }
    getDelegateTracer(name, version, options) {
        var _a;
        return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getTracer(name, version, options);
    }
}
}),
"[project]/portfolio/node_modules/@opentelemetry/api/build/esm/api/trace.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TraceAPI",
    ()=>TraceAPI
]);
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/internal/global-utils.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$ProxyTracerProvider$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/trace/ProxyTracerProvider.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$spancontext$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$context$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/trace/context-utils.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$diag$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/api/diag.js [instrumentation-edge] (ecmascript)");
;
;
;
;
;
const API_NAME = 'trace';
class TraceAPI {
    /** Empty private constructor prevents end users from constructing a new instance of the API */ constructor(){
        this._proxyTracerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$ProxyTracerProvider$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["ProxyTracerProvider"]();
        this.wrapSpanContext = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$spancontext$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["wrapSpanContext"];
        this.isSpanContextValid = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$spancontext$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["isSpanContextValid"];
        this.deleteSpan = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$context$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["deleteSpan"];
        this.getSpan = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$context$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["getSpan"];
        this.getActiveSpan = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$context$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["getActiveSpan"];
        this.getSpanContext = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$context$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["getSpanContext"];
        this.setSpan = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$context$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["setSpan"];
        this.setSpanContext = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$context$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["setSpanContext"];
    }
    /** Get the singleton instance of the Trace API */ static getInstance() {
        if (!this._instance) {
            this._instance = new TraceAPI();
        }
        return this._instance;
    }
    /**
     * Set the current global tracer.
     *
     * @returns true if the tracer provider was successfully registered, else false
     */ setGlobalTracerProvider(provider) {
        const success = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["registerGlobal"])(API_NAME, this._proxyTracerProvider, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$diag$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["DiagAPI"].instance());
        if (success) {
            this._proxyTracerProvider.setDelegate(provider);
        }
        return success;
    }
    /**
     * Returns the global tracer provider.
     */ getTracerProvider() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["getGlobal"])(API_NAME) || this._proxyTracerProvider;
    }
    /**
     * Returns a tracer from the global tracer provider.
     */ getTracer(name, version) {
        return this.getTracerProvider().getTracer(name, version);
    }
    /** Remove the global tracer provider */ disable() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["unregisterGlobal"])(API_NAME, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$diag$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["DiagAPI"].instance());
        this._proxyTracerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$ProxyTracerProvider$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["ProxyTracerProvider"]();
    }
}
}),
"[project]/portfolio/node_modules/@opentelemetry/api/build/esm/trace-api.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "trace",
    ()=>trace
]);
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ // Split module-level variable definition into separate files to allow
// tree-shaking on each api instance.
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$trace$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/api/trace.js [instrumentation-edge] (ecmascript)");
;
const trace = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$trace$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["TraceAPI"].getInstance();
}),
"[project]/portfolio/node_modules/@opentelemetry/api/build/esm/trace/span_kind.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * @since 1.0.0
 */ __turbopack_context__.s([
    "SpanKind",
    ()=>SpanKind
]);
var SpanKind;
(function(SpanKind) {
    /** Default value. Indicates that the span is used internally. */ SpanKind[SpanKind["INTERNAL"] = 0] = "INTERNAL";
    /**
     * Indicates that the span covers server-side handling of an RPC or other
     * remote request.
     */ SpanKind[SpanKind["SERVER"] = 1] = "SERVER";
    /**
     * Indicates that the span covers the client-side wrapper around an RPC or
     * other remote request.
     */ SpanKind[SpanKind["CLIENT"] = 2] = "CLIENT";
    /**
     * Indicates that the span describes producer sending a message to a
     * broker. Unlike client and server, there is no direct critical path latency
     * relationship between producer and consumer spans.
     */ SpanKind[SpanKind["PRODUCER"] = 3] = "PRODUCER";
    /**
     * Indicates that the span describes consumer receiving a message from a
     * broker. Unlike client and server, there is no direct critical path latency
     * relationship between producer and consumer spans.
     */ SpanKind[SpanKind["CONSUMER"] = 4] = "CONSUMER";
})(SpanKind || (SpanKind = {}));
}),
"[project]/portfolio/node_modules/@opentelemetry/api/build/esm/propagation/NoopTextMapPropagator.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * No-op implementations of {@link TextMapPropagator}.
 */ __turbopack_context__.s([
    "NoopTextMapPropagator",
    ()=>NoopTextMapPropagator
]);
class NoopTextMapPropagator {
    /** Noop inject function does nothing */ inject(_context, _carrier) {}
    /** Noop extract function does nothing and returns the input context */ extract(context, _carrier) {
        return context;
    }
    fields() {
        return [];
    }
}
}),
"[project]/portfolio/node_modules/@opentelemetry/api/build/esm/propagation/TextMapPropagator.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * @since 1.0.0
 */ __turbopack_context__.s([
    "defaultTextMapGetter",
    ()=>defaultTextMapGetter,
    "defaultTextMapSetter",
    ()=>defaultTextMapSetter
]);
const defaultTextMapGetter = {
    get (carrier, key) {
        if (carrier == null) {
            return undefined;
        }
        return carrier[key];
    },
    keys (carrier) {
        if (carrier == null) {
            return [];
        }
        return Object.keys(carrier);
    }
};
const defaultTextMapSetter = {
    set (carrier, key, value) {
        if (carrier == null) {
            return;
        }
        carrier[key] = value;
    }
};
}),
"[project]/portfolio/node_modules/@opentelemetry/api/build/esm/baggage/context-helpers.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteBaggage",
    ()=>deleteBaggage,
    "getActiveBaggage",
    ()=>getActiveBaggage,
    "getBaggage",
    ()=>getBaggage,
    "setBaggage",
    ()=>setBaggage
]);
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$context$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/api/context.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2f$context$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/context/context.js [instrumentation-edge] (ecmascript)");
;
;
/**
 * Baggage key
 */ const BAGGAGE_KEY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2f$context$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["createContextKey"])('OpenTelemetry Baggage Key');
function getBaggage(context) {
    return context.getValue(BAGGAGE_KEY) || undefined;
}
function getActiveBaggage() {
    return getBaggage(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$context$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["ContextAPI"].getInstance().active());
}
function setBaggage(context, baggage) {
    return context.setValue(BAGGAGE_KEY, baggage);
}
function deleteBaggage(context) {
    return context.deleteValue(BAGGAGE_KEY);
}
}),
"[project]/portfolio/node_modules/@opentelemetry/api/build/esm/baggage/internal/baggage-impl.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "BaggageImpl",
    ()=>BaggageImpl
]);
class BaggageImpl {
    constructor(entries){
        this._entries = entries ? new Map(entries) : new Map();
    }
    getEntry(key) {
        const entry = this._entries.get(key);
        if (!entry) {
            return undefined;
        }
        return Object.assign({}, entry);
    }
    getAllEntries() {
        return Array.from(this._entries.entries());
    }
    setEntry(key, entry) {
        const newBaggage = new BaggageImpl(this._entries);
        newBaggage._entries.set(key, entry);
        return newBaggage;
    }
    removeEntry(key) {
        const newBaggage = new BaggageImpl(this._entries);
        newBaggage._entries.delete(key);
        return newBaggage;
    }
    removeEntries(...keys) {
        const newBaggage = new BaggageImpl(this._entries);
        for (const key of keys){
            newBaggage._entries.delete(key);
        }
        return newBaggage;
    }
    clear() {
        return new BaggageImpl();
    }
}
}),
"[project]/portfolio/node_modules/@opentelemetry/api/build/esm/baggage/internal/symbol.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * Symbol used to make BaggageEntryMetadata an opaque type
 */ __turbopack_context__.s([
    "baggageEntryMetadataSymbol",
    ()=>baggageEntryMetadataSymbol
]);
const baggageEntryMetadataSymbol = Symbol('BaggageEntryMetadata');
}),
"[project]/portfolio/node_modules/@opentelemetry/api/build/esm/baggage/utils.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "baggageEntryMetadataFromString",
    ()=>baggageEntryMetadataFromString,
    "createBaggage",
    ()=>createBaggage
]);
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$diag$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/api/diag.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$baggage$2f$internal$2f$baggage$2d$impl$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/baggage/internal/baggage-impl.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$baggage$2f$internal$2f$symbol$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/baggage/internal/symbol.js [instrumentation-edge] (ecmascript)");
;
;
;
const diag = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$diag$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["DiagAPI"].instance();
function createBaggage(entries = {}) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$baggage$2f$internal$2f$baggage$2d$impl$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["BaggageImpl"](new Map(Object.entries(entries)));
}
function baggageEntryMetadataFromString(str) {
    if (typeof str !== 'string') {
        diag.error(`Cannot create baggage metadata from unknown type: ${typeof str}`);
        str = '';
    }
    return {
        __TYPE__: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$baggage$2f$internal$2f$symbol$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["baggageEntryMetadataSymbol"],
        toString () {
            return str;
        }
    };
}
}),
"[project]/portfolio/node_modules/@opentelemetry/api/build/esm/api/propagation.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PropagationAPI",
    ()=>PropagationAPI
]);
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/internal/global-utils.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$propagation$2f$NoopTextMapPropagator$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/propagation/NoopTextMapPropagator.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$propagation$2f$TextMapPropagator$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/propagation/TextMapPropagator.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$baggage$2f$context$2d$helpers$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/baggage/context-helpers.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$baggage$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/baggage/utils.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$diag$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/api/diag.js [instrumentation-edge] (ecmascript)");
;
;
;
;
;
;
const API_NAME = 'propagation';
const NOOP_TEXT_MAP_PROPAGATOR = new __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$propagation$2f$NoopTextMapPropagator$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["NoopTextMapPropagator"]();
class PropagationAPI {
    /** Empty private constructor prevents end users from constructing a new instance of the API */ constructor(){
        this.createBaggage = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$baggage$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["createBaggage"];
        this.getBaggage = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$baggage$2f$context$2d$helpers$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["getBaggage"];
        this.getActiveBaggage = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$baggage$2f$context$2d$helpers$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["getActiveBaggage"];
        this.setBaggage = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$baggage$2f$context$2d$helpers$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["setBaggage"];
        this.deleteBaggage = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$baggage$2f$context$2d$helpers$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["deleteBaggage"];
    }
    /** Get the singleton instance of the Propagator API */ static getInstance() {
        if (!this._instance) {
            this._instance = new PropagationAPI();
        }
        return this._instance;
    }
    /**
     * Set the current propagator.
     *
     * @returns true if the propagator was successfully registered, else false
     */ setGlobalPropagator(propagator) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["registerGlobal"])(API_NAME, propagator, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$diag$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["DiagAPI"].instance());
    }
    /**
     * Inject context into a carrier to be propagated inter-process
     *
     * @param context Context carrying tracing data to inject
     * @param carrier carrier to inject context into
     * @param setter Function used to set values on the carrier
     */ inject(context, carrier, setter = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$propagation$2f$TextMapPropagator$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["defaultTextMapSetter"]) {
        return this._getGlobalPropagator().inject(context, carrier, setter);
    }
    /**
     * Extract context from a carrier
     *
     * @param context Context which the newly created context will inherit from
     * @param carrier Carrier to extract context from
     * @param getter Function used to extract keys from a carrier
     */ extract(context, carrier, getter = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$propagation$2f$TextMapPropagator$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["defaultTextMapGetter"]) {
        return this._getGlobalPropagator().extract(context, carrier, getter);
    }
    /**
     * Return a list of all fields which may be used by the propagator.
     */ fields() {
        return this._getGlobalPropagator().fields();
    }
    /** Remove the global propagator */ disable() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["unregisterGlobal"])(API_NAME, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$diag$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["DiagAPI"].instance());
    }
    _getGlobalPropagator() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["getGlobal"])(API_NAME) || NOOP_TEXT_MAP_PROPAGATOR;
    }
}
}),
"[project]/portfolio/node_modules/@opentelemetry/api/build/esm/propagation-api.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "propagation",
    ()=>propagation
]);
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ // Split module-level variable definition into separate files to allow
// tree-shaking on each api instance.
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$propagation$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/api/propagation.js [instrumentation-edge] (ecmascript)");
;
const propagation = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$propagation$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["PropagationAPI"].getInstance();
}),
"[project]/portfolio/node_modules/@opentelemetry/api/build/esm/trace/status.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * An enumeration of status codes.
 *
 * @since 1.0.0
 */ __turbopack_context__.s([
    "SpanStatusCode",
    ()=>SpanStatusCode
]);
var SpanStatusCode;
(function(SpanStatusCode) {
    /**
     * The default status.
     */ SpanStatusCode[SpanStatusCode["UNSET"] = 0] = "UNSET";
    /**
     * The operation has been validated by an Application developer or
     * Operator to have completed successfully.
     */ SpanStatusCode[SpanStatusCode["OK"] = 1] = "OK";
    /**
     * The operation contains an error.
     */ SpanStatusCode[SpanStatusCode["ERROR"] = 2] = "ERROR";
})(SpanStatusCode || (SpanStatusCode = {}));
}),
"[project]/portfolio/node_modules/@opentelemetry/api/build/esm/metrics/NoopMeter.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * NoopMeter is a noop implementation of the {@link Meter} interface. It reuses
 * constant NoopMetrics for all of its methods.
 */ __turbopack_context__.s([
    "NOOP_COUNTER_METRIC",
    ()=>NOOP_COUNTER_METRIC,
    "NOOP_GAUGE_METRIC",
    ()=>NOOP_GAUGE_METRIC,
    "NOOP_HISTOGRAM_METRIC",
    ()=>NOOP_HISTOGRAM_METRIC,
    "NOOP_METER",
    ()=>NOOP_METER,
    "NOOP_OBSERVABLE_COUNTER_METRIC",
    ()=>NOOP_OBSERVABLE_COUNTER_METRIC,
    "NOOP_OBSERVABLE_GAUGE_METRIC",
    ()=>NOOP_OBSERVABLE_GAUGE_METRIC,
    "NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC",
    ()=>NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC,
    "NOOP_UP_DOWN_COUNTER_METRIC",
    ()=>NOOP_UP_DOWN_COUNTER_METRIC,
    "NoopCounterMetric",
    ()=>NoopCounterMetric,
    "NoopGaugeMetric",
    ()=>NoopGaugeMetric,
    "NoopHistogramMetric",
    ()=>NoopHistogramMetric,
    "NoopMeter",
    ()=>NoopMeter,
    "NoopMetric",
    ()=>NoopMetric,
    "NoopObservableCounterMetric",
    ()=>NoopObservableCounterMetric,
    "NoopObservableGaugeMetric",
    ()=>NoopObservableGaugeMetric,
    "NoopObservableMetric",
    ()=>NoopObservableMetric,
    "NoopObservableUpDownCounterMetric",
    ()=>NoopObservableUpDownCounterMetric,
    "NoopUpDownCounterMetric",
    ()=>NoopUpDownCounterMetric,
    "createNoopMeter",
    ()=>createNoopMeter
]);
class NoopMeter {
    constructor(){}
    /**
     * @see {@link Meter.createGauge}
     */ createGauge(_name, _options) {
        return NOOP_GAUGE_METRIC;
    }
    /**
     * @see {@link Meter.createHistogram}
     */ createHistogram(_name, _options) {
        return NOOP_HISTOGRAM_METRIC;
    }
    /**
     * @see {@link Meter.createCounter}
     */ createCounter(_name, _options) {
        return NOOP_COUNTER_METRIC;
    }
    /**
     * @see {@link Meter.createUpDownCounter}
     */ createUpDownCounter(_name, _options) {
        return NOOP_UP_DOWN_COUNTER_METRIC;
    }
    /**
     * @see {@link Meter.createObservableGauge}
     */ createObservableGauge(_name, _options) {
        return NOOP_OBSERVABLE_GAUGE_METRIC;
    }
    /**
     * @see {@link Meter.createObservableCounter}
     */ createObservableCounter(_name, _options) {
        return NOOP_OBSERVABLE_COUNTER_METRIC;
    }
    /**
     * @see {@link Meter.createObservableUpDownCounter}
     */ createObservableUpDownCounter(_name, _options) {
        return NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
    }
    /**
     * @see {@link Meter.addBatchObservableCallback}
     */ addBatchObservableCallback(_callback, _observables) {}
    /**
     * @see {@link Meter.removeBatchObservableCallback}
     */ removeBatchObservableCallback(_callback) {}
}
class NoopMetric {
}
class NoopCounterMetric extends NoopMetric {
    add(_value, _attributes) {}
}
class NoopUpDownCounterMetric extends NoopMetric {
    add(_value, _attributes) {}
}
class NoopGaugeMetric extends NoopMetric {
    record(_value, _attributes) {}
}
class NoopHistogramMetric extends NoopMetric {
    record(_value, _attributes) {}
}
class NoopObservableMetric {
    addCallback(_callback) {}
    removeCallback(_callback) {}
}
class NoopObservableCounterMetric extends NoopObservableMetric {
}
class NoopObservableGaugeMetric extends NoopObservableMetric {
}
class NoopObservableUpDownCounterMetric extends NoopObservableMetric {
}
const NOOP_METER = new NoopMeter();
const NOOP_COUNTER_METRIC = new NoopCounterMetric();
const NOOP_GAUGE_METRIC = new NoopGaugeMetric();
const NOOP_HISTOGRAM_METRIC = new NoopHistogramMetric();
const NOOP_UP_DOWN_COUNTER_METRIC = new NoopUpDownCounterMetric();
const NOOP_OBSERVABLE_COUNTER_METRIC = new NoopObservableCounterMetric();
const NOOP_OBSERVABLE_GAUGE_METRIC = new NoopObservableGaugeMetric();
const NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new NoopObservableUpDownCounterMetric();
function createNoopMeter() {
    return NOOP_METER;
}
}),
"[project]/portfolio/node_modules/@opentelemetry/api/build/esm/trace/SamplingResult.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * @deprecated use the one declared in @opentelemetry/sdk-trace-base instead.
 * A sampling decision that determines how a {@link Span} will be recorded
 * and collected.
 *
 * @since 1.0.0
 */ __turbopack_context__.s([
    "SamplingDecision",
    ()=>SamplingDecision
]);
var SamplingDecision;
(function(SamplingDecision) {
    /**
     * `Span.isRecording() === false`, span will not be recorded and all events
     * and attributes will be dropped.
     */ SamplingDecision[SamplingDecision["NOT_RECORD"] = 0] = "NOT_RECORD";
    /**
     * `Span.isRecording() === true`, but `Sampled` flag in {@link TraceFlags}
     * MUST NOT be set.
     */ SamplingDecision[SamplingDecision["RECORD"] = 1] = "RECORD";
    /**
     * `Span.isRecording() === true` AND `Sampled` flag in {@link TraceFlags}
     * MUST be set.
     */ SamplingDecision[SamplingDecision["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
})(SamplingDecision || (SamplingDecision = {}));
}),
"[project]/portfolio/node_modules/@opentelemetry/api/build/esm/diag-api.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "diag",
    ()=>diag
]);
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ // Split module-level variable definition into separate files to allow
// tree-shaking on each api instance.
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$diag$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/api/diag.js [instrumentation-edge] (ecmascript)");
;
const diag = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$diag$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["DiagAPI"].instance();
}),
"[project]/portfolio/node_modules/@opentelemetry/core/build/esm/internal/validators.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateKey",
    ()=>validateKey,
    "validateValue",
    ()=>validateValue
]);
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ const VALID_KEY_CHAR_RANGE = '[_0-9a-z-*/]';
const VALID_KEY = `[a-z]${VALID_KEY_CHAR_RANGE}{0,255}`;
const VALID_VENDOR_KEY = `[a-z0-9]${VALID_KEY_CHAR_RANGE}{0,240}@[a-z]${VALID_KEY_CHAR_RANGE}{0,13}`;
const VALID_KEY_REGEX = new RegExp(`^(?:${VALID_KEY}|${VALID_VENDOR_KEY})$`);
const VALID_VALUE_BASE_REGEX = /^[ -~]{0,255}[!-~]$/;
const INVALID_VALUE_COMMA_EQUAL_REGEX = /,|=/;
function validateKey(key) {
    return VALID_KEY_REGEX.test(key);
}
function validateValue(value) {
    return VALID_VALUE_BASE_REGEX.test(value) && !INVALID_VALUE_COMMA_EQUAL_REGEX.test(value);
}
}),
"[project]/portfolio/node_modules/@opentelemetry/core/build/esm/trace/TraceState.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TraceState",
    ()=>TraceState
]);
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$internal$2f$validators$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/core/build/esm/internal/validators.js [instrumentation-edge] (ecmascript)");
;
const MAX_TRACE_STATE_ITEMS = 32;
const MAX_TRACE_STATE_LEN = 512;
const LIST_MEMBERS_SEPARATOR = ',';
const LIST_MEMBER_KEY_VALUE_SPLITTER = '=';
class TraceState {
    _internalState = new Map();
    constructor(rawTraceState){
        if (rawTraceState) this._parse(rawTraceState);
    }
    set(key, value) {
        // TODO: Benchmark the different approaches(map vs list) and
        // use the faster one.
        const traceState = this._clone();
        if (traceState._internalState.has(key)) {
            traceState._internalState.delete(key);
        }
        traceState._internalState.set(key, value);
        return traceState;
    }
    unset(key) {
        const traceState = this._clone();
        traceState._internalState.delete(key);
        return traceState;
    }
    get(key) {
        return this._internalState.get(key);
    }
    serialize() {
        return this._keys().reduce((agg, key)=>{
            agg.push(key + LIST_MEMBER_KEY_VALUE_SPLITTER + this.get(key));
            return agg;
        }, []).join(LIST_MEMBERS_SEPARATOR);
    }
    _parse(rawTraceState) {
        if (rawTraceState.length > MAX_TRACE_STATE_LEN) return;
        this._internalState = rawTraceState.split(LIST_MEMBERS_SEPARATOR).reverse() // Store in reverse so new keys (.set(...)) will be placed at the beginning
        .reduce((agg, part)=>{
            const listMember = part.trim(); // Optional Whitespace (OWS) handling
            const i = listMember.indexOf(LIST_MEMBER_KEY_VALUE_SPLITTER);
            if (i !== -1) {
                const key = listMember.slice(0, i);
                const value = listMember.slice(i + 1, part.length);
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$internal$2f$validators$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["validateKey"])(key) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$internal$2f$validators$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["validateValue"])(value)) {
                    agg.set(key, value);
                } else {
                // TODO: Consider to add warning log
                }
            }
            return agg;
        }, new Map());
        // Because of the reverse() requirement, trunc must be done after map is created
        if (this._internalState.size > MAX_TRACE_STATE_ITEMS) {
            this._internalState = new Map(Array.from(this._internalState.entries()).reverse() // Use reverse same as original tracestate parse chain
            .slice(0, MAX_TRACE_STATE_ITEMS));
        }
    }
    _keys() {
        return Array.from(this._internalState.keys()).reverse();
    }
    _clone() {
        const traceState = new TraceState();
        traceState._internalState = new Map(this._internalState);
        return traceState;
    }
}
}),
"[project]/portfolio/node_modules/@opentelemetry/core/build/esm/trace/suppress-tracing.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isTracingSuppressed",
    ()=>isTracingSuppressed,
    "suppressTracing",
    ()=>suppressTracing,
    "unsuppressTracing",
    ()=>unsuppressTracing
]);
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2f$context$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/context/context.js [instrumentation-edge] (ecmascript)");
;
const SUPPRESS_TRACING_KEY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2f$context$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["createContextKey"])('OpenTelemetry SDK Context Key SUPPRESS_TRACING');
function suppressTracing(context) {
    return context.setValue(SUPPRESS_TRACING_KEY, true);
}
function unsuppressTracing(context) {
    return context.deleteValue(SUPPRESS_TRACING_KEY);
}
function isTracingSuppressed(context) {
    return context.getValue(SUPPRESS_TRACING_KEY) === true;
}
}),
"[project]/portfolio/node_modules/@opentelemetry/core/build/esm/baggage/constants.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "BAGGAGE_HEADER",
    ()=>BAGGAGE_HEADER,
    "BAGGAGE_ITEMS_SEPARATOR",
    ()=>BAGGAGE_ITEMS_SEPARATOR,
    "BAGGAGE_KEY_PAIR_SEPARATOR",
    ()=>BAGGAGE_KEY_PAIR_SEPARATOR,
    "BAGGAGE_MAX_NAME_VALUE_PAIRS",
    ()=>BAGGAGE_MAX_NAME_VALUE_PAIRS,
    "BAGGAGE_MAX_PER_NAME_VALUE_PAIRS",
    ()=>BAGGAGE_MAX_PER_NAME_VALUE_PAIRS,
    "BAGGAGE_MAX_TOTAL_LENGTH",
    ()=>BAGGAGE_MAX_TOTAL_LENGTH,
    "BAGGAGE_PROPERTIES_SEPARATOR",
    ()=>BAGGAGE_PROPERTIES_SEPARATOR
]);
const BAGGAGE_KEY_PAIR_SEPARATOR = '=';
const BAGGAGE_PROPERTIES_SEPARATOR = ';';
const BAGGAGE_ITEMS_SEPARATOR = ',';
const BAGGAGE_HEADER = 'baggage';
const BAGGAGE_MAX_NAME_VALUE_PAIRS = 180;
const BAGGAGE_MAX_PER_NAME_VALUE_PAIRS = 4096;
const BAGGAGE_MAX_TOTAL_LENGTH = 8192;
}),
"[project]/portfolio/node_modules/@opentelemetry/core/build/esm/baggage/utils.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getKeyPairs",
    ()=>getKeyPairs,
    "parseKeyPairsIntoRecord",
    ()=>parseKeyPairsIntoRecord,
    "parsePairKeyValue",
    ()=>parsePairKeyValue,
    "serializeKeyPairs",
    ()=>serializeKeyPairs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$baggage$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/baggage/utils.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/core/build/esm/baggage/constants.js [instrumentation-edge] (ecmascript)");
;
;
function serializeKeyPairs(keyPairs) {
    return keyPairs.reduce((hValue, current)=>{
        const value = `${hValue}${hValue !== '' ? __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["BAGGAGE_ITEMS_SEPARATOR"] : ''}${current}`;
        return value.length > __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["BAGGAGE_MAX_TOTAL_LENGTH"] ? hValue : value;
    }, '');
}
function getKeyPairs(baggage) {
    return baggage.getAllEntries().map(([key, value])=>{
        let entry = `${encodeURIComponent(key)}=${encodeURIComponent(value.value)}`;
        // include opaque metadata if provided
        // NOTE: we intentionally don't URI-encode the metadata - that responsibility falls on the metadata implementation
        if (value.metadata !== undefined) {
            entry += __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["BAGGAGE_PROPERTIES_SEPARATOR"] + value.metadata.toString();
        }
        return entry;
    });
}
function parsePairKeyValue(entry) {
    if (!entry) return;
    const metadataSeparatorIndex = entry.indexOf(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["BAGGAGE_PROPERTIES_SEPARATOR"]);
    const keyPairPart = metadataSeparatorIndex === -1 ? entry : entry.substring(0, metadataSeparatorIndex);
    const separatorIndex = keyPairPart.indexOf(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["BAGGAGE_KEY_PAIR_SEPARATOR"]);
    if (separatorIndex <= 0) return;
    const rawKey = keyPairPart.substring(0, separatorIndex).trim();
    const rawValue = keyPairPart.substring(separatorIndex + 1).trim();
    if (!rawKey || !rawValue) return;
    let key;
    let value;
    try {
        key = decodeURIComponent(rawKey);
        value = decodeURIComponent(rawValue);
    } catch  {
        return;
    }
    let metadata;
    if (metadataSeparatorIndex !== -1 && metadataSeparatorIndex < entry.length - 1) {
        const metadataString = entry.substring(metadataSeparatorIndex + 1);
        metadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$baggage$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["baggageEntryMetadataFromString"])(metadataString);
    }
    return {
        key,
        value,
        metadata
    };
}
function parseKeyPairsIntoRecord(value) {
    const result = {};
    if (typeof value === 'string' && value.length > 0) {
        value.split(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["BAGGAGE_ITEMS_SEPARATOR"]).forEach((entry)=>{
            const keyPair = parsePairKeyValue(entry);
            if (keyPair !== undefined && keyPair.value.length > 0) {
                result[keyPair.key] = keyPair.value;
            }
        });
    }
    return result;
}
}),
"[project]/portfolio/node_modules/@opentelemetry/core/build/esm/baggage/propagation/W3CBaggagePropagator.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3CBaggagePropagator",
    ()=>W3CBaggagePropagator
]);
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$propagation$2d$api$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/propagation-api.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$suppress$2d$tracing$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/core/build/esm/trace/suppress-tracing.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/core/build/esm/baggage/constants.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/core/build/esm/baggage/utils.js [instrumentation-edge] (ecmascript)");
;
;
;
;
class W3CBaggagePropagator {
    inject(context, carrier, setter) {
        const baggage = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$propagation$2d$api$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["propagation"].getBaggage(context);
        if (!baggage || (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$trace$2f$suppress$2d$tracing$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["isTracingSuppressed"])(context)) return;
        const keyPairs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["getKeyPairs"])(baggage).filter((pair)=>{
            return pair.length <= __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["BAGGAGE_MAX_PER_NAME_VALUE_PAIRS"];
        }).slice(0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["BAGGAGE_MAX_NAME_VALUE_PAIRS"]);
        const headerValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["serializeKeyPairs"])(keyPairs);
        if (headerValue.length > 0) {
            setter.set(carrier, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["BAGGAGE_HEADER"], headerValue);
        }
    }
    extract(context, carrier, getter) {
        const headerValue = getter.get(carrier, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["BAGGAGE_HEADER"]);
        const baggageString = Array.isArray(headerValue) ? headerValue.join(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["BAGGAGE_ITEMS_SEPARATOR"]) : headerValue;
        if (!baggageString) return context;
        const baggage = {};
        if (baggageString.length === 0) {
            return context;
        }
        const pairs = baggageString.split(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["BAGGAGE_ITEMS_SEPARATOR"]);
        pairs.forEach((entry)=>{
            const keyPair = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["parsePairKeyValue"])(entry);
            if (keyPair) {
                const baggageEntry = {
                    value: keyPair.value
                };
                if (keyPair.metadata) {
                    baggageEntry.metadata = keyPair.metadata;
                }
                baggage[keyPair.key] = baggageEntry;
            }
        });
        if (Object.entries(baggage).length === 0) {
            return context;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$propagation$2d$api$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["propagation"].setBaggage(context, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$propagation$2d$api$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["propagation"].createBaggage(baggage));
    }
    fields() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$baggage$2f$constants$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["BAGGAGE_HEADER"]
        ];
    }
}
}),
"[project]/portfolio/node_modules/@opentelemetry/core/build/esm/version.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ // this is autogenerated file, see scripts/version-update.js
__turbopack_context__.s([
    "VERSION",
    ()=>VERSION
]);
const VERSION = '2.7.0';
}),
"[project]/portfolio/node_modules/@opentelemetry/core/build/esm/semconv.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ /*
 * This file contains a copy of unstable semantic convention definitions
 * used by this package.
 * @see https://github.com/open-telemetry/opentelemetry-js/tree/main/semantic-conventions#unstable-semconv
 */ /**
 * The name of the runtime of this process.
 *
 * @example OpenJDK Runtime Environment
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */ __turbopack_context__.s([
    "ATTR_PROCESS_RUNTIME_NAME",
    ()=>ATTR_PROCESS_RUNTIME_NAME
]);
const ATTR_PROCESS_RUNTIME_NAME = 'process.runtime.name';
}),
"[project]/portfolio/node_modules/@opentelemetry/core/build/esm/platform/browser/sdk-info.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SDK_INFO",
    ()=>SDK_INFO
]);
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$version$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/core/build/esm/version.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$stable_attributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/semantic-conventions/build/esm/stable_attributes.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$semconv$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/core/build/esm/semconv.js [instrumentation-edge] (ecmascript)");
;
;
;
const SDK_INFO = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$stable_attributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["ATTR_TELEMETRY_SDK_NAME"]]: 'opentelemetry',
    [__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$semconv$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["ATTR_PROCESS_RUNTIME_NAME"]]: 'browser',
    [__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$stable_attributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["ATTR_TELEMETRY_SDK_LANGUAGE"]]: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$stable_attributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["TELEMETRY_SDK_LANGUAGE_VALUE_WEBJS"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$stable_attributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["ATTR_TELEMETRY_SDK_VERSION"]]: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$version$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["VERSION"]
};
}),
"[project]/portfolio/node_modules/@opentelemetry/sdk-trace-base/build/esm/Sampler.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * A sampling decision that determines how a {@link Span} will be recorded
 * and collected.
 */ __turbopack_context__.s([
    "SamplingDecision",
    ()=>SamplingDecision
]);
var SamplingDecision;
(function(SamplingDecision) {
    /**
     * `Span.isRecording() === false`, span will not be recorded and all events
     * and attributes will be dropped.
     */ SamplingDecision[SamplingDecision["NOT_RECORD"] = 0] = "NOT_RECORD";
    /**
     * `Span.isRecording() === true`, but `Sampled` flag in {@link TraceFlags}
     * MUST NOT be set.
     */ SamplingDecision[SamplingDecision["RECORD"] = 1] = "RECORD";
    /**
     * `Span.isRecording() === true` AND `Sampled` flag in {@link TraceFlags}
     * MUST be set.
     */ SamplingDecision[SamplingDecision["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
})(SamplingDecision || (SamplingDecision = {}));
}),
"[project]/portfolio/node_modules/@opentelemetry/resources/build/esm/default-service-name.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_clearDefaultServiceNameCache",
    ()=>_clearDefaultServiceNameCache,
    "defaultServiceName",
    ()=>defaultServiceName
]);
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ let serviceName;
function defaultServiceName() {
    if (serviceName === undefined) {
        try {
            const argv0 = globalThis.process.argv0;
            serviceName = argv0 ? `unknown_service:${argv0}` : 'unknown_service';
        } catch  {
            serviceName = 'unknown_service';
        }
    }
    return serviceName;
}
function _clearDefaultServiceNameCache() {
    serviceName = undefined;
}
}),
"[project]/portfolio/node_modules/@opentelemetry/resources/build/esm/utils.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "isPromiseLike",
    ()=>isPromiseLike
]);
const isPromiseLike = (val)=>{
    return val !== null && typeof val === 'object' && typeof val.then === 'function';
};
}),
"[project]/portfolio/node_modules/@opentelemetry/resources/build/esm/ResourceImpl.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultResource",
    ()=>defaultResource,
    "emptyResource",
    ()=>emptyResource,
    "resourceFromAttributes",
    ()=>resourceFromAttributes,
    "resourceFromDetectedResource",
    ()=>resourceFromDetectedResource
]);
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/api/build/esm/diag-api.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$browser$2f$sdk$2d$info$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/core/build/esm/platform/browser/sdk-info.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$stable_attributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/semantic-conventions/build/esm/stable_attributes.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$default$2d$service$2d$name$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/resources/build/esm/default-service-name.js [instrumentation-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@opentelemetry/resources/build/esm/utils.js [instrumentation-edge] (ecmascript)");
;
;
;
;
;
class ResourceImpl {
    _rawAttributes;
    _asyncAttributesPending = false;
    _schemaUrl;
    _memoizedAttributes;
    static FromAttributeList(attributes, options) {
        const res = new ResourceImpl({}, options);
        res._rawAttributes = guardedRawAttributes(attributes);
        res._asyncAttributesPending = attributes.filter(([_, val])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["isPromiseLike"])(val)).length > 0;
        return res;
    }
    constructor(/**
     * A dictionary of attributes with string keys and values that provide
     * information about the entity as numbers, strings or booleans
     * TODO: Consider to add check/validation on attributes.
     */ resource, options){
        const attributes = resource.attributes ?? {};
        this._rawAttributes = Object.entries(attributes).map(([k, v])=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["isPromiseLike"])(v)) {
                // side-effect
                this._asyncAttributesPending = true;
            }
            return [
                k,
                v
            ];
        });
        this._rawAttributes = guardedRawAttributes(this._rawAttributes);
        this._schemaUrl = validateSchemaUrl(options?.schemaUrl);
    }
    get asyncAttributesPending() {
        return this._asyncAttributesPending;
    }
    async waitForAsyncAttributes() {
        if (!this.asyncAttributesPending) {
            return;
        }
        for(let i = 0; i < this._rawAttributes.length; i++){
            const [k, v] = this._rawAttributes[i];
            this._rawAttributes[i] = [
                k,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["isPromiseLike"])(v) ? await v : v
            ];
        }
        this._asyncAttributesPending = false;
    }
    get attributes() {
        if (this.asyncAttributesPending) {
            __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["diag"].error('Accessing resource attributes before async attributes settled');
        }
        if (this._memoizedAttributes) {
            return this._memoizedAttributes;
        }
        const attrs = {};
        for (const [k, v] of this._rawAttributes){
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["isPromiseLike"])(v)) {
                __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["diag"].debug(`Unsettled resource attribute ${k} skipped`);
                continue;
            }
            if (v != null) {
                attrs[k] ??= v;
            }
        }
        // only memoize output if all attributes are settled
        if (!this._asyncAttributesPending) {
            this._memoizedAttributes = attrs;
        }
        return attrs;
    }
    getRawAttributes() {
        return this._rawAttributes;
    }
    get schemaUrl() {
        return this._schemaUrl;
    }
    merge(resource) {
        if (resource == null) return this;
        // Order is important
        // Spec states incoming attributes override existing attributes
        const mergedSchemaUrl = mergeSchemaUrl(this, resource);
        const mergedOptions = mergedSchemaUrl ? {
            schemaUrl: mergedSchemaUrl
        } : undefined;
        return ResourceImpl.FromAttributeList([
            ...resource.getRawAttributes(),
            ...this.getRawAttributes()
        ], mergedOptions);
    }
}
function resourceFromAttributes(attributes, options) {
    return ResourceImpl.FromAttributeList(Object.entries(attributes), options);
}
function resourceFromDetectedResource(detectedResource, options) {
    return new ResourceImpl(detectedResource, options);
}
function emptyResource() {
    return resourceFromAttributes({});
}
function defaultResource() {
    return resourceFromAttributes({
        [__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$stable_attributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["ATTR_SERVICE_NAME"]]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$default$2d$service$2d$name$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["defaultServiceName"])(),
        [__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$stable_attributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["ATTR_TELEMETRY_SDK_LANGUAGE"]]: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$browser$2f$sdk$2d$info$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["SDK_INFO"][__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$stable_attributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["ATTR_TELEMETRY_SDK_LANGUAGE"]],
        [__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$stable_attributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["ATTR_TELEMETRY_SDK_NAME"]]: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$browser$2f$sdk$2d$info$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["SDK_INFO"][__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$stable_attributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["ATTR_TELEMETRY_SDK_NAME"]],
        [__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$stable_attributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["ATTR_TELEMETRY_SDK_VERSION"]]: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$core$2f$build$2f$esm$2f$platform$2f$browser$2f$sdk$2d$info$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["SDK_INFO"][__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$semantic$2d$conventions$2f$build$2f$esm$2f$stable_attributes$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["ATTR_TELEMETRY_SDK_VERSION"]]
    });
}
function guardedRawAttributes(attributes) {
    return attributes.map(([k, v])=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$utils$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["isPromiseLike"])(v)) {
            return [
                k,
                v.catch((err)=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["diag"].debug('promise rejection for resource attribute: %s - %s', k, err);
                    return undefined;
                })
            ];
        }
        return [
            k,
            v
        ];
    });
}
function validateSchemaUrl(schemaUrl) {
    if (typeof schemaUrl === 'string' || schemaUrl === undefined) {
        return schemaUrl;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["diag"].warn('Schema URL must be string or undefined, got %s. Schema URL will be ignored.', schemaUrl);
    return undefined;
}
function mergeSchemaUrl(old, updating) {
    const oldSchemaUrl = old?.schemaUrl;
    const updatingSchemaUrl = updating?.schemaUrl;
    const isOldEmpty = oldSchemaUrl === undefined || oldSchemaUrl === '';
    const isUpdatingEmpty = updatingSchemaUrl === undefined || updatingSchemaUrl === '';
    if (isOldEmpty) {
        return updatingSchemaUrl;
    }
    if (isUpdatingEmpty) {
        return oldSchemaUrl;
    }
    if (oldSchemaUrl === updatingSchemaUrl) {
        return oldSchemaUrl;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$2d$edge$5d$__$28$ecmascript$29$__["diag"].warn('Schema URL merge conflict: old resource has "%s", updating resource has "%s". Resulting resource will have undefined Schema URL.', oldSchemaUrl, updatingSchemaUrl);
    return undefined;
}
}),
"[project]/portfolio/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [instrumentation-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports._ = _interop_require_default;
}),
"[project]/portfolio/node_modules/next/dist/shared/lib/modern-browserslist-target.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Note: This file is JS because it's used by the taskfile-swc.js file, which is JS.
// Keep file changes in sync with the corresponding `.d.ts` files.
/**
 * These are the minimum browser versions that we consider "modern" and thus compile for by default.
 * This list was generated using `pnpm browserslist "baseline widely available"` on 2025-10-01.
 */ const MODERN_BROWSERSLIST_TARGET = [
    'chrome 111',
    'edge 111',
    'firefox 111',
    'safari 16.4'
];
module.exports = MODERN_BROWSERSLIST_TARGET;
}),
"[project]/portfolio/node_modules/next/dist/shared/lib/entry-constants.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    UNDERSCORE_GLOBAL_ERROR_ROUTE: null,
    UNDERSCORE_GLOBAL_ERROR_ROUTE_ENTRY: null,
    UNDERSCORE_NOT_FOUND_ROUTE: null,
    UNDERSCORE_NOT_FOUND_ROUTE_ENTRY: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    UNDERSCORE_GLOBAL_ERROR_ROUTE: function() {
        return UNDERSCORE_GLOBAL_ERROR_ROUTE;
    },
    UNDERSCORE_GLOBAL_ERROR_ROUTE_ENTRY: function() {
        return UNDERSCORE_GLOBAL_ERROR_ROUTE_ENTRY;
    },
    UNDERSCORE_NOT_FOUND_ROUTE: function() {
        return UNDERSCORE_NOT_FOUND_ROUTE;
    },
    UNDERSCORE_NOT_FOUND_ROUTE_ENTRY: function() {
        return UNDERSCORE_NOT_FOUND_ROUTE_ENTRY;
    }
});
const UNDERSCORE_NOT_FOUND_ROUTE = '/_not-found';
const UNDERSCORE_NOT_FOUND_ROUTE_ENTRY = `${UNDERSCORE_NOT_FOUND_ROUTE}/page`;
const UNDERSCORE_GLOBAL_ERROR_ROUTE = '/_global-error';
const UNDERSCORE_GLOBAL_ERROR_ROUTE_ENTRY = `${UNDERSCORE_GLOBAL_ERROR_ROUTE}/page`;
}),
"[project]/portfolio/node_modules/next/dist/shared/lib/constants.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    APP_CLIENT_INTERNALS: null,
    APP_PATHS_MANIFEST: null,
    APP_PATH_ROUTES_MANIFEST: null,
    AdapterOutputType: null,
    BARREL_OPTIMIZATION_PREFIX: null,
    BLOCKED_PAGES: null,
    BUILD_ID_FILE: null,
    BUILD_MANIFEST: null,
    CLIENT_PUBLIC_FILES_PATH: null,
    CLIENT_REFERENCE_MANIFEST: null,
    CLIENT_STATIC_FILES_PATH: null,
    CLIENT_STATIC_FILES_RUNTIME_MAIN: null,
    CLIENT_STATIC_FILES_RUNTIME_MAIN_APP: null,
    CLIENT_STATIC_FILES_RUNTIME_POLYFILLS: null,
    CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL: null,
    CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH: null,
    CLIENT_STATIC_FILES_RUNTIME_WEBPACK: null,
    COMPILER_INDEXES: null,
    COMPILER_NAMES: null,
    CONFIG_FILES: null,
    DEFAULT_RUNTIME_WEBPACK: null,
    DEFAULT_SANS_SERIF_FONT: null,
    DEFAULT_SERIF_FONT: null,
    DEV_CLIENT_MIDDLEWARE_MANIFEST: null,
    DEV_CLIENT_PAGES_MANIFEST: null,
    DYNAMIC_CSS_MANIFEST: null,
    EDGE_RUNTIME_WEBPACK: null,
    EDGE_UNSUPPORTED_NODE_APIS: null,
    EXPORT_DETAIL: null,
    EXPORT_MARKER: null,
    FUNCTIONS_CONFIG_MANIFEST: null,
    IMAGES_MANIFEST: null,
    INTERCEPTION_ROUTE_REWRITE_MANIFEST: null,
    MIDDLEWARE_BUILD_MANIFEST: null,
    MIDDLEWARE_MANIFEST: null,
    MIDDLEWARE_REACT_LOADABLE_MANIFEST: null,
    MODERN_BROWSERSLIST_TARGET: null,
    NEXT_BUILTIN_DOCUMENT: null,
    NEXT_FONT_MANIFEST: null,
    PAGES_MANIFEST: null,
    PHASE_ANALYZE: null,
    PHASE_DEVELOPMENT_SERVER: null,
    PHASE_EXPORT: null,
    PHASE_INFO: null,
    PHASE_PRODUCTION_BUILD: null,
    PHASE_PRODUCTION_SERVER: null,
    PHASE_TEST: null,
    PREFETCH_HINTS: null,
    PRERENDER_MANIFEST: null,
    REACT_LOADABLE_MANIFEST: null,
    ROUTES_MANIFEST: null,
    RSC_MODULE_TYPES: null,
    SERVER_DIRECTORY: null,
    SERVER_FILES_MANIFEST: null,
    SERVER_PROPS_ID: null,
    SERVER_REFERENCE_MANIFEST: null,
    STATIC_PROPS_ID: null,
    STATIC_STATUS_PAGES: null,
    STRING_LITERAL_DROP_BUNDLE: null,
    SUBRESOURCE_INTEGRITY_MANIFEST: null,
    SYSTEM_ENTRYPOINTS: null,
    TRACE_OUTPUT_VERSION: null,
    TURBOPACK_CLIENT_BUILD_MANIFEST: null,
    TURBOPACK_CLIENT_MIDDLEWARE_MANIFEST: null,
    TURBO_TRACE_DEFAULT_MEMORY_LIMIT: null,
    UNDERSCORE_GLOBAL_ERROR_ROUTE: null,
    UNDERSCORE_GLOBAL_ERROR_ROUTE_ENTRY: null,
    UNDERSCORE_NOT_FOUND_ROUTE: null,
    UNDERSCORE_NOT_FOUND_ROUTE_ENTRY: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    APP_CLIENT_INTERNALS: function() {
        return APP_CLIENT_INTERNALS;
    },
    APP_PATHS_MANIFEST: function() {
        return APP_PATHS_MANIFEST;
    },
    APP_PATH_ROUTES_MANIFEST: function() {
        return APP_PATH_ROUTES_MANIFEST;
    },
    AdapterOutputType: function() {
        return AdapterOutputType;
    },
    BARREL_OPTIMIZATION_PREFIX: function() {
        return BARREL_OPTIMIZATION_PREFIX;
    },
    BLOCKED_PAGES: function() {
        return BLOCKED_PAGES;
    },
    BUILD_ID_FILE: function() {
        return BUILD_ID_FILE;
    },
    BUILD_MANIFEST: function() {
        return BUILD_MANIFEST;
    },
    CLIENT_PUBLIC_FILES_PATH: function() {
        return CLIENT_PUBLIC_FILES_PATH;
    },
    CLIENT_REFERENCE_MANIFEST: function() {
        return CLIENT_REFERENCE_MANIFEST;
    },
    CLIENT_STATIC_FILES_PATH: function() {
        return CLIENT_STATIC_FILES_PATH;
    },
    CLIENT_STATIC_FILES_RUNTIME_MAIN: function() {
        return CLIENT_STATIC_FILES_RUNTIME_MAIN;
    },
    CLIENT_STATIC_FILES_RUNTIME_MAIN_APP: function() {
        return CLIENT_STATIC_FILES_RUNTIME_MAIN_APP;
    },
    CLIENT_STATIC_FILES_RUNTIME_POLYFILLS: function() {
        return CLIENT_STATIC_FILES_RUNTIME_POLYFILLS;
    },
    CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL: function() {
        return CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL;
    },
    CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH: function() {
        return CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH;
    },
    CLIENT_STATIC_FILES_RUNTIME_WEBPACK: function() {
        return CLIENT_STATIC_FILES_RUNTIME_WEBPACK;
    },
    COMPILER_INDEXES: function() {
        return COMPILER_INDEXES;
    },
    COMPILER_NAMES: function() {
        return COMPILER_NAMES;
    },
    CONFIG_FILES: function() {
        return CONFIG_FILES;
    },
    DEFAULT_RUNTIME_WEBPACK: function() {
        return DEFAULT_RUNTIME_WEBPACK;
    },
    DEFAULT_SANS_SERIF_FONT: function() {
        return DEFAULT_SANS_SERIF_FONT;
    },
    DEFAULT_SERIF_FONT: function() {
        return DEFAULT_SERIF_FONT;
    },
    DEV_CLIENT_MIDDLEWARE_MANIFEST: function() {
        return DEV_CLIENT_MIDDLEWARE_MANIFEST;
    },
    DEV_CLIENT_PAGES_MANIFEST: function() {
        return DEV_CLIENT_PAGES_MANIFEST;
    },
    DYNAMIC_CSS_MANIFEST: function() {
        return DYNAMIC_CSS_MANIFEST;
    },
    EDGE_RUNTIME_WEBPACK: function() {
        return EDGE_RUNTIME_WEBPACK;
    },
    EDGE_UNSUPPORTED_NODE_APIS: function() {
        return EDGE_UNSUPPORTED_NODE_APIS;
    },
    EXPORT_DETAIL: function() {
        return EXPORT_DETAIL;
    },
    EXPORT_MARKER: function() {
        return EXPORT_MARKER;
    },
    FUNCTIONS_CONFIG_MANIFEST: function() {
        return FUNCTIONS_CONFIG_MANIFEST;
    },
    IMAGES_MANIFEST: function() {
        return IMAGES_MANIFEST;
    },
    INTERCEPTION_ROUTE_REWRITE_MANIFEST: function() {
        return INTERCEPTION_ROUTE_REWRITE_MANIFEST;
    },
    MIDDLEWARE_BUILD_MANIFEST: function() {
        return MIDDLEWARE_BUILD_MANIFEST;
    },
    MIDDLEWARE_MANIFEST: function() {
        return MIDDLEWARE_MANIFEST;
    },
    MIDDLEWARE_REACT_LOADABLE_MANIFEST: function() {
        return MIDDLEWARE_REACT_LOADABLE_MANIFEST;
    },
    MODERN_BROWSERSLIST_TARGET: function() {
        return _modernbrowserslisttarget.default;
    },
    NEXT_BUILTIN_DOCUMENT: function() {
        return NEXT_BUILTIN_DOCUMENT;
    },
    NEXT_FONT_MANIFEST: function() {
        return NEXT_FONT_MANIFEST;
    },
    PAGES_MANIFEST: function() {
        return PAGES_MANIFEST;
    },
    PHASE_ANALYZE: function() {
        return PHASE_ANALYZE;
    },
    PHASE_DEVELOPMENT_SERVER: function() {
        return PHASE_DEVELOPMENT_SERVER;
    },
    PHASE_EXPORT: function() {
        return PHASE_EXPORT;
    },
    PHASE_INFO: function() {
        return PHASE_INFO;
    },
    PHASE_PRODUCTION_BUILD: function() {
        return PHASE_PRODUCTION_BUILD;
    },
    PHASE_PRODUCTION_SERVER: function() {
        return PHASE_PRODUCTION_SERVER;
    },
    PHASE_TEST: function() {
        return PHASE_TEST;
    },
    PREFETCH_HINTS: function() {
        return PREFETCH_HINTS;
    },
    PRERENDER_MANIFEST: function() {
        return PRERENDER_MANIFEST;
    },
    REACT_LOADABLE_MANIFEST: function() {
        return REACT_LOADABLE_MANIFEST;
    },
    ROUTES_MANIFEST: function() {
        return ROUTES_MANIFEST;
    },
    RSC_MODULE_TYPES: function() {
        return RSC_MODULE_TYPES;
    },
    SERVER_DIRECTORY: function() {
        return SERVER_DIRECTORY;
    },
    SERVER_FILES_MANIFEST: function() {
        return SERVER_FILES_MANIFEST;
    },
    SERVER_PROPS_ID: function() {
        return SERVER_PROPS_ID;
    },
    SERVER_REFERENCE_MANIFEST: function() {
        return SERVER_REFERENCE_MANIFEST;
    },
    STATIC_PROPS_ID: function() {
        return STATIC_PROPS_ID;
    },
    STATIC_STATUS_PAGES: function() {
        return STATIC_STATUS_PAGES;
    },
    STRING_LITERAL_DROP_BUNDLE: function() {
        return STRING_LITERAL_DROP_BUNDLE;
    },
    SUBRESOURCE_INTEGRITY_MANIFEST: function() {
        return SUBRESOURCE_INTEGRITY_MANIFEST;
    },
    SYSTEM_ENTRYPOINTS: function() {
        return SYSTEM_ENTRYPOINTS;
    },
    TRACE_OUTPUT_VERSION: function() {
        return TRACE_OUTPUT_VERSION;
    },
    TURBOPACK_CLIENT_BUILD_MANIFEST: function() {
        return TURBOPACK_CLIENT_BUILD_MANIFEST;
    },
    TURBOPACK_CLIENT_MIDDLEWARE_MANIFEST: function() {
        return TURBOPACK_CLIENT_MIDDLEWARE_MANIFEST;
    },
    TURBO_TRACE_DEFAULT_MEMORY_LIMIT: function() {
        return TURBO_TRACE_DEFAULT_MEMORY_LIMIT;
    },
    UNDERSCORE_GLOBAL_ERROR_ROUTE: function() {
        return _entryconstants.UNDERSCORE_GLOBAL_ERROR_ROUTE;
    },
    UNDERSCORE_GLOBAL_ERROR_ROUTE_ENTRY: function() {
        return _entryconstants.UNDERSCORE_GLOBAL_ERROR_ROUTE_ENTRY;
    },
    UNDERSCORE_NOT_FOUND_ROUTE: function() {
        return _entryconstants.UNDERSCORE_NOT_FOUND_ROUTE;
    },
    UNDERSCORE_NOT_FOUND_ROUTE_ENTRY: function() {
        return _entryconstants.UNDERSCORE_NOT_FOUND_ROUTE_ENTRY;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/portfolio/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [instrumentation-edge] (ecmascript)");
const _modernbrowserslisttarget = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/portfolio/node_modules/next/dist/shared/lib/modern-browserslist-target.js [instrumentation-edge] (ecmascript)"));
const _entryconstants = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/shared/lib/entry-constants.js [instrumentation-edge] (ecmascript)");
const COMPILER_NAMES = {
    client: 'client',
    server: 'server',
    edgeServer: 'edge-server'
};
const COMPILER_INDEXES = {
    [COMPILER_NAMES.client]: 0,
    [COMPILER_NAMES.server]: 1,
    [COMPILER_NAMES.edgeServer]: 2
};
var AdapterOutputType = /*#__PURE__*/ function(AdapterOutputType) {
    /**
   * `PAGES` represents all the React pages that are under `pages/`.
   */ AdapterOutputType["PAGES"] = "PAGES";
    /**
   * `PAGES_API` represents all the API routes under `pages/api/`.
   */ AdapterOutputType["PAGES_API"] = "PAGES_API";
    /**
   * `APP_PAGE` represents all the React pages that are under `app/` with the
   * filename of `page.{j,t}s{,x}`.
   */ AdapterOutputType["APP_PAGE"] = "APP_PAGE";
    /**
   * `APP_ROUTE` represents all the API routes and metadata routes that are under `app/` with the
   * filename of `route.{j,t}s{,x}`.
   */ AdapterOutputType["APP_ROUTE"] = "APP_ROUTE";
    /**
   * `PRERENDER` represents an ISR enabled route that might
   * have a seeded cache entry or fallback generated during build
   */ AdapterOutputType["PRERENDER"] = "PRERENDER";
    /**
   * `STATIC_FILE` represents a static file (ie /_next/static)
   */ AdapterOutputType["STATIC_FILE"] = "STATIC_FILE";
    /**
   * `MIDDLEWARE` represents the middleware output if present
   */ AdapterOutputType["MIDDLEWARE"] = "MIDDLEWARE";
    return AdapterOutputType;
}({});
const PHASE_EXPORT = 'phase-export';
const PHASE_ANALYZE = 'phase-analyze';
const PHASE_PRODUCTION_BUILD = 'phase-production-build';
const PHASE_PRODUCTION_SERVER = 'phase-production-server';
const PHASE_DEVELOPMENT_SERVER = 'phase-development-server';
const PHASE_TEST = 'phase-test';
const PHASE_INFO = 'phase-info';
const PAGES_MANIFEST = 'pages-manifest.json';
const APP_PATHS_MANIFEST = 'app-paths-manifest.json';
const APP_PATH_ROUTES_MANIFEST = 'app-path-routes-manifest.json';
const BUILD_MANIFEST = 'build-manifest.json';
const FUNCTIONS_CONFIG_MANIFEST = 'functions-config-manifest.json';
const SUBRESOURCE_INTEGRITY_MANIFEST = 'subresource-integrity-manifest';
const NEXT_FONT_MANIFEST = 'next-font-manifest';
const EXPORT_MARKER = 'export-marker.json';
const EXPORT_DETAIL = 'export-detail.json';
const PRERENDER_MANIFEST = 'prerender-manifest.json';
const PREFETCH_HINTS = 'prefetch-hints.json';
const ROUTES_MANIFEST = 'routes-manifest.json';
const IMAGES_MANIFEST = 'images-manifest.json';
const SERVER_FILES_MANIFEST = 'required-server-files';
const DEV_CLIENT_PAGES_MANIFEST = '_devPagesManifest.json';
const MIDDLEWARE_MANIFEST = 'middleware-manifest.json';
const TURBOPACK_CLIENT_MIDDLEWARE_MANIFEST = '_clientMiddlewareManifest.js';
const TURBOPACK_CLIENT_BUILD_MANIFEST = 'client-build-manifest.json';
const DEV_CLIENT_MIDDLEWARE_MANIFEST = '_devMiddlewareManifest.json';
const REACT_LOADABLE_MANIFEST = 'react-loadable-manifest.json';
const SERVER_DIRECTORY = 'server';
const CONFIG_FILES = [
    'next.config.js',
    'next.config.mjs',
    'next.config.ts',
    // process.features can be undefined on Edge runtime
    // TODO: Remove `as any` once we bump @types/node to v22.10.0+
    ...process?.features?.typescript ? [
        'next.config.mts'
    ] : []
];
const BUILD_ID_FILE = 'BUILD_ID';
const BLOCKED_PAGES = [
    '/_document',
    '/_app',
    '/_error'
];
const CLIENT_PUBLIC_FILES_PATH = 'public';
const CLIENT_STATIC_FILES_PATH = 'static';
const STRING_LITERAL_DROP_BUNDLE = '__NEXT_DROP_CLIENT_FILE__';
const NEXT_BUILTIN_DOCUMENT = '__NEXT_BUILTIN_DOCUMENT__';
const BARREL_OPTIMIZATION_PREFIX = '__barrel_optimize__';
const CLIENT_REFERENCE_MANIFEST = 'client-reference-manifest';
const SERVER_REFERENCE_MANIFEST = 'server-reference-manifest';
const MIDDLEWARE_BUILD_MANIFEST = 'middleware-build-manifest';
const MIDDLEWARE_REACT_LOADABLE_MANIFEST = 'middleware-react-loadable-manifest';
const INTERCEPTION_ROUTE_REWRITE_MANIFEST = 'interception-route-rewrite-manifest';
const DYNAMIC_CSS_MANIFEST = 'dynamic-css-manifest';
const CLIENT_STATIC_FILES_RUNTIME_MAIN = `main`;
const CLIENT_STATIC_FILES_RUNTIME_MAIN_APP = `${CLIENT_STATIC_FILES_RUNTIME_MAIN}-app`;
const APP_CLIENT_INTERNALS = 'app-pages-internals';
const CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH = `react-refresh`;
const CLIENT_STATIC_FILES_RUNTIME_WEBPACK = `webpack`;
const CLIENT_STATIC_FILES_RUNTIME_POLYFILLS = 'polyfills';
const CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL = Symbol(CLIENT_STATIC_FILES_RUNTIME_POLYFILLS);
const DEFAULT_RUNTIME_WEBPACK = 'webpack-runtime';
const EDGE_RUNTIME_WEBPACK = 'edge-runtime-webpack';
const STATIC_PROPS_ID = '__N_SSG';
const SERVER_PROPS_ID = '__N_SSP';
const DEFAULT_SERIF_FONT = {
    name: 'Times New Roman',
    xAvgCharWidth: 821,
    azAvgWidth: 854.3953488372093,
    unitsPerEm: 2048
};
const DEFAULT_SANS_SERIF_FONT = {
    name: 'Arial',
    xAvgCharWidth: 904,
    azAvgWidth: 934.5116279069767,
    unitsPerEm: 2048
};
const STATIC_STATUS_PAGES = [
    '/500'
];
const TRACE_OUTPUT_VERSION = 1;
const TURBO_TRACE_DEFAULT_MEMORY_LIMIT = 6000;
const RSC_MODULE_TYPES = {
    client: 'client',
    server: 'server'
};
const EDGE_UNSUPPORTED_NODE_APIS = [
    'clearImmediate',
    'setImmediate',
    'BroadcastChannel',
    'ByteLengthQueuingStrategy',
    'CompressionStream',
    'CountQueuingStrategy',
    'DecompressionStream',
    'DomException',
    'MessageChannel',
    'MessageEvent',
    'MessagePort',
    'ReadableByteStreamController',
    'ReadableStreamBYOBRequest',
    'ReadableStreamDefaultController',
    'TransformStreamDefaultController',
    'WritableStreamDefaultController'
];
const SYSTEM_ENTRYPOINTS = new Set([
    CLIENT_STATIC_FILES_RUNTIME_MAIN,
    CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH,
    CLIENT_STATIC_FILES_RUNTIME_MAIN_APP
]);
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/portfolio/node_modules/next/constants.js [instrumentation-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/shared/lib/constants.js [instrumentation-edge] (ecmascript)");
}),
"[project]/portfolio/node_modules/next/dist/esm/build/templates/edge-wrapper.js { MODULE => \"[project]/portfolio/src/instrumentation.ts [instrumentation-edge] (ecmascript)\" } [instrumentation-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {

// The wrapped module could be an async module, we handle that with the proxy
// here. The comma expression makes sure we don't call the function with the
// module as the "this" arg.
// Turn exports into functions that are also a thenable. This way you can await the whole object
// or  exports (e.g. for Components) or call them directly as though they are async functions
// (e.g. edge functions/middleware, this is what the Edge Runtime does).
// Catch promise to prevent UnhandledPromiseRejectionWarning, this will be propagated through
// the awaited export(s) anyway.
self._ENTRIES ||= {};
const modProm = Promise.resolve().then(()=>__turbopack_context__.i("[project]/portfolio/src/instrumentation.ts [instrumentation-edge] (ecmascript)"));
modProm.catch(()=>{});
self._ENTRIES["middleware_instrumentation"] = new Proxy(modProm, {
    get (innerModProm, name) {
        if (name === 'then') {
            return (res, rej)=>innerModProm.then(res, rej);
        }
        let result = (...args)=>innerModProm.then((mod)=>(0, mod[name])(...args));
        result.then = (res, rej)=>innerModProm.then((mod)=>mod[name]).then(res, rej);
        return result;
    }
});
}),
]);

//# sourceMappingURL=038n_0yzxr_x._.js.map