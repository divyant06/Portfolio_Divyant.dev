"use client";

/**
 * Cal.com dark-mode booking embed.
 * Uses a responsive iframe pointing to the user's Cal.com scheduling page.
 * Set the CAL_LINK prop to your actual Cal.com slug.
 */

const CAL_LINK = "divyant/project-discovery";

export function CalBookingEmbed() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "580px",
        borderRadius: "2px",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.06)",
        position: "relative",
        background: "#0a0a0a",
      }}
    >
      <iframe
        src={`https://cal.com/${CAL_LINK}?theme=dark&layout=month_view`}
        style={{
          width: "100%",
          height: "100%",
          minHeight: "580px",
          border: "none",
          borderRadius: "2px",
          colorScheme: "dark",
        }}
        title="Schedule a project discovery call"
        loading="lazy"
        allow="camera;microphone"
      />
    </div>
  );
}
