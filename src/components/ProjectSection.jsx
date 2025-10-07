import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "EventoAll",
    description:
      "An interactive event discovery platform that lets users search events across 30+ countries via the Ticketmaster API. Built with modular JavaScript for maintainable code, a fully responsive layout for all devices, and a serverless Vercel function for seamless data fetching.",
    image: "/projects/event.mov.gif",
    tags: ["HTML", "CSS", "Javascript", "Nodejs", "Vercel"],
    githubUrl: "https://github.com/KevinYameogo/EventoAll",
    demoUrl: "https://eventoall.com/",
  },
  {
    id: 2,
    title: "CitationLoad",
    description:
      "A citation management tool with an intuitive interface for adding, viewing, and organizing references. Features real-time search and filtering, with data handled as structured objects stored in Local Storage for seamless interaction.",
    image: "/projects/citation.mov.gif",
    tags: ["HTML", "CSS", "Javascript"],
    githubUrl: "https://github.com/KevinYameogo/CitationLoad",
    demoUrl: "https://kevinyameogo.github.io/CitationLoad/",
  },
  // {
  //   id: 3,
  //   title: "ss1",
  //   description: "a beautiful landing page app using react and tailwind",
  //   image: "public/art.jpeg",
  //   tags: ["react", "tailwindCSS", "supabase"],
  //   githubUrl: "/",
  //   demoUrl: "/",
  // },
];
export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl backdrop-blur-xs">
        <h2 className="text-[#F8F8FF] text-3xl md:4xl font-bold mb-4 text-center">
          Featured <span className="text-[#48eda8]">projects</span>
        </h2>
        <p className="text-center text-[#F8F8FF] mb-12 mx-w-2xl mx-auto">
          Here’s a selection of my recent work, built with precision,
          performance, and the user in mind.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-[#687982]/20  rounded-lg  overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-fit transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span
                      key={key}
                      className="px-2 border py-1 text-xs font-medium rounded-full bg-secondary text-[#48eda8]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="text-xl text-[#F8F8FF] italic font-serif front-semibold mb-1">
                {project.title}
              </h3>
              <p className="text-[#BBD5ED] text-sm mb-4">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors durtio-300"
                  >
                    <ExternalLink
                      size={20}
                      className="text-[#48eda8]/70 hover:text-[#48eda8] transition-colors"
                    />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors durtio-300"
                  >
                    <Github
                      size={20}
                      className="text-[#48eda8]/70 hover:text-[#48eda8] transition-colors"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 ">
          <a
            target="_blank"
            href="https://github.com/KevinYameogo"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
