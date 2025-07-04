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
        <h1 className="w-24 text-[#A1A09A]">
          {finalDate ? `${initialDate} - ${finalDate}` : initialDate}
        </h1>
        <div>
          <h1 className="font-medium">{title}</h1>
          <p className="max-w-[485px] text-[#A1A09A] ">
            {description}
          </p>

          <div className="flex gap-6 mt-4 mb-2.5 text-[14px] ml-1.5">
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
            className="w-full h-full max-w-[500px] max-h-[280px] rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
