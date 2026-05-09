import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LABELS = {
  home:     "Home",
  about:    "About",
  skills:   "Skills",
  projects: "Projects",
  contact:  "Contact",
};

export const NavBar = ({ active, onNavigate, sections }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (section) => {
    onNavigate(section);
    setMenuOpen(false);
  };

  return (
    <>
      {/* ── Desktop right-side vertical nav ── */}
      <nav className="side-nav" aria-label="Section navigation">
        {sections.map((s) => (
          <button
            key={s}
            id={`nav-${s}`}
            onClick={() => handleClick(s)}
            className={`nav-item${active === s ? " active" : ""}`}
            aria-current={active === s ? "page" : undefined}
            style={{ background: "none", border: "none" }}
          >
            <span className="nav-label">{NAV_LABELS[s]}</span>
          </button>
        ))}
      </nav>

      {/* ── Mobile hamburger ── */}
      <button
        className="mobile-nav-btn"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* ── Mobile overlay menu ── */}
      <div className={`mobile-menu ${menuOpen ? "visible-menu" : "hidden-menu"}`}>
        <button
          style={{ position: "absolute", top: "1.25rem", right: "1.25rem", background: "none", border: "none", cursor: "pointer" }}
          onClick={() => setMenuOpen(false)}
        >
          <X size={22} color="var(--slate)" />
        </button>
        {sections.map((s) => (
          <button
            key={s}
            onClick={() => handleClick(s)}
            className={active === s ? "active" : ""}
            style={{
              background: "none",
              border: "none",
              fontSize: "1.5rem",
              fontWeight: 600,
              color: active === s ? "var(--teal)" : "var(--slate)",
              cursor: "pointer",
              letterSpacing: "0.04em",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            {NAV_LABELS[s]}
          </button>
        ))}
      </div>
    </>
  );
};
