;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="f8281b9f-1bc3-6554-564f-90c0f01fc2bb")}catch(e){}}();
(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/types.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WINDOW",
    ()=>WINDOW
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/utils/worldwide.js [app-client] (ecmascript)");
;
const WINDOW = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"];
;
}),
"[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/instrument/dom.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addClickKeypressInstrumentationHandler",
    ()=>addClickKeypressInstrumentationHandler,
    "instrumentDOM",
    ()=>instrumentDOM
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/instrument/handlers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/utils/object.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/utils/misc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/types.js [app-client] (ecmascript)");
;
;
const DEBOUNCE_DURATION = 1000;
let debounceTimerID;
let lastCapturedEventType;
let lastCapturedEventTargetId;
/**
 * Add an instrumentation handler for when a click or a keypress happens.
 *
 * Use at your own risk, this might break without changelog notice, only used internally.
 * @hidden
 */ function addClickKeypressInstrumentationHandler(handler) {
    const type = 'dom';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addHandler"])(type, handler);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maybeInstrument"])(type, instrumentDOM);
}
/** Exported for tests only. */ function instrumentDOM() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document) {
        return;
    }
    // Make it so that any click or keypress that is unhandled / bubbled up all the way to the document triggers our dom
    // handlers. (Normally we have only one, which captures a breadcrumb for each click or keypress.) Do this before
    // we instrument `addEventListener` so that we don't end up attaching this handler twice.
    const triggerDOMHandler = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["triggerHandlers"].bind(null, 'dom');
    const globalDOMEventHandler = makeDOMEventHandler(triggerDOMHandler, true);
    __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document.addEventListener('click', globalDOMEventHandler, false);
    __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document.addEventListener('keypress', globalDOMEventHandler, false);
    // After hooking into click and keypress events bubbled up to `document`, we also hook into user-handled
    // clicks & keypresses, by adding an event listener of our own to any element to which they add a listener. That
    // way, whenever one of their handlers is triggered, ours will be, too. (This is needed because their handler
    // could potentially prevent the event from bubbling up to our global listeners. This way, our handler are still
    // guaranteed to fire at least once.)
    [
        'EventTarget',
        'Node'
    ].forEach((target)=>{
        const globalObject = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"];
        const proto = globalObject[target]?.prototype;
        // eslint-disable-next-line no-prototype-builtins
        if (!proto?.hasOwnProperty?.('addEventListener')) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fill"])(proto, 'addEventListener', function(originalAddEventListener) {
            return function(type, listener, options) {
                if (type === 'click' || type == 'keypress') {
                    try {
                        const handlers = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {};
                        const handlerForType = handlers[type] = handlers[type] || {
                            refCount: 0
                        };
                        if (!handlerForType.handler) {
                            const handler = makeDOMEventHandler(triggerDOMHandler);
                            handlerForType.handler = handler;
                            originalAddEventListener.call(this, type, handler, options);
                        }
                        handlerForType.refCount++;
                    } catch  {
                    // Accessing dom properties is always fragile.
                    // Also allows us to skip `addEventListeners` calls with no proper `this` context.
                    }
                }
                return originalAddEventListener.call(this, type, listener, options);
            };
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fill"])(proto, 'removeEventListener', function(originalRemoveEventListener) {
            return function(type, listener, options) {
                if (type === 'click' || type == 'keypress') {
                    try {
                        const handlers = this.__sentry_instrumentation_handlers__ || {};
                        const handlerForType = handlers[type];
                        if (handlerForType) {
                            handlerForType.refCount--;
                            // If there are no longer any custom handlers of the current type on this element, we can remove ours, too.
                            if (handlerForType.refCount <= 0) {
                                originalRemoveEventListener.call(this, type, handlerForType.handler, options);
                                handlerForType.handler = undefined;
                                delete handlers[type]; // eslint-disable-line @typescript-eslint/no-dynamic-delete
                            }
                            // If there are no longer any custom handlers of any type on this element, cleanup everything.
                            if (Object.keys(handlers).length === 0) {
                                delete this.__sentry_instrumentation_handlers__;
                            }
                        }
                    } catch  {
                    // Accessing dom properties is always fragile.
                    // Also allows us to skip `addEventListeners` calls with no proper `this` context.
                    }
                }
                return originalRemoveEventListener.call(this, type, listener, options);
            };
        });
    });
}
/**
 * Check whether the event is similar to the last captured one. For example, two click events on the same button.
 */ function isSimilarToLastCapturedEvent(event) {
    // If both events have different type, then user definitely performed two separate actions. e.g. click + keypress.
    if (event.type !== lastCapturedEventType) {
        return false;
    }
    try {
        // If both events have the same type, it's still possible that actions were performed on different targets.
        // e.g. 2 clicks on different buttons.
        if (!event.target || event.target._sentryId !== lastCapturedEventTargetId) {
            return false;
        }
    } catch  {
    // just accessing `target` property can throw an exception in some rare circumstances
    // see: https://github.com/getsentry/sentry-javascript/issues/838
    }
    // If both events have the same type _and_ same `target` (an element which triggered an event, _not necessarily_
    // to which an event listener was attached), we treat them as the same action, as we want to capture
    // only one breadcrumb. e.g. multiple clicks on the same button, or typing inside a user input box.
    return true;
}
/**
 * Decide whether an event should be captured.
 * @param event event to be captured
 */ function shouldSkipDOMEvent(eventType, target) {
    // We are only interested in filtering `keypress` events for now.
    if (eventType !== 'keypress') {
        return false;
    }
    if (!target?.tagName) {
        return true;
    }
    // Only consider keypress events on actual input elements. This will disregard keypresses targeting body
    // e.g.tabbing through elements, hotkeys, etc.
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
        return false;
    }
    return true;
}
/**
 * Wraps addEventListener to capture UI breadcrumbs
 */ function makeDOMEventHandler(handler, globalListener = false) {
    return (event)=>{
        // It's possible this handler might trigger multiple times for the same
        // event (e.g. event propagation through node ancestors).
        // Ignore if we've already captured that event.
        if (!event || event['_sentryCaptured']) {
            return;
        }
        const target = getEventTarget(event);
        // We always want to skip _some_ events.
        if (shouldSkipDOMEvent(event.type, target)) {
            return;
        }
        // Mark event as "seen"
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addNonEnumerableProperty"])(event, '_sentryCaptured', true);
        if (target && !target._sentryId) {
            // Add UUID to event target so we can identify if
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addNonEnumerableProperty"])(target, '_sentryId', (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uuid4"])());
        }
        const name = event.type === 'keypress' ? 'input' : event.type;
        // If there is no last captured event, it means that we can safely capture the new event and store it for future comparisons.
        // If there is a last captured event, see if the new event is different enough to treat it as a unique one.
        // If that's the case, emit the previous event and store locally the newly-captured DOM event.
        if (!isSimilarToLastCapturedEvent(event)) {
            const handlerData = {
                event,
                name,
                global: globalListener
            };
            handler(handlerData);
            lastCapturedEventType = event.type;
            lastCapturedEventTargetId = target ? target._sentryId : undefined;
        }
        // Start a new debounce timer that will prevent us from capturing multiple events that should be grouped together.
        clearTimeout(debounceTimerID);
        debounceTimerID = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].setTimeout(()=>{
            lastCapturedEventTargetId = undefined;
            lastCapturedEventType = undefined;
        }, DEBOUNCE_DURATION);
    };
}
function getEventTarget(event) {
    try {
        return event.target;
    } catch  {
        // just accessing `target` property can throw an exception in some rare circumstances
        // see: https://github.com/getsentry/sentry-javascript/issues/838
        return null;
    }
}
;
}),
"[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/instrument/xhr.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SENTRY_XHR_DATA_KEY",
    ()=>SENTRY_XHR_DATA_KEY,
    "addXhrInstrumentationHandler",
    ()=>addXhrInstrumentationHandler,
    "instrumentXHR",
    ()=>instrumentXHR
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/instrument/handlers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/utils/time.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/utils/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/types.js [app-client] (ecmascript)");
;
;
const SENTRY_XHR_DATA_KEY = '__sentry_xhr_v3__';
/**
 * Add an instrumentation handler for when an XHR request happens.
 * The handler function is called once when the request starts and once when it ends,
 * which can be identified by checking if it has an `endTimestamp`.
 *
 * Use at your own risk, this might break without changelog notice, only used internally.
 * @hidden
 */ function addXhrInstrumentationHandler(handler) {
    const type = 'xhr';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addHandler"])(type, handler);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maybeInstrument"])(type, instrumentXHR);
}
/** Exported only for tests. */ function instrumentXHR() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].XMLHttpRequest) {
        return;
    }
    const xhrproto = XMLHttpRequest.prototype;
    // eslint-disable-next-line @typescript-eslint/unbound-method
    xhrproto.open = new Proxy(xhrproto.open, {
        apply (originalOpen, xhrOpenThisArg, xhrOpenArgArray) {
            // NOTE: If you are a Sentry user, and you are seeing this stack frame,
            //       it means the error, that was caused by your XHR call did not
            //       have a stack trace. If you are using HttpClient integration,
            //       this is the expected behavior, as we are using this virtual error to capture
            //       the location of your XHR call, and group your HttpClient events accordingly.
            const virtualError = new Error();
            const startTimestamp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timestampInSeconds"])() * 1000;
            // open() should always be called with two or more arguments
            // But to be on the safe side, we actually validate this and bail out if we don't have a method & url
            const method = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(xhrOpenArgArray[0]) ? xhrOpenArgArray[0].toUpperCase() : undefined;
            const url = parseXhrUrlArg(xhrOpenArgArray[1]);
            if (!method || !url) {
                return originalOpen.apply(xhrOpenThisArg, xhrOpenArgArray);
            }
            xhrOpenThisArg[SENTRY_XHR_DATA_KEY] = {
                method,
                url,
                request_headers: {}
            };
            // if Sentry key appears in URL, don't capture it as a request
            if (method === 'POST' && url.match(/sentry_key/)) {
                xhrOpenThisArg.__sentry_own_request__ = true;
            }
            const onreadystatechangeHandler = ()=>{
                // For whatever reason, this is not the same instance here as from the outer method
                const xhrInfo = xhrOpenThisArg[SENTRY_XHR_DATA_KEY];
                if (!xhrInfo) {
                    return;
                }
                if (xhrOpenThisArg.readyState === 4) {
                    try {
                        // touching statusCode in some platforms throws
                        // an exception
                        xhrInfo.status_code = xhrOpenThisArg.status;
                    } catch  {
                    /* do nothing */ }
                    const handlerData = {
                        endTimestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timestampInSeconds"])() * 1000,
                        startTimestamp,
                        xhr: xhrOpenThisArg,
                        virtualError
                    };
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["triggerHandlers"])('xhr', handlerData);
                }
            };
            if ('onreadystatechange' in xhrOpenThisArg && typeof xhrOpenThisArg.onreadystatechange === 'function') {
                xhrOpenThisArg.onreadystatechange = new Proxy(xhrOpenThisArg.onreadystatechange, {
                    apply (originalOnreadystatechange, onreadystatechangeThisArg, onreadystatechangeArgArray) {
                        onreadystatechangeHandler();
                        return originalOnreadystatechange.apply(onreadystatechangeThisArg, onreadystatechangeArgArray);
                    }
                });
            } else {
                xhrOpenThisArg.addEventListener('readystatechange', onreadystatechangeHandler);
            }
            // Intercepting `setRequestHeader` to access the request headers of XHR instance.
            // This will only work for user/library defined headers, not for the default/browser-assigned headers.
            // Request cookies are also unavailable for XHR, as `Cookie` header can't be defined by `setRequestHeader`.
            xhrOpenThisArg.setRequestHeader = new Proxy(xhrOpenThisArg.setRequestHeader, {
                apply (originalSetRequestHeader, setRequestHeaderThisArg, setRequestHeaderArgArray) {
                    const [header, value] = setRequestHeaderArgArray;
                    const xhrInfo = setRequestHeaderThisArg[SENTRY_XHR_DATA_KEY];
                    if (xhrInfo && (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(header) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(value)) {
                        xhrInfo.request_headers[header.toLowerCase()] = value;
                    }
                    return originalSetRequestHeader.apply(setRequestHeaderThisArg, setRequestHeaderArgArray);
                }
            });
            return originalOpen.apply(xhrOpenThisArg, xhrOpenArgArray);
        }
    });
    // eslint-disable-next-line @typescript-eslint/unbound-method
    xhrproto.send = new Proxy(xhrproto.send, {
        apply (originalSend, sendThisArg, sendArgArray) {
            const sentryXhrData = sendThisArg[SENTRY_XHR_DATA_KEY];
            if (!sentryXhrData) {
                return originalSend.apply(sendThisArg, sendArgArray);
            }
            if (sendArgArray[0] !== undefined) {
                sentryXhrData.body = sendArgArray[0];
            }
            const handlerData = {
                startTimestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timestampInSeconds"])() * 1000,
                xhr: sendThisArg
            };
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["triggerHandlers"])('xhr', handlerData);
            return originalSend.apply(sendThisArg, sendArgArray);
        }
    });
}
/**
 * Parses the URL argument of a XHR method to a string.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open#url
 * url: A string or any other object with a stringifier — including a URL object — that provides the URL of the resource to send the request to.
 *
 * @param url - The URL argument of an XHR method
 * @returns The parsed URL string or undefined if the URL is invalid
 */ function parseXhrUrlArg(url) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(url)) {
        return url;
    }
    try {
        // If the passed in argument is not a string, it should have a `toString` method as a stringifier.
        // If that fails, we just return undefined (like in IE11 where URL is not available)
        return url.toString();
    } catch  {} // eslint-disable-line no-empty
    return undefined;
}
;
}),
"[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/instrument/history.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addHistoryInstrumentationHandler",
    ()=>addHistoryInstrumentationHandler,
    "instrumentHistory",
    ()=>instrumentHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/instrument/handlers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$supports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/utils/supports.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/utils/object.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/types.js [app-client] (ecmascript)");
;
;
let lastHref;
/**
 * Add an instrumentation handler for when a fetch request happens.
 * The handler function is called once when the request starts and once when it ends,
 * which can be identified by checking if it has an `endTimestamp`.
 *
 * Use at your own risk, this might break without changelog notice, only used internally.
 * @hidden
 */ function addHistoryInstrumentationHandler(handler) {
    const type = 'history';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addHandler"])(type, handler);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maybeInstrument"])(type, instrumentHistory);
}
/**
 * Exported just for testing
 */ function instrumentHistory() {
    // The `popstate` event may also be triggered on `pushState`, but it may not always reliably be emitted by the browser
    // Which is why we also monkey-patch methods below, in addition to this
    __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].addEventListener('popstate', ()=>{
        const to = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].location.href;
        // keep track of the current URL state, as we always receive only the updated state
        const from = lastHref;
        lastHref = to;
        if (from === to) {
            return;
        }
        const handlerData = {
            from,
            to
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["triggerHandlers"])('history', handlerData);
    });
    // Just guard against this not being available, in weird environments
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$supports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsHistory"])()) {
        return;
    }
    function historyReplacementFunction(originalHistoryFunction) {
        return function(...args) {
            const url = args.length > 2 ? args[2] : undefined;
            if (url) {
                const from = lastHref;
                // Ensure the URL is absolute
                // this can be either a path, then it is relative to the current origin
                // or a full URL of the current origin - other origins are not allowed
                // See: https://developer.mozilla.org/en-US/docs/Web/API/History/pushState#url
                // coerce to string (this is what pushState does)
                const to = getAbsoluteUrl(String(url));
                // keep track of the current URL state, as we always receive only the updated state
                lastHref = to;
                if (from === to) {
                    return originalHistoryFunction.apply(this, args);
                }
                const handlerData = {
                    from,
                    to
                };
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$instrument$2f$handlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["triggerHandlers"])('history', handlerData);
            }
            return originalHistoryFunction.apply(this, args);
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fill"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].history, 'pushState', historyReplacementFunction);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fill"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].history, 'replaceState', historyReplacementFunction);
}
function getAbsoluteUrl(urlOrPath) {
    try {
        const url = new URL(urlOrPath, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].location.origin);
        return url.toString();
    } catch  {
        // fallback, just do nothing
        return urlOrPath;
    }
}
;
}),
"[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/debug-build.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/getNativeImplementation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearCachedImplementation",
    ()=>clearCachedImplementation,
    "fetch",
    ()=>fetch,
    "getNativeImplementation",
    ()=>getNativeImplementation,
    "setTimeout",
    ()=>setTimeout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$supports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/utils/supports.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/utils/debug-logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/types.js [app-client] (ecmascript)");
;
;
;
/**
 * We generally want to use window.fetch / window.setTimeout.
 * However, in some cases this may be wrapped (e.g. by Zone.js for Angular),
 * so we try to get an unpatched version of this from a sandboxed iframe.
 */ const cachedImplementations = {};
/**
 * Get the native implementation of a browser function.
 *
 * This can be used to ensure we get an unwrapped version of a function, in cases where a wrapped function can lead to problems.
 *
 * The following methods can be retrieved:
 * - `setTimeout`: This can be wrapped by e.g. Angular, causing change detection to be triggered.
 * - `fetch`: This can be wrapped by e.g. ad-blockers, causing an infinite loop when a request is blocked.
 */ function getNativeImplementation(name) {
    const cached = cachedImplementations[name];
    if (cached) {
        return cached;
    }
    let impl = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"][name];
    // Fast path to avoid DOM I/O
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$supports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNativeFunction"])(impl)) {
        return cachedImplementations[name] = impl.bind(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"]);
    }
    const document = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document;
    // eslint-disable-next-line deprecation/deprecation
    if (document && typeof document.createElement === 'function') {
        try {
            const sandbox = document.createElement('iframe');
            sandbox.hidden = true;
            document.head.appendChild(sandbox);
            const contentWindow = sandbox.contentWindow;
            if (contentWindow?.[name]) {
                impl = contentWindow[name];
            }
            document.head.removeChild(sandbox);
        } catch (e) {
            // Could not create sandbox iframe, just use window.xxx
            __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"].warn(`Could not create sandbox iframe for ${name} check, bailing to window.${name}: `, e);
        }
    }
    // Sanity check: This _should_ not happen, but if it does, we just skip caching...
    // This can happen e.g. in tests where fetch may not be available in the env, or similar.
    if (!impl) {
        return impl;
    }
    return cachedImplementations[name] = impl.bind(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"]);
}
/** Clear a cached implementation. */ function clearCachedImplementation(name) {
    cachedImplementations[name] = undefined;
}
/**
 * A special usecase for incorrectly wrapped Fetch APIs in conjunction with ad-blockers.
 * Whenever someone wraps the Fetch API and returns the wrong promise chain,
 * this chain becomes orphaned and there is no possible way to capture it's rejections
 * other than allowing it bubble up to this very handler. eg.
 *
 * const f = window.fetch;
 * window.fetch = function () {
 *   const p = f.apply(this, arguments);
 *
 *   p.then(function() {
 *     console.log('hi.');
 *   });
 *
 *   return p;
 * }
 *
 * `p.then(function () { ... })` is producing a completely separate promise chain,
 * however, what's returned is `p` - the result of original `fetch` call.
 *
 * This mean, that whenever we use the Fetch API to send our own requests, _and_
 * some ad-blocker blocks it, this orphaned chain will _always_ reject,
 * effectively causing another event to be captured.
 * This makes a whole process become an infinite loop, which we need to somehow
 * deal with, and break it in one way or another.
 *
 * To deal with this issue, we are making sure that we _always_ use the real
 * browser Fetch API, instead of relying on what `window.fetch` exposes.
 * The only downside to this would be missing our own requests as breadcrumbs,
 * but because we are already not doing this, it should be just fine.
 *
 * Possible failed fetch error messages per-browser:
 *
 * Chrome:  Failed to fetch
 * Edge:    Failed to Fetch
 * Firefox: NetworkError when attempting to fetch resource
 * Safari:  resource blocked by content blocker
 */ function fetch(...rest) {
    return getNativeImplementation('fetch')(...rest);
}
/**
 * Get an unwrapped `setTimeout` method.
 * This ensures that even if e.g. Angular wraps `setTimeout`, we get the native implementation,
 * avoiding triggering change detection.
 */ function setTimeout(...rest) {
    return getNativeImplementation('setTimeout')(...rest);
}
;
}),
"[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/bindReporter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bindReporter",
    ()=>bindReporter
]);
const getRating = (value, thresholds)=>{
    if (value > thresholds[1]) {
        return 'poor';
    }
    if (value > thresholds[0]) {
        return 'needs-improvement';
    }
    return 'good';
};
const bindReporter = (callback, metric, thresholds, reportAllChanges)=>{
    let prevValue;
    let delta;
    return (forceReport)=>{
        if (metric.value >= 0) {
            if (forceReport || reportAllChanges) {
                delta = metric.value - (prevValue ?? 0);
                // Report the metric if there's a non-zero delta or if no previous
                // value exists (which can happen in the case of the document becoming
                // hidden when the metric value is 0).
                // See: https://github.com/GoogleChrome/web-vitals/issues/14
                if (delta || prevValue === undefined) {
                    prevValue = metric.value;
                    metric.delta = delta;
                    metric.rating = getRating(metric.value, thresholds);
                    callback(metric);
                }
            }
        }
    };
};
;
}),
"[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/getNavigationEntry.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNavigationEntry",
    ()=>getNavigationEntry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/types.js [app-client] (ecmascript)");
;
/*
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // sentry-specific change:
// add optional param to not check for responseStart (see comment below)
const getNavigationEntry = (checkResponseStart = true)=>{
    const navigationEntry = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].performance?.getEntriesByType?.('navigation')[0];
    // Check to ensure the `responseStart` property is present and valid.
    // In some cases a zero value is reported by the browser (for
    // privacy/security reasons), and in other cases (bugs) the value is
    // negative or is larger than the current page time. Ignore these cases:
    // - https://github.com/GoogleChrome/web-vitals/issues/137
    // - https://github.com/GoogleChrome/web-vitals/issues/162
    // - https://github.com/GoogleChrome/web-vitals/issues/275
    if (// sentry-specific change:
    // We don't want to check for responseStart for our own use of `getNavigationEntry`
    !checkResponseStart || navigationEntry && navigationEntry.responseStart > 0 && navigationEntry.responseStart < performance.now()) {
        return navigationEntry;
    }
};
;
}),
"[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/getActivationStart.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getActivationStart",
    ()=>getActivationStart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getNavigationEntry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/getNavigationEntry.js [app-client] (ecmascript)");
;
/*
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const getActivationStart = ()=>{
    const navEntry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getNavigationEntry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNavigationEntry"])();
    return navEntry?.activationStart ?? 0;
};
;
}),
"[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/globalListeners.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addPageListener",
    ()=>addPageListener,
    "removePageListener",
    ()=>removePageListener
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/types.js [app-client] (ecmascript)");
;
/**
 * web-vitals 5.1.0 switched listeners to be added on the window rather than the document.
 * Instead of having to check for window/document every time we add a listener, we can use this function.
 */ function addPageListener(type, listener, options) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document) {
        __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].addEventListener(type, listener, options);
    }
}
/**
 * web-vitals 5.1.0 switched listeners to be removed from the window rather than the document.
 * Instead of having to check for window/document every time we remove a listener, we can use this function.
 */ function removePageListener(type, listener, options) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document) {
        __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].removeEventListener(type, listener, options);
    }
}
;
}),
"[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/getVisibilityWatcher.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getVisibilityWatcher",
    ()=>getVisibilityWatcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getActivationStart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/getActivationStart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$globalListeners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/globalListeners.js [app-client] (ecmascript)");
;
;
;
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let firstHiddenTime = -1;
const onHiddenFunctions = new Set();
const initHiddenTime = ()=>{
    // If the document is hidden when this code runs, assume it was always
    // hidden and the page was loaded in the background, with the one exception
    // that visibility state is always 'hidden' during prerendering, so we have
    // to ignore that case until prerendering finishes (see: `prerenderingchange`
    // event logic below).
    return __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document?.visibilityState === 'hidden' && !__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document?.prerendering ? 0 : Infinity;
};
const onVisibilityUpdate = (event)=>{
    // Handle changes to hidden state
    if (isPageHidden(event) && firstHiddenTime > -1) {
        // Sentry-specific change: Also call onHidden callbacks for pagehide events
        // to support older browsers (Safari <14.4) that don't properly fire visibilitychange
        if (event.type === 'visibilitychange' || event.type === 'pagehide') {
            for (const onHiddenFunction of onHiddenFunctions){
                onHiddenFunction();
            }
        }
        // If the document is 'hidden' and no previous hidden timestamp has been
        // set (so is infinity), update it based on the current event data.
        if (!isFinite(firstHiddenTime)) {
            // If the event is a 'visibilitychange' event, it means the page was
            // visible prior to this change, so the event timestamp is the first
            // hidden time.
            // However, if the event is not a 'visibilitychange' event, then it must
            // be a 'prerenderingchange' or 'pagehide' event, and the fact that the document is
            // still 'hidden' from the above check means the tab was activated
            // in a background state and so has always been hidden.
            firstHiddenTime = event.type === 'visibilitychange' ? event.timeStamp : 0;
            // We no longer need the `prerenderingchange` event listener now we've
            // set an initial init time so remove that
            // (we'll keep the visibilitychange and pagehide ones for onHiddenFunction above)
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$globalListeners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removePageListener"])('prerenderingchange', onVisibilityUpdate, true);
        }
    }
};
const getVisibilityWatcher = ()=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document && firstHiddenTime < 0) {
        // Check if we have a previous hidden `visibility-state` performance entry.
        const activationStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getActivationStart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActivationStart"])();
        const firstVisibilityStateHiddenTime = !__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document.prerendering ? globalThis.performance.getEntriesByType('visibility-state').filter((e)=>e.name === 'hidden' && e.startTime > activationStart)[0]?.startTime : undefined;
        // Prefer that, but if it's not available and the document is hidden when
        // this code runs, assume it was hidden since navigation start. This isn't
        // a perfect heuristic, but it's the best we can do until the
        // `visibility-state` performance entry becomes available in all browsers.
        firstHiddenTime = firstVisibilityStateHiddenTime ?? initHiddenTime();
        // Listen for visibility changes so we can handle things like bfcache
        // restores and/or prerender without having to examine individual
        // timestamps in detail and also for onHidden function calls.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$globalListeners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPageListener"])('visibilitychange', onVisibilityUpdate, true);
        // Sentry-specific change: Some browsers have buggy implementations of visibilitychange,
        // so we use pagehide in addition, just to be safe. This is also required for older
        // Safari versions (<14.4) that we still support.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$globalListeners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPageListener"])('pagehide', onVisibilityUpdate, true);
        // IMPORTANT: when a page is prerendering, its `visibilityState` is
        // 'hidden', so in order to account for cases where this module checks for
        // visibility during prerendering, an additional check after prerendering
        // completes is also required.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$globalListeners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPageListener"])('prerenderingchange', onVisibilityUpdate, true);
    }
    return {
        get firstHiddenTime () {
            return firstHiddenTime;
        },
        onHidden (cb) {
            onHiddenFunctions.add(cb);
        }
    };
};
/**
 * Check if the page is hidden, uses the `pagehide` event for older browsers support that we used to have in `onHidden` function.
 * Some browsers we still support (Safari <14.4) don't fully support `visibilitychange`
 * or have known bugs w.r.t the `visibilitychange` event.
 * // TODO (v11): If we decide to drop support for Safari 14.4, we can use the logic from web-vitals 4.2.4
 */ function isPageHidden(event) {
    return event.type === 'pagehide' || __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document?.visibilityState === 'hidden';
}
;
}),
"[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/generateUniqueID.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateUniqueID",
    ()=>generateUniqueID
]);
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Performantly generate a unique, 30-char string by combining a version
 * number, the current timestamp with a 13-digit number integer.
 * @return {string}
 */ const generateUniqueID = ()=>{
    return `v5-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`;
};
;
}),
"[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/initMetric.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initMetric",
    ()=>initMetric
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$generateUniqueID$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/generateUniqueID.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getActivationStart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/getActivationStart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getNavigationEntry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/getNavigationEntry.js [app-client] (ecmascript)");
;
;
;
;
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const initMetric = (name, value = -1)=>{
    const navEntry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getNavigationEntry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNavigationEntry"])();
    let navigationType = 'navigate';
    if (navEntry) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document?.prerendering || (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getActivationStart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActivationStart"])() > 0) {
            navigationType = 'prerender';
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document?.wasDiscarded) {
            navigationType = 'restore';
        } else if (navEntry.type) {
            navigationType = navEntry.type.replace(/_/g, '-');
        }
    }
    // Use `entries` type specific for the metric.
    const entries = [];
    return {
        name,
        value,
        rating: 'good',
        delta: 0,
        entries,
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$generateUniqueID$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateUniqueID"])(),
        navigationType
    };
};
;
}),
"[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/initUnique.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initUnique",
    ()=>initUnique
]);
/*
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const instanceMap = new WeakMap();
/**
 * A function that accepts and identity object and a class object and returns
 * either a new instance of that class or an existing instance, if the
 * identity object was previously used.
 */ function initUnique(identityObj, ClassObj) {
    try {
        if (!instanceMap.get(identityObj)) {
            instanceMap.set(identityObj, new ClassObj());
        }
        return instanceMap.get(identityObj);
    } catch (_e) {
        // --- START Sentry-custom code (try/catch wrapping) ---
        // Fix for cases where identityObj is not a valid key for WeakMap (sometimes a problem in Safari)
        // Just return a new instance without caching it in instanceMap
        return new ClassObj();
    }
// --- END Sentry-custom code ---
}
;
}),
"[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/LayoutShiftManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LayoutShiftManager",
    ()=>LayoutShiftManager
]);
/* eslint-disable jsdoc/require-jsdoc */ /*
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class LayoutShiftManager {
    constructor(){
        LayoutShiftManager.prototype.__init.call(this);
        LayoutShiftManager.prototype.__init2.call(this);
    }
    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    // oxlint-disable-next-line sdk/no-class-field-initializers
    __init() {
        this._sessionValue = 0;
    }
    // oxlint-disable-next-line sdk/no-class-field-initializers
    __init2() {
        this._sessionEntries = [];
    }
    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    _processEntry(entry) {
        // Only count layout shifts without recent user input.
        if (entry.hadRecentInput) return;
        const firstSessionEntry = this._sessionEntries[0];
        // This previously used `this._sessionEntries.at(-1)` but that is ES2022. We support ES2021 and earlier.
        const lastSessionEntry = this._sessionEntries[this._sessionEntries.length - 1];
        // If the entry occurred less than 1 second after the previous entry
        // and less than 5 seconds after the first entry in the session,
        // include the entry in the current session. Otherwise, start a new
        // session.
        if (this._sessionValue && firstSessionEntry && lastSessionEntry && entry.startTime - lastSessionEntry.startTime < 1000 && entry.startTime - firstSessionEntry.startTime < 5000) {
            this._sessionValue += entry.value;
            this._sessionEntries.push(entry);
        } else {
            this._sessionValue = entry.value;
            this._sessionEntries = [
                entry
            ];
        }
        this._onAfterProcessingUnexpectedShift?.(entry);
    }
}
;
}),
"[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/observe.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "observe",
    ()=>observe
]);
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Takes a performance entry type and a callback function, and creates a
 * `PerformanceObserver` instance that will observe the specified entry type
 * with buffering enabled and call the callback _for each entry_.
 *
 * This function also feature-detects entry support and wraps the logic in a
 * try/catch to avoid errors in unsupporting browsers.
 */ const observe = (type, callback, opts = {})=>{
    try {
        if (PerformanceObserver.supportedEntryTypes.includes(type)) {
            const po = new PerformanceObserver((list)=>{
                // Delay by a microtask to workaround a bug in Safari where the
                // callback is invoked immediately, rather than in a separate task.
                // See: https://github.com/GoogleChrome/web-vitals/issues/277
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                Promise.resolve().then(()=>{
                    callback(list.getEntries());
                });
            });
            po.observe({
                type,
                buffered: true,
                ...opts
            });
            return po;
        }
    } catch  {
    // Do nothing.
    }
    return;
};
;
}),
"[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/runOnce.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "runOnce",
    ()=>runOnce
]);
/*
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const runOnce = (cb)=>{
    let called = false;
    return ()=>{
        if (!called) {
            cb();
            called = true;
        }
    };
};
;
}),
"[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/whenActivated.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "whenActivated",
    ()=>whenActivated
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/types.js [app-client] (ecmascript)");
;
/*
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const whenActivated = (callback)=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document?.prerendering) {
        addEventListener('prerenderingchange', ()=>callback(), true);
    } else {
        callback();
    }
};
;
}),
"[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/onFCP.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FCPThresholds",
    ()=>FCPThresholds,
    "onFCP",
    ()=>onFCP
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$bindReporter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/bindReporter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getActivationStart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/getActivationStart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getVisibilityWatcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/getVisibilityWatcher.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$initMetric$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/initMetric.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/observe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$whenActivated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/whenActivated.js [app-client] (ecmascript)");
;
;
;
;
;
;
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Thresholds for FCP. See https://web.dev/articles/fcp#what_is_a_good_fcp_score */ const FCPThresholds = [
    1800,
    3000
];
/**
 * Calculates the [FCP](https://web.dev/articles/fcp) value for the current page and
 * calls the `callback` function once the value is ready, along with the
 * relevant `paint` performance entry used to determine the value. The reported
 * value is a `DOMHighResTimeStamp`.
 */ const onFCP = (onReport, opts = {})=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$whenActivated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["whenActivated"])(()=>{
        const visibilityWatcher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getVisibilityWatcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVisibilityWatcher"])();
        const metric = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$initMetric$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initMetric"])('FCP');
        let report;
        const handleEntries = (entries)=>{
            for (const entry of entries){
                if (entry.name === 'first-contentful-paint') {
                    po.disconnect();
                    // Only report if the page wasn't hidden prior to the first paint.
                    if (entry.startTime < visibilityWatcher.firstHiddenTime) {
                        // The activationStart reference is used because FCP should be
                        // relative to page activation rather than navigation start if the
                        // page was prerendered. But in cases where `activationStart` occurs
                        // after the FCP, this time should be clamped at 0.
                        metric.value = Math.max(entry.startTime - (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getActivationStart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActivationStart"])(), 0);
                        metric.entries.push(entry);
                        report(true);
                    }
                }
            }
        };
        const po = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observe"])('paint', handleEntries);
        if (po) {
            report = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$bindReporter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bindReporter"])(onReport, metric, FCPThresholds, opts.reportAllChanges);
        }
    });
};
;
}),
"[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/getCLS.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CLSThresholds",
    ()=>CLSThresholds,
    "onCLS",
    ()=>onCLS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$bindReporter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/bindReporter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getVisibilityWatcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/getVisibilityWatcher.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$initMetric$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/initMetric.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$initUnique$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/initUnique.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$LayoutShiftManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/LayoutShiftManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/observe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$runOnce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/runOnce.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$onFCP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/onFCP.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Thresholds for CLS. See https://web.dev/articles/cls#what_is_a_good_cls_score */ const CLSThresholds = [
    0.1,
    0.25
];
/**
 * Calculates the [CLS](https://web.dev/articles/cls) value for the current page and
 * calls the `callback` function once the value is ready to be reported, along
 * with all `layout-shift` performance entries that were used in the metric
 * value calculation. The reported value is a `double` (corresponding to a
 * [layout shift score](https://web.dev/articles/cls#layout_shift_score)).
 *
 * If the `reportAllChanges` configuration option is set to `true`, the
 * `callback` function will be called as soon as the value is initially
 * determined as well as any time the value changes throughout the page
 * lifespan.
 *
 * _**Important:** CLS should be continually monitored for changes throughout
 * the entire lifespan of a page—including if the user returns to the page after
 * it's been hidden/backgrounded. However, since browsers often [will not fire
 * additional callbacks once the user has backgrounded a
 * page](https://developer.chrome.com/blog/page-lifecycle-api/#advice-hidden),
 * `callback` is always called when the page's visibility state changes to
 * hidden. As a result, the `callback` function might be called multiple times
 * during the same page load._
 */ const onCLS = (onReport, opts = {})=>{
    // Start monitoring FCP so we can only report CLS if FCP is also reported.
    // Note: this is done to match the current behavior of CrUX.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$onFCP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onFCP"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$runOnce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runOnce"])(()=>{
        const metric = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$initMetric$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initMetric"])('CLS', 0);
        let report;
        const visibilityWatcher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getVisibilityWatcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVisibilityWatcher"])();
        const layoutShiftManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$initUnique$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initUnique"])(opts, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$LayoutShiftManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayoutShiftManager"]);
        const handleEntries = (entries)=>{
            for (const entry of entries){
                layoutShiftManager._processEntry(entry);
            }
            // If the current session value is larger than the current CLS value,
            // update CLS and the entries contributing to it.
            if (layoutShiftManager._sessionValue > metric.value) {
                metric.value = layoutShiftManager._sessionValue;
                metric.entries = layoutShiftManager._sessionEntries;
                report();
            }
        };
        const po = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observe"])('layout-shift', handleEntries);
        if (po) {
            report = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$bindReporter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bindReporter"])(onReport, metric, CLSThresholds, opts.reportAllChanges);
            visibilityWatcher.onHidden(()=>{
                handleEntries(po.takeRecords());
                report(true);
            });
            // Queue a task to report (if nothing else triggers a report first).
            // This allows CLS to be reported as soon as FCP fires when
            // `reportAllChanges` is true.
            __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"]?.setTimeout?.(report);
        }
    }));
};
;
}),
"[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/polyfills/interactionCountPolyfill.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getInteractionCount",
    ()=>getInteractionCount,
    "initInteractionCountPolyfill",
    ()=>initInteractionCountPolyfill
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/observe.js [app-client] (ecmascript)");
;
/*
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let interactionCountEstimate = 0;
let minKnownInteractionId = Infinity;
let maxKnownInteractionId = 0;
const updateEstimate = (entries)=>{
    entries.forEach((e)=>{
        if (e.interactionId) {
            minKnownInteractionId = Math.min(minKnownInteractionId, e.interactionId);
            maxKnownInteractionId = Math.max(maxKnownInteractionId, e.interactionId);
            interactionCountEstimate = maxKnownInteractionId ? (maxKnownInteractionId - minKnownInteractionId) / 7 + 1 : 0;
        }
    });
};
let po;
/**
 * Returns the `interactionCount` value using the native API (if available)
 * or the polyfill estimate in this module.
 */ const getInteractionCount = ()=>{
    return po ? interactionCountEstimate : performance.interactionCount || 0;
};
/**
 * Feature detects native support or initializes the polyfill if needed.
 */ const initInteractionCountPolyfill = ()=>{
    if ('interactionCount' in performance || po) return;
    po = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observe"])('event', updateEstimate, {
        type: 'event',
        buffered: true,
        durationThreshold: 0
    });
};
;
}),
"[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/InteractionManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InteractionManager",
    ()=>InteractionManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$polyfills$2f$interactionCountPolyfill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/polyfills/interactionCountPolyfill.js [app-client] (ecmascript)");
;
/*
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // To prevent unnecessary memory usage on pages with lots of interactions,
// store at most 10 of the longest interactions to consider as INP candidates.
const MAX_INTERACTIONS_TO_CONSIDER = 10;
// Used to store the interaction count after a bfcache restore, since p98
// interaction latencies should only consider the current navigation.
let prevInteractionCount = 0;
/**
 * Returns the interaction count since the last bfcache restore (or for the
 * full page lifecycle if there were no bfcache restores).
 */ const getInteractionCountForNavigation = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$polyfills$2f$interactionCountPolyfill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInteractionCount"])() - prevInteractionCount;
};
/**
 *
 */ class InteractionManager {
    constructor(){
        InteractionManager.prototype.__init.call(this);
        InteractionManager.prototype.__init2.call(this);
    }
    /**
   * A list of longest interactions on the page (by latency) sorted so the
   * longest one is first. The list is at most MAX_INTERACTIONS_TO_CONSIDER
   * long.
   */ // oxlint-disable-next-line sdk/no-class-field-initializers
    __init() {
        this._longestInteractionList = [];
    }
    /**
   * A mapping of longest interactions by their interaction ID.
   * This is used for faster lookup.
   */ // oxlint-disable-next-line sdk/no-class-field-initializers
    __init2() {
        this._longestInteractionMap = new Map();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility, jsdoc/require-jsdoc
    _resetInteractions() {
        prevInteractionCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$polyfills$2f$interactionCountPolyfill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInteractionCount"])();
        this._longestInteractionList.length = 0;
        this._longestInteractionMap.clear();
    }
    /**
   * Returns the estimated p98 longest interaction based on the stored
   * interaction candidates and the interaction count for the current page.
   */ // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    _estimateP98LongestInteraction() {
        const candidateInteractionIndex = Math.min(this._longestInteractionList.length - 1, Math.floor(getInteractionCountForNavigation() / 50));
        return this._longestInteractionList[candidateInteractionIndex];
    }
    /**
   * Takes a performance entry and adds it to the list of worst interactions
   * if its duration is long enough to make it among the worst. If the
   * entry is part of an existing interaction, it is merged and the latency
   * and entries list is updated as needed.
   */ // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    _processEntry(entry) {
        this._onBeforeProcessingEntry?.(entry);
        // Skip further processing for entries that cannot be INP candidates.
        if (!(entry.interactionId || entry.entryType === 'first-input')) return;
        // The least-long of the 10 longest interactions.
        const minLongestInteraction = this._longestInteractionList.at(-1);
        let interaction = this._longestInteractionMap.get(entry.interactionId);
        // Only process the entry if it's possibly one of the ten longest,
        // or if it's part of an existing interaction.
        if (interaction || this._longestInteractionList.length < MAX_INTERACTIONS_TO_CONSIDER || // If the above conditions are false, `minLongestInteraction` will be set.
        entry.duration > minLongestInteraction._latency) {
            // If the interaction already exists, update it. Otherwise create one.
            if (interaction) {
                // If the new entry has a longer duration, replace the old entries,
                // otherwise add to the array.
                if (entry.duration > interaction._latency) {
                    interaction.entries = [
                        entry
                    ];
                    interaction._latency = entry.duration;
                } else if (entry.duration === interaction._latency && entry.startTime === interaction.entries[0].startTime) {
                    interaction.entries.push(entry);
                }
            } else {
                interaction = {
                    id: entry.interactionId,
                    entries: [
                        entry
                    ],
                    _latency: entry.duration
                };
                this._longestInteractionMap.set(interaction.id, interaction);
                this._longestInteractionList.push(interaction);
            }
            // Sort the entries by latency (descending) and keep only the top ten.
            this._longestInteractionList.sort((a, b)=>b._latency - a._latency);
            if (this._longestInteractionList.length > MAX_INTERACTIONS_TO_CONSIDER) {
                const removedInteractions = this._longestInteractionList.splice(MAX_INTERACTIONS_TO_CONSIDER);
                for (const interaction of removedInteractions){
                    this._longestInteractionMap.delete(interaction.id);
                }
            }
            // Call any post-processing on the interaction
            this._onAfterProcessingINPCandidate?.(interaction);
        }
    }
}
;
}),
"[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/whenIdleOrHidden.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "whenIdleOrHidden",
    ()=>whenIdleOrHidden
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$globalListeners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/globalListeners.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$runOnce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/runOnce.js [app-client] (ecmascript)");
;
;
;
/*
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Runs the passed callback during the next idle period, or immediately
 * if the browser's visibility state is (or becomes) hidden.
 */ const whenIdleOrHidden = (cb)=>{
    const rIC = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].requestIdleCallback || __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].setTimeout;
    // If the document is hidden, run the callback immediately, otherwise
    // race an idle callback with the next `visibilitychange` event.
    if (__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document?.visibilityState === 'hidden') {
        cb();
    } else {
        // eslint-disable-next-line no-param-reassign
        cb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$runOnce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runOnce"])(cb);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$globalListeners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPageListener"])('visibilitychange', cb, {
            once: true,
            capture: true
        });
        // sentry: we use pagehide instead of directly listening to visibilitychange
        // because some browsers we still support (Safari <14.4) don't fully support
        // `visibilitychange` or have known bugs w.r.t the `visibilitychange` event.
        // TODO(v11): remove this once we drop support for Safari <14.4
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$globalListeners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPageListener"])('pagehide', cb, {
            once: true,
            capture: true
        });
        rIC(()=>{
            cb();
            // Remove the above event listener since no longer required.
            // See: https://github.com/GoogleChrome/web-vitals/issues/622
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$globalListeners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removePageListener"])('visibilitychange', cb, {
                capture: true
            });
            // TODO(v11): remove this once we drop support for Safari <14.4
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$globalListeners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removePageListener"])('pagehide', cb, {
                capture: true
            });
        });
    }
};
;
}),
"[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/getINP.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INPThresholds",
    ()=>INPThresholds,
    "onINP",
    ()=>onINP
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$bindReporter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/bindReporter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getVisibilityWatcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/getVisibilityWatcher.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$initMetric$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/initMetric.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$initUnique$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/initUnique.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$InteractionManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/InteractionManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/observe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$polyfills$2f$interactionCountPolyfill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/polyfills/interactionCountPolyfill.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$whenActivated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/whenActivated.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$whenIdleOrHidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/whenIdleOrHidden.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
/*
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Thresholds for INP. See https://web.dev/articles/inp#what_is_a_good_inp_score */ const INPThresholds = [
    200,
    500
];
// The default `durationThreshold` used across this library for observing
// `event` entries via PerformanceObserver.
const DEFAULT_DURATION_THRESHOLD = 40;
/**
 * Calculates the [INP](https://web.dev/articles/inp) value for the current
 * page and calls the `callback` function once the value is ready, along with
 * the `event` performance entries reported for that interaction. The reported
 * value is a `DOMHighResTimeStamp`.
 *
 * A custom `durationThreshold` configuration option can optionally be passed
 * to control what `event-timing` entries are considered for INP reporting. The
 * default threshold is `40`, which means INP scores of less than 40 will not
 * be reported. To avoid reporting no interactions in these cases, the library
 * will fall back to the input delay of the first interaction. Note that this
 * will not affect your 75th percentile INP value unless that value is also
 * less than 40 (well below the recommended
 * [good](https://web.dev/articles/inp#what_is_a_good_inp_score) threshold).
 *
 * If the `reportAllChanges` configuration option is set to `true`, the
 * `callback` function will be called as soon as the value is initially
 * determined as well as any time the value changes throughout the page
 * lifespan.
 *
 * _**Important:** INP should be continually monitored for changes throughout
 * the entire lifespan of a page—including if the user returns to the page after
 * it's been hidden/backgrounded. However, since browsers often [will not fire
 * additional callbacks once the user has backgrounded a
 * page](https://developer.chrome.com/blog/page-lifecycle-api/#advice-hidden),
 * `callback` is always called when the page's visibility state changes to
 * hidden. As a result, the `callback` function might be called multiple times
 * during the same page load._
 */ const onINP = (onReport, opts = {})=>{
    // Return if the browser doesn't support all APIs needed to measure INP.
    if (!(globalThis.PerformanceEventTiming && 'interactionId' in PerformanceEventTiming.prototype)) {
        return;
    }
    const visibilityWatcher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getVisibilityWatcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVisibilityWatcher"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$whenActivated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["whenActivated"])(()=>{
        // TODO(philipwalton): remove once the polyfill is no longer needed.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$polyfills$2f$interactionCountPolyfill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initInteractionCountPolyfill"])();
        const metric = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$initMetric$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initMetric"])('INP');
        // eslint-disable-next-line prefer-const
        let report;
        const interactionManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$initUnique$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initUnique"])(opts, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$InteractionManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InteractionManager"]);
        const handleEntries = (entries)=>{
            // Queue the `handleEntries()` callback in the next idle task.
            // This is needed to increase the chances that all event entries that
            // occurred between the user interaction and the next paint
            // have been dispatched. Note: there is currently an experiment
            // running in Chrome (EventTimingKeypressAndCompositionInteractionId)
            // 123+ that if rolled out fully may make this no longer necessary.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$whenIdleOrHidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["whenIdleOrHidden"])(()=>{
                for (const entry of entries){
                    interactionManager._processEntry(entry);
                }
                const inp = interactionManager._estimateP98LongestInteraction();
                if (inp && inp._latency !== metric.value) {
                    metric.value = inp._latency;
                    metric.entries = inp.entries;
                    report();
                }
            });
        };
        const po = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observe"])('event', handleEntries, {
            // Event Timing entries have their durations rounded to the nearest 8ms,
            // so a duration of 40ms would be any event that spans 2.5 or more frames
            // at 60Hz. This threshold is chosen to strike a balance between usefulness
            // and performance. Running this callback for any interaction that spans
            // just one or two frames is likely not worth the insight that could be
            // gained.
            durationThreshold: opts.durationThreshold ?? DEFAULT_DURATION_THRESHOLD
        });
        report = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$bindReporter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bindReporter"])(onReport, metric, INPThresholds, opts.reportAllChanges);
        if (po) {
            // Also observe entries of type `first-input`. This is useful in cases
            // where the first interaction is less than the `durationThreshold`.
            po.observe({
                type: 'first-input',
                buffered: true
            });
            visibilityWatcher.onHidden(()=>{
                handleEntries(po.takeRecords());
                report(true);
            });
        }
    });
};
;
}),
"[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/LCPEntryManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LCPEntryManager",
    ()=>LCPEntryManager
]);
/*
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // eslint-disable-next-line jsdoc/require-jsdoc
class LCPEntryManager {
    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility, jsdoc/require-jsdoc
    _processEntry(entry) {
        this._onBeforeProcessingEntry?.(entry);
    }
}
;
}),
"[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/getLCP.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LCPThresholds",
    ()=>LCPThresholds,
    "onLCP",
    ()=>onLCP
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$bindReporter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/bindReporter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getActivationStart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/getActivationStart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getVisibilityWatcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/getVisibilityWatcher.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$globalListeners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/globalListeners.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$initMetric$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/initMetric.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$initUnique$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/initUnique.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$LCPEntryManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/LCPEntryManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/observe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$runOnce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/runOnce.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$whenActivated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/whenActivated.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$whenIdleOrHidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/whenIdleOrHidden.js [app-client] (ecmascript)");
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
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Thresholds for LCP. See https://web.dev/articles/lcp#what_is_a_good_lcp_score */ const LCPThresholds = [
    2500,
    4000
];
/**
 * Calculates the [LCP](https://web.dev/articles/lcp) value for the current page and
 * calls the `callback` function once the value is ready (along with the
 * relevant `largest-contentful-paint` performance entry used to determine the
 * value). The reported value is a `DOMHighResTimeStamp`.
 *
 * If the `reportAllChanges` configuration option is set to `true`, the
 * `callback` function will be called any time a new `largest-contentful-paint`
 * performance entry is dispatched, or once the final value of the metric has
 * been determined.
 */ const onLCP = (onReport, opts = {})=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$whenActivated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["whenActivated"])(()=>{
        const visibilityWatcher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getVisibilityWatcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVisibilityWatcher"])();
        const metric = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$initMetric$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initMetric"])('LCP');
        let report;
        const lcpEntryManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$initUnique$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initUnique"])(opts, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$LCPEntryManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LCPEntryManager"]);
        const handleEntries = (entries)=>{
            // If reportAllChanges is set then call this function for each entry,
            // otherwise only consider the last one.
            if (!opts.reportAllChanges) {
                // eslint-disable-next-line no-param-reassign
                entries = entries.slice(-1);
            }
            for (const entry of entries){
                lcpEntryManager._processEntry(entry);
                // Only report if the page wasn't hidden prior to LCP.
                if (entry.startTime < visibilityWatcher.firstHiddenTime) {
                    // The startTime attribute returns the value of the renderTime if it is
                    // not 0, and the value of the loadTime otherwise. The activationStart
                    // reference is used because LCP should be relative to page activation
                    // rather than navigation start if the page was prerendered. But in cases
                    // where `activationStart` occurs after the LCP, this time should be
                    // clamped at 0.
                    metric.value = Math.max(entry.startTime - (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getActivationStart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActivationStart"])(), 0);
                    metric.entries = [
                        entry
                    ];
                    report();
                }
            }
        };
        const po = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observe"])('largest-contentful-paint', handleEntries);
        if (po) {
            report = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$bindReporter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bindReporter"])(onReport, metric, LCPThresholds, opts.reportAllChanges);
            // Ensure this logic only runs once, since it can be triggered from
            // any of three different event listeners below.
            const stopListening = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$runOnce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runOnce"])(()=>{
                handleEntries(po.takeRecords());
                po.disconnect();
                report(true);
            });
            // Need a separate wrapper to ensure the `runOnce` function above is
            // common for all three functions
            const stopListeningWrapper = (event)=>{
                if (event.isTrusted) {
                    // Wrap the listener in an idle callback so it's run in a separate
                    // task to reduce potential INP impact.
                    // https://github.com/GoogleChrome/web-vitals/issues/383
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$whenIdleOrHidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["whenIdleOrHidden"])(stopListening);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$globalListeners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removePageListener"])(event.type, stopListeningWrapper, {
                        capture: true
                    });
                }
            };
            // Stop listening after input or visibilitychange.
            // Note: while scrolling is an input that stops LCP observation, it's
            // unreliable since it can be programmatically generated.
            // See: https://github.com/GoogleChrome/web-vitals/issues/75
            for (const type of [
                'keydown',
                'click',
                'visibilitychange'
            ]){
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$globalListeners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPageListener"])(type, stopListeningWrapper, {
                    capture: true
                });
            }
        }
    });
};
;
}),
"[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/onTTFB.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TTFBThresholds",
    ()=>TTFBThresholds,
    "onTTFB",
    ()=>onTTFB
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$bindReporter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/bindReporter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getActivationStart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/getActivationStart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getNavigationEntry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/getNavigationEntry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$initMetric$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/initMetric.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$whenActivated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/whenActivated.js [app-client] (ecmascript)");
;
;
;
;
;
;
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Thresholds for TTFB. See https://web.dev/articles/ttfb#what_is_a_good_ttfb_score */ const TTFBThresholds = [
    800,
    1800
];
/**
 * Runs in the next task after the page is done loading and/or prerendering.
 * @param callback
 */ const whenReady = (callback)=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document?.prerendering) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$whenActivated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["whenActivated"])(()=>whenReady(callback));
    } else if (__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document?.readyState !== 'complete') {
        addEventListener('load', ()=>whenReady(callback), true);
    } else {
        // Queue a task so the callback runs after `loadEventEnd`.
        setTimeout(callback);
    }
};
/**
 * Calculates the [TTFB](https://web.dev/articles/ttfb) value for the
 * current page and calls the `callback` function once the page has loaded,
 * along with the relevant `navigation` performance entry used to determine the
 * value. The reported value is a `DOMHighResTimeStamp`.
 *
 * Note, this function waits until after the page is loaded to call `callback`
 * in order to ensure all properties of the `navigation` entry are populated.
 * This is useful if you want to report on other metrics exposed by the
 * [Navigation Timing API](https://w3c.github.io/navigation-timing/). For
 * example, the TTFB metric starts from the page's [time
 * origin](https://www.w3.org/TR/hr-time-2/#sec-time-origin), which means it
 * includes time spent on DNS lookup, connection negotiation, network latency,
 * and server processing time.
 */ const onTTFB = (onReport, opts = {})=>{
    const metric = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$initMetric$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initMetric"])('TTFB');
    const report = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$bindReporter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bindReporter"])(onReport, metric, TTFBThresholds, opts.reportAllChanges);
    whenReady(()=>{
        const navigationEntry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getNavigationEntry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNavigationEntry"])();
        if (navigationEntry) {
            // The activationStart reference is used because TTFB should be
            // relative to page activation rather than navigation start if the
            // page was prerendered. But in cases where `activationStart` occurs
            // after the first byte is received, this time should be clamped at 0.
            metric.value = Math.max(navigationEntry.responseStart - (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getActivationStart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActivationStart"])(), 0);
            metric.entries = [
                navigationEntry
            ];
            report(true);
        }
    });
};
;
}),
"[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/instrument.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addClsInstrumentationHandler",
    ()=>addClsInstrumentationHandler,
    "addInpInstrumentationHandler",
    ()=>addInpInstrumentationHandler,
    "addLcpInstrumentationHandler",
    ()=>addLcpInstrumentationHandler,
    "addPerformanceInstrumentationHandler",
    ()=>addPerformanceInstrumentationHandler,
    "addTtfbInstrumentationHandler",
    ()=>addTtfbInstrumentationHandler,
    "isPerformanceEventTiming",
    ()=>isPerformanceEventTiming
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/utils/debug-logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$stacktrace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/utils/stacktrace.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$getCLS$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/getCLS.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$getINP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/getINP.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$getLCP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/getLCP.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/observe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$onTTFB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/onTTFB.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const handlers = {};
const instrumented = {};
let _previousCls;
let _previousLcp;
let _previousTtfb;
let _previousInp;
/**
 * Add a callback that will be triggered when a CLS metric is available.
 * Returns a cleanup callback which can be called to remove the instrumentation handler.
 *
 * Pass `stopOnCallback = true` to stop listening for CLS when the cleanup callback is called.
 * This will lead to the CLS being finalized and frozen.
 */ function addClsInstrumentationHandler(callback, stopOnCallback = false) {
    return addMetricObserver('cls', callback, instrumentCls, _previousCls, stopOnCallback);
}
/**
 * Add a callback that will be triggered when a LCP metric is available.
 * Returns a cleanup callback which can be called to remove the instrumentation handler.
 *
 * Pass `stopOnCallback = true` to stop listening for LCP when the cleanup callback is called.
 * This will lead to the LCP being finalized and frozen.
 */ function addLcpInstrumentationHandler(callback, stopOnCallback = false) {
    return addMetricObserver('lcp', callback, instrumentLcp, _previousLcp, stopOnCallback);
}
/**
 * Add a callback that will be triggered when a TTFD metric is available.
 */ function addTtfbInstrumentationHandler(callback) {
    return addMetricObserver('ttfb', callback, instrumentTtfb, _previousTtfb);
}
/**
 * Add a callback that will be triggered when a INP metric is available.
 * Returns a cleanup callback which can be called to remove the instrumentation handler.
 */ function addInpInstrumentationHandler(callback) {
    return addMetricObserver('inp', callback, instrumentInp, _previousInp);
}
/**
 * Add a callback that will be triggered when a performance observer is triggered,
 * and receives the entries of the observer.
 * Returns a cleanup callback which can be called to remove the instrumentation handler.
 */ function addPerformanceInstrumentationHandler(type, callback) {
    addHandler(type, callback);
    if (!instrumented[type]) {
        instrumentPerformanceObserver(type);
        instrumented[type] = true;
    }
    return getCleanupCallback(type, callback);
}
/** Trigger all handlers of a given type. */ function triggerHandlers(type, data) {
    const typeHandlers = handlers[type];
    if (!typeHandlers?.length) {
        return;
    }
    for (const handler of typeHandlers){
        try {
            handler(data);
        } catch (e) {
            __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"].error(`Error while triggering instrumentation handler.\nType: ${type}\nName: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$stacktrace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFunctionName"])(handler)}\nError:`, e);
        }
    }
}
function instrumentCls() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$getCLS$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onCLS"])((metric)=>{
        triggerHandlers('cls', {
            metric
        });
        _previousCls = metric;
    }, // We want the callback to be called whenever the CLS value updates.
    // By default, the callback is only called when the tab goes to the background.
    {
        reportAllChanges: true
    });
}
function instrumentLcp() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$getLCP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onLCP"])((metric)=>{
        triggerHandlers('lcp', {
            metric
        });
        _previousLcp = metric;
    }, // We want the callback to be called whenever the LCP value updates.
    // By default, the callback is only called when the tab goes to the background.
    {
        reportAllChanges: true
    });
}
function instrumentTtfb() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$onTTFB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onTTFB"])((metric)=>{
        triggerHandlers('ttfb', {
            metric
        });
        _previousTtfb = metric;
    });
}
function instrumentInp() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$getINP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onINP"])((metric)=>{
        triggerHandlers('inp', {
            metric
        });
        _previousInp = metric;
    });
}
function addMetricObserver(type, callback, instrumentFn, previousValue, stopOnCallback = false) {
    addHandler(type, callback);
    let stopListening;
    if (!instrumented[type]) {
        stopListening = instrumentFn();
        instrumented[type] = true;
    }
    if (previousValue) {
        callback({
            metric: previousValue
        });
    }
    return getCleanupCallback(type, callback, stopOnCallback ? stopListening : undefined);
}
function instrumentPerformanceObserver(type) {
    const options = {};
    // Special per-type options we want to use
    if (type === 'event') {
        options.durationThreshold = 0;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observe"])(type, (entries)=>{
        triggerHandlers(type, {
            entries
        });
    }, options);
}
function addHandler(type, handler) {
    handlers[type] = handlers[type] || [];
    handlers[type].push(handler);
}
// Get a callback which can be called to remove the instrumentation handler
function getCleanupCallback(type, callback, stopListening) {
    return ()=>{
        if (stopListening) {
            stopListening();
        }
        const typeHandlers = handlers[type];
        if (!typeHandlers) {
            return;
        }
        const index = typeHandlers.indexOf(callback);
        if (index !== -1) {
            typeHandlers.splice(index, 1);
        }
    };
}
/**
 * Check if a PerformanceEntry is a PerformanceEventTiming by checking for the `duration` property.
 */ function isPerformanceEventTiming(entry) {
    return 'duration' in entry;
}
;
}),
"[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/onHidden.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "onHidden",
    ()=>onHidden
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$globalListeners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/globalListeners.js [app-client] (ecmascript)");
;
;
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Sentry-specific change:
 *
 * This function's logic was NOT updated to web-vitals 4.2.4 or 5.x but we continue
 * to use the web-vitals 3.5.2 version due to having stricter browser support.
 *
 * PR with context that made the changes:
 * https://github.com/GoogleChrome/web-vitals/pull/442/files#r1530492402
 *
 * The PR removed listening to the `pagehide` event, in favour of only listening to
 * the `visibilitychange` event. This is "more correct" but some browsers we still
 * support (Safari <14.4) don't fully support `visibilitychange` or have known bugs
 * with respect to the `visibilitychange` event.
 *
 * TODO (v11): If we decide to drop support for Safari 14.4, we can use the logic
 * from web-vitals 4.2.4. In this case, we also need to update the integration tests
 * that currently trigger the `pagehide` event to simulate the page being hidden.
 *
 * @param {OnHiddenCallback} cb - Callback to be executed when the page is hidden or unloaded.
 *
 * @deprecated use `whenIdleOrHidden` or `addPageListener('visibilitychange')` instead
 */ const onHidden = (cb)=>{
    const onHiddenOrPageHide = (event)=>{
        if (event.type === 'pagehide' || __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document?.visibilityState === 'hidden') {
            cb(event);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$globalListeners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPageListener"])('visibilitychange', onHiddenOrPageHide, {
        capture: true,
        once: true
    });
    // Some browsers have buggy implementations of visibilitychange,
    // so we use pagehide in addition, just to be safe.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$globalListeners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPageListener"])('pagehide', onHiddenOrPageHide, {
        capture: true,
        once: true
    });
};
;
}),
"[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractNetworkProtocol",
    ()=>extractNetworkProtocol,
    "getBrowserPerformanceAPI",
    ()=>getBrowserPerformanceAPI,
    "isMeasurementValue",
    ()=>isMeasurementValue,
    "listenForWebVitalReportEvents",
    ()=>listenForWebVitalReportEvents,
    "msToSec",
    ()=>msToSec,
    "startAndEndSpan",
    ()=>startAndEndSpan,
    "startStandaloneWebVitalSpan",
    ()=>startStandaloneWebVitalSpan,
    "supportsWebVital",
    ()=>supportsWebVital
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/utils/spanUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$trace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/tracing/trace.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/currentScopes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$onHidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/onHidden.js [app-client] (ecmascript)");
;
;
;
/**
 * Checks if a given value is a valid measurement value.
 */ function isMeasurementValue(value) {
    return typeof value === 'number' && isFinite(value);
}
/**
 * Helper function to start child on transactions. This function will make sure that the transaction will
 * use the start timestamp of the created child span if it is earlier than the transactions actual
 * start timestamp.
 */ function startAndEndSpan(parentSpan, startTimeInSeconds, endTime, { ...ctx }) {
    const parentStartTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanToJSON"])(parentSpan).start_timestamp;
    if (parentStartTime && parentStartTime > startTimeInSeconds) {
        // We can only do this for SentrySpans...
        if (typeof parentSpan.updateStartTime === 'function') {
            parentSpan.updateStartTime(startTimeInSeconds);
        }
    }
    // The return value only exists for tests
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$trace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withActiveSpan"])(parentSpan, ()=>{
        const span = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$trace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startInactiveSpan"])({
            startTime: startTimeInSeconds,
            ...ctx
        });
        if (span) {
            span.end(endTime);
        }
        return span;
    });
}
/**
 * Starts an inactive, standalone span used to send web vital values to Sentry.
 * DO NOT use this for arbitrary spans, as these spans require special handling
 * during ingestion to extract metrics.
 *
 * This function adds a bunch of attributes and data to the span that's shared
 * by all web vital standalone spans. However, you need to take care of adding
 * the actual web vital value as an event to the span. Also, you need to assign
 * a transaction name and some other values that are specific to the web vital.
 *
 * Ultimately, you also need to take care of ending the span to send it off.
 *
 * @param options
 *
 * @returns an inactive, standalone and NOT YET ended span
 */ function startStandaloneWebVitalSpan(options) {
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])();
    if (!client) {
        return;
    }
    const { name, transaction, attributes: passedAttributes, startTime } = options;
    const { release, environment, sendDefaultPii } = client.getOptions();
    // We need to get the replay, user, and activeTransaction from the current scope
    // so that we can associate replay id, profile id, and a user display to the span
    const replay = client.getIntegrationByName('Replay');
    const replayId = replay?.getReplayId();
    const scope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentScope"])();
    const user = scope.getUser();
    const userDisplay = user !== undefined ? user.email || user.id || user.ip_address : undefined;
    let profileId;
    try {
        // @ts-expect-error skip optional chaining to save bundle size with try catch
        profileId = scope.getScopeData().contexts.profile.profile_id;
    } catch  {
    // do nothing
    }
    const attributes = {
        release,
        environment,
        user: userDisplay || undefined,
        profile_id: profileId || undefined,
        replay_id: replayId || undefined,
        transaction,
        // Web vital score calculation relies on the user agent to account for different
        // browsers setting different thresholds for what is considered a good/meh/bad value.
        // For example: Chrome vs. Chrome Mobile
        'user_agent.original': __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].navigator?.userAgent,
        // This tells Sentry to infer the IP address from the request
        'client.address': sendDefaultPii ? '{{auto}}' : undefined,
        ...passedAttributes
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$trace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startInactiveSpan"])({
        name,
        attributes,
        startTime,
        experimental: {
            standalone: true
        }
    });
}
/** Get the browser performance API. */ function getBrowserPerformanceAPI() {
    // @ts-expect-error we want to make sure all of these are available, even if TS is sure they are
    return __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].addEventListener && __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].performance;
}
/**
 * Converts from milliseconds to seconds
 * @param time time in ms
 */ function msToSec(time) {
    return time / 1000;
}
/**
 * Converts ALPN protocol ids to name and version.
 *
 * (https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids)
 * @param nextHopProtocol PerformanceResourceTiming.nextHopProtocol
 */ function extractNetworkProtocol(nextHopProtocol) {
    let name = 'unknown';
    let version = 'unknown';
    let _name = '';
    for (const char of nextHopProtocol){
        // http/1.1 etc.
        if (char === '/') {
            [name, version] = nextHopProtocol.split('/');
            break;
        }
        // h2, h3 etc.
        if (!isNaN(Number(char))) {
            name = _name === 'h' ? 'http' : _name;
            version = nextHopProtocol.split(_name)[1];
            break;
        }
        _name += char;
    }
    if (_name === nextHopProtocol) {
        // webrtc, ftp, etc.
        name = _name;
    }
    return {
        name,
        version
    };
}
/**
 * Generic support check for web vitals
 */ function supportsWebVital(entryType) {
    try {
        return PerformanceObserver.supportedEntryTypes.includes(entryType);
    } catch  {
        return false;
    }
}
/**
 * Listens for events on which we want to collect a previously accumulated web vital value.
 * Currently, this includes:
 *
 * - pagehide (i.e. user minimizes browser window, hides tab, etc)
 * - soft navigation (we only care about the vital of the initially loaded route)
 *
 * As a "side-effect", this function will also collect the span id of the pageload span.
 *
 * @param collectorCallback the callback to be called when the first of these events is triggered. Parameters:
 * - event: the event that triggered the reporting of the web vital value.
 * - pageloadSpanId: the span id of the pageload span. This is used to link the web vital span to the pageload span.
 * - pageloadSpan: the pageload span instance. This is used for full access to the pageload span for span streaming.
 */ function listenForWebVitalReportEvents(client, collectorCallback) {
    let pageloadSpan;
    let collected = false;
    function _runCollectorCallbackOnce(event) {
        if (!collected && pageloadSpan) {
            collectorCallback(event, pageloadSpan.spanContext().spanId, pageloadSpan);
        }
        collected = true;
    }
    // eslint-disable-next-line deprecation/deprecation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$onHidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onHidden"])(()=>{
        _runCollectorCallbackOnce('pagehide');
    });
    const unsubscribeStartNavigation = client.on('beforeStartNavigationSpan', (_, options)=>{
        // we only want to collect LCP if we actually navigate. Redirects should be ignored.
        if (!options?.isRedirect) {
            _runCollectorCallbackOnce('navigation');
            unsubscribeStartNavigation();
            unsubscribeAfterStartPageLoadSpan();
        }
    });
    const unsubscribeAfterStartPageLoadSpan = client.on('afterStartPageLoadSpan', (span)=>{
        pageloadSpan = span;
        unsubscribeAfterStartPageLoadSpan();
    });
}
;
}),
"[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/inp.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INP_ENTRY_MAP",
    ()=>INP_ENTRY_MAP,
    "MAX_PLAUSIBLE_INP_DURATION",
    ()=>MAX_PLAUSIBLE_INP_DURATION,
    "_onInp",
    ()=>_onInp,
    "_trackINP",
    ()=>_trackINP,
    "getCachedInteractionContext",
    ()=>getCachedInteractionContext,
    "registerInpInteractionListener",
    ()=>registerInpInteractionListener,
    "startTrackingINP",
    ()=>startTrackingINP
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$isBrowser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/utils/isBrowser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/utils/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/utils/time.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/utils/spanUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/currentScopes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/semanticAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$instrument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/instrument.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/utils.js [app-client] (ecmascript)");
;
;
;
;
const LAST_INTERACTIONS = [];
const INTERACTIONS_SPAN_MAP = new Map();
// Map to store element names by timestamp, since we get the DOM event before the PerformanceObserver entry
const ELEMENT_NAME_TIMESTAMP_MAP = new Map();
/**
 * 60 seconds is the maximum for a plausible INP value
 * (source: Me)
 */ const MAX_PLAUSIBLE_INP_DURATION = 60;
/**
 * Start tracking INP webvital events.
 */ function startTrackingINP() {
    const performance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBrowserPerformanceAPI"])();
    if (performance && (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserPerformanceTimeOrigin"])()) {
        const inpCallback = _trackINP();
        return ()=>{
            inpCallback();
        };
    }
    return ()=>undefined;
}
const INP_ENTRY_MAP = {
    click: 'click',
    pointerdown: 'click',
    pointerup: 'click',
    mousedown: 'click',
    mouseup: 'click',
    touchstart: 'click',
    touchend: 'click',
    mouseover: 'hover',
    mouseout: 'hover',
    mouseenter: 'hover',
    mouseleave: 'hover',
    pointerover: 'hover',
    pointerout: 'hover',
    pointerenter: 'hover',
    pointerleave: 'hover',
    dragstart: 'drag',
    dragend: 'drag',
    drag: 'drag',
    dragenter: 'drag',
    dragleave: 'drag',
    dragover: 'drag',
    drop: 'drag',
    keydown: 'press',
    keyup: 'press',
    keypress: 'press',
    input: 'press'
};
/** Starts tracking the Interaction to Next Paint on the current page. #
 * exported only for testing
 */ function _trackINP() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$instrument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addInpInstrumentationHandler"])(_onInp);
}
/**
 * exported only for testing
 */ const _onInp = ({ metric })=>{
    if (metric.value == undefined) {
        return;
    }
    const duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])(metric.value);
    // We received occasional reports of hour-long INP values.
    // Therefore, we add a sanity check to avoid creating spans for
    // unrealistically long INP durations.
    if (duration > MAX_PLAUSIBLE_INP_DURATION) {
        return;
    }
    const entry = metric.entries.find((entry)=>entry.duration === metric.value && INP_ENTRY_MAP[entry.name]);
    if (!entry) {
        return;
    }
    const { interactionId } = entry;
    const interactionType = INP_ENTRY_MAP[entry.name];
    /** Build the INP span, create an envelope from the span, and then send the envelope */ const startTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserPerformanceTimeOrigin"])() + entry.startTime);
    const activeSpan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveSpan"])();
    const rootSpan = activeSpan ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRootSpan"])(activeSpan) : undefined;
    // We first try to lookup the interaction context from our INTERACTIONS_SPAN_MAP,
    // where we cache the route and element name per interactionId
    const cachedInteractionContext = interactionId != null ? INTERACTIONS_SPAN_MAP.get(interactionId) : undefined;
    const spanToUse = cachedInteractionContext?.span || rootSpan;
    // Else, we try to use the active span.
    // Finally, we fall back to look at the transactionName on the scope
    const routeName = spanToUse ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanToJSON"])(spanToUse).description : (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentScope"])().getScopeData().transactionName;
    const name = cachedInteractionContext?.elementName || (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["htmlTreeAsString"])(entry.target);
    const attributes = {
        [__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN"]]: 'auto.http.browser.inp',
        [__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_OP"]]: `ui.interaction.${interactionType}`,
        [__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME"]]: entry.duration
    };
    const span = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startStandaloneWebVitalSpan"])({
        name,
        transaction: routeName,
        attributes,
        startTime
    });
    if (span) {
        span.addEvent('inp', {
            [__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT"]]: 'millisecond',
            [__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE"]]: metric.value
        });
        span.end(startTime + duration);
    }
};
/**
 * Look up a cached interaction context (element name + root span) by interactionId.
 * Returns undefined if no context was cached for this interaction.
 */ function getCachedInteractionContext(interactionId) {
    return interactionId != null ? INTERACTIONS_SPAN_MAP.get(interactionId) : undefined;
}
/**
 * Register a listener to cache route information for INP interactions.
 */ function registerInpInteractionListener() {
    // Listen for all interaction events that could contribute to INP
    const interactionEvents = Object.keys(INP_ENTRY_MAP);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$isBrowser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowser"])()) {
        interactionEvents.forEach((eventType)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].addEventListener(eventType, captureElementFromEvent, {
                capture: true,
                passive: true
            });
        });
    }
    /**
   * Captures the element name from a DOM event and stores it in the ELEMENT_NAME_TIMESTAMP_MAP.
   */ function captureElementFromEvent(event) {
        const target = event.target;
        if (!target) {
            return;
        }
        const elementName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["htmlTreeAsString"])(target);
        const timestamp = Math.round(event.timeStamp);
        // Store the element name by timestamp so we can match it with the PerformanceEntry
        ELEMENT_NAME_TIMESTAMP_MAP.set(timestamp, elementName);
        // Clean up old
        if (ELEMENT_NAME_TIMESTAMP_MAP.size > 50) {
            const firstKey = ELEMENT_NAME_TIMESTAMP_MAP.keys().next().value;
            if (firstKey !== undefined) {
                ELEMENT_NAME_TIMESTAMP_MAP.delete(firstKey);
            }
        }
    }
    /**
   * Tries to get the element name from the timestamp map.
   */ function resolveElementNameFromEntry(entry) {
        const timestamp = Math.round(entry.startTime);
        let elementName = ELEMENT_NAME_TIMESTAMP_MAP.get(timestamp);
        // try nearby timestamps (±5ms)
        if (!elementName) {
            for(let offset = -5; offset <= 5; offset++){
                const nearbyName = ELEMENT_NAME_TIMESTAMP_MAP.get(timestamp + offset);
                if (nearbyName) {
                    elementName = nearbyName;
                    break;
                }
            }
        }
        return elementName || '<unknown>';
    }
    const handleEntries = ({ entries })=>{
        const activeSpan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveSpan"])();
        const activeRootSpan = activeSpan && (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRootSpan"])(activeSpan);
        entries.forEach((entry)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$instrument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPerformanceEventTiming"])(entry)) {
                return;
            }
            const interactionId = entry.interactionId;
            if (interactionId == null) {
                return;
            }
            // If the interaction was already recorded before, nothing more to do
            if (INTERACTIONS_SPAN_MAP.has(interactionId)) {
                return;
            }
            const elementName = entry.target ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["htmlTreeAsString"])(entry.target) : resolveElementNameFromEntry(entry);
            // We keep max. 10 interactions in the list, then remove the oldest one & clean up
            if (LAST_INTERACTIONS.length > 10) {
                const last = LAST_INTERACTIONS.shift();
                INTERACTIONS_SPAN_MAP.delete(last);
            }
            // We add the interaction to the list of recorded interactions
            // and store both the span and element name for this interaction
            LAST_INTERACTIONS.push(interactionId);
            INTERACTIONS_SPAN_MAP.set(interactionId, {
                span: activeRootSpan,
                elementName
            });
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$instrument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPerformanceInstrumentationHandler"])('event', handleEntries);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$instrument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPerformanceInstrumentationHandler"])('first-input', handleEntries);
}
;
}),
"[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/cls.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_sendStandaloneClsSpan",
    ()=>_sendStandaloneClsSpan,
    "trackClsAsStandaloneSpan",
    ()=>trackClsAsStandaloneSpan
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/utils/debug-logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/utils/time.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/currentScopes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/utils/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/semanticAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$instrument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/instrument.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/utils.js [app-client] (ecmascript)");
;
;
;
;
/**
 * Starts tracking the Cumulative Layout Shift on the current page and collects the value once
 *
 * - the page visibility is hidden
 * - a navigation span is started (to stop CLS measurement for SPA soft navigations)
 *
 * Once either of these events triggers, the CLS value is sent as a standalone span and we stop
 * measuring CLS.
 */ function trackClsAsStandaloneSpan(client) {
    let standaloneCLsValue = 0;
    let standaloneClsEntry;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsWebVital"])('layout-shift')) {
        return;
    }
    const cleanupClsHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$instrument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addClsInstrumentationHandler"])(({ metric })=>{
        const entry = metric.entries[metric.entries.length - 1];
        if (!entry) {
            return;
        }
        standaloneCLsValue = metric.value;
        standaloneClsEntry = entry;
    }, true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listenForWebVitalReportEvents"])(client, (reportEvent, pageloadSpanId)=>{
        _sendStandaloneClsSpan(standaloneCLsValue, standaloneClsEntry, pageloadSpanId, reportEvent);
        cleanupClsHandler();
    });
}
/**
 * Exported only for testing!
 */ function _sendStandaloneClsSpan(clsValue, entry, pageloadSpanId, reportEvent) {
    __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"].log(`Sending CLS span (${clsValue})`);
    const startTime = entry ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])(((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserPerformanceTimeOrigin"])() || 0) + entry.startTime) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timestampInSeconds"])();
    const routeName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentScope"])().getScopeData().transactionName;
    const name = entry ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["htmlTreeAsString"])(entry.sources[0]?.node) : 'Layout shift';
    const attributes = {
        [__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN"]]: 'auto.http.browser.cls',
        [__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_OP"]]: 'ui.webvital.cls',
        [__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME"]]: 0,
        // attach the pageload span id to the CLS span so that we can link them in the UI
        'sentry.pageload.span_id': pageloadSpanId,
        // describes what triggered the web vital to be reported
        'sentry.report_event': reportEvent
    };
    // Add CLS sources as span attributes to help with debugging layout shifts
    // See: https://developer.mozilla.org/en-US/docs/Web/API/LayoutShift/sources
    if (entry?.sources) {
        entry.sources.forEach((source, index)=>{
            attributes[`cls.source.${index + 1}`] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["htmlTreeAsString"])(source.node);
        });
    }
    const span = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startStandaloneWebVitalSpan"])({
        name,
        transaction: routeName,
        attributes,
        startTime
    });
    if (span) {
        span.addEvent('cls', {
            [__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT"]]: '',
            [__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE"]]: clsValue
        });
        // LayoutShift performance entries always have a duration of 0, so we don't need to add `entry.duration` here
        // see: https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/duration
        span.end(startTime);
    }
}
;
}),
"[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/lcp.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_sendStandaloneLcpSpan",
    ()=>_sendStandaloneLcpSpan,
    "trackLcpAsStandaloneSpan",
    ()=>trackLcpAsStandaloneSpan
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/utils/debug-logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/utils/time.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/currentScopes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/utils/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/semanticAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$instrument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/instrument.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/utils.js [app-client] (ecmascript)");
;
;
;
;
/**
 * Starts tracking the Largest Contentful Paint on the current page and collects the value once
 *
 * - the page visibility is hidden
 * - a navigation span is started (to stop LCP measurement for SPA soft navigations)
 *
 * Once either of these events triggers, the LCP value is sent as a standalone span and we stop
 * measuring LCP for subsequent routes.
 */ function trackLcpAsStandaloneSpan(client) {
    let standaloneLcpValue = 0;
    let standaloneLcpEntry;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsWebVital"])('largest-contentful-paint')) {
        return;
    }
    const cleanupLcpHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$instrument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLcpInstrumentationHandler"])(({ metric })=>{
        const entry = metric.entries[metric.entries.length - 1];
        if (!entry) {
            return;
        }
        standaloneLcpValue = metric.value;
        standaloneLcpEntry = entry;
    }, true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listenForWebVitalReportEvents"])(client, (reportEvent, pageloadSpanId)=>{
        _sendStandaloneLcpSpan(standaloneLcpValue, standaloneLcpEntry, pageloadSpanId, reportEvent);
        cleanupLcpHandler();
    });
}
/**
 * Exported only for testing!
 */ function _sendStandaloneLcpSpan(lcpValue, entry, pageloadSpanId, reportEvent) {
    __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"].log(`Sending LCP span (${lcpValue})`);
    const startTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])(((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserPerformanceTimeOrigin"])() || 0) + (entry?.startTime || 0));
    const routeName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentScope"])().getScopeData().transactionName;
    const name = entry ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["htmlTreeAsString"])(entry.element) : 'Largest contentful paint';
    const attributes = {
        [__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN"]]: 'auto.http.browser.lcp',
        [__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_OP"]]: 'ui.webvital.lcp',
        [__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME"]]: 0,
        // attach the pageload span id to the LCP span so that we can link them in the UI
        'sentry.pageload.span_id': pageloadSpanId,
        // describes what triggered the web vital to be reported
        'sentry.report_event': reportEvent
    };
    if (entry) {
        entry.element && (attributes['lcp.element'] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["htmlTreeAsString"])(entry.element));
        entry.id && (attributes['lcp.id'] = entry.id);
        entry.url && (attributes['lcp.url'] = entry.url);
        // loadTime is the time of LCP that's related to receiving the LCP element response..
        entry.loadTime != null && (attributes['lcp.loadTime'] = entry.loadTime);
        // renderTime is loadTime + rendering time
        // it's 0 if the LCP element is loaded from a 3rd party origin that doesn't send the
        // `Timing-Allow-Origin` header.
        entry.renderTime != null && (attributes['lcp.renderTime'] = entry.renderTime);
        entry.size != null && (attributes['lcp.size'] = entry.size);
    }
    const span = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startStandaloneWebVitalSpan"])({
        name,
        transaction: routeName,
        attributes,
        startTime
    });
    if (span) {
        span.addEvent('lcp', {
            [__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT"]]: 'millisecond',
            [__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE"]]: lcpValue
        });
        // LCP is a point-in-time metric, so we end the span immediately
        span.end(startTime);
    }
}
;
}),
"[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/resourceTiming.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resourceTimingToSpanAttributes",
    ()=>resourceTimingToSpanAttributes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/utils/time.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/utils.js [app-client] (ecmascript)");
;
;
function getAbsoluteTime(time) {
    // falsy values should be preserved so that we can later on drop undefined values and
    // preserve 0 vals for cross-origin resources without proper `Timing-Allow-Origin` header.
    return time ? (((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserPerformanceTimeOrigin"])() || performance.timeOrigin) + time) / 1000 : time;
}
/**
 * Converts a PerformanceResourceTiming entry to span data for the resource span. Most importantly,
 * it converts the timing values from timestamps relative to the `performance.timeOrigin` to absolute timestamps
 * in seconds.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming#timestamps
 *
 * @param resourceTiming
 * @returns An array where the first element is the attribute name and the second element is the attribute value.
 */ function resourceTimingToSpanAttributes(resourceTiming) {
    const timingSpanData = {};
    // Checking for only `undefined` and `null` is intentional because it's
    // valid for `nextHopProtocol` to be an empty string.
    if (resourceTiming.nextHopProtocol != undefined) {
        const { name, version } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractNetworkProtocol"])(resourceTiming.nextHopProtocol);
        timingSpanData['network.protocol.version'] = version;
        timingSpanData['network.protocol.name'] = name;
    }
    if (!((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserPerformanceTimeOrigin"])() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBrowserPerformanceAPI"])()?.timeOrigin)) {
        return timingSpanData;
    }
    return dropUndefinedKeysFromObject({
        ...timingSpanData,
        'http.request.redirect_start': getAbsoluteTime(resourceTiming.redirectStart),
        'http.request.redirect_end': getAbsoluteTime(resourceTiming.redirectEnd),
        'http.request.worker_start': getAbsoluteTime(resourceTiming.workerStart),
        'http.request.fetch_start': getAbsoluteTime(resourceTiming.fetchStart),
        'http.request.domain_lookup_start': getAbsoluteTime(resourceTiming.domainLookupStart),
        'http.request.domain_lookup_end': getAbsoluteTime(resourceTiming.domainLookupEnd),
        'http.request.connect_start': getAbsoluteTime(resourceTiming.connectStart),
        'http.request.secure_connection_start': getAbsoluteTime(resourceTiming.secureConnectionStart),
        'http.request.connection_end': getAbsoluteTime(resourceTiming.connectEnd),
        'http.request.request_start': getAbsoluteTime(resourceTiming.requestStart),
        'http.request.response_start': getAbsoluteTime(resourceTiming.responseStart),
        'http.request.response_end': getAbsoluteTime(resourceTiming.responseEnd),
        // For TTFB we actually want the relative time from timeOrigin to responseStart
        // This way, TTFB always measures the "first page load" experience.
        // see: https://web.dev/articles/ttfb#measure-resource-requests
        'http.request.time_to_first_byte': resourceTiming.responseStart != null ? resourceTiming.responseStart / 1000 : undefined
    });
}
/**
 * Remove properties with `undefined` as value from an object.
 * In contrast to `dropUndefinedKeys` in core this funciton only works on first-level
 * key-value objects and does not recursively go into object properties or arrays.
 */ function dropUndefinedKeysFromObject(attrs) {
    return Object.fromEntries(Object.entries(attrs).filter(([, value])=>value != null));
}
;
}),
"[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/browserMetrics.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_addMeasureSpans",
    ()=>_addMeasureSpans,
    "_addNavigationSpans",
    ()=>_addNavigationSpans,
    "_addResourceSpans",
    ()=>_addResourceSpans,
    "_setResourceRequestAttributes",
    ()=>_setResourceRequestAttributes,
    "addPerformanceEntries",
    ()=>addPerformanceEntries,
    "startTrackingInteractions",
    ()=>startTrackingInteractions,
    "startTrackingLongAnimationFrames",
    ()=>startTrackingLongAnimationFrames,
    "startTrackingLongTasks",
    ()=>startTrackingLongTasks,
    "startTrackingWebVitals",
    ()=>startTrackingWebVitals
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/utils/time.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/utils/spanUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$measurement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/tracing/measurement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/utils/url.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/utils/string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/utils/debug-logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/utils/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/semanticAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/utils/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$cls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/cls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$instrument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/instrument.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$lcp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/lcp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$resourceTiming$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/resourceTiming.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getActivationStart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/getActivationStart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getNavigationEntry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/getNavigationEntry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getVisibilityWatcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/getVisibilityWatcher.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/debug-build.js [app-client] (ecmascript)");
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
const MAX_INT_AS_BYTES = 2147483647;
let _performanceCursor = 0;
let _measurements = {};
let _lcpEntry;
let _clsEntry;
/**
 * Start tracking web vitals.
 * The callback returned by this function can be used to stop tracking & ensure all measurements are final & captured.
 *
 * @deprecated this function will be removed and streamlined once we stop supporting standalone v1
 * @returns A function that forces web vitals collection
 */ function startTrackingWebVitals({ recordClsStandaloneSpans, recordLcpStandaloneSpans, client }) {
    const performance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBrowserPerformanceAPI"])();
    if (performance && (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserPerformanceTimeOrigin"])()) {
        // @ts-expect-error we want to make sure all of these are available, even if TS is sure they are
        if (performance.mark) {
            __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].performance.mark('sentry-tracing-init');
        }
        const lcpCleanupCallback = recordLcpStandaloneSpans ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$lcp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackLcpAsStandaloneSpan"])(client) : recordLcpStandaloneSpans === false ? _trackLCP() : undefined;
        const clsCleanupCallback = recordClsStandaloneSpans ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$cls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackClsAsStandaloneSpan"])(client) : recordClsStandaloneSpans === false ? _trackCLS() : undefined;
        const ttfbCleanupCallback = _trackTtfb();
        return ()=>{
            ttfbCleanupCallback();
            lcpCleanupCallback?.();
            clsCleanupCallback?.();
        };
    }
    return ()=>undefined;
}
/**
 * Start tracking long tasks.
 */ function startTrackingLongTasks() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$instrument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPerformanceInstrumentationHandler"])('longtask', ({ entries })=>{
        const parent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveSpan"])();
        if (!parent) {
            return;
        }
        const { op: parentOp, start_timestamp: parentStartTimestamp } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanToJSON"])(parent);
        for (const entry of entries){
            const startTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserPerformanceTimeOrigin"])() + entry.startTime);
            const duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])(entry.duration);
            if (parentOp === 'navigation' && parentStartTimestamp && startTime < parentStartTimestamp) {
                continue;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startAndEndSpan"])(parent, startTime, startTime + duration, {
                name: 'Main UI thread blocked',
                op: 'ui.long-task',
                attributes: {
                    [__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN"]]: 'auto.ui.browser.metrics'
                }
            });
        }
    });
}
/**
 * Start tracking long animation frames.
 */ function startTrackingLongAnimationFrames() {
    // NOTE: the current web-vitals version (3.5.2) does not support long-animation-frame, so
    // we directly observe `long-animation-frame` events instead of through the web-vitals
    // `observe` helper function.
    const observer = new PerformanceObserver((list)=>{
        const parent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveSpan"])();
        if (!parent) {
            return;
        }
        for (const entry of list.getEntries()){
            if (!entry.scripts[0]) {
                continue;
            }
            const startTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserPerformanceTimeOrigin"])() + entry.startTime);
            const { start_timestamp: parentStartTimestamp, op: parentOp } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanToJSON"])(parent);
            if (parentOp === 'navigation' && parentStartTimestamp && startTime < parentStartTimestamp) {
                continue;
            }
            const duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])(entry.duration);
            const attributes = {
                [__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN"]]: 'auto.ui.browser.metrics'
            };
            const initialScript = entry.scripts[0];
            const { invoker, invokerType, sourceURL, sourceFunctionName, sourceCharPosition } = initialScript;
            attributes['browser.script.invoker'] = invoker;
            attributes['browser.script.invoker_type'] = invokerType;
            if (sourceURL) {
                attributes['code.filepath'] = sourceURL;
            }
            if (sourceFunctionName) {
                attributes['code.function'] = sourceFunctionName;
            }
            if (sourceCharPosition !== -1) {
                attributes['browser.script.source_char_position'] = sourceCharPosition;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startAndEndSpan"])(parent, startTime, startTime + duration, {
                name: 'Main UI thread blocked',
                op: 'ui.long-animation-frame',
                attributes
            });
        }
    });
    observer.observe({
        type: 'long-animation-frame',
        buffered: true
    });
}
/**
 * Start tracking interaction events.
 */ function startTrackingInteractions() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$instrument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPerformanceInstrumentationHandler"])('event', ({ entries })=>{
        const parent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveSpan"])();
        if (!parent) {
            return;
        }
        for (const entry of entries){
            if (entry.name === 'click') {
                const startTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserPerformanceTimeOrigin"])() + entry.startTime);
                const duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])(entry.duration);
                const spanOptions = {
                    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["htmlTreeAsString"])(entry.target),
                    op: `ui.interaction.${entry.name}`,
                    startTime: startTime,
                    attributes: {
                        [__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN"]]: 'auto.ui.browser.metrics'
                    }
                };
                const componentName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComponentName"])(entry.target);
                if (componentName) {
                    spanOptions.attributes['ui.component_name'] = componentName;
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startAndEndSpan"])(parent, startTime, startTime + duration, spanOptions);
            }
        }
    });
}
/**
 * Starts tracking the Cumulative Layout Shift on the current page and collects the value and last entry
 * to the `_measurements` object which ultimately is applied to the pageload span's measurements.
 */ function _trackCLS() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$instrument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addClsInstrumentationHandler"])(({ metric })=>{
        const entry = metric.entries[metric.entries.length - 1];
        if (!entry) {
            return;
        }
        _measurements['cls'] = {
            value: metric.value,
            unit: ''
        };
        _clsEntry = entry;
    }, true);
}
/** Starts tracking the Largest Contentful Paint on the current page. */ function _trackLCP() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$instrument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLcpInstrumentationHandler"])(({ metric })=>{
        const entry = metric.entries[metric.entries.length - 1];
        if (!entry) {
            return;
        }
        _measurements['lcp'] = {
            value: metric.value,
            unit: 'millisecond'
        };
        _lcpEntry = entry;
    }, true);
}
function _trackTtfb() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$instrument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addTtfbInstrumentationHandler"])(({ metric })=>{
        const entry = metric.entries[metric.entries.length - 1];
        if (!entry) {
            return;
        }
        _measurements['ttfb'] = {
            value: metric.value,
            unit: 'millisecond'
        };
    });
}
/** Add performance related spans to a transaction */ function addPerformanceEntries(span, options) {
    const performance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBrowserPerformanceAPI"])();
    const origin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserPerformanceTimeOrigin"])();
    if (!performance?.getEntries || !origin) {
        // Gatekeeper if performance API not available
        return;
    }
    const { spanStreamingEnabled, ignorePerformanceApiSpans, ignoreResourceSpans, recordClsOnPageloadSpan, recordLcpOnPageloadSpan } = options;
    const timeOrigin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])(origin);
    const performanceEntries = performance.getEntries();
    const { op, start_timestamp: transactionStartTime } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanToJSON"])(span);
    performanceEntries.slice(_performanceCursor).forEach((entry)=>{
        const startTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])(entry.startTime);
        const duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])(// Inexplicably, Chrome sometimes emits a negative duration. We need to work around this.
        // There is a SO post attempting to explain this, but it leaves one with open questions: https://stackoverflow.com/questions/23191918/peformance-getentries-and-negative-duration-display
        // The way we clamp the value is probably not accurate, since we have observed this happen for things that may take a while to load, like for example the replay worker.
        // TODO: Investigate why this happens and how to properly mitigate. For now, this is a workaround to prevent transactions being dropped due to negative duration spans.
        Math.max(0, entry.duration));
        if (op === 'navigation' && transactionStartTime && timeOrigin + startTime < transactionStartTime) {
            return;
        }
        switch(entry.entryType){
            case 'navigation':
                {
                    _addNavigationSpans(span, entry, timeOrigin);
                    break;
                }
            case 'mark':
            case 'paint':
            case 'measure':
                {
                    _addMeasureSpans(span, entry, startTime, duration, timeOrigin, ignorePerformanceApiSpans);
                    // capture web vitals
                    const firstHidden = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getVisibilityWatcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVisibilityWatcher"])();
                    // Only report if the page wasn't hidden prior to the web vital.
                    const shouldRecord = entry.startTime < firstHidden.firstHiddenTime;
                    if (entry.name === 'first-paint' && shouldRecord) {
                        _measurements['fp'] = {
                            value: entry.startTime,
                            unit: 'millisecond'
                        };
                    }
                    if (entry.name === 'first-contentful-paint' && shouldRecord) {
                        _measurements['fcp'] = {
                            value: entry.startTime,
                            unit: 'millisecond'
                        };
                    }
                    break;
                }
            case 'resource':
                {
                    _addResourceSpans(span, entry, entry.name, startTime, duration, timeOrigin, ignoreResourceSpans);
                    break;
                }
        }
    });
    _performanceCursor = Math.max(performanceEntries.length - 1, 0);
    _trackNavigator(span, spanStreamingEnabled);
    // Measurements are only available for pageload transactions
    if (op === 'pageload') {
        _addTtfbRequestTimeToMeasurements(_measurements);
        if (spanStreamingEnabled) {
            const setAttr = (shortWebVitalName, value, customAttrName)=>{
                const attrKey = customAttrName ?? `browser.web_vital.${shortWebVitalName}.value`;
                span.setAttribute(attrKey, value);
                __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"].log('Setting web vital attribute', {
                    [attrKey]: value
                }, 'on pageload span');
            };
            // for streamed pageload spans, we add the web vital measurements as attributes.
            // We omit LCP, CLS and INP because they're tracked separately as spans
            [
                'ttfb',
                'fp',
                'fcp'
            ].forEach((measurementName)=>{
                if (_measurements[measurementName]) {
                    setAttr(measurementName, _measurements[measurementName].value);
                }
            });
            if (_measurements['ttfb.requestTime']) {
                setAttr('ttfb.requestTime', _measurements['ttfb.requestTime'].value, 'browser.web_vital.ttfb.request_time');
            }
        } else {
            // TODO (V11): Remove this else branch once we remove v1 standalone spans and transactions
            // If CLS standalone spans are enabled, don't record CLS as a measurement
            if (!recordClsOnPageloadSpan) {
                delete _measurements.cls;
            }
            // If LCP standalone spans are enabled, don't record LCP as a measurement
            if (!recordLcpOnPageloadSpan) {
                delete _measurements.lcp;
            }
            Object.entries(_measurements).forEach(([measurementName, measurement])=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$measurement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setMeasurement"])(measurementName, measurement.value, measurement.unit);
            });
            _setWebVitalAttributes(span, options);
        }
        // Set timeOrigin which denotes the timestamp which to base the LCP/FCP/FP/TTFB measurements on
        span.setAttribute(spanStreamingEnabled ? 'browser.performance.time_origin' : 'performance.timeOrigin', timeOrigin);
        // In prerendering scenarios, where a page might be prefetched and pre-rendered before the user clicks the link,
        // the navigation starts earlier than when the user clicks it. Web Vitals should always be based on the
        // user-perceived time, so they are not reported from the actual start of the navigation, but rather from the
        // time where the user actively started the navigation, for example by clicking a link.
        // This is user action is called "activation" and the time between navigation and activation is stored in
        // the `activationStart` attribute of the "navigation" PerformanceEntry.
        span.setAttribute(spanStreamingEnabled ? 'browser.performance.navigation.activation_start' : 'performance.activationStart', (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getActivationStart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActivationStart"])());
    }
    _lcpEntry = undefined;
    _clsEntry = undefined;
    _measurements = {};
}
/**
 * React 19.2+ creates performance.measure entries for component renders.
 * We can identify them by the `detail.devtools.track` property being set to 'Components ⚛'.
 * see: https://react.dev/reference/dev-tools/react-performance-tracks
 * see: https://github.com/facebook/react/blob/06fcc8f380c6a905c7bc18d94453f623cf8cbc81/packages/react-reconciler/src/ReactFiberPerformanceTrack.js#L454-L473
 */ function isReact19MeasureEntry(entry) {
    if (entry?.entryType !== 'measure') {
        return;
    }
    try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        return entry.detail.devtools.track === 'Components ⚛';
    } catch  {
        return;
    }
}
/**
 * Create measure related spans.
 * Exported only for tests.
 */ function _addMeasureSpans(span, entry, startTime, duration, timeOrigin, ignorePerformanceApiSpans) {
    if (isReact19MeasureEntry(entry)) {
        return;
    }
    if ([
        'mark',
        'measure'
    ].includes(entry.entryType) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringMatchesSomePattern"])(entry.name, ignorePerformanceApiSpans)) {
        return;
    }
    const navEntry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getNavigationEntry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNavigationEntry"])(false);
    const requestTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])(navEntry ? navEntry.requestStart : 0);
    // Because performance.measure accepts arbitrary timestamps it can produce
    // spans that happen before the browser even makes a request for the page.
    //
    // An example of this is the automatically generated Next.js-before-hydration
    // spans created by the Next.js framework.
    //
    // To prevent this we will pin the start timestamp to the request start time
    // This does make duration inaccurate, so if this does happen, we will add
    // an attribute to the span
    const measureStartTimestamp = timeOrigin + Math.max(startTime, requestTime);
    const startTimeStamp = timeOrigin + startTime;
    const measureEndTimestamp = startTimeStamp + duration;
    const attributes = {
        [__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN"]]: 'auto.resource.browser.metrics'
    };
    if (measureStartTimestamp !== startTimeStamp) {
        attributes['sentry.browser.measure_happened_before_request'] = true;
        attributes['sentry.browser.measure_start_time'] = measureStartTimestamp;
    }
    _addDetailToSpanAttributes(attributes, entry);
    // Measurements from third parties can be off, which would create invalid spans, dropping transactions in the process.
    if (measureStartTimestamp <= measureEndTimestamp) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startAndEndSpan"])(span, measureStartTimestamp, measureEndTimestamp, {
            name: entry.name,
            op: entry.entryType,
            attributes
        });
    }
}
function _addDetailToSpanAttributes(attributes, performanceMeasure) {
    try {
        // Accessing detail might throw in some browsers (e.g., Firefox) due to security restrictions
        const detail = performanceMeasure.detail;
        if (!detail) {
            return;
        }
        // Process detail based on its type
        if (typeof detail === 'object') {
            // Handle object details
            for (const [key, value] of Object.entries(detail)){
                if (value && (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPrimitive"])(value)) {
                    attributes[`sentry.browser.measure.detail.${key}`] = value;
                } else if (value !== undefined) {
                    try {
                        // This is user defined so we can't guarantee it's serializable
                        attributes[`sentry.browser.measure.detail.${key}`] = JSON.stringify(value);
                    } catch  {
                    // Skip values that can't be stringified
                    }
                }
            }
            return;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPrimitive"])(detail)) {
            // Handle primitive details
            attributes['sentry.browser.measure.detail'] = detail;
            return;
        }
        try {
            attributes['sentry.browser.measure.detail'] = JSON.stringify(detail);
        } catch  {
        // Skip if stringification fails
        }
    } catch  {
    // Silently ignore any errors when accessing detail
    // This handles the Firefox "Permission denied to access object" error
    }
}
/**
 * Instrument navigation entries
 * exported only for tests
 */ function _addNavigationSpans(span, entry, timeOrigin) {
    [
        'unloadEvent',
        'redirect',
        'domContentLoadedEvent',
        'loadEvent',
        'connect'
    ].forEach((event)=>{
        _addPerformanceNavigationTiming(span, entry, event, timeOrigin);
    });
    _addPerformanceNavigationTiming(span, entry, 'secureConnection', timeOrigin, 'TLS/SSL');
    _addPerformanceNavigationTiming(span, entry, 'fetch', timeOrigin, 'cache');
    _addPerformanceNavigationTiming(span, entry, 'domainLookup', timeOrigin, 'DNS');
    _addRequest(span, entry, timeOrigin);
}
/** Create performance navigation related spans */ function _addPerformanceNavigationTiming(span, entry, event, timeOrigin, name = event) {
    const eventEnd = _getEndPropertyNameForNavigationTiming(event);
    const end = entry[eventEnd];
    const start = entry[`${event}Start`];
    if (!start || !end) {
        return;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startAndEndSpan"])(span, timeOrigin + (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])(start), timeOrigin + (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])(end), {
        op: `browser.${name}`,
        name: entry.name,
        attributes: {
            [__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN"]]: 'auto.ui.browser.metrics',
            ...event === 'redirect' && entry.redirectCount != null ? {
                'http.redirect_count': entry.redirectCount
            } : {}
        }
    });
}
function _getEndPropertyNameForNavigationTiming(event) {
    if (event === 'secureConnection') {
        return 'connectEnd';
    }
    if (event === 'fetch') {
        return 'domainLookupStart';
    }
    return `${event}End`;
}
/** Create request and response related spans */ function _addRequest(span, entry, timeOrigin) {
    const requestStartTimestamp = timeOrigin + (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])(entry.requestStart);
    const responseEndTimestamp = timeOrigin + (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])(entry.responseEnd);
    const responseStartTimestamp = timeOrigin + (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])(entry.responseStart);
    if (entry.responseEnd) {
        // It is possible that we are collecting these metrics when the page hasn't finished loading yet, for example when the HTML slowly streams in.
        // In this case, ie. when the document request hasn't finished yet, `entry.responseEnd` will be 0.
        // In order not to produce faulty spans, where the end timestamp is before the start timestamp, we will only collect
        // these spans when the responseEnd value is available. The backend (Relay) would drop the entire span if it contained faulty spans.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startAndEndSpan"])(span, requestStartTimestamp, responseEndTimestamp, {
            op: 'browser.request',
            name: entry.name,
            attributes: {
                [__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN"]]: 'auto.ui.browser.metrics'
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startAndEndSpan"])(span, responseStartTimestamp, responseEndTimestamp, {
            op: 'browser.response',
            name: entry.name,
            attributes: {
                [__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN"]]: 'auto.ui.browser.metrics'
            }
        });
    }
}
/**
 * Create resource-related spans.
 * Exported only for tests.
 */ function _addResourceSpans(span, entry, resourceUrl, startTime, duration, timeOrigin, ignoredResourceSpanOps) {
    // we already instrument based on fetch and xhr, so we don't need to
    // duplicate spans here.
    if (entry.initiatorType === 'xmlhttprequest' || entry.initiatorType === 'fetch') {
        return;
    }
    const op = entry.initiatorType ? `resource.${entry.initiatorType}` : 'resource.other';
    if (ignoredResourceSpanOps?.includes(op)) {
        return;
    }
    const attributes = {
        [__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN"]]: 'auto.resource.browser.metrics'
    };
    const parsedUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseUrl"])(resourceUrl);
    if (parsedUrl.protocol) {
        attributes['url.scheme'] = parsedUrl.protocol.split(':').pop(); // the protocol returned by parseUrl includes a :, but OTEL spec does not, so we remove it.
    }
    if (parsedUrl.host) {
        attributes['server.address'] = parsedUrl.host;
    }
    attributes['url.same_origin'] = resourceUrl.includes(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].location.origin);
    _setResourceRequestAttributes(entry, attributes, [
        // https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/responseStatus
        [
            'responseStatus',
            'http.response.status_code'
        ],
        [
            'transferSize',
            'http.response_transfer_size'
        ],
        [
            'encodedBodySize',
            'http.response_content_length'
        ],
        [
            'decodedBodySize',
            'http.decoded_response_content_length'
        ],
        // https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/renderBlockingStatus
        [
            'renderBlockingStatus',
            'resource.render_blocking_status'
        ],
        // https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/deliveryType
        [
            'deliveryType',
            'http.response_delivery_type'
        ]
    ]);
    const attributesWithResourceTiming = {
        ...attributes,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$resourceTiming$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resourceTimingToSpanAttributes"])(entry)
    };
    const startTimestamp = timeOrigin + startTime;
    const endTimestamp = startTimestamp + duration;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startAndEndSpan"])(span, startTimestamp, endTimestamp, {
        name: resourceUrl.replace(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].location.origin, ''),
        op,
        attributes: attributesWithResourceTiming
    });
}
/**
 * Capture the information of the user agent.
 * TODO v11: Remove non-span-streaming attributes and measurements once we removed transactions
 */ function _trackNavigator(span, spanStreamingEnabled) {
    const navigator = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].navigator;
    if (!navigator) {
        return;
    }
    // track network connectivity
    const connection = navigator.connection;
    if (connection) {
        if (connection.effectiveType) {
            span.setAttribute(spanStreamingEnabled ? 'network.connection.effective_type' : 'effectiveConnectionType', connection.effectiveType);
        }
        if (connection.type) {
            span.setAttribute(spanStreamingEnabled ? 'network.connection.type' : 'connectionType', connection.type);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMeasurementValue"])(connection.rtt)) {
            _measurements['connection.rtt'] = {
                value: connection.rtt,
                unit: 'millisecond'
            };
            if (spanStreamingEnabled) {
                span.setAttribute('network.connection.rtt', connection.rtt);
            }
        }
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMeasurementValue"])(navigator.deviceMemory)) {
        if (spanStreamingEnabled) {
            span.setAttribute('device.memory.estimated_capacity', navigator.deviceMemory);
        } else {
            span.setAttribute('deviceMemory', `${navigator.deviceMemory} GB`);
        }
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMeasurementValue"])(navigator.hardwareConcurrency)) {
        if (spanStreamingEnabled) {
            span.setAttribute('device.processor_count', navigator.hardwareConcurrency);
        } else {
            span.setAttribute('hardwareConcurrency', String(navigator.hardwareConcurrency));
        }
    }
}
/** Add LCP / CLS data to span to allow debugging */ function _setWebVitalAttributes(span, options) {
    // Only add LCP attributes if LCP is being recorded on the pageload span
    if (_lcpEntry && options.recordLcpOnPageloadSpan) {
        // Capture Properties of the LCP element that contributes to the LCP.
        if (_lcpEntry.element) {
            span.setAttribute('lcp.element', (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["htmlTreeAsString"])(_lcpEntry.element));
        }
        if (_lcpEntry.id) {
            span.setAttribute('lcp.id', _lcpEntry.id);
        }
        if (_lcpEntry.url) {
            // Trim URL to the first 200 characters.
            span.setAttribute('lcp.url', _lcpEntry.url.trim().slice(0, 200));
        }
        if (_lcpEntry.loadTime != null) {
            // loadTime is the time of LCP that's related to receiving the LCP element response..
            span.setAttribute('lcp.loadTime', _lcpEntry.loadTime);
        }
        if (_lcpEntry.renderTime != null) {
            // renderTime is loadTime + rendering time
            // it's 0 if the LCP element is loaded from a 3rd party origin that doesn't send the
            // `Timing-Allow-Origin` header.
            span.setAttribute('lcp.renderTime', _lcpEntry.renderTime);
        }
        span.setAttribute('lcp.size', _lcpEntry.size);
    }
    // Only add CLS attributes if CLS is being recorded on the pageload span
    if (_clsEntry?.sources && options.recordClsOnPageloadSpan) {
        _clsEntry.sources.forEach((source, index)=>span.setAttribute(`cls.source.${index + 1}`, (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["htmlTreeAsString"])(source.node)));
    }
}
/**
 * Use this to set any attributes we can take directly form the PerformanceResourceTiming entry.
 *
 * This is just a mapping function for entry->attribute to keep bundle-size minimal.
 * Experimental properties are also accepted (see {@link ExperimentalResourceTimingProperty}).
 * Assumes that all entry properties might be undefined for browser-specific differences.
 * Only accepts string and number values for now and also sets 0-values.
 */ function _setResourceRequestAttributes(entry, attributes, properties) {
    properties.forEach(([entryKey, attributeKey])=>{
        const entryVal = entry[entryKey];
        if (entryVal != null && (typeof entryVal === 'number' && entryVal < MAX_INT_AS_BYTES || typeof entryVal === 'string')) {
            attributes[attributeKey] = entryVal;
        }
    });
}
/**
 * Add ttfb request time information to measurements.
 *
 * ttfb information is added via vendored web vitals library.
 */ function _addTtfbRequestTimeToMeasurements(_measurements) {
    const navEntry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$web$2d$vitals$2f$lib$2f$getNavigationEntry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNavigationEntry"])(false);
    if (!navEntry) {
        return;
    }
    const { responseStart, requestStart } = navEntry;
    if (requestStart <= responseStart) {
        _measurements['ttfb.requestTime'] = {
            value: responseStart - requestStart,
            unit: 'millisecond'
        };
    }
}
;
}),
"[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/webVitalSpans.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_emitWebVitalSpan",
    ()=>_emitWebVitalSpan,
    "_sendClsSpan",
    ()=>_sendClsSpan,
    "_sendInpSpan",
    ()=>_sendInpSpan,
    "_sendLcpSpan",
    ()=>_sendLcpSpan,
    "trackClsAsSpan",
    ()=>trackClsAsSpan,
    "trackInpAsSpan",
    ()=>trackInpAsSpan,
    "trackLcpAsSpan",
    ()=>trackLcpAsSpan
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/utils/time.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/utils/debug-logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/utils/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/currentScopes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/utils/spanUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/semanticAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$trace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/tracing/trace.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$inp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/inp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$instrument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/instrument.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/metrics/utils.js [app-client] (ecmascript)");
;
;
;
;
;
;
// Locally-defined interfaces to avoid leaking bare global type references into the
// generated .d.ts. The `declare global` augmentations in web-vitals/types.ts make these
// available during this package's compilation but are NOT carried to consumers.
// This mirrors the pattern used for PerformanceEventTiming in instrument.ts.
/**
 * Emits a web vital span that flows through the span streaming pipeline.
 */ function _emitWebVitalSpan(options) {
    const { name, op, origin, metricName, value, attributes: passedAttributes, parentSpan, reportEvent, startTime, endTime } = options;
    const routeName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentScope"])().getScopeData().transactionName;
    const attributes = {
        [__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN"]]: origin,
        [__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_OP"]]: op,
        [__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME"]]: 0,
        [`browser.web_vital.${metricName}.value`]: value,
        'sentry.transaction': routeName,
        // Web vital score calculation relies on the user agent
        'user_agent.original': __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].navigator?.userAgent,
        ...passedAttributes
    };
    if (parentSpan && (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanToStreamedSpanJSON"])(parentSpan).attributes?.[__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_OP"]] === 'pageload') {
        // for LCP and CLS, we collect the pageload span id as an attribute
        attributes['sentry.pageload.span_id'] = parentSpan.spanContext().spanId;
    }
    if (reportEvent) {
        attributes[`browser.web_vital.${metricName}.report_event`] = reportEvent;
    }
    const span = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$trace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startInactiveSpan"])({
        name,
        attributes,
        startTime,
        // if we have a pageload span, we let the web vital span start as its parent. This ensures that
        // it is not started as a segment span, without having to manually set it to a "standalone" v2 span
        // that has `segment: false` but no actual parent span.
        parentSpan: parentSpan
    });
    if (span) {
        span.end(endTime ?? startTime);
    }
}
/**
 * Tracks LCP as a streamed span.
 */ function trackLcpAsSpan(client) {
    let lcpValue = 0;
    let lcpEntry;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsWebVital"])('largest-contentful-paint')) {
        return;
    }
    const cleanupLcpHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$instrument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLcpInstrumentationHandler"])(({ metric })=>{
        const entry = metric.entries[metric.entries.length - 1];
        if (!entry) {
            return;
        }
        lcpValue = metric.value;
        lcpEntry = entry;
    }, true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listenForWebVitalReportEvents"])(client, (reportEvent, _, pageloadSpan)=>{
        _sendLcpSpan(lcpValue, lcpEntry, pageloadSpan, reportEvent);
        cleanupLcpHandler();
    });
}
/**
 * Exported only for testing.
 */ function _sendLcpSpan(lcpValue, entry, pageloadSpan, reportEvent) {
    __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"].log(`Sending LCP span (${lcpValue})`);
    const performanceTimeOrigin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserPerformanceTimeOrigin"])() || 0;
    const timeOrigin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])(performanceTimeOrigin);
    const endTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])(performanceTimeOrigin + (entry?.startTime || 0));
    const name = entry ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["htmlTreeAsString"])(entry.element) : 'Largest contentful paint';
    const attributes = {};
    entry?.element && (attributes['browser.web_vital.lcp.element'] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["htmlTreeAsString"])(entry.element));
    entry?.id && (attributes['browser.web_vital.lcp.id'] = entry.id);
    entry?.url && (attributes['browser.web_vital.lcp.url'] = entry.url);
    entry?.loadTime != null && (attributes['browser.web_vital.lcp.load_time'] = entry.loadTime);
    entry?.renderTime != null && (attributes['browser.web_vital.lcp.render_time'] = entry.renderTime);
    entry?.size != null && (attributes['browser.web_vital.lcp.size'] = entry.size);
    _emitWebVitalSpan({
        name,
        op: 'ui.webvital.lcp',
        origin: 'auto.http.browser.lcp',
        metricName: 'lcp',
        value: lcpValue,
        attributes,
        parentSpan: pageloadSpan,
        reportEvent,
        startTime: timeOrigin,
        endTime
    });
}
/**
 * Tracks CLS as a streamed span.
 */ function trackClsAsSpan(client) {
    let clsValue = 0;
    let clsEntry;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsWebVital"])('layout-shift')) {
        return;
    }
    const cleanupClsHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$instrument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addClsInstrumentationHandler"])(({ metric })=>{
        const entry = metric.entries[metric.entries.length - 1];
        if (!entry) {
            return;
        }
        clsValue = metric.value;
        clsEntry = entry;
    }, true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listenForWebVitalReportEvents"])(client, (reportEvent, _, pageloadSpan)=>{
        _sendClsSpan(clsValue, clsEntry, pageloadSpan, reportEvent);
        cleanupClsHandler();
    });
}
/**
 * Exported only for testing.
 */ function _sendClsSpan(clsValue, entry, pageloadSpan, reportEvent) {
    __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"].log(`Sending CLS span (${clsValue})`);
    const startTime = entry ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])(((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserPerformanceTimeOrigin"])() || 0) + entry.startTime) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timestampInSeconds"])();
    const name = entry ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["htmlTreeAsString"])(entry.sources[0]?.node) : 'Layout shift';
    const attributes = {};
    if (entry?.sources) {
        entry.sources.forEach((source, index)=>{
            attributes[`browser.web_vital.cls.source.${index + 1}`] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["htmlTreeAsString"])(source.node);
        });
    }
    _emitWebVitalSpan({
        name,
        op: 'ui.webvital.cls',
        origin: 'auto.http.browser.cls',
        metricName: 'cls',
        value: clsValue,
        attributes,
        parentSpan: pageloadSpan,
        reportEvent,
        startTime
    });
}
/**
 * Tracks INP as a streamed span.
 *
 * This mirrors the standalone INP tracking logic (`startTrackingINP`) but emits
 * spans through the streaming pipeline instead of as standalone spans.
 * Requires `registerInpInteractionListener()` to be called separately for
 * cached element names and root spans per interaction.
 */ function trackInpAsSpan() {
    const performance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBrowserPerformanceAPI"])();
    if (!performance || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserPerformanceTimeOrigin"])()) {
        return;
    }
    const onInp = ({ metric })=>{
        if (metric.value == null) {
            return;
        }
        const duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])(metric.value);
        if (duration > __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$inp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_PLAUSIBLE_INP_DURATION"]) {
            return;
        }
        const entry = metric.entries.find((e)=>e.duration === metric.value && __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$inp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INP_ENTRY_MAP"][e.name]);
        if (!entry) {
            return;
        }
        _sendInpSpan(metric.value, entry);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$instrument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addInpInstrumentationHandler"])(onInp);
}
/**
 * Exported only for testing.
 */ function _sendInpSpan(inpValue, entry) {
    __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"].log(`Sending INP span (${inpValue})`);
    const startTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserPerformanceTimeOrigin"])() + entry.startTime);
    const duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msToSec"])(inpValue);
    const interactionType = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$inp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INP_ENTRY_MAP"][entry.name];
    const cachedContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$inp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCachedInteractionContext"])(entry.interactionId);
    const activeSpan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveSpan"])();
    const rootSpan = activeSpan ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRootSpan"])(activeSpan) : undefined;
    const spanToUse = cachedContext?.span || rootSpan;
    const routeName = spanToUse ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanToStreamedSpanJSON"])(spanToUse).name : (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentScope"])().getScopeData().transactionName;
    const name = cachedContext?.elementName || (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["htmlTreeAsString"])(entry.target);
    _emitWebVitalSpan({
        name,
        op: `ui.interaction.${interactionType}`,
        origin: 'auto.http.browser.inp',
        metricName: 'inp',
        value: inpValue,
        attributes: {
            [__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME"]]: entry.duration,
            'sentry.transaction': routeName
        },
        startTime,
        endTime: startTime + duration,
        parentSpan: spanToUse
    });
}
;
}),
"[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/networkUtils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ORIGINAL_REQ_BODY",
    ()=>ORIGINAL_REQ_BODY,
    "getBodyString",
    ()=>getBodyString,
    "getFetchRequestArgBody",
    ()=>getFetchRequestArgBody,
    "parseXhrResponseHeaders",
    ()=>parseXhrResponseHeaders,
    "serializeFormData",
    ()=>serializeFormData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/utils/debug-logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry-internal/browser-utils/build/esm/debug-build.js [app-client] (ecmascript)");
;
;
// Symbol used by e.g. the Replay integration to store original body on Request objects
const ORIGINAL_REQ_BODY = Symbol.for('sentry__originalRequestBody');
/**
 * Serializes FormData.
 *
 * This is a bit simplified, but gives us a decent estimate.
 * This converts e.g. { name: 'Anne Smith', age: 13 } to 'name=Anne+Smith&age=13'.
 *
 */ function serializeFormData(formData) {
    // @ts-expect-error passing FormData to URLSearchParams actually works
    return new URLSearchParams(formData).toString();
}
/** Get the string representation of a body. */ function getBodyString(body, _debug = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"]) {
    try {
        if (typeof body === 'string') {
            return [
                body
            ];
        }
        if (body instanceof URLSearchParams) {
            return [
                body.toString()
            ];
        }
        if (body instanceof FormData) {
            return [
                serializeFormData(body)
            ];
        }
        if (!body) {
            return [
                undefined
            ];
        }
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && _debug.error(error, 'Failed to serialize body', body);
        return [
            undefined,
            'BODY_PARSE_ERROR'
        ];
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && _debug.log('Skipping network body because of body type', body);
    return [
        undefined,
        'UNPARSEABLE_BODY_TYPE'
    ];
}
/**
 * Parses the fetch arguments to extract the request payload.
 *
 * In case of a Request object, this function attempts to retrieve the original body by looking for a Sentry-patched symbol.
 */ function getFetchRequestArgBody(fetchArgs = []) {
    // Second argument with body options takes precedence
    if (fetchArgs.length >= 2 && fetchArgs[1] && typeof fetchArgs[1] === 'object' && 'body' in fetchArgs[1]) {
        return fetchArgs[1].body;
    }
    if (fetchArgs.length >= 1 && fetchArgs[0] instanceof Request) {
        const request = fetchArgs[0];
        /* The Request interface's body is a ReadableStream, which we cannot directly access.
       Some integrations (e.g. Replay) patch the Request object to store the original body. */ // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
        const originalBody = request[ORIGINAL_REQ_BODY];
        if (originalBody !== undefined) {
            return originalBody;
        }
        return undefined; // Fall back to returning undefined (as we don't want to return a ReadableStream)
    }
    return undefined;
}
/**
 * Parses XMLHttpRequest response headers into a Record.
 * Extracted from replay internals to be reusable.
 */ function parseXhrResponseHeaders(xhr) {
    let headers;
    try {
        headers = xhr.getAllResponseHeaders();
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"].error(error, 'Failed to get xhr response headers', xhr);
        return {};
    }
    if (!headers) {
        return {};
    }
    return headers.split('\r\n').reduce((acc, line)=>{
        const [key, value] = line.split(': ');
        if (value) {
            acc[key.toLowerCase()] = value;
        }
        return acc;
    }, {});
}
;
}),
]);

//# debugId=f8281b9f-1bc3-6554-564f-90c0f01fc2bb
//# sourceMappingURL=038n_%40sentry-internal_browser-utils_build_esm_0fyt8nh._.js.map