import { AboutSection } from "../components/AboutSection";
import { Background } from "../components/Background";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { NavBar } from "../components/NavBar";
import { ProjectSection } from "../components/ProjectSection";
import { SkillsSection } from "../components/SkillsSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-[#0f1111] text-foreground overflow-x-hidden">
      <Background />
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};
