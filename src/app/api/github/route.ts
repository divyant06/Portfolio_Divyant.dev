import { NextResponse } from "next/server";

/**
 * /api/github — GitHub GraphQL API route
 *
 * Returns:
 *  - contributionCalendar (365-day commit graph)
 *  - 3 most recently updated public repositories
 *
 * Auth: process.env.GITHUB_TOKEN (classic PAT with `read:user` scope)
 */

const GITHUB_GRAPHQL = "https://api.github.com/graphql";

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

export async function GET() {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return NextResponse.json(
      {
        error: "GITHUB_TOKEN not configured",
        contributionCalendar: null,
        repositories: [],
      },
      { status: 200 }
    );
  }

  try {
    const res = await fetch(GITHUB_GRAPHQL, {
      method: "POST",
      headers: {
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: QUERY,
        variables: { login: "divyant-pod" },
      }),
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("[GitHub API] HTTP error:", res.status, text);
      return NextResponse.json(
        { error: "GitHub API error", contributionCalendar: null, repositories: [] },
        { status: 200 }
      );
    }

    const data = await res.json();

    if (data.errors) {
      console.error("[GitHub API] GraphQL errors:", data.errors);
      return NextResponse.json(
        { error: data.errors[0]?.message, contributionCalendar: null, repositories: [] },
        { status: 200 }
      );
    }

    const user = data.data?.user;
    return NextResponse.json({
      contributionCalendar:
        user?.contributionsCollection?.contributionCalendar ?? null,
      repositories: user?.repositories?.nodes ?? [],
    });
  } catch (err) {
    console.error("[GitHub API] Fetch error:", err);
    return NextResponse.json(
      { error: "Failed to reach GitHub", contributionCalendar: null, repositories: [] },
      { status: 200 }
    );
  }
}
