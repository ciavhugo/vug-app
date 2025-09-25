"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function HeaderNavigationMenu() {
  const pathname = usePathname();

  const getNavLink = (path: string, cursorClass = "cursor-pointer") =>
    `${cursorClass} transition-colors duration-300 ${
      pathname === path ? "text-gray-400" : "hover:text-gray-400"
    }`;

  return (
    <section className="bg-[#D9D9D9]/15 w-full max-w-[705px] h-[50px] rounded-md mt-4 flex items-center justify-center px-3">
      <img
        src="/VictorMachado.svg"
        alt="VM"
        className="w-[41px] h-[41px] hidden sm:block"
      />

      <div className="flex-1 flex justify-center gap-8 text-[16px] max-[550px]:text-[14px]  font-normal">
        <Link href="/" className={getNavLink("/")}>
          Início
        </Link>

        <Link href="/about" className={getNavLink("/about", "cursor-help")}>
          Sobre
        </Link>
        <Link href="/blog" className={getNavLink("/blog")}>
          Blog
        </Link>
      </div>
    </section>
  );
}
