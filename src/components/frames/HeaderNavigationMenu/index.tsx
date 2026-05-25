"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function HeaderNavigationMenu() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Início", cursorClass: "cursor-pointer" },
    { href: "/about", label: "Sobre", cursorClass: "cursor-help" },
    { href: "/blog", label: "Blog", cursorClass: "cursor-pointer" },
  ];

  return (
    <section className="relative mt-4 flex h-[60px] w-full max-w-[805px] items-center justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] px-4 backdrop-blur-md">
      {/* <Link
        href="/"
        aria-label="Ir para a página inicial"
        className="relative hidden h-12 w-12 shrink-0 items-center justify-center sm:flex"
      >
        <Image
          src="/VictorMachado.svg"
          alt="VM"
          width={48}
          height={48}
          className="h-12 w-12"
          priority
        />
      </Link> */}

      <Link
        href="/"
        aria-label="Go to homepage"
        className="flex items-center gap-2 group cursor-pointer"
      >
        {/* Logo com glow */}
        <img
          src="/asterisk.svg"
          alt="asterisk"
          className="w-3.5 h-3.5 opacity-80 animate-spin"
        />

        {/* Nome */}
        <span className="font-bold tracking-widest text-zinc-900 dark:text-white uppercase text-sm hidden sm:block">
          Victor Machado
        </span>
      </Link>

      <nav className="relative flex flex-1 items-center justify-center gap-2 text-[13px] font-normal uppercase max-[550px]:text-[12px] sm:ml-auto sm:flex-none sm:justify-end sm:gap-3">
        {links.map(({ href, label, cursorClass }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={`
    ${cursorClass}
    inline-flex items-center justify-center
    rounded-md
    border border-white/10
    px-4 py-2
    text-sm font-medium
    transition-colors duration-200
    focus-visible:outline-none
    focus-visible:ring-1 focus-visible:ring-cyan-400
    disabled:pointer-events-none disabled:opacity-50
    ${
      isActive
        ? "bg-white/[0.08] text-zinc-950"
        : "bg-transparent text-zinc-400 hover:bg-white/[0.05] hover:text-zinc-100"
    }
  `}
            >
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
