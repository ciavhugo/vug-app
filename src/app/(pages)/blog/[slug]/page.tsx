import {
  Heading,
  PageContainer,
  Paragraph,
  Span,
  Tags,
} from "@/components"
import { connection } from "next/server"
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

// The post content comes from Notion, so this page should be rendered on demand on Vercel.
export const dynamic = "force-dynamic"
export const revalidate = 0

export default async function PostPage({ params }: PostPageProps) {
  await connection()

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
  const postIcon = page.icon?.type === "emoji" ? page.icon.emoji : null
  const primaryTag = tags[0]?.name
  const readingTime = estimateReadingTime(blocks)

  return (
    <PageContainer className="flex flex-col items-center px-0 py-16 sm:py-10">
      <article className="w-full max-w-3xl px-6 select-text">
        <header className="mb-14 flex flex-col gap-8 sm:mb-10">
          <div className="flex flex-col gap-8">
            {postIcon ? (
              <span className="text-5xl leading-none drop-shadow-lg" aria-hidden="true">
                {postIcon}
              </span>
            ) : null}

            <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
              {primaryTag ? (
                <span className="rounded-full uppercase border border-white/10 bg-white/[0.03] px-2.5 py-1 text-zinc-400 light:border-zinc-950/10 light:bg-zinc-950/[0.03] light:text-zinc-600">
                  {primaryTag}
                </span>
              ) : null}

              {dateDisplay ? (
                <>
                  {primaryTag ? (
                    <span className="text-zinc-700 light:text-zinc-300">•</span>
                  ) : null}
                  <Span className="font-mono" size="xs">
                    {dateDisplay}
                  </Span>
                </>
              ) : null}

              <span className="text-zinc-700 light:text-zinc-300">•</span>
              <Span className="font-mono" size="xs">
                {readingTime} min de leitura
              </Span>
            </div>

            <div className="flex flex-col gap-6">
              <h1 className="text-balance text-4xl font-bold leading-tight text-zinc-100 sm:text-5xl light:text-zinc-950">
                {title}
              </h1>

              {description ? (
                <Paragraph
                  className="max-w-2xl text-pretty font-light leading-relaxed"
                  color="gray"
                  size="xl"
                >
                  {description}
                </Paragraph>
              ) : null}
            </div>
            
          </div>
        </header>

        <PageRenderer blocks={blocks} />
      </article>
    </PageContainer>
  )
}

type NotionCover =
  | {
      type: "external"
      external: {
        url: string
      }
    }
  | {
      type: "file"
      file: {
        url: string
      }
    }
  | null

type NotionBlock = {
  type: string
  __children?: NotionBlock[]
  [key: string]: any
}

function estimateReadingTime(blocks: NotionBlock[]) {
  const words = blocks
    .flatMap(getBlockText)
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length

  return Math.max(1, Math.ceil(words / 220))
}

function getBlockText(block: NotionBlock): string[] {
  const content = block[block.type]
  const ownText = Array.isArray(content?.rich_text)
    ? content.rich_text.map((node: { plain_text?: string }) => node.plain_text ?? "").join(" ")
    : ""
  const childText = block.__children?.flatMap(getBlockText) ?? []

  return [ownText, ...childText]
}
