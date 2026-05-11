import { useMemo, useState } from "react";
import {
  BookOpen,
  ExternalLink,
  FileCode2,
  FileJson,
  FileText,
  Folder,
  Github,
  Linkedin,
  Mail,
  MonitorCheck,
  Play,
  Terminal,
} from "lucide-react";

const projects = [
  {
    title: "Adapt-IQ",
    file: "adapt_iq.ipynb",
    description:
      "AI-powered PowerPoint add-in with slide analysis, speaker notes, research, and voice input.",
    stack: ["Next.js", "TypeScript", "OpenAI", "Office.js"],
    image: "/projects/adapt-iq.gif",
    githubUrl: "https://github.com/KevinYameogo/adapt-iq",
    demoUrl: "",
    output: "Office add-in workflow with AI-assisted slide review and generation.",
  },
  {
    title: "PlanVoy",
    file: "planvoy.ipynb",
    description:
      "AI travel planner with itinerary generation, FastAPI services, Redis caching, and a React client.",
    stack: ["React", "FastAPI", "Redis", "Python"],
    image: "/projects/planvoy.gif",
    githubUrl: "https://github.com/KevinYameogo",
    demoUrl: "https://planvoy-production-596c.up.railway.app/",
    output: "Generated trip plans with cached responses and a full-stack planning flow.",
  },
  {
    title: "VCRTS",
    file: "vcrts.ipynb",
    description:
      "Vehicular Cloud Real-Time System for distributed job scheduling across parked vehicle compute nodes.",
    stack: ["Java", "Swing", "MySQL"],
    image: "/projects/vcrts.gif",
    githubUrl: "https://github.com/KevinYameogo/VCRTS-Project",
    demoUrl: "",
    output: "Desktop simulation for scheduling jobs across available vehicle resources.",
  },
  {
    title: "UptimeChecker",
    file: "uptimechecker.ipynb",
    description:
      "Full-stack uptime monitoring platform with multi-provider checks, real-time analytics, and multi-channel outage alerts.",
    stack: ["Next.js", "TypeScript", "Supabase", "Stripe", "Redis/QStash", "Vercel"],
    image: "/projects/uptimechecker.gif",
    githubUrl: "",
    demoUrl: "https://www.uptimechecker.app/",
    output: "20 tested services, response-time tracking, health history, and alert delivery.",
  },
];

const skills = {
  frontend: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS"],
  backend: ["Python", "Node.js", "Java", "FastAPI", "MySQL", "Supabase"],
  tools: ["Git/GitHub", "Vercel", "Docker", "Redis/QStash", "VS Code", "Eclipse"],
};

const files = [
  { id: "launcher", name: "launcher.workspace", icon: MonitorCheck, group: "root" },
  { id: "about", name: "about_me.md", icon: FileText, group: "portfolio" },
  { id: "projects", name: "projects.ipynb", icon: BookOpen, group: "portfolio" },
  { id: "skills", name: "skills.json", icon: FileJson, group: "portfolio" },
  { id: "contact", name: "contact.sh", icon: Terminal, group: "portfolio" },
  { id: "resume", name: "Kevin_Yameogo_Resume.pdf", icon: FileCode2, group: "assets" },
];

const fileMeta = Object.fromEntries(files.map((file) => [file.id, file]));

export const Home = () => {
  const [activeFile, setActiveFile] = useState("launcher");
  const [openTabs, setOpenTabs] = useState(["launcher", "about", "projects"]);
  const [terminalLine, setTerminalLine] = useState("contact --help");

  const activeMeta = fileMeta[activeFile];
  const activeTabNames = useMemo(() => openTabs.map((id) => fileMeta[id]), [openTabs]);

  const openFile = (id) => {
    setActiveFile(id);
    setOpenTabs((tabs) => (tabs.includes(id) ? tabs : [...tabs, id]));
    if (id === "resume") {
      window.open("/Kevin_Yameogo_Resume.pdf", "_blank", "noreferrer");
    }
  };

  const closeTab = (id) => {
    setOpenTabs((tabs) => {
      if (tabs.length === 1) return tabs;
      const nextTabs = tabs.filter((tab) => tab !== id);
      if (activeFile === id) {
        setActiveFile(nextTabs[Math.max(0, tabs.indexOf(id) - 1)]);
      }
      return nextTabs;
    });
  };

  return (
    <main className="ide-shell">
      <TopBar />

      <div className="ide-body">
        <aside className="activity-rail" aria-label="Workspace shortcuts">
          <button className="rail-btn active" onClick={() => openFile("launcher")} aria-label="Explorer">
            <Folder size={19} />
          </button>
          <a className="rail-btn" href="https://github.com/KevinYameogo" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={19} />
          </a>
          <button className="rail-btn" onClick={() => openFile("contact")} aria-label="Contact terminal">
            <Terminal size={19} />
          </button>
        </aside>

        <aside className="file-explorer">
          <div className="explorer-title">Explorer</div>
          <FolderGroup title="portfolio">
            {files
              .filter((file) => file.group === "portfolio" || file.group === "root")
              .map((file) => (
                <FileButton key={file.id} file={file} active={activeFile === file.id} onClick={() => openFile(file.id)} />
              ))}
          </FolderGroup>
          <FolderGroup title="public/assets">
            {files
              .filter((file) => file.group === "assets")
              .map((file) => (
                <FileButton key={file.id} file={file} active={activeFile === file.id} onClick={() => openFile(file.id)} />
              ))}
          </FolderGroup>
        </aside>

        <section className="workspace">
          <div className="tabs" role="tablist" aria-label="Open files">
            {activeTabNames.map((tab) => (
              <button
                key={tab.id}
                className={`tab ${activeFile === tab.id ? "active" : ""}`}
                onClick={() => setActiveFile(tab.id)}
                type="button"
              >
                <tab.icon size={14} />
                <span>{tab.name}</span>
                <span
                  className="tab-close"
                  onClick={(event) => {
                    event.stopPropagation();
                    closeTab(tab.id);
                  }}
                  aria-hidden="true"
                >
                  x
                </span>
              </button>
            ))}
          </div>

          <div className="editor-header">
            <span>Kevin-Yameogo / {activeMeta.name}</span>
            <span className="kernel-dot">Portfolio Kernel Active</span>
          </div>

          <div className="editor-pane">
            {activeFile === "launcher" && <Launcher openFile={openFile} />}
            {activeFile === "about" && <AboutFile openFile={openFile} />}
            {activeFile === "projects" && <ProjectsNotebook />}
            {activeFile === "skills" && <SkillsJson />}
            {activeFile === "contact" && <ContactTerminal terminalLine={terminalLine} setTerminalLine={setTerminalLine} />}
            {activeFile === "resume" && <ResumePreview />}
          </div>
        </section>
      </div>

      <StatusBar activeFile={activeMeta.name} />
    </main>
  );
};

const TopBar = () => (
  <header className="top-bar">
    <div className="traffic-lights" aria-hidden="true">
      <span className="red" />
      <span className="yellow" />
      <span className="green" />
    </div>
    <nav className="menu-strip" aria-label="Portfolio menu">
      <span>File</span>
      <span>View</span>
      <span>Run</span>
      <span>Terminal</span>
      <span>Help</span>
    </nav>
    <div className="window-title">kevin-yameogo.dev - workspace</div>
  </header>
);

const FolderGroup = ({ title, children }) => (
  <div className="folder-group">
    <div className="folder-label">
      <Folder size={14} />
      <span>{title}</span>
    </div>
    <div>{children}</div>
  </div>
);

const FileButton = ({ file, active, onClick }) => (
  <button className={`file-row ${active ? "active" : ""}`} onClick={onClick} type="button">
    <file.icon size={15} />
    <span>{file.name}</span>
  </button>
);

const Launcher = ({ openFile }) => {
  const launchers = [
    { id: "projects", title: "Open Projects", desc: "Notebook-style project case studies.", icon: BookOpen },
    { id: "about", title: "Read About", desc: "Markdown profile and quick story.", icon: FileText },
    { id: "resume", title: "Resume", desc: "Open Kevin_Yameogo_Resume.pdf.", icon: FileCode2 },
    { id: "contact", title: "Terminal Contact", desc: "Run contact commands.", icon: Terminal },
  ];

  return (
    <div className="launcher-grid">
      <section className="welcome-panel">
        <p className="eyebrow">Software Engineer / Full Stack</p>
        <h1>Kevin Yameogo</h1>
        <p>
          I build scalable full-stack products, AI-powered tools, and polished web experiences.
          This portfolio is arranged like a developer workspace so you can inspect the work directly.
        </p>
        <div className="quick-actions">
          <button className="command-btn primary" onClick={() => openFile("projects")} type="button">
            <Play size={15} /> Run projects.ipynb
          </button>
          <a className="command-btn" href="https://github.com/KevinYameogo" target="_blank" rel="noreferrer">
            <Github size={15} /> GitHub
          </a>
        </div>
      </section>

      <section className="launcher-cards" aria-label="Launcher">
        {launchers.map((item) => (
          <button key={item.id} className="launcher-card" onClick={() => openFile(item.id)} type="button">
            <item.icon size={20} />
            <span>{item.title}</span>
            <small>{item.desc}</small>
          </button>
        ))}
      </section>
    </div>
  );
};

const AboutFile = ({ openFile }) => (
  <article className="markdown-doc">
    <p className="md-line muted">// about_me.md</p>
    <h1># Kevin Yameogo</h1>
    <p>
      Hi, I am Kevin. I am a full-stack software engineer who likes building practical,
      polished systems: dashboards, AI tools, productivity apps, and infrastructure-aware web products.
    </p>
    <p>
      I care about clean interfaces, reliable backends, and the small product details that make
      technical work feel understandable to real users.
    </p>
    <h2>## Current Focus</h2>
    <ul>
      <li>Full-stack products with React, Next.js, TypeScript, Python, and Supabase.</li>
      <li>AI-assisted workflows that turn messy tasks into useful tools.</li>
      <li>Developer-style interfaces with clear state, feedback, and fast navigation.</li>
    </ul>
    <div className="markdown-actions">
      <button className="command-btn primary" onClick={() => openFile("contact")} type="button">
        <Terminal size={15} /> contact --email
      </button>
      <a className="command-btn" href="/Kevin_Yameogo_Resume.pdf" target="_blank" rel="noreferrer">
        <FileCode2 size={15} /> open resume.pdf
      </a>
    </div>
  </article>
);

const ProjectsNotebook = () => (
  <div className="notebook">
    <div className="notebook-toolbar">
      <span>projects.ipynb</span>
      <button type="button">
        <Play size={14} /> Run All
      </button>
    </div>
    {projects.map((project, index) => (
      <section className="notebook-cell" key={project.title}>
        <div className="cell-gutter">In [{index + 1}]</div>
        <div className="cell-body">
          <div className="code-block">
            <span className="code-keyword">project</span> = {"{"}
            <br />
            &nbsp;&nbsp;<span className="code-string">"name"</span>: <span className="code-string">"{project.title}"</span>,
            <br />
            &nbsp;&nbsp;<span className="code-string">"stack"</span>: [{project.stack.map((tag) => `"${tag}"`).join(", ")}],
            <br />
            &nbsp;&nbsp;<span className="code-string">"file"</span>: <span className="code-string">"{project.file}"</span>
            <br />
            {"}"}
          </div>

          <div className="cell-output">
            <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
            <div>
              <div className="output-heading">
                <h2>{project.title}</h2>
                <div className="project-links">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`}>
                      <Github size={16} />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} live site`}>
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
              <p>{project.description}</p>
              <p className="output-note">Output: {project.output}</p>
              <div className="tag-row">
                {project.stack.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    ))}
  </div>
);

const SkillsJson = () => (
  <div className="json-view">
    <pre>{JSON.stringify({ skills, currentlyLearning: ["system design", "production AI workflows"] }, null, 2)}</pre>
  </div>
);

const ContactTerminal = ({ terminalLine, setTerminalLine }) => {
  const commands = {
    "contact --help": ["Available commands:", "contact --email", "contact --linkedin", "contact --github", "hire --now"],
    "contact --email": ["mailto: yameokevin234@gmail.com"],
    "contact --linkedin": ["linkedin: https://www.linkedin.com/in/kevin-yameogo/"],
    "contact --github": ["github: https://github.com/KevinYameogo"],
    "hire --now": ["Status: available for software engineering opportunities.", "Next step: send a note and context."],
  };
  const output = commands[terminalLine] || [`command not found: ${terminalLine}`, "Try contact --help"];

  return (
    <section className="terminal-view">
      <div className="terminal-output">
        <p><span className="prompt">$</span> {terminalLine}</p>
        {output.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <div className="terminal-buttons">
        {Object.keys(commands).map((cmd) => (
          <button key={cmd} onClick={() => setTerminalLine(cmd)} type="button">
            {cmd}
          </button>
        ))}
      </div>
      <div className="terminal-links">
        <a href="mailto:yameokevin234@gmail.com"><Mail size={15} /> Email</a>
        <a href="https://www.linkedin.com/in/kevin-yameogo/" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a>
        <a href="https://github.com/KevinYameogo" target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a>
      </div>
    </section>
  );
};

const ResumePreview = () => (
  <div className="resume-preview">
    <FileCode2 size={42} />
    <h2>Kevin_Yameogo_Resume.pdf</h2>
    <p>The resume opened in a new tab. You can also open or download it directly here.</p>
    <a className="command-btn primary" href="/Kevin_Yameogo_Resume.pdf" target="_blank" rel="noreferrer">
      <ExternalLink size={15} /> Open Resume
    </a>
  </div>
);

const StatusBar = ({ activeFile }) => (
  <footer className="status-bar">
    <span>main</span>
    <span>Portfolio Kernel Active</span>
    <span>React + Vite</span>
    <span>{activeFile}</span>
  </footer>
);
