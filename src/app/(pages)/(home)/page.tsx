import { ProjectCard } from "@/components/frames/ProjectCard";

export default function Home() {
  return (
    <section className="w-full max-w-[800px] mx-auto">
      <div className="max-w-[580px] mt-7">
        <p className="font-medium text-[28px] max-[550px]:text-[16px]">
          <span className="relative">
          Victor Machado
          
            <span className="absolute -top-[-4px] -right-3 text-[10px]">
              {" "}
              <img
                src="/asterisk.svg"
                alt="asterisk"
                className="w-3 h-3 animate-spin "
              />
            </span>
          </span>
        </p>

        <p className="text-[#fafafa] text-[18px] max-[550px]:text-[14px] max-[420px]:max-w-[350px] mt-2.5">
          Construindo uma marca streetwear, aprofundando minha base em
          desenvolvimento de sistemas e evoluindo com consistência.
        </p>
      </div>

      <div className="mt-14 mb-5 flex items-center gap-2">
        <img
          src="/asterisk.svg"
          alt="asterisk"
          className="w-2 h-2 "
        />
        <p className="max-[550px]:text-[14px]">Selecionar projetos</p>
      </div>

      <div className="projectCard-div flex flex-col gap-10 mb-16 max-[600px]:mb-24">
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
