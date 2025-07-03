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
        className={`${fontInter.variable} ${robotoMono.variable} antialiased`}
      >
        {/* Fundo de tela inteiro, ignorando margens e paddings */}
        <div className="fixed top-0 left-0 w-screen h-1/2 bg-[url('/backgroundImg.svg')] bg-no-repeat bg-cover bg-center opacity-10 pointer-events-none z-[-1]" />

        <div className="relative flex flex-col items-center min-h-screen mx-4">
          {/* Fade para o fundo da página */}
          <div className="absolute top-1/2 left-0 w-full h-20 bg-gradient-to-b from-[#2C2C2C]/0 to-[#2C2C2C] z-[-1]" />

          <HeaderNavigationMenu />
          {children}
        </div>
      </body>
    </html>
  );
}
