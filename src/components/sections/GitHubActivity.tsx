"use client";

import { useEffect, useState } from "react";

interface GitHubRepo {
  name: string;
  description: string | null;
  url: string;
  stargazerCount: number;
  primaryLanguage: { name: string; color: string } | null;
  updatedAt: string;
}

interface ContributionDay {
  contributionCount: number;
  date: string;
  color: string;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface GitHubData {
  contributionCalendar: {
    totalContributions: number;
    weeks: ContributionWeek[];
  } | null;
  repositories: GitHubRepo[];
  error?: string;
}

/**
 * GitHub Activity section.
 * Displays a mini contribution graph + 3 recent repos.
 * Polls /api/github on mount (data is cached server-side for 1hr).
 */
export function GitHubActivity() {
  const [data, setData] = useState<GitHubData | null>(null);

  useEffect(() => {
    let mounted = true;
    fetch("/api/github")
      .then((r) => r.json())
      .then((d: GitHubData) => mounted && setData(d))
      .catch(() => {});
    return () => {
      mounted = false;
    };
  }, []);

  if (!data || (!data.contributionCalendar && data.repositories.length === 0)) {
    return (
      <div
        style={{
          background: "#111111",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "2px",
          padding: "2rem",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            letterSpacing: "0.18em",
            color: "rgba(255,255,255,0.3)",
            textTransform: "uppercase",
          }}
        >
          Loading GitHub activity...
        </p>
      </div>
    );
  }

  const calendar = data.contributionCalendar;
  const repos = data.repositories;

  // Show full year (all 52 weeks) as required by blueprint §2.4
  const recentWeeks = calendar?.weeks ?? [];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      {/* Contribution Graph (mini heatmap) */}
      {calendar && (
        <div
          style={{
            background: "#111111",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "2px",
            padding: "1.5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.55rem",
                letterSpacing: "0.18em",
                color: "#FF4500",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              GitHub Contributions
            </p>
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "#F3F4F6",
                margin: 0,
              }}
            >
              {calendar.totalContributions.toLocaleString()}{" "}
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  color: "rgba(255,255,255,0.35)",
                  fontWeight: 400,
                }}
              >
                in the last year
              </span>
            </p>
          </div>

          {/* Heatmap grid */}
          <div
            style={{
              display: "flex",
              gap: "3px",
              overflowX: "auto",
              paddingBottom: "4px",
            }}
          >
            {recentWeeks.map((week, wi) => (
              <div
                key={wi}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "3px",
                }}
              >
                {week.contributionDays.map((day, di) => (
                  <div
                    key={di}
                    title={`${day.date}: ${day.contributionCount} contributions`}
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "2px",
                      background:
                        day.contributionCount === 0
                          ? "rgba(255,255,255,0.04)"
                          : day.contributionCount < 3
                          ? "rgba(255,69,0,0.25)"
                          : day.contributionCount < 6
                          ? "rgba(255,69,0,0.5)"
                          : day.contributionCount < 10
                          ? "rgba(255,69,0,0.75)"
                          : "#FF4500",
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recent Repos */}
      {repos.length > 0 && (
        <div
          style={{
            background: "#111111",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "2px",
            padding: "1.5rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.55rem",
              letterSpacing: "0.18em",
              color: "rgba(255,255,255,0.3)",
              textTransform: "uppercase",
              margin: "0 0 1rem",
            }}
          >
            Currently Working On
          </p>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            {repos.map((repo) => (
              <li key={repo.name}>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    textDecoration: "none",
                    color: "inherit",
                    padding: "0.75rem",
                    borderRadius: "2px",
                    border: "1px solid rgba(255,255,255,0.04)",
                    transition: "border-color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(255,69,0,0.3)";
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(255,69,0,0.04)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(255,255,255,0.04)";
                    (e.currentTarget as HTMLElement).style.background =
                      "transparent";
                  }}
                >
                  {/* Language dot */}
                  {repo.primaryLanguage && (
                    <span
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: repo.primaryLanguage.color,
                        flexShrink: 0,
                      }}
                    />
                  )}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        color: "#F3F4F6",
                        margin: 0,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {repo.name}
                    </p>
                    {repo.description && (
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.72rem",
                          color: "rgba(255,255,255,0.35)",
                          margin: "0.2rem 0 0",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {repo.description}
                      </p>
                    )}
                  </div>
                  {/* Stars */}
                  {repo.stargazerCount > 0 && (
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.6rem",
                        color: "rgba(255,255,255,0.3)",
                        flexShrink: 0,
                      }}
                    >
                      ★ {repo.stargazerCount}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
