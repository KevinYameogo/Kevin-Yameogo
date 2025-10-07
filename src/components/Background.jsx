import { useEffect, useState } from "react";
export const Background = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
      <div className="relative p-1 bg-gradient-to-r from-[#EEAECA] via-[#3D784F] to-[#94BBE9] glow-animation rounded-2xl ">
        <div className="relative w-[90vw] max-w-[650px] h-[70vh] max-h-[450px] bg-[#0f1111] rounded-2xl">
          <img
            className="animate-spin-reverse w-[20px] h-[20px] md:w-[40px] md:h-[40px] sm:w-[30px] sm:h-[30px] absolute  top-4 left-4"
            src="/logo-white.png"
            alt=""
          />
          <img
            className="bounce-it  inlinte-it w-[20px] h-[20px] md:w-[40px] md:h-[40px] sm:w-[30px] sm:h-[30px] absolute  bottom-4 left-4"
            src="/logo-white.png"
            alt=""
          />
          <img
            className="bounce-it nlinte-it w-[20px] h-[20px] md:w-[40px] md:h-[40px] sm:w-[30px] sm:h-[30px] absolute  bottom-4 right-4"
            src="/logo-white.png"
            alt=""
          />
          <img
            className="animate-spin w-[20px] h-[20px] md:w-[40px] md:h-[40px] sm:w-[30px] sm:h-[30px] absolute  top-4 right-4"
            src="/logo-white.png"
            alt=""
          />
          <img
            className="bounce-it inlinte-it w-[20px] h-[20px] absolute md:w-[40px] sm:w-[30px] sm:h-[30px] md:h-[40px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src="/logo-white.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
