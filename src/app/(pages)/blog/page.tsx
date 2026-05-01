import Link from "next/link";
import { connection } from "next/server";
import {
  generateNotionPageSlug,
  getDatabaseItems,
  richTextRender,
} from "@/lib/notion";
import { PageContainer, BlogPostCard } from "@/components";
import type { PostProps } from "@/types/notion.type";

export const dynamic = "force-dynamic";
export const revalidate = 0;

interface PostsPageProps {
  searchParams?: Promise<{
    tag?: string;
  }>;
}

export default async function PostsPage({ searchParams }: PostsPageProps) {
  await connection();

  const params = await searchParams;
  const activeTag = params?.tag;

  const { results } = await getDatabaseItems<PostProps>({
    sorts: [
      { property: "Publicado Em", direction: "descending" },
      { property: "Criado Em", direction: "descending" },
    ],
    where: {
      and: [{ property: "Publicado Em", type: "date", op: "is_not_empty" }],
    },
  });

  const allTags = Array.from(
    new Map(
      results
        .flatMap((item) => item.properties.Tags.multi_select)
        .map((tag) => [tag.name, tag]),
    ).values(),
  );

  const filteredResults = activeTag
    ? results.filter((item) =>
        item.properties.Tags.multi_select.some((tag) => tag.name === activeTag),
      )
    : results;

  return (
    <PageContainer className="flex w-full max-w-[805px] flex-col items-center gap-12 px-6 py-6">
      <section className="flex w-full flex-col gap-8 text-center">
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/blog"
            className={
              !activeTag
                ? "group relative rounded-xl bg-gradient-to-br from-white to-zinc-100 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-black shadow-lg shadow-white/20 transition-all duration-300 light:from-zinc-950 light:to-zinc-800 light:text-white light:shadow-zinc-950/10"
                : "group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-zinc-400 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:text-white light:border-zinc-950/10 light:bg-white/35 light:text-zinc-600 light:hover:border-zinc-950/20 light:hover:bg-white/60 light:hover:text-zinc-950"
            }
          >
            <span className="relative">Todos</span>
          </Link>

          {allTags.map((tag) => {
            const isActive = activeTag === tag.name;

            return (
              <Link
                key={tag.id}
                href={`/blog?tag=${encodeURIComponent(tag.name)}`}
                className={
                  isActive
                    ? "group relative rounded-xl bg-gradient-to-br from-white to-zinc-100 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-black shadow-lg shadow-white/20 transition-all duration-300 light:from-zinc-950 light:to-zinc-800 light:text-white light:shadow-zinc-950/10"
                    : "group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-zinc-400 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:text-white light:border-zinc-950/10 light:bg-white/35 light:text-zinc-600 light:hover:border-zinc-950/20 light:hover:bg-white/60 light:hover:text-zinc-950"
                }
              >
                {!isActive && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                )}

                <span className="relative">{tag.name}</span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="grid w-full max-w-[805px] gap-5 sm:grid-cols-2">
        {filteredResults.map((item) => {
          const title = richTextRender(item.properties.Nome.title);
          const description = richTextRender(
            item.properties.Descricao.rich_text,
          );
          const tags = item.properties.Tags.multi_select;
          const publishedIn = item.properties["Publicado Em"].date
            ?.start as string;

          const slug = generateNotionPageSlug(item.url);

          const dateDisplay = new Intl.DateTimeFormat("pt-BR", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })
            .format(new Date(`${publishedIn}T00:00:00`))
            .replace(" de ", " ")
            .replace(" de ", " ");

          const coverImage =
            item.cover?.type === "external"
              ? item.cover.external.url
              : item.cover?.type === "file"
                ? item.cover.file.url
                : undefined;

          return (
            <Link key={item.id} href={`/blog/${slug}`} className="group block">
              <BlogPostCard
                title={title}
                description={description}
                date={dateDisplay}
                tags={tags}
                image={coverImage}
              />
            </Link>
          );
        })}
      </section>
    </PageContainer>
  );
}
