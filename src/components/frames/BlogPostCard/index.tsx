import Image from "next/image";
import { Heading, Paragraph } from "@/components";

export interface BlogPostCardProps {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  date?: string;
  image?: string;
  tags?: {
    id: string;
    name: string;
    color: string;
  }[];
}

export function BlogPostCard({
  title,
  description,
  date,
  image,
  tags,
}: BlogPostCardProps) {
  const mainTag = tags?.[0]?.name;
  const imageAlt = typeof title === "string" ? title : "Imagem de capa do post";

  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-md transition-all duration-500 group-hover:-translate-y-1 group-hover:border-white/20 group-hover:bg-white/[0.06] group-hover:shadow-2xl group-hover:shadow-cyan-500/5 light:border-zinc-950/10 light:bg-white/55 light:group-hover:border-zinc-950/20 light:group-hover:bg-white/75 light:group-hover:shadow-cyan-500/10">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-violet-500/0 to-fuchsia-500/0 opacity-0 transition-all duration-500 group-hover:from-cyan-400/5 group-hover:via-violet-500/5 group-hover:to-fuchsia-500/5 group-hover:opacity-100" />

      <div className="relative h-48 w-full shrink-0 overflow-hidden border-b border-white/10">
        {image ? (
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, 390px"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-cyan-500/20 via-violet-500/20 to-fuchsia-500/20" />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-70" />
      </div>

      <div className="relative flex flex-1 flex-col justify-between p-6 sm:p-7">
        <div>
          <div className="mb-4 flex items-start justify-between gap-3">
            {mainTag && (
              <span className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-xs uppercase text-zinc-400 light:border-zinc-950/10 light:text-zinc-600">
                {mainTag}
              </span>
            )}

            {date && (
              <span className="shrink-0 rounded-md bg-white/[0.05] px-2.5 py-1 font-mono text-[10px] text-zinc-400 light:bg-zinc-950/[0.05] light:text-zinc-600">
                {date}
              </span>
            )}
          </div>

          <Heading
            as="h3"
            size="2xl"
            className="mb-3 font-bold tracking-tight text-zinc-100 transition-colors duration-500 group-hover:text-cyan-200 light:text-zinc-950 light:group-hover:text-cyan-700"
          >
            {title}
          </Heading>

          <Paragraph className="line-clamp-3 text-sm leading-7 text-zinc-500 transition-colors duration-500 group-hover:text-zinc-300 light:text-zinc-600 light:group-hover:text-zinc-800">
            {description}
          </Paragraph>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </article>
  );
}
