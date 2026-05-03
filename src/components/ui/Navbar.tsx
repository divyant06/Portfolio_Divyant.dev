"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS: { label: string; href: string; external?: boolean }[] = [
  { label: "Services", href: "#services" },
  { label: "Updates ↗", href: "https://www.linkedin.com/in/divyant-poddar-4b6672313", external: true },
  { label: "Contact", href: "#contact" },
  { label: "About", href: "#bento" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [inverted, setInverted] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  /* ── Scroll watcher ───────────────────────────── */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Colour inversion: check if the element directly below the nav is light
      if (!navRef.current) return;
      const navBottom = navRef.current.getBoundingClientRect().bottom;
      const sampleX = window.innerWidth / 2;
      const elementBelow = document.elementFromPoint(sampleX, navBottom + 4);
      if (elementBelow) {
        const bg = window.getComputedStyle(elementBelow).backgroundColor;
        // Simple luminance check – treat light bg as "inverted" nav
        const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (match) {
          const [r, g, b] = [+match[1], +match[2], +match[3]];
          const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
          setInverted(luminance > 0.6);
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Close mobile on route change (resize fallback) */
  useEffect(() => {
    const close = () => setMobileOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  const navClass = [
    "nav-root",
    scrolled ? "scrolled" : "",
    inverted ? "inverted" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header ref={navRef} className={navClass} aria-label="Main navigation">
      {/* Logo */}
      <Link href="/" className="nav-logo" aria-label="Home" style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.9375rem', letterSpacing: '0em' }}>
        Divyant Poddar.
      </Link>

      {/* Desktop Links */}
      <nav aria-label="Desktop navigation">
        <ul className="nav-links">
          {NAV_LINKS.map(({ label, href, external }) => (
            <li key={label}>
              {external ? (
                <a
                  href={href as string}
                  className="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {label}
                </a>
              ) : (
                <Link href={href} className="nav-link">
                  {label}
                </Link>
              )}
            </li>
          ))}
          <li>
            <a
              href="https://cal.com/divyant06/30min"
              className="nav-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Meeting
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Hamburger */}
      <button
        className={`nav-hamburger ${mobileOpen ? "open" : ""}`}
        onClick={() => setMobileOpen((v) => !v)}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileOpen}
        id="nav-hamburger-btn"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.ul
            className="nav-links open"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map(({ label, href, external }) => (
              <li key={label}>
                {external ? (
                  <a
                    href={href as string}
                    className="nav-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </a>
                ) : (
                  <Link
                    href={href}
                    className="nav-link"
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <a
                href="https://cal.com/divyant06/30min"
                className="nav-cta"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
              >
                Book a Meeting
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
