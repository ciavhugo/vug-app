export default function About() {
  return (
      <section className="w-full max-w-[700px] mx-auto min-h-screen flex flex-col mt-28">
        {/* About me */}
        <section className="flex gap-12">
          <h1 className="w-24 text-[#A1A09A]">Sobre</h1>
          <div>
            <h1 className="font-medium">Victor Hugo Machado</h1>
            <p className="max-w-[485px] font-light">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry...
            </p>
          </div>
        </section>

        {/* Connect */}
        <section className="flex gap-12 mt-20">
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
        <section className="flex gap-12 mt-20">
          <h1 className="w-24 text-[#A1A09A]">Emprego</h1>
          <div className="max-w-[485px]">
            <p>
              2+ Anos de experiência trabalhando em design e desenvolvimento.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <img
                src="/Cothefato.svg" // coloque o nome do arquivo que está em /public
                alt="Cothefato"
                className="w-12 h-12 object-contain rounded-full"
              />
              <div className="flex flex-col">
                <p>Frontend Developer</p>
                <a
                  href="https://github.com/CodeTheFato"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A1A09A] hover:text-gray-400 transition-colors duration-300 no-underline"
                >
                  Cothefato.
                </a>
              </div>
              <p className="text-sm ml-auto text-[#A1A09A]">2022 — 2023</p>
            </div>
          </div>
        </section>

        {/* Side projects */}
        <section className="flex gap-12 mt-20">
          <h1 className="w-24 text-[#A1A09A]">Marca</h1>
          <div className="max-w-[485px]">
            <p>Experiência trabalhando em design de moda.</p>
            <div className="mt-4 flex items-center gap-3">
              <img
                src="/VugCollection.svg" // coloque o nome do arquivo que está em /public
                alt="VugCo"
                className="w-12 h-12 object-contain rounded-full"
              />
              <div className="flex flex-col">
                <p>Diretor Criativo</p>
                <a
                  href="https://www.instagram.com/vugcollection/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A1A09A] hover:text-gray-400 transition-colors duration-300 no-underline"
                >
                  Vug Collection*
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Build */}
        <section className="flex gap-12 mt-20">
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
