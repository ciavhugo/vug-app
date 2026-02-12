import Link from "next/link";
import {
  generateNotionPageSlug,
  getDatabaseItems,
  parseDateDisplay,
  richTextRender,
} from "@/lib/notion";
import { PageContainer, BlogPostCard } from "@/components";
import type { PostProps } from "@/types/notion.type";

export const dynamic = "force-dynamic"; /* testando problema com cache vercel */

export default async function PostsPage() {
  const { results } = await getDatabaseItems<PostProps>({
    sorts: [
      { property: "Publicado Em", direction: "descending" },
      { property: "Criado Em", direction: "descending" },
    ],
    where: {
      and: [{ property: "Publicado Em", type: "date", op: "is_not_empty" }],
    },
  });

  return (
    <PageContainer className="flex flex-col items-center gap-20 px-6 py-20 w-full max-w-[705px]">
      {/* Header */}
      <section className="flex flex-col gap-12 text-center max-w-2xl">
        <h1 className="text-3xl font-semibold">Todas as Postagens</h1>

        {/* <p className="text-gray-500">Aqui vai ser um parágrafo com introdução</p> */}
      </section>

      {/* Content */}
      <section className="flex w-full flex-col gap-10">
        {results.map((item) => {
          const title = richTextRender(item.properties.Nome.title);
          const description = richTextRender(item.properties.Descricao.rich_text);
          const tags = item.properties.Tags.multi_select;
          const publishedIn = item.properties["Publicado Em"].date?.start as string;

          const slug = generateNotionPageSlug(item.url);
          const dateDisplay = parseDateDisplay(publishedIn);

          return (
            <Link key={item.id} href={`blog/${slug}`}>
              <BlogPostCard
                title={title}
                description={description}
                date={dateDisplay}
                tags={tags}
              />
            </Link>
          );
        })}
      </section>
    </PageContainer>
  );
}
