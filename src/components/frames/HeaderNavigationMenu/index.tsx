import Link from "next/link";

export function HeaderNavigationMenu() {
  return (
    <section className="bg-[#D9D9D9]/15 w-full max-w-[700px] h-[50px] rounded-md mt-7 flex items-center justify-center px-3">
      <img
        src="/VictorMachado.svg"
        alt="VM"
        className="w-[38px] h-[38px] cursor-grabbing transition-transform duration-300 hover:scale-115 hidden sm:block"
      />

      <div className="flex-1 flex justify-center gap-8 text-[16px] font-normal">
        <Link
          href="/"
          className="cursor-grabbing hover:text-gray-400 transition-colors duration-300"
        >
          Home
        </Link>

        <Link
          href="/about"
          className="cursor-help  hover:text-gray-400 transition-colors duration-300"
        >
          About
        </Link>

        <Link
          href="/blog"
          className="cursor-grabbing hover:text-gray-400 transition-colors duration-300"
        >
          Blog
        </Link>
      </div>
    </section>
  );
}
