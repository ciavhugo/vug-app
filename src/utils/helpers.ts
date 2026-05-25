export function classMerge(values: Array<string | false | null | undefined>): string {
  return values
    .filter(Boolean)
    .join(" ")
}
