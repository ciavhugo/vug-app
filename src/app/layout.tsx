import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
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
    <html lang="en">
      <body
        className={`${fontInter.variable} ${robotoMono.variable} antialiased cursor-grab`}
      >
        {/* Fundo fixo + gradiente */}
        <div className="fixed top-0 left-0 w-screen h-[40%] z-[-1] pointer-events-none">
          <div className="w-full h-full bg-[url('/backgroundImg.png')] bg-no-repeat bg-cover bg-center opacity-10" />
          <div className="absolute bottom-0 left-0 w-full h-30 bg-gradient-to-b from-[#121212]/0 to-[#121212]" />
        </div>

        <div className="relative flex flex-col items-center min-h-screen mx-4">
          <HeaderNavigationMenu />
          {children}
        </div>
      </body>
    </html>
  );
}
