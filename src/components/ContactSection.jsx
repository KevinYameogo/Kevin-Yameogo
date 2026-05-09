import { Mail, Linkedin, Github, MapPin } from "lucide-react";

export const ContactSection = () => {
  const openGmail = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&to=yameokevin234@gmail.com&su=Hey Kevin — let's connect!",
      "_blank"
    );
  };

  return (
    <div className="glass panel-scroll" style={{ padding: "3.5rem 3rem", maxWidth: "560px", margin: "0 auto" }}>
      <p
        className="text-muted fade-up"
        style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem" }}
      >
        Let's talk
      </p>
      <h2
        className="fade-up-d1"
        style={{ fontSize: "clamp(1.9rem, 4vw, 2.75rem)", color: "var(--slate)", marginBottom: "0.4rem" }}
      >
        Get In <span style={{ color: "var(--teal)", fontStyle: "italic" }}>Touch</span>
      </h2>
      <div className="divider fade-up-d1" />

      <p
        className="text-muted fade-up-d2"
        style={{ fontSize: "0.93rem", lineHeight: 1.8, marginBottom: "2rem" }}
      >
        Got a project idea or want to collaborate? I'm always open to exploring
        new opportunities. Hit me up — I'd love to hear from you.
      </p>

      {/* Info rows */}
      <div className="fade-up-d2" style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.25rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(18,138,115,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <Mail size={16} color="var(--teal)" />
          </div>
          <div>
            <p style={{ fontSize: "0.72rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Email</p>
            <a
              href="mailto:yameokevin234@gmail.com"
              style={{ fontSize: "0.88rem", color: "var(--slate)", textDecoration: "none", fontWeight: 500 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--teal)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--slate)")}
            >
              yameokevin234@gmail.com
            </a>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(18,138,115,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <MapPin size={16} color="var(--amber)" />
          </div>
          <div>
            <p style={{ fontSize: "0.72rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Location</p>
            <p style={{ fontSize: "0.88rem", color: "var(--slate)", fontWeight: 500 }}>New York, US</p>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="fade-up-d3" style={{ marginBottom: "1.75rem" }}>
        <button
          id="contact-gmail"
          className="btn-primary"
          onClick={openGmail}
          style={{ fontSize: "0.95rem", padding: "0.75rem 2rem" }}
        >
          <Mail size={16} /> Open Gmail
        </button>
      </div>

      {/* Social links */}
      <div className="fade-up-d4" style={{ display: "flex", gap: "0.875rem", alignItems: "center" }}>
        <p style={{ fontSize: "0.78rem", color: "var(--muted)", marginRight: "0.25rem" }}>Find me on</p>
        <a
          href="https://www.linkedin.com/in/kevin-yameogo/"
          target="_blank"
          rel="noreferrer"
          id="contact-linkedin"
          style={{ color: "var(--muted)", transition: "color 0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#0a66c2")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://github.com/KevinYameogo"
          target="_blank"
          rel="noreferrer"
          id="contact-github"
          style={{ color: "var(--muted)", transition: "color 0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--slate)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
        >
          <Github size={20} />
        </a>
      </div>
    </div>
  );
};
