import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { X, Menu } from "lucide-react";
const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScrolled = () => {
      setIsScrolled(window.scrollY > 10);
    };
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    window.addEventListener("scroll", handleScrolled);

    return () => window.removeEventListener("scroll", handleScrolled);
  }, [isMenuOpen]);
  return (
    <>
      <nav
        className={cn(
          "fixed  w-full  z-40 transition-all duration-300 ",
          isScrolled
            ? "py-3  bg-[#52B8F7]/1 backdrop-blur-md shadow-xs"
            : "py-5"
        )}
      >
        <div className="container flex items-center justify-between">
          <a
            href="#hero"
            className="text-xl font-bold text-primary flex items-center"
          >
            <span className="relative z-10 text-[#48eda8]/70 ">
              <span className="text-glow logo text-[#F8F8FF] ">
                Kevin Yameogo
              </span>{" "}
              Portfolio
            </span>
          </a>

          {/**desktop */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="bg-[#26292D] hover:bg-[#26292D]/60 rounded-full  py-1 px-2 text-[#48eda8]/70 hover:text-[#48eda8]/90 transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
          {/*mobile view */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 z-50 text-[#F8F8FF]"
            aria-label={isMenuOpen ? "close menu" : "open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed top-0 left-0 w-full h-full bg-[#0f1111] z-50 flex flex-col items-center justify-center md:hidden transition-opacity duration-300",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col space-y-8 text-xl">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-[#48eda8]/70 hover:text-[#48eda8]/90 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
