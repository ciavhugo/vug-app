"use client";

import { WorkCard } from "@/components/frames/WorkCard";
import { useEffect, useState } from "react";

export default function About() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 550);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full max-w-[700px] mx-auto min-h-screen flex flex-col mt-28">
      {/* About me */}
      <section className="flex gap-12 max-[650px]:text-[14px]">
        <h1 className="w-24 text-[#A1A09A]">Sobre</h1>
        <div>
          <h1 className="font-medium">Victor Hugo Machado</h1>
          <p className="max-w-[485px] font-light">
            Nascido em São Paulo, 28 anos. Apaixonado por moda e tecnologia, sou
            pai e profissional autônomo em constante evolução. Estudo Análise de
            Sistemas por conta própria e utilizo este espaço para compartilhar
            conhecimentos, projetos e, futuramente, reflexões sobre moda,
            tecnologia e ideias que me inspiram.
          </p>
        </div>
      </section>

      {/* Connect */}
      <section className="flex gap-12 mt-20 max-[650px]:text-[14px]">
        <h1 className="w-24 text-[#A1A09A]">Conectar</h1>
        <div className="flex gap-6 max-w-[485px]">
          <a
            href="https://x.com/namevug"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-gray-400 transition-colors duration-300"
          >
            X
          </a>
          <a
            href="mailto:ciavug@gmail.com"
            className="hover:underline hover:text-gray-400 transition-colors duration-300"
          >
            Email
          </a>
          <a
            href="https://github.com/ciavhugo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-gray-400 transition-colors duration-300"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Work */}
      <section className="flex gap-12 mt-20 max-[650px]:text-[14px]">
        <h1 className="w-24 text-[#A1A09A]">Emprego</h1>
        <div className="max-w-[485px]">
          <p>
            {isSmallScreen
              ? "2+ Anos trabalhando em desenvolvimento."
              : "2+ Anos de experiência trabalhando em design e desenvolvimento."}
          </p>

          <WorkCard
            imageUrl="Cothefato.svg"
            role={isSmallScreen ? "Dev Frontend" : "Frontend Developer"}
            company="Cothefato."
            companyUrl="https://github.com/CodeTheFato"
            initialDate="2023"
            finalDate="2024"
          />
        </div>
      </section>

      {/* Side projects */}
      <section className="flex gap-12 mt-20 max-[650px]:text-[14px]">
        <h1 className="w-24 text-[#A1A09A]">Marca</h1>
        <div className="max-w-[485px]">
          <p>
            {isSmallScreen
              ? "Experiência com moda."
              : "Experiência trabalhando em design de moda."}
          </p>

          <WorkCard
            imageUrl="VugCollection.svg"
            role="Fashion Design"
            company="Vug Collection*"
            companyUrl="https://www.instagram.com/vugcollection/"
          />
        </div>
      </section>

      {/* Build */}
      <section className="flex gap-12 mt-20 max-[650px]:text-[14px] mb-16 max-[600px]:mb-24">
        <h1 className="w-24 text-[#A1A09A]">Feito com</h1>
        <div className="flex gap-6 max-w-[485px]">
          <a
            href="https://nextjs.org/"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            Next Js
          </a>

          <a
            href="https://tailwindcss.com/"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            Tailwind
          </a>
        </div>
      </section>
    </section>
  );
}
