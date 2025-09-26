import { formatDate, truncateText } from "@lib/utils"
import type { CollectionEntry } from "astro:content"

type BlogOrProject = CollectionEntry<"blog"> | CollectionEntry<"projects">

type Props = {
  entry: BlogOrProject
  pill?: boolean
}

export default function ArrowCard({ entry, pill }: Props) {
  // Prefer external link if provided (e.g., Substack)
  const external = (entry.data as any)?.external_link as string | undefined
  const href = external ?? `/${entry.collection}/${entry.slug}`
  const isExternal = Boolean(external)
  const isBlog = entry.collection === "blog"

  // Normalize tags to an array
  const tags: string[] = Array.isArray((entry.data as any)?.tags)
    ? ((entry.data as any).tags as string[])
    : []

  return (
    <a
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener" } : {})}
      class="group p-4 gap-3 flex items-center border rounded-lg hover:bg-black/5 hover:dark:bg-white/10 border-black/15 dark:border-white/20 transition-colors duration-300 ease-in-out"
    >
      <div class="w-full group-hover:text-black group-hover:dark:text-white blend">
        <div class="flex flex-wrap items-center gap-2">
          {pill && (
            <div class="text-sm capitalize px-2 py-0.5 rounded-full border border-black/15 dark:border-white/25">
              {isBlog ? "post" : "project"}
            </div>
          )}
          {("date" in entry.data) && (
            <div class="text-sm uppercase">
              {formatDate((entry.data as any).date)}
            </div>
          )}
        </div>

        <div class="font-semibold mt-3 text-black dark:text-white line-clamp-2">
          {entry.data.title as string}
        </div>

        {("summary" in entry.data) && (
          <div class="text-sm line-clamp-2">
            {(entry.data as any).summary}
          </div>
        )}

        {/* Meta row: Substack hint + tags */}
        <div class="mt-2 flex flex-wrap items-center gap-2 text-xs opacity-80">
          {isBlog && isExternal && (
            <span class="underline">Read on Substack →</span>
          )}
          {tags.length > 0 && (
            <>
              {isBlog && isExternal && <span aria-hidden="true">•</span>}
              <ul class="flex flex-wrap gap-1">
                {tags.map((tag: string, i: number) => (
                  <li
                    class="text-xs uppercase py-0.5 px-2 rounded bg-black/5 dark:bg-white/20 text-black/75 dark:text-white/75"
                  >
                    {truncateText(tag, 20)}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="stroke-current group-hover:stroke-black group-hover:dark:stroke-white"
      >
        <line
          x1="5"
          y1="12"
          x2="19"
          y2="12"
          class="scale-x-0 group-hover:scale-x-100 translate-x-4 group-hover:translate-x-1 transition-all duration-300 ease-in-out"
        />
        <polyline
          points="12 5 19 12 12 19"
          class="translate-x-0 group-hover:translate-x-1 transition-all duration-300 ease-in-out"
        />
      </svg>
    </a>
  )
}