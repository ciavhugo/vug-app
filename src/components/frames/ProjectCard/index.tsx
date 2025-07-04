export interface ProjectCardProps {
  initialDate: string;
  finalDate?: string;
  title: string;
  description: string;
  projectLink?: string;
  githubLink?: string;
  imageUrl: string;
}

export function ProjectCard({
  initialDate,
  finalDate,
  title,
  description,
  projectLink,
  githubLink,
  imageUrl,
}: ProjectCardProps) {
  return (
    <section className="project-card">
      <div className="flex gap-8">
        <div className="w-24 text-[#A1A09A] text-sm max-[606px]:text-[14px] max-[532px]:text-[12px] max-[532px]:flex max-[532px]:flex-col max-[532px]:items-start">
          <span>{initialDate}</span>
          {finalDate && <span className="mx-1">—</span>}
          {finalDate && <span>{finalDate}</span>}
        </div>

        <div>
          <h1 className="font-medium max-[606px]:text-[14px]">{title}</h1>
          <p className="text-[#A1A09A] max-w-[485px] max-[600px]:max-w-[360px] max-[606px]:text-[14px]">
            {description}
          </p>
          <div className="flex gap-6 mt-4 mb-2.5 text-[14px] max-[606px]:text-[12px] ml-1.5">
            {projectLink && (
              <a
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-grabbing hover:text-gray-400 transition-colors duration-300"
              >
                Acessar
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-grabbing hover:text-gray-400 transition-colors duration-300"
              >
                GitHub
              </a>
            )}
          </div>
          <img
            src={imageUrl}
            alt={title}
            className="
    w-full 
    h-auto 
    max-w-[500px] 
    max-h-[280px] 
    rounded-2xl 
    sm:max-w-[460px] 
    max-[640px]:max-w-[400px] 
    max-[480px]:max-w-[320px] 
    max-[360px]:max-w-[280px]
"
          />
        </div>
      </div>
    </section>
  );
}
