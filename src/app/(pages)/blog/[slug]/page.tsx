import {
  Heading,
  PageContainer,
  Paragraph,
  Span,
  Tags,
} from "@/components"
import {
  PageRenderer,
  generateNotionPageID,
  getAllBlockChildren,
  getPageById,
  parseDateDisplay,
  richTextRender,
} from "@/lib/notion"
import type { PostProps } from "@/types/notion.type"

interface PostPageProps {
  params: Promise<{
    slug: string
  }>
}

export const dynamic = "force-dynamic"; /* testando problema com cache vercel */

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params

  if (typeof slug !== "string") {
    return (
      <PageContainer className="flex flex-col items-center gap-20 px-6 py-20">
        <section className="flex flex-col items-center gap-6 max-w-2xl text-center">
          <div className="flex flex-col items-center gap-4">
            <Heading as="h1">Ops!</Heading>
            <Paragraph>Não foi possível carregar a página</Paragraph>
          </div>
        </section>
      </PageContainer>
    )
  }

  const pageId = generateNotionPageID(slug)
  const page = await getPageById<PostProps>(pageId)

  if (!page) {
    return (
      <PageContainer className="flex flex-col items-center gap-20 px-6 py-20">
        <section className="flex flex-col items-center gap-6 max-w-2xl text-center">
          <div className="flex flex-col items-center gap-4">
            <Heading as="h1">Ops!</Heading>
            <Paragraph>Não foi possível carregar a página</Paragraph>
          </div>
        </section>
      </PageContainer>
    )
  }

  const title = richTextRender(page.properties.Nome.title)
  const description = richTextRender(page.properties.Descricao.rich_text)
  const tags = page.properties.Tags.multi_select
  const publishedIn = page.properties["Publicado Em"].date?.start
  const dateDisplay = parseDateDisplay(publishedIn)

  const blocks = await getAllBlockChildren(pageId, { deep: true })

  return (
    <PageContainer className="flex flex-col items-center gap-20 px-6 py-20">
      {/* Header */}
      <section className="flex flex-col items-center gap-6 max-w-2xl text-center">
        <Span>{dateDisplay}</Span>

        <div className="flex flex-col items-center gap-4">
          <Heading as="h1">{title}</Heading>
          <Paragraph>{description}</Paragraph>
        </div>

        <Tags items={tags.map(t => t.name)} />
      </section>

      {/* Content */}
      <section className="flex flex-col gap-4 max-w-3xl w-full select-text">
        <PageRenderer blocks={blocks} />
      </section>
    </PageContainer>
  )
}
