import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { HeaderNavigationMenu } from "@/components/frames/HeaderNavigationMenu";
import { ClientCursorWrapper } from "@/components/frames/ClientCursorWrapper";

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
        className={`${fontInter.variable} ${robotoMono.variable} antialiased select-none  [user-select:none] [webkit-user-drag:none]`}
      >
        {/* Fundo fixo + gradiente */}
        <div className="fixed top-0 left-0 w-screen h-[40%] z-[-1] pointer-events-none">
          <div
            className="
      w-full h-full 
      bg-[url('/backgroundImg.png')] 
      bg-no-repeat 
      bg-cover 
      bg-center
      max-[768px]:bg-[position:center_top_30%]
      max-[600px]:bg-[position:center_top_50%]
      max-[480px]:bg-[position:center_top_65%]
      opacity-10
    "
          />
          <div className="absolute bottom-0 left-0 w-full h-30 bg-gradient-to-b from-[#121212]/0 to-[#121212]" />
        </div>

        <ClientCursorWrapper>
          <div className="relative flex flex-col items-center min-h-screen mx-6 sm:mx-4">
            <HeaderNavigationMenu />
            {children}
          </div>
        </ClientCursorWrapper>

        {/* <div className="h-6 opacity-0 pointer-events-none" /> */}

        <footer className="w-full text-center py-2 text-sm max-[600px]:text-[12px] text-gray-600">
          © {new Date().getFullYear()} —{" "}
          <span className="hover:text-gray-500 transition-colors duration-200 font-medium cursor-grab">
            Vug*
          </span>{" "}
          Todos os direitos reservados.
        </footer>
      </body>
    </html>
  );
}
