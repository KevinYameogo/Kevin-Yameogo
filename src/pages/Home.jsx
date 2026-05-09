import { useState, useEffect, useRef } from "react";
import { NavBar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";

const SECTIONS = ["home", "about", "skills", "projects", "contact"];

export const Home = () => {
  const [active, setActive] = useState("home");
  const [animState, setAnimState] = useState("enter");
  const pendingSection = useRef(null);
  const isTransitioning = useRef(false);

  const navigateTo = (section) => {
    if (section === active || isTransitioning.current) return;
    isTransitioning.current = true;
    pendingSection.current = section;
    setAnimState("exit");
  };

  const handleAnimEnd = () => {
    if (animState === "exit" && pendingSection.current) {
      setActive(pendingSection.current);
      pendingSection.current = null;
      setAnimState("enter");
      setTimeout(() => {
        isTransitioning.current = false;
      }, 500); // 500ms cooldown before next scroll is allowed
    }
  };

  useEffect(() => {
    let touchStartY = 0;

    const handleWheel = (e) => {
      // Check if scrolling inside a scrollable panel
      const target = e.target;
      const scrollable = target.closest('.panel-scroll');
      if (scrollable) {
        const isScrollingDown = e.deltaY > 0;
        const isScrollingUp = e.deltaY < 0;
        const canScrollUp = scrollable.scrollTop > 0;
        const canScrollDown = scrollable.scrollTop + scrollable.clientHeight < scrollable.scrollHeight - 1;
        
        if ((isScrollingUp && canScrollUp) || (isScrollingDown && canScrollDown)) {
          return; // Let the panel scroll naturally
        }
      }

      if (isTransitioning.current) return;

      const idx = SECTIONS.indexOf(active);
      if (e.deltaY > 40 && idx < SECTIONS.length - 1) {
        navigateTo(SECTIONS[idx + 1]);
      } else if (e.deltaY < -40 && idx > 0) {
        navigateTo(SECTIONS[idx - 1]);
      }
    };

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;

      const target = e.target;
      const scrollable = target.closest('.panel-scroll');
      if (scrollable) {
        const isScrollingDown = deltaY > 0;
        const isScrollingUp = deltaY < 0;
        const canScrollUp = scrollable.scrollTop > 0;
        const canScrollDown = scrollable.scrollTop + scrollable.clientHeight < scrollable.scrollHeight - 1;
        
        if ((isScrollingUp && canScrollUp) || (isScrollingDown && canScrollDown)) {
          return;
        }
      }

      if (isTransitioning.current) return;

      const idx = SECTIONS.indexOf(active);
      if (deltaY > 40 && idx < SECTIONS.length - 1) {
        navigateTo(SECTIONS[idx + 1]);
      } else if (deltaY < -40 && idx > 0) {
        navigateTo(SECTIONS[idx - 1]);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [active]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100dvh", overflow: "hidden" }}>
      <div className="bg-scene" />
      <NavBar active={active} onNavigate={navigateTo} sections={SECTIONS} />
      <div className="section-wrapper">
        <div
          className={`section-panel ${animState === "enter" ? "section-enter" : "section-exit"}`}
          onAnimationEnd={handleAnimEnd}
        >
          {active === "home"     && <HeroSection    onNavigate={navigateTo} />}
          {active === "about"    && <AboutSection   onNavigate={navigateTo} />}
          {active === "skills"   && <SkillsSection  />}
          {active === "projects" && <ProjectSection />}
          {active === "contact"  && <ContactSection />}
        </div>
      </div>
    </div>
  );
};
