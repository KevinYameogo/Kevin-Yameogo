import { ArrowRight, Github } from "lucide-react";

export const HeroSection = ({ onNavigate }) => {
  return (
    <div className="glass panel-scroll" style={{ padding: "3.5rem 3rem" }}>
      <div style={{ maxWidth: "580px" }}>
        <p
          className="text-muted fade-up"
          style={{ fontSize: "0.82rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}
        >
          Software Engineer · Full Stack
        </p>

        <h1
          className="fade-up-d1"
          style={{ fontSize: "clamp(2.6rem, 6vw, 4rem)", lineHeight: 1.1, color: "var(--slate)", marginBottom: "0.5rem" }}
        >
          Hi, I'm{" "}
          <span style={{ color: "var(--teal)" }}>Kevin</span>
          <br />
          <span style={{ fontStyle: "italic", color: "var(--slate-mid)" }}>Yameogo</span>
        </h1>

        <div className="divider fade-up-d2" />

        <p
          className="fade-up-d2 text-muted"
          style={{ fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem", maxWidth: "480px" }}
        >
          I design and build dynamic web experiences using modern technologies.
          As a Software Engineer, I deliver scalable, full-stack solutions that are
          visually engaging and performance-driven.
        </p>

        <div
          className="fade-up-d3"
          style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}
        >
          <button
            className="btn-primary"
            onClick={() => onNavigate("projects")}
            id="hero-view-work"
          >
            View my work <ArrowRight size={15} />
          </button>
          <button
            className="btn-outline"
            onClick={() => onNavigate("about")}
            id="hero-about"
          >
            About me
          </button>
          <a
            href="https://github.com/KevinYameogo"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
            id="hero-github"
            style={{ gap: "0.4rem" }}
          >
            <Github size={15} /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};
