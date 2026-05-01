"use client";

import { useEffect, useState } from "react";

const THEME_TOGGLE_ENABLED = false;

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    if (!THEME_TOGGLE_ENABLED) {
      document.documentElement.classList.remove("light");
      document.documentElement.style.colorScheme = "dark";
      localStorage.removeItem("theme");
      setTheme("dark");
      return;
    }

    setTheme(
      document.documentElement.classList.contains("light") ? "light" : "dark",
    );
  }, []);

  const toggleTheme = () => {
    if (!THEME_TOGGLE_ENABLED) return;

    const nextTheme = theme === "dark" ? "light" : "dark";

    document.documentElement.classList.toggle("light", nextTheme === "light");
    document.documentElement.style.colorScheme = nextTheme;
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      disabled={!THEME_TOGGLE_ENABLED}
      aria-label={
        THEME_TOGGLE_ENABLED
          ? theme === "dark"
            ? "Mudar para modo claro"
            : "Mudar para modo escuro"
          : "Alternancia de tema desativada"
      }
      className="mt-4 inline-flex h-[60px] w-8 shrink-0 items-center justify-center text-zinc-400 transition-colors duration-300 enabled:cursor-pointer enabled:hover:text-white disabled:cursor-default disabled:opacity-70 light:text-zinc-600 light:enabled:hover:text-zinc-950"
    >
      <svg
        className="block h-5 w-5 light:hidden"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 2v2m0 16v2m-7.07-7.07-1.41 1.41m14.14-14.14-1.41 1.41M2 12h2m16 0h2m-7.07 7.07 1.41 1.41M4.93 4.93l1.41 1.41"
        />
      </svg>
      <svg
        className="hidden h-5 w-5 light:block"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
        />
      </svg>
    </button>
  );
}
