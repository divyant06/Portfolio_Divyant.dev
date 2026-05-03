"use client";

/** Blueprint §2.3 — Contact form that redirects to ansupoddar11@gmail.com */
export function ContactForm() {
  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "#111111",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "2px",
    padding: "0.75rem 1rem",
    fontFamily: "var(--font-body)",
    fontSize: "0.875rem",
    color: "#F3F4F6",
    outline: "none",
    boxSizing: "border-box",
  };

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,69,0,0.5)");
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)");

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-mono)",
    fontSize: "0.58rem",
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.35)",
    display: "block",
    marginBottom: "0.5rem",
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const name = fd.get("Name") as string;
        const email = fd.get("Email") as string;
        const subject = (fd.get("Subject") as string) || "Project Inquiry";
        const message = fd.get("Message") as string;
        window.location.href = `mailto:ansupoddar11@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message)}`;
      }}
      style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
        <div>
          <label htmlFor="contact-name" style={labelStyle}>Name</label>
          <input id="contact-name" name="Name" type="text" autoComplete="name" required placeholder="Your name"
            style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
        </div>
        <div>
          <label htmlFor="contact-email" style={labelStyle}>Email</label>
          <input id="contact-email" name="Email" type="email" autoComplete="email" required placeholder="your@email.com"
            style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
        </div>
      </div>
      <div>
        <label htmlFor="contact-subject" style={labelStyle}>Subject</label>
        <input id="contact-subject" name="Subject" type="text" placeholder="Project inquiry"
          style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
      </div>
      <div>
        <label htmlFor="contact-message" style={labelStyle}>Message</label>
        <textarea id="contact-message" name="Message" required rows={5} placeholder="Tell me about your project…"
          style={{ ...inputStyle, resize: "vertical" }} onFocus={onFocus} onBlur={onBlur} />
      </div>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
        <button
          type="submit"
          style={{ background: "#FF4500", border: "none", color: "#050505", fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700, padding: "0.85rem 2rem", borderRadius: "2px", cursor: "pointer", transition: "opacity 0.15s" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
        >
          Send Message ↗
        </button>
        <a
          href="https://cal.com/divyant06/30min"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1px" }}
        >
          Or Book a Meeting →
        </a>
      </div>
    </form>
  );
}
