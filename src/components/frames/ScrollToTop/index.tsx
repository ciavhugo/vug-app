"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-[calc((100vw-805px)/2-3rem)] max-[805px]:right-6 z-50 group "
    >
      <div className=" rounded-full h-8 w-8 bg-zinc-100 dark:bg-white/10 border border-zinc-200 dark:border-white/20 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:scale-105">
        <ArrowUp className="w-4 h-4 text-zinc-900 dark:text-white" />
      </div>
    </button>
  );
}