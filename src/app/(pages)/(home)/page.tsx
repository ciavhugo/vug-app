import { ProjectCard } from "@/components/frames/ProjectCard";

export default function Home() {
  return (
    <section className="w-full max-w-[800px] mx-auto">
      <div className="max-w-[580px] mt-7">
        <div className="mb-5">
          <div className="relative h-52 w-52 max-[550px]:h-32 max-[550px]:w-32">
            <div className="absolute inset-0 rotate-6 rounded-3xl border border-white/10 transition-all duration-700" />

            <div className="absolute inset-0 -rotate-6 rounded-3xl border border-white/10 transition-all duration-700" />

            <img
              src="https://avatars.githubusercontent.com/u/182302815?v=4"
              alt="Victor Hugo"
              className="relative z-10 h-full w-full rounded-full border border-white/10 bg-zinc-900 object-cover"
            />
          </div>
        </div>

        <p className="text-[#fafafa] text-[18px] max-[550px]:text-[14px] max-[420px]:max-w-[350px] mt-2.5">
          Entre moda, tecnologia e direção criativa, construo projetos com
          identidade e visão de longo prazo, enquanto compartilho aprendizados,
          experiências e reflexões através de artigos no meu blog.
        </p>
      </div>

      <div className="mt-14 mb-5 flex items-center gap-2">
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
