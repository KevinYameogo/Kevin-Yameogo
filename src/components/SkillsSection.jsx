import { useState } from "react";
import { cn } from "../lib/utils";
import { Clock } from "lucide-react";

const skills = [
  { name: "HTML/CSS", level: 4, category: "frontend" },
  { name: "JavaScript", level: 3, category: "frontend" },
  { name: "React", level: 2, category: "frontend" },
  { name: "TypeScript", level: 2, category: "frontend" },
  { name: "Next.js", level: 1, category: "frontend" },
  { name: "Tailwind CSS", level: 2, category: "frontend" },

  { name: "Node.js", level: 2, category: "backend" },
  { name: "mySQL", level: 2, category: "backend" },
  { name: "Python", level: 4, category: "backend" },
  { name: "Java", level: 4, category: "backend" },

  //tools

  { name: "Git/Github", level: 4, category: "tools" },
  { name: "vs code", level: 4, category: "tools" },
  { name: "eclipse", level: 4, category: "tools" },
  { name: "Vercel", level: 1, category: "tools" },
];
const categories = ["all", "frontend", "backend", "tools"];
export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24, px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-[#F8F8FF] text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-[#48eda8]">skills</span>
        </h2>
        <div className="flex- flex-wrap justify-center mb-12 gap-4">
          {categories.map((cat, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors capitalize",
                activeCategory === cat
                  ? "bg-[#48eda8] text-[#1E1E1E]"
                  : "bg-secondary/70 text-[#F8F8FF] hover:bg-secondary"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-[#687982]/20  backdrop-blur-xs p-6 shadow-xs card-hover"
            >
              <div className="text-left- mb-4">
                <h3 className="font-semibold text-[#F8F8FF] text-lg">
                  {skill.name}
                </h3>
              </div>
              <div className="text-right mt-1 flex justify-between items-center">
                <Clock className="text-sm text-[#FEAD21] " />
                <span className="text-sm text-[#48eda8]">
                  {skill.level > 1
                    ? skill.level + " years"
                    : skill.level + " year"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
