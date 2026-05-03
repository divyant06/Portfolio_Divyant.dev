;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="de1e79c7-e7da-fd99-fd0a-85ce6a08760c")}catch(e){}}();
(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/portfolio/src/app/global-error.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GlobalError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@sentry/core/build/esm/exports.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function GlobalError({ error }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlobalError.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureException"](error);
        }
    }["GlobalError.useEffect"], [
        error
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                statusCode: 0
            }, void 0, false, {
                fileName: "[project]/portfolio/src/app/global-error.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/portfolio/src/app/global-error.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/portfolio/src/app/global-error.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(GlobalError, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = GlobalError;
var _c;
__turbopack_context__.k.register(_c, "GlobalError");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/portfolio/node_modules/next/dist/shared/lib/side-effect.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SideEffect;
    }
});
const _react = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const isServer = typeof window === 'undefined';
const useClientOnlyLayoutEffect = isServer ? ()=>{} : _react.useLayoutEffect;
const useClientOnlyEffect = isServer ? ()=>{} : _react.useEffect;
function SideEffect(props) {
    const { headManager, reduceComponentsToState } = props;
    function emitChange() {
        if (headManager && headManager.mountedInstances) {
            const headElements = _react.Children.toArray(Array.from(headManager.mountedInstances).filter(Boolean));
            headManager.updateHead(reduceComponentsToState(headElements));
        }
    }
    if (isServer) {
        headManager?.mountedInstances?.add(props.children);
        emitChange();
    }
    useClientOnlyLayoutEffect({
        "SideEffect.useClientOnlyLayoutEffect": ()=>{
            headManager?.mountedInstances?.add(props.children);
            return ({
                "SideEffect.useClientOnlyLayoutEffect": ()=>{
                    headManager?.mountedInstances?.delete(props.children);
                }
            })["SideEffect.useClientOnlyLayoutEffect"];
        }
    }["SideEffect.useClientOnlyLayoutEffect"]);
    // We need to call `updateHead` method whenever the `SideEffect` is trigger in all
    // life-cycles: mount, update, unmount. However, if there are multiple `SideEffect`s
    // being rendered, we only trigger the method from the last one.
    // This is ensured by keeping the last unflushed `updateHead` in the `_pendingUpdate`
    // singleton in the layout effect pass, and actually trigger it in the effect pass.
    useClientOnlyLayoutEffect({
        "SideEffect.useClientOnlyLayoutEffect": ()=>{
            if (headManager) {
                headManager._pendingUpdate = emitChange;
            }
            return ({
                "SideEffect.useClientOnlyLayoutEffect": ()=>{
                    if (headManager) {
                        headManager._pendingUpdate = emitChange;
                    }
                }
            })["SideEffect.useClientOnlyLayoutEffect"];
        }
    }["SideEffect.useClientOnlyLayoutEffect"]);
    useClientOnlyEffect({
        "SideEffect.useClientOnlyEffect": ()=>{
            if (headManager && headManager._pendingUpdate) {
                headManager._pendingUpdate();
                headManager._pendingUpdate = null;
            }
            return ({
                "SideEffect.useClientOnlyEffect": ()=>{
                    if (headManager && headManager._pendingUpdate) {
                        headManager._pendingUpdate();
                        headManager._pendingUpdate = null;
                    }
                }
            })["SideEffect.useClientOnlyEffect"];
        }
    }["SideEffect.useClientOnlyEffect"]);
    return null;
}
}),
"[project]/portfolio/node_modules/next/dist/shared/lib/head.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    defaultHead: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    defaultHead: function() {
        return defaultHead;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/portfolio/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/portfolio/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _sideeffect = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/portfolio/node_modules/next/dist/shared/lib/side-effect.js [app-client] (ecmascript)"));
const _headmanagercontextsharedruntime = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
function defaultHead() {
    const head = [
        /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
            charSet: "utf-8"
        }, "charset"),
        /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }, "viewport")
    ];
    return head;
}
function onlyReactElement(list, child) {
    // React children can be "string" or "number" in this case we ignore them for backwards compat
    if (typeof child === 'string' || typeof child === 'number') {
        return list;
    }
    // Adds support for React.Fragment
    if (child.type === _react.default.Fragment) {
        return list.concat(_react.default.Children.toArray(child.props.children).reduce((fragmentList, fragmentChild)=>{
            if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
                return fragmentList;
            }
            return fragmentList.concat(fragmentChild);
        }, []));
    }
    return list.concat(child);
}
const METATYPES = [
    'name',
    'httpEquiv',
    'charSet',
    'itemProp'
];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/ function unique() {
    const keys = new Set();
    const tags = new Set();
    const metaTypes = new Set();
    const metaCategories = {};
    return (h)=>{
        let isUnique = true;
        let hasKey = false;
        if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
            hasKey = true;
            const key = h.key.slice(h.key.indexOf('$') + 1);
            if (keys.has(key)) {
                isUnique = false;
            } else {
                keys.add(key);
            }
        }
        // eslint-disable-next-line default-case
        switch(h.type){
            case 'title':
            case 'base':
                if (tags.has(h.type)) {
                    isUnique = false;
                } else {
                    tags.add(h.type);
                }
                break;
            case 'meta':
                for(let i = 0, len = METATYPES.length; i < len; i++){
                    const metatype = METATYPES[i];
                    if (!h.props.hasOwnProperty(metatype)) continue;
                    if (metatype === 'charSet') {
                        if (metaTypes.has(metatype)) {
                            isUnique = false;
                        } else {
                            metaTypes.add(metatype);
                        }
                    } else {
                        const category = h.props[metatype];
                        const categories = metaCategories[metatype] || new Set();
                        if ((metatype !== 'name' || !hasKey) && categories.has(category)) {
                            isUnique = false;
                        } else {
                            categories.add(category);
                            metaCategories[metatype] = categories;
                        }
                    }
                }
                break;
        }
        return isUnique;
    };
}
/**
 *
 * @param headChildrenElements List of children of <Head>
 */ function reduceComponents(headChildrenElements) {
    return headChildrenElements.reduce(onlyReactElement, []).reverse().concat(defaultHead().reverse()).filter(unique()).reverse().map((c, i)=>{
        const key = c.key || i;
        if ("TURBOPACK compile-time truthy", 1) {
            // omit JSON-LD structured data snippets from the warning
            if (c.type === 'script' && c.props['type'] !== 'application/ld+json') {
                const srcMessage = c.props['src'] ? `<script> tag with src="${c.props['src']}"` : `inline <script>`;
                (0, _warnonce.warnOnce)(`Do not add <script> tags using next/head (see ${srcMessage}). Use next/script instead. \nSee more info here: https://nextjs.org/docs/messages/no-script-tags-in-head-component`);
            } else if (c.type === 'link' && c.props['rel'] === 'stylesheet') {
                (0, _warnonce.warnOnce)(`Do not add stylesheets using next/head (see <link rel="stylesheet"> tag with href="${c.props['href']}"). Use Document instead. \nSee more info here: https://nextjs.org/docs/messages/no-stylesheets-in-head-component`);
            }
        }
        return /*#__PURE__*/ _react.default.cloneElement(c, {
            key
        });
    });
}
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */ function Head({ children }) {
    const headManager = (0, _react.useContext)(_headmanagercontextsharedruntime.HeadManagerContext);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_sideeffect.default, {
        reduceComponentsToState: reduceComponents,
        headManager: headManager,
        children: children
    });
}
const _default = Head;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/portfolio/node_modules/next/dist/server/request-meta.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    NEXT_REQUEST_META: null,
    addRequestMeta: null,
    getRequestMeta: null,
    removeRequestMeta: null,
    setRequestMeta: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    NEXT_REQUEST_META: function() {
        return NEXT_REQUEST_META;
    },
    addRequestMeta: function() {
        return addRequestMeta;
    },
    getRequestMeta: function() {
        return getRequestMeta;
    },
    removeRequestMeta: function() {
        return removeRequestMeta;
    },
    setRequestMeta: function() {
        return setRequestMeta;
    }
});
const NEXT_REQUEST_META = Symbol.for('NextInternalRequestMeta');
function getRequestMeta(req, key) {
    const meta = req[NEXT_REQUEST_META] || {};
    return typeof key === 'string' ? meta[key] : meta;
}
function setRequestMeta(req, meta) {
    req[NEXT_REQUEST_META] = meta;
    return meta;
}
function addRequestMeta(request, key, value) {
    const meta = getRequestMeta(request);
    meta[key] = value;
    return setRequestMeta(request, meta);
}
function removeRequestMeta(request, key) {
    const meta = getRequestMeta(request);
    delete meta[key];
    return setRequestMeta(request, meta);
}
}),
"[project]/portfolio/node_modules/next/dist/pages/_error.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, /**
 * `Error` component used for handling errors.
 */ "default", {
    enumerable: true,
    get: function() {
        return Error;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/portfolio/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _head = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/portfolio/node_modules/next/dist/shared/lib/head.js [app-client] (ecmascript)"));
const statusCodes = {
    400: 'Bad Request',
    404: 'This page could not be found',
    405: 'Method Not Allowed',
    500: 'Internal Server Error'
};
function _getInitialProps({ req, res, err }) {
    const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
    let hostname;
    if (typeof window !== 'undefined') {
        hostname = window.location.hostname;
    } else if (req) {
        const { getRequestMeta } = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/server/request-meta.js [app-client] (ecmascript)");
        const initUrl = getRequestMeta(req, 'initURL');
        if (initUrl) {
            const url = new URL(initUrl);
            hostname = url.hostname;
        }
    }
    return {
        statusCode,
        hostname
    };
}
const styles = {
    error: {
        // https://github.com/sindresorhus/modern-normalize/blob/main/modern-normalize.css#L38-L52
        fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
        height: '100vh',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    desc: {
        lineHeight: '48px'
    },
    h1: {
        display: 'inline-block',
        margin: '0 20px 0 0',
        paddingRight: 23,
        fontSize: 24,
        fontWeight: 500,
        verticalAlign: 'top'
    },
    h2: {
        fontSize: 14,
        fontWeight: 400,
        lineHeight: '28px'
    },
    wrap: {
        display: 'inline-block'
    }
};
class Error extends _react.default.Component {
    static{
        this.displayName = 'ErrorPage';
    }
    static{
        this.getInitialProps = _getInitialProps;
    }
    static{
        this.origGetInitialProps = _getInitialProps;
    }
    render() {
        const { statusCode, withDarkMode = true } = this.props;
        const title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';
        return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
            style: styles.error,
            children: [
                /*#__PURE__*/ (0, _jsxruntime.jsx)(_head.default, {
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)("title", {
                        children: statusCode ? `${statusCode}: ${title}` : 'Application error: a client-side exception has occurred'
                    })
                }),
                /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                    style: styles.desc,
                    children: [
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("style", {
                            dangerouslySetInnerHTML: {
                                /* CSS minified from
                body { margin: 0; color: #000; background: #fff; }
                .next-error-h1 {
                  border-right: 1px solid rgba(0, 0, 0, .3);
                }

                ${
                  withDarkMode
                    ? `@media (prefers-color-scheme: dark) {
                  body { color: #fff; background: #000; }
                  .next-error-h1 {
                    border-right: 1px solid rgba(255, 255, 255, .3);
                  }
                }`
                    : ''
                }
               */ __html: `body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}${withDarkMode ? '@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}' : ''}`
                            }
                        }),
                        statusCode ? /*#__PURE__*/ (0, _jsxruntime.jsx)("h1", {
                            className: "next-error-h1",
                            style: styles.h1,
                            children: statusCode
                        }) : null,
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                            style: styles.wrap,
                            children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("h2", {
                                style: styles.h2,
                                children: [
                                    this.props.title || statusCode ? title : /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                                        children: [
                                            "Application error: a client-side exception has occurred",
                                            ' ',
                                            Boolean(this.props.hostname) && /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                                                children: [
                                                    "while loading ",
                                                    this.props.hostname
                                                ]
                                            }),
                                            ' ',
                                            "(see the browser console for more information)"
                                        ]
                                    }),
                                    "."
                                ]
                            })
                        })
                    ]
                })
            ]
        });
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/portfolio/node_modules/next/dist/client/components/catch-error.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_catchError", {
    enumerable: true,
    get: function() {
        return unstable_catchError;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/portfolio/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _navigationuntracked = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/client/components/navigation-untracked.js [app-client] (ecmascript)");
const _isnextroutererror = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/client/components/is-next-router-error.js [app-client] (ecmascript)");
const _navfailurehandler = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/client/components/nav-failure-handler.js [app-client] (ecmascript)");
const _handleisrerror = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/client/components/handle-isr-error.js [app-client] (ecmascript)");
const _isbot = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/shared/lib/router/utils/is-bot.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _routercontextsharedruntime = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/shared/lib/router-context.shared-runtime.js [app-client] (ecmascript)");
const isBotUserAgent = typeof window !== 'undefined' && (0, _isbot.isBot)(window.navigator.userAgent);
// This is forked from error-boundary.
// TODO: Extend it instead of forking to easily sync the behavior?
class CatchError extends _react.default.Component {
    static{
        this.contextType = _approutercontextsharedruntime.AppRouterContext;
    }
    static{
        // `unstable_catchError()` is parsed as an HOC-style name and displays as
        // a label (<name> [unstable_catchError]) in DevTools.
        this.displayName = 'unstable_catchError(Next.CatchError)';
    }
    constructor(props){
        super(props), this.reset = ()=>{
            this.setState({
                error: null
            });
        }, this.unstable_retry = ()=>{
            if (this.props.isPagesRouter) {
                throw Object.defineProperty(new Error('`unstable_retry()` can only be used in the App Router. Use `reset()` in the Pages Router.'), "__NEXT_ERROR_CODE", {
                    value: "E1138",
                    enumerable: false,
                    configurable: true
                });
            }
            (0, _react.startTransition)(()=>{
                this.context?.refresh();
                this.reset();
            });
        };
        this.state = {
            error: null,
            previousPathname: this.props.pathname
        };
    }
    static getDerivedStateFromError(error) {
        if ((0, _isnextroutererror.isNextRouterError)(error)) {
            // Re-throw if an expected internal Next.js router error occurs
            // this means it should be handled by a different boundary (such as a NotFound boundary in a parent segment)
            throw error;
        }
        return {
            error
        };
    }
    static getDerivedStateFromProps(props, state) {
        const { error } = state;
        // if we encounter an error while
        // a navigation is pending we shouldn't render
        // the error boundary and instead should fallback
        // to a hard navigation to attempt recovering
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        /**
     * Handles reset of the error boundary when a navigation happens.
     * Ensures the error boundary does not stay enabled when navigating to a new page.
     * Approach of setState in render is safe as it checks the previous pathname and then overrides
     * it as outlined in https://react.dev/reference/react/useState#storing-information-from-previous-renders
     */ if (props.pathname !== state.previousPathname && state.error) {
            return {
                error: null,
                previousPathname: props.pathname
            };
        }
        return {
            error: state.error,
            previousPathname: props.pathname
        };
    }
    // Explicit type is needed to avoid the generated `.d.ts` having a wide return type that could be specific to the `@types/react` version.
    render() {
        //When it's bot request, segment level error boundary will keep rendering the children,
        // the final error will be caught by the root error boundary and determine wether need to apply graceful degrade.
        if (this.state.error && !isBotUserAgent) {
            (0, _handleisrerror.handleISRError)({
                error: this.state.error
            });
            return /*#__PURE__*/ (0, _jsxruntime.jsx)(this.props.fallback, {
                props: this.props.props,
                errorInfo: {
                    error: this.state.error,
                    reset: this.reset,
                    unstable_retry: this.unstable_retry
                }
            });
        }
        return this.props.children;
    }
}
function unstable_catchError(fallback) {
    // Create Fallback component from the closure of `unstable_catchError`.
    const Fallback = ({ props, errorInfo })=>fallback(props, errorInfo);
    // Rename to match the user component name for DevTools.
    Fallback.displayName = fallback.name || 'CatchErrorFallback';
    return ({ children, ...props })=>{
        // When we're rendering the missing params shell, this will return null. This
        // is because we won't be rendering any not found boundaries or error
        // boundaries for the missing params shell. When this runs on the client
        // (where these errors can occur), we will get the correct pathname.
        const pathname = (0, _navigationuntracked.useUntrackedPathname)();
        const isPagesRouter = (0, _react.useContext)(_routercontextsharedruntime.RouterContext) !== null;
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(CatchError, {
            pathname: pathname,
            isPagesRouter: isPagesRouter,
            fallback: Fallback,
            props: props,
            children: children
        });
    };
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/portfolio/node_modules/next/error.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/pages/_error.js [app-client] (ecmascript)");
// Keep the catch-error graph lazy so default Error consumers do not load it.
Object.defineProperty(module.exports, 'unstable_catchError', {
    enumerable: true,
    get () {
        return __turbopack_context__.r("[project]/portfolio/node_modules/next/dist/client/components/catch-error.js [app-client] (ecmascript)").unstable_catchError;
    }
});
}),
]);

//# debugId=de1e79c7-e7da-fd99-fd0a-85ce6a08760c
//# sourceMappingURL=portfolio_00i0bs4._.js.map