import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { HeaderNavigationMenu } from "@/components/frames/HeaderNavigationMenu";

const fontInter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Victor Machado",
  description: "WebSite pessoal de Victor Machado - Vug.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-TFKV7KDCV0"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TFKV7KDCV0');
          `}
        </Script>
      </head>

      <body
        className={`${fontInter.variable} ${robotoMono.variable} min-h-screen overflow-x-hidden bg-[#0c0c0c] text-zinc-200 antialiased selection:bg-white selection:text-black select-none [user-select:none] [webkit-user-drag:none]`}
      >
        <div
          aria-hidden="true"
          className="fixed inset-0 z-[-2] overflow-hidden bg-[radial-gradient(circle_at_top,#18181b_0%,#0c0c0c_42%,#050505_100%)]"
        >
          <div className="absolute -top-36 -left-32 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="absolute -top-20 right-[-7rem] h-80 w-80 rounded-full bg-fuchsia-500/15 blur-3xl" />
          <div className="absolute top-[15px] left-[38%] h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-white/[0.06] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0c0c0c] to-transparent" />
        </div>

        <div
          aria-hidden="true"
          className="fixed inset-0 z-[-1] bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:56px_56px] opacity-30 [mask-image:radial-gradient(ellipse_at_top,black_0%,transparent_70%)]"
        />

        <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex h-24 justify-center px-4 [&>*]:pointer-events-auto">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-full backdrop-blur-md [mask-image:linear-gradient(to_bottom,black_0%,black_74%,transparent_100%)]"
          />
          <HeaderNavigationMenu />
        </header>

        <main className="relative mx-6 flex min-h-screen flex-col items-center pt-24 sm:mx-4">
          {children}
        </main>

        <footer className="relative z-10 w-full border-t border-white/10 bg-[#0c0c0c]/70 py-3 text-center text-sm text-zinc-500 backdrop-blur-md max-[600px]:text-[12px]">
          © {new Date().getFullYear()} —{" "}
          <span className="cursor-grab font-medium text-zinc-400 transition-colors duration-200 hover:text-zinc-200">
            Vug*
          </span>{" "}
          Todos os direitos reservados.
        </footer>
      </body>
    </html>
  );
}
