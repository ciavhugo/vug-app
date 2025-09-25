import { Heading, Icon, Paragraph, Span, Tags } from "@/components"

export interface BlogPostCardProps {
  title: string | React.ReactNode
  description: string | React.ReactNode
  date?: string
  tags?: {
    id: string
    name: string
    color: string
  }[]
}

export function BlogPostCard({ title, description, date, tags }: BlogPostCardProps) {
  return (
    <div className="w-full py-6 flex flex-col gap-3 hover:*:text-white transition-colors duration-500">
      
      {/* Linha 1: date + title */}
      <div className="flex flex-col md:flex-row md:gap-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 shrink-0 md:w-[300px] lg:w-[400px]">
          <Icon name="calendar" size={14} />
          <Span>{date}</Span>
        </div>

        <Heading as="h3" size="2xl" className="font-bold">
          {title}
        </Heading>
      </div>

      {/* Linha 2: tags + description */}
      <div className="flex flex-col md:flex-row md:gap-6">
        {tags && tags.length > 0 && (
          <Tags
            items={tags.map(t => t.name)}
            className="flex flex-wrap gap-2 shrink-0 md:w-[300px] lg:w-[400px]"
          />
        )}

        <Paragraph className="text-gray-600 pt-2 md:pt-0">
          {description}
        </Paragraph>
      </div>
    </div>
  )
}
