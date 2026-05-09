import { useState } from "react";

const skills = [
  { name: "HTML / CSS",     years: 4, category: "frontend" },
  { name: "JavaScript",     years: 3, category: "frontend" },
  { name: "React",          years: 2, category: "frontend" },
  { name: "TypeScript",     years: 2, category: "frontend" },
  { name: "Next.js",        years: 1, category: "frontend" },
  { name: "Tailwind CSS",   years: 2, category: "frontend" },
  { name: "Node.js",        years: 2, category: "backend"  },
  { name: "Python",         years: 4, category: "backend"  },
  { name: "Java",           years: 4, category: "backend"  },
  { name: "MySQL",          years: 2, category: "backend"  },
  { name: "Git / GitHub",   years: 4, category: "tools"    },
  { name: "Vercel",         years: 1, category: "tools"    },
  { name: "VS Code",        years: 4, category: "tools"    },
  { name: "Eclipse",        years: 4, category: "tools"    },
];

const CATS = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [cat, setCat] = useState("all");
  const filtered = skills.filter((s) => cat === "all" || s.category === cat);

  return (
    <div className="glass panel-scroll" style={{ padding: "3rem 3rem" }}>
      <p
        className="text-muted fade-up"
        style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem" }}
      >
        What I know
      </p>
      <h2
        className="fade-up-d1"
        style={{ fontSize: "clamp(1.9rem, 4vw, 2.75rem)", color: "var(--slate)", marginBottom: "0.4rem" }}
      >
        My <span style={{ color: "var(--teal)", fontStyle: "italic" }}>Skills</span>
      </h2>
      <div className="divider fade-up-d1" />

      {/* Category filter */}
      <div
        className="fade-up-d2"
        style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}
      >
        {CATS.map((c) => (
          <button
            key={c}
            id={`skill-cat-${c}`}
            onClick={() => setCat(c)}
            style={{
              padding: "0.3rem 1rem",
              borderRadius: "999px",
              border: "1.5px solid",
              borderColor: cat === c ? "var(--teal)" : "var(--sand)",
              background: cat === c ? "var(--teal)" : "transparent",
              color: cat === c ? "#fff" : "var(--muted)",
              fontSize: "0.78rem",
              fontWeight: 500,
              cursor: "pointer",
              textTransform: "capitalize",
              transition: "all 0.2s ease",
            }}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Skills grid */}
      <div
        className="fade-up-d3"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
          gap: "0.75rem",
        }}
      >
        {filtered.map((s) => (
          <div key={s.name} className="skill-badge">
            <span className="skill-name">{s.name}</span>
            <span className="skill-meta">
              {s.years > 1 ? `${s.years} years` : `${s.years} year`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
