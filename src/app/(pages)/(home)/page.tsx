import { ProjectCard } from "@/components/frames/ProjectCard";

export default function Home() {
  return (
    <section className="w-full max-w-[700px] mx-auto">
      <div className="max-w-[480px] mt-20">
        <p className="font-medium text-[20px] max-[550px]:text-[16px]">
          Victor Machado
        </p>
        <p className="text-[#A1A09A] max-[550px]:text-[14px] max-[420px]:max-w-[350px] mt-2.5">
          O que estou vivenciando ao alinhar tecnologia com moda urbana
          idealizando produtos atemporais, avançando como desenvolvedor e
          desenvolvendo uma trajetória genuína, marcada pela capacidade de
          recomeço e pela evolução constante.
        </p>
      </div>
      <div className="mt-14 mb-5 flex items-center gap-2">
        <img
          src="/asterisk.svg"
          alt="asterisk"
          className="w-2 h-2 animate-spin "
        />
        <p className="max-[550px]:text-[14px]">Selected project</p>
      </div>

      <div className="projectCard-div flex flex-col gap-10">
        <ProjectCard
          initialDate={"2023"}
          finalDate={"2024"}
          title={"MentorGo"}
          description={
            "O MentorGo facilita a gestão do desenvolvimento individual de alunos, oferecendo recursos personalizados como criação de desafios, artigos, salas e cadastro de cursos."
          }
          projectLink={"https://mentor-go.vercel.app/"}
          githubLink={"https://github.com/CodeTheFato"}
          imageUrl={"MentorGo-Capa.png"}
        />
      </div>
    </section>
  );
}
