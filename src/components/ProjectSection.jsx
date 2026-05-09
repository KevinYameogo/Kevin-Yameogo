import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 3,
    title: "Adapt-IQ",
    description:
      "AI-powered PowerPoint add-in — slide analysis, speaker notes, research engine, and voice input.",
    image: "/projects/adapt-iq.gif",
    tags: ["Next.js", "TypeScript", "OpenAI", "Office.js"],
    githubUrl: "https://github.com/KevinYameogo/adapt-iq",
    demoUrl: "",
  },
  {
    id: 2,
    title: "PlanVoy",
    description:
      "AI travel planner with FastAPI backend, Redis caching, React frontend, and itinerary generation.",
    image: "/projects/planvoy.gif",
    tags: ["React", "FastAPI", "Redis", "Python"],
    githubUrl: "https://github.com/KevinYameogo",
    demoUrl: "https://planvoy-production-596c.up.railway.app/",
  },
  {
    id: 4,
    title: "VCRTS",
    description:
      "Vehicular Cloud Real-Time System — distributed job scheduling using parked vehicles as compute nodes.",
    image: "/projects/vcrts.gif",
    tags: ["Java", "Swing", "MySQL"],
    githubUrl: "https://github.com/KevinYameogo/VCRTS-Project",
    demoUrl: "",
  },
  {
    id: 1,
    title: "EventoAll",
    description:
      "Interactive event discovery platform — 30+ countries via Ticketmaster API, serverless Vercel functions.",
    image: "/projects/event.mov.gif",
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "Vercel"],
    githubUrl: "https://github.com/KevinYameogo/EventoAll",
    demoUrl: "https://eventoall.com/",
  },
  {
    id: 5,
    title: "CitationLoad",
    description:
      "A citation management tool with an intuitive interface for adding, viewing, and organizing references using structured Local Storage.",
    image: "/projects/citation.mov.gif",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/KevinYameogo/CitationLoad",
    demoUrl: "https://kevinyameogo.github.io/CitationLoad/",
  },
];

export const ProjectSection = () => {
  return (
    <div className="glass panel-scroll" style={{ padding: "3rem 3rem" }}>
      <p
        className="text-muted fade-up"
        style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem" }}
      >
        What I've built
      </p>
      <h2
        className="fade-up-d1"
        style={{ fontSize: "clamp(1.9rem, 4vw, 2.75rem)", color: "var(--slate)", marginBottom: "0.4rem" }}
      >
        Featured <span style={{ color: "var(--teal)", fontStyle: "italic" }}>Projects</span>
      </h2>
      <div className="divider fade-up-d1" />

      <div
        className="fade-up-d2 panel-scroll-x"
        style={{ 
          display: "flex", 
          gap: "1.25rem", 
          overflowX: "auto", 
          paddingBottom: "1rem",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          marginRight: "-1rem", // allow bleeding
          paddingRight: "1rem"
        }}
      >
        {projects.map((p) => (
          <div key={p.id} className="project-card" style={{ minWidth: "280px", maxWidth: "320px", flexShrink: 0, scrollSnapAlign: "start" }}>
            <div className="thumb-wrapper">
              <img src={p.image} alt={p.title} className="thumb" loading="lazy" style={{ height: "140px" }} />
            </div>
            <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "0.75rem" }}>
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  fontSize: "1.05rem",
                  color: "var(--slate)",
                  marginBottom: "0.35rem",
                }}
              >
                {p.title}
              </h3>
              <p style={{ fontSize: "0.75rem", color: "var(--muted)", lineHeight: 1.6, marginBottom: "0.75rem" }}>
                {p.description}
              </p>
              <div style={{ display: "flex", gap: "0.75rem", marginTop: "auto", paddingTop: "0.5rem" }}>
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  id={`proj-github-${p.id}`}
                  style={{ color: "var(--muted)", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--teal)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                >
                  <Github size={17} />
                </a>
                {p.demoUrl && (
                  <a
                    href={p.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    id={`proj-demo-${p.id}`}
                    style={{ color: "var(--muted)", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--teal)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                  >
                    <ExternalLink size={17} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="fade-up-d3" style={{ textAlign: "center", marginTop: "1rem" }}>
        <a
          href="https://github.com/KevinYameogo"
          target="_blank"
          rel="noreferrer"
          className="btn-outline"
          id="projects-github-all"
        >
          <Github size={15} /> More on GitHub
        </a>
      </div>
    </div>
  );
};
