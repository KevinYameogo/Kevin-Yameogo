import { Briefcase, Code, User } from "lucide-react";
export const AboutSection = () => {
  return (
    <section id="about" className=" relative py-24 px-4 ">
      <div className="backdrop-blur-xs container mx-auto max-w-5xl">
        <h2 className="text-3xl text-[#F8F8FF] md:text-4xl font-bold mb-12 text-center">
          About <span className="text-[#48eda8]">Me</span>
        </h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-[#F8F8FF] text-2xl font-semibold">
              Passionate webdeveloper & tech creator
            </h1>
            <p className="text-[#F8F8FF]/90">
              With 4 years of hands-on learning and building projects in web
              development, I specialize in creating responsive, accessible, and
              performant web applications using modern technologies.
            </p>
            <p className="text-[#F8F8FF]/90">
              Passionate about solving complex problems and creating meaningful
              solutions, I stay curious and keep learning to grow with the
              modern web.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="public/Kevin_Yameogo_Resume.pdf"
                target="_blank"
                className="px-6 py-2 rounded-full  bg-primary/15 border-[#48eda8] hover:text-[#CDFF71]/90 text-[#CDFF71] hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6  ">
            <div className="gradient-border p-6 card-hover  ">
              <div className="flex items-start gap-4 ">
                <div className="p-3 rounded-full bg-[#48eda8]/70">
                  <Code className="h-6 w-6 text-[#2C2C2C]/90" />
                </div>
                <div className="text-left ">
                  <h4 className="font-semibold text-lg text-[#F8F8FF]">
                    Web Development
                  </h4>
                  <p className="text-[#F8F8FF]/80">
                    Implementing responsive, high-performance web apps using
                    modern technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[#48eda8]/70">
                  <User className="h-6 w-6 text-[#2C2C2C]/90" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-[#F8F8FF]">
                    UI/UX Design
                  </h4>
                  <p className="text-[#F8F8FF]/80">
                    Building intuitive UIs that deliver seamless UX.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[#48eda8]/70">
                  <Briefcase className="h-6 w-6 text-[#2C2C2C]/90" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-[#F8F8FF]">
                    Project Management
                  </h4>
                  <p className="text-[#F8F8FF]/80">
                    Driving projects from idea to delivery using agile
                    technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
