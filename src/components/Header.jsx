// src/components/Header.jsx
import React, { useEffect, useState } from "react";

export default function Header() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 80);   // ← 80pxスクロールで ON
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-[200]
        transition-all duration-500 ease-[cubic-bezier(.25,.46,.45,.94)]
        
        ${show
          ? "opacity-100 translate-y-0 pointer-events-auto bg-white/95 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.08)]"
          : "opacity-0 -translate-y-8 pointer-events-none"
        }
      `}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <h1
          className={`
            text-[1.45rem] tracking-wide font-semibold
            ${show ? "text-gray-900" : "text-white"}
          `}
        >
          ACTIVE DAYS
        </h1>

        {/* PC NAV */}
        <nav
          className={`
            hidden md:flex items-center space-x-10 text-[0.95rem] font-medium
            ${show ? "text-gray-800" : "text-white"}
          `}
        >
          <a href="#facility" className="hover:opacity-70 transition">施設</a>
          <a href="#trainer" className="hover:opacity-70 transition">トレーナー</a>
          <a href="#price" className="hover:opacity-70 transition">料金</a>
          <a href="#access" className="hover:opacity-70 transition">アクセス</a>

          {/* CTA */}
          <a
            href="#cta"
            className={`
              ml-4 px-5 py-2 rounded-full font-medium tracking-wide transition
              ${show
                ? "bg-black text-white hover:opacity-90"
                : "bg-white text-black hover:opacity-90"}
            `}
          >
            見学予約
          </a>
        </nav>

        {/* SP MENU */}
        <div className="md:hidden flex flex-col space-y-[6px] cursor-pointer">
          <span className={`block w-7 h-[2px] ${show ? "bg-gray-800" : "bg-white"}`}></span>
          <span className={`block w-7 h-[2px] ${show ? "bg-gray-800" : "bg-white"}`}></span>
          <span className={`block w-7 h-[2px] ${show ? "bg-gray-800" : "bg-white"}`}></span>
        </div>

      </div>
    </header>
  );
}
