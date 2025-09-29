import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 text-[#F8F8FF] animate-fade-in">
              {" "}
              Hi, I'm
            </span>
            <span className="text-[#48eda8] logo opacity-0 animate-fade-in-delay-1">
              Kevin
            </span>
            <span className="text-gradient text-[#F8F8FF] ml-2 opacity-0 animate-fade-in-delay-2">
              Yameogo
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[#F8F8FF]/80  rounded-md backdrop-blur-xs   max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I design dynamic web experiences using modern technologies.
            Specializing in front-end development, I deliver user interfaces
            that are both visually engaging, and performance-driven.
          </p>
          <div className="opacity-0 animate-fade-in-delay-4 pt-4">
            <a href="#projects" className="cosmic-button">
              view my work
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-[#F8F8FF] mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-[#48eda8]" />
      </div>
    </section>
  );
};
