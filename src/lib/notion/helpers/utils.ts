export const generateNotionPageSlug = (string: string) => {
  try {
    const url = new URL(string)
    const pathname = url.pathname.split("/").filter(Boolean).pop()

    return pathname ?? string
  } catch {
    return string
  }
}

export const generateNotionPageID = (slug: string) => {
  const cleanSlug = slug.split("?")[0].split("#")[0]
  const pageId = cleanSlug.match(/[0-9a-fA-F]{32}$/)?.[0]

  return pageId ?? cleanSlug
}

export const parseDateDisplay = <T extends string | undefined>(dateString: T, timeZone = "UTC"): T extends string ? string : undefined => {
  if (!dateString) return undefined as any

  return new Date(dateString).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone,
  }) as any
}
