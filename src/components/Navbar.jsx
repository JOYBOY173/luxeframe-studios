import { useEffect, useState } from "react";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-cinematic ${
          scrolled ? "bg-obsidian/90 backdrop-blur-md py-4" : "bg-transparent py-6 md:py-8"
        }`}
      >
        <nav className="max-w-content mx-auto flex items-center justify-between px-6 md:px-10">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#top");
            }}
            className="font-display text-lg md:text-xl tracking-wide text-ivory"
          >
            LuxeFrame
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm uppercase tracking-wider text-ivory/80 hover:text-bronze transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="border border-bronze text-bronze text-sm uppercase tracking-wider px-6 py-3 hover:bg-bronze hover:text-obsidian transition-all duration-400 ease-cinematic"
            >
              Book a Session
            </button>
          </div>

          {/* Mobile hamburger / close toggle */}
          <button
            className="md:hidden relative z-50 w-8 h-6 flex flex-col justify-between"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span
              className={`block h-px w-full bg-ivory transition-transform duration-300 ${
                menuOpen ? "translate-y-[11px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-full bg-ivory transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-px w-full bg-ivory transition-transform duration-300 ${
                menuOpen ? "-translate-y-[11px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/*
        Mobile menu — rendered as a SIBLING of <header>, not nested inside it.
        <header> gains `backdrop-blur-md` once scrolled, and backdrop-filter
        (like transform/filter) creates a new containing block for any
        `position: fixed` descendant. Nesting the menu inside the header meant
        that, as soon as the page was scrolled, the menu's "fixed, full-screen"
        overlay was repositioned relative to the header's own short box
        instead of the viewport — collapsing it to roughly the header's height
        and letting page sections show through everywhere else. Moving it out
        here keeps it pinned to the viewport regardless of scroll position.

        z-40 (below the header's z-50) is intentional: it keeps the header —
        and the close button inside it — reliably clickable above the panel.
      */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-500 ease-cinematic ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        {/* Dimmed backdrop */}
        <div
          className="absolute inset-0 bg-obsidian/80"
          onClick={() => setMenuOpen(false)}
        />

        {/* Compact, self-contained panel */}
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-[320px] bg-obsidian border-l border-bronze/25 flex flex-col justify-center gap-7 px-10 pt-24 transition-transform duration-500 ease-cinematic ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left font-display text-2xl text-ivory hover:text-bronze transition-colors duration-300"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contact")}
            className="mt-3 border border-bronze text-bronze text-sm uppercase tracking-wider px-6 py-4 hover:bg-bronze hover:text-obsidian transition-all duration-400 ease-cinematic"
          >
            Book a Session
          </button>
        </div>
      </div>
    </>
  );
}
