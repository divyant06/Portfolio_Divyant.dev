"use client";

import { useState, useRef, useEffect } from "react";

/* Blueprint §1 — real Cal.com booking URL */
const CAL_URL = "https://cal.com/divyant06/30min";

const CHAT_INTRO =
  "👋 Hey there! Ready to help you shape your next digital project. Just share a few details with me and I'll guide you to a tailored proposal.";

const PROMPTS = [
  { key: "name", question: "What's your name?" },
  { key: "project", question: "What kind of project are you thinking about? (e.g. Web App, Mobile App, Brand Site)" },
  { key: "budget", question: "What's your rough budget range?" },
  { key: "timeline", question: "When do you need this live?" },
];

interface Message {
  role: "bot" | "user";
  text: string;
}

export function ProjectStartSection() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: CHAT_INTRO },
    { role: "bot", text: PROMPTS[0].question },
  ]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg: Message = { role: "user", text: trimmed };
    const nextStep = step + 1;
    const botMsgs: Message[] = [];

    if (nextStep < PROMPTS.length) {
      botMsgs.push({ role: "bot", text: PROMPTS[nextStep].question });
    } else {
      botMsgs.push({
        role: "bot",
        text: "Perfect — I have everything I need. Use the calendar on the right to book your free 30-min discovery call. I'll come prepared. 🚀",
      });
      setDone(true);
    }

    setMessages((prev) => [...prev, userMsg, ...botMsgs]);
    setInput("");
    setStep(nextStep);
    inputRef.current?.focus();
  };

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div
      id="contact"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
        gap: "2rem",
        alignItems: "stretch",
        minHeight: "520px",
      }}
    >
      {/* ── LEFT: Cappen-style chat terminal ────────────────── */}
      <div
        style={{
          background: "#0d0d0d",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Terminal chrome bar */}
        <div
          style={{
            padding: "0.75rem 1.25rem",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "#111111",
          }}
        >
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57", display: "block" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FEBC2E", display: "block" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28C840", display: "block" }} />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6rem",
              color: "rgba(255,255,255,0.2)",
              letterSpacing: "0.15em",
              marginLeft: "0.5rem",
            }}
          >
            project-discovery — bash
          </span>
        </div>

        {/* Message thread */}
        <div
          ref={scrollRef}
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            scrollbarWidth: "none",
          }}
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
              }}
            >
              {msg.role === "bot" && (
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    color: "#FF4500",
                    marginRight: "0.5rem",
                    marginTop: "0.2rem",
                    flexShrink: 0,
                  }}
                >
                  &gt;_
                </span>
              )}
              <div
                style={{
                  maxWidth: "80%",
                  padding: "0.65rem 1rem",
                  borderRadius: msg.role === "user" ? "12px 12px 2px 12px" : "2px 12px 12px 12px",
                  background:
                    msg.role === "user"
                      ? "#FF4500"
                      : "rgba(255,255,255,0.04)",
                  border: msg.role === "user"
                    ? "none"
                    : "1px solid rgba(255,255,255,0.06)",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.85rem",
                  lineHeight: 1.6,
                  color: msg.role === "user" ? "#050505" : "rgba(243,244,246,0.85)",
                  fontWeight: msg.role === "user" ? 600 : 400,
                }}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {/* Typing cursor when not done */}
          {!done && (
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "#FF4500" }}>&gt;_</span>
              <span
                style={{
                  display: "inline-block",
                  width: "6px",
                  height: "14px",
                  background: "#FF4500",
                  animation: "termBlink 1s step-end infinite",
                }}
              />
            </div>
          )}
        </div>

        {/* Input row */}
        {!done && (
          <div
            style={{
              padding: "1rem 1.25rem",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              gap: "0.75rem",
              alignItems: "center",
              background: "#0d0d0d",
            }}
          >
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "#FF4500", flexShrink: 0 }}>
              $
            </span>
            <input
              ref={inputRef}
              autoFocus
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Type your answer…"
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                outline: "none",
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                color: "#F3F4F6",
                caretColor: "#FF4500",
              }}
            />
            <button
              onClick={handleSend}
              style={{
                background: "#FF4500",
                border: "none",
                color: "#050505",
                fontFamily: "var(--font-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "0.45rem 0.85rem",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: 700,
                flexShrink: 0,
                transition: "opacity 0.15s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.8")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            >
              Hit Enter ↵
            </button>
          </div>
        )}

        {done && (
          <div
            style={{
              padding: "1rem 1.25rem",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              onClick={() => {
                const name = messages[2]?.text || "";
                const project = messages[4]?.text || "";
                const budget = messages[6]?.text || "";
                const timeline = messages[8]?.text || "";
                const subject = "Project Inquiry via Bot";
                const body = `Name: ${name}\nProject Type: ${project}\nBudget: ${budget}\nTimeline: ${timeline}`;
                window.location.href = `mailto:ansupoddar11@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
              }}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.12em",
                color: "#FF4500",
                textTransform: "uppercase",
                padding: 0,
              }}
            >
              ✓ Details captured — book your slot →
            </button>
          </div>
        )}
      </div>

      {/* ── RIGHT: Cal.com iframe (capped) + fallback button ─── */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <div
          style={{
            maxHeight: "600px",
            overflow: "hidden",
            borderRadius: "8px",
            border: "1px solid #333333",
            background: "#0a0a0a",
            flex: 1,
          }}
        >
          <iframe
            src={`${CAL_URL}?theme=dark&layout=month_view`}
            style={{ width: "100%", height: "600px", border: "none", colorScheme: "dark" }}
            title="Book a 30-minute project discovery call"
            loading="lazy"
          />
        </div>
        {/* Fallback direct link in case iframe returns an error */}
        <a
          href={CAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block", textAlign: "center", padding: "0.75rem",
            background: "rgba(255,69,0,0.08)", border: "1px solid rgba(255,69,0,0.2)",
            borderRadius: "4px", fontFamily: "var(--font-mono)", fontSize: "0.62rem",
            letterSpacing: "0.14em", textTransform: "uppercase", color: "#FF4500",
            textDecoration: "none",
          }}
        >
          📅 Open booking directly — cal.com/divyant06/30min ↗
        </a>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes termBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
