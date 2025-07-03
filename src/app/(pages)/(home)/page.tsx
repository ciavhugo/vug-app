export default function Home() {
  return (
    <section className="w-full max-w-[700px] mx-auto">
      <div className="max-w-[480px] mt-20">
        <p className="font-medium text-[20px]">Victor Machado</p>
        <p className="text-[#A1A09A]">
          O que estou vivenciando ao alinhar tecnologia com moda urbana
          idealizando produtos atemporais, avançando como desenvolvedor e
          desenvolvendo uma trajetória genuína, marcada pela capacidade de
          recomeço e pela evolução constante.
        </p>
      </div>
      <div className="mt-14 flex items-center gap-2">
        <img
          src="/asterisk.svg"
          alt="asterisk"
          className="w-2 h-2 animate-spin"
        />
        <p>Selected project</p>
      </div>
    </section>
  );
}
