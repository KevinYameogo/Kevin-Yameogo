import { Code, Palette, Briefcase, Download } from "lucide-react";

const cards = [
  {
    icon: <Code size={18} color="var(--teal)" />,
    title: "Web Development",
    desc: "Responsive, high-performance web apps with modern stacks.",
  },
  {
    icon: <Palette size={18} color="var(--amber)" />,
    title: "UI / UX Design",
    desc: "Intuitive interfaces that deliver seamless user experiences.",
  },
  {
    icon: <Briefcase size={18} color="var(--teal)" />,
    title: "Project Delivery",
    desc: "Driving ideas from concept to shipped product with agile methods.",
  },
];

export const AboutSection = ({ onNavigate }) => {
  return (
    <div className="glass panel-scroll" style={{ padding: "3rem 3rem" }}>
      <p
        className="text-muted fade-up"
        style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem" }}
      >
        Who I am
      </p>
      <h2
        className="fade-up-d1"
        style={{ fontSize: "clamp(1.9rem, 4vw, 2.75rem)", color: "var(--slate)", marginBottom: "0.4rem" }}
      >
        About <span style={{ color: "var(--teal)", fontStyle: "italic" }}>Me</span>
      </h2>
      <div className="divider fade-up-d1" />

      <div
        className="fade-up-d2"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "start" }}
      >
        {/* Left: bio */}
        <div>
          <p className="text-muted" style={{ lineHeight: 1.8, marginBottom: "0.9rem", fontSize: "0.93rem" }}>
            With 4 years of hands-on learning and project building, I specialize in
            creating robust, scalable full-stack applications using modern technologies.
          </p>
          <p className="text-muted" style={{ lineHeight: 1.8, fontSize: "0.93rem", marginBottom: "1.5rem" }}>
            Passionate about solving complex problems and creating meaningful
            solutions — I stay curious and keep growing as a software engineer.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <button
              className="btn-primary"
              onClick={() => onNavigate("contact")}
              id="about-contact"
            >
              Get in touch
            </button>
            <a
              href="/Kevin_Yameogo_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
              id="about-cv"
            >
              <Download size={14} /> Download CV
            </a>
          </div>
        </div>

        {/* Right: capability cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
          {cards.map((c) => (
            <div
              key={c.title}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.875rem",
                padding: "1rem 1.1rem",
                borderRadius: "0.875rem",
                background: "rgba(255,255,255,0.48)",
                border: "1px solid rgba(18,138,115,0.13)",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "rgba(18,138,115,0.09)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {c.icon}
              </div>
              <div>
                <p style={{ fontWeight: 600, fontSize: "0.85rem", color: "var(--slate)", marginBottom: "0.2rem" }}>
                  {c.title}
                </p>
                <p style={{ fontSize: "0.78rem", color: "var(--muted)", lineHeight: 1.6 }}>
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
