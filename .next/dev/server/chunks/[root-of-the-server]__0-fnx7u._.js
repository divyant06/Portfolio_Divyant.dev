;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="c7ee0186-6c14-f50a-f8f7-a59882f53ec3")}catch(e){}}();
module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/portfolio/src/app/api/github/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/server.js [app-route] (ecmascript)");
;
/**
 * /api/github — GitHub GraphQL API route
 *
 * Returns:
 *  - contributionCalendar (365-day commit graph)
 *  - 3 most recently updated public repositories
 *
 * Auth: process.env.GITHUB_TOKEN (classic PAT with `read:user` scope)
 */ const GITHUB_GRAPHQL = "https://api.github.com/graphql";
const QUERY = `
query($login: String!) {
  user(login: $login) {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            date
            color
          }
        }
      }
    }
    repositories(
      first: 3
      ownerAffiliations: OWNER
      privacy: PUBLIC
      orderBy: { field: UPDATED_AT, direction: DESC }
    ) {
      nodes {
        name
        description
        url
        stargazerCount
        primaryLanguage {
          name
          color
        }
        updatedAt
      }
    }
  }
}
`;
async function GET() {
    const token = process.env.GITHUB_TOKEN;
    if (!token) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "GITHUB_TOKEN not configured",
            contributionCalendar: null,
            repositories: []
        }, {
            status: 200
        });
    }
    try {
        const res = await fetch(GITHUB_GRAPHQL, {
            method: "POST",
            headers: {
                Authorization: `bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                query: QUERY,
                variables: {
                    login: "divyant-pod"
                }
            }),
            next: {
                revalidate: 3600
            }
        });
        if (!res.ok) {
            const text = await res.text();
            console.error("[GitHub API] HTTP error:", res.status, text);
            return __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "GitHub API error",
                contributionCalendar: null,
                repositories: []
            }, {
                status: 200
            });
        }
        const data = await res.json();
        if (data.errors) {
            console.error("[GitHub API] GraphQL errors:", data.errors);
            return __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: data.errors[0]?.message,
                contributionCalendar: null,
                repositories: []
            }, {
                status: 200
            });
        }
        const user = data.data?.user;
        return __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            contributionCalendar: user?.contributionsCollection?.contributionCalendar ?? null,
            repositories: user?.repositories?.nodes ?? []
        });
    } catch (err) {
        console.error("[GitHub API] Fetch error:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to reach GitHub",
            contributionCalendar: null,
            repositories: []
        }, {
            status: 200
        });
    }
}
}),
];

//# debugId=c7ee0186-6c14-f50a-f8f7-a59882f53ec3
//# sourceMappingURL=%5Broot-of-the-server%5D__0-fnx7u._.js.map