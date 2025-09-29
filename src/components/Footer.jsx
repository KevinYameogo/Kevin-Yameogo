import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-[#687982]/10 relative   mt-12 pt-8 flex flex-wrap justify-between items-center">
      <p className="text-sm text-[#48eda8]/80">
        {" "}
        &copy;{new Date().getFullYear()} Kevin Yameogo.All rights reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-[#48eda8]/10 hover:bg-[#48eda8]/20 text-[#48eda8]/70 transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
