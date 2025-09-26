import rss from "@astrojs/rss"
import { getCollection } from "astro:content"

type Context = {
  site: string
}

export async function GET() {
  const posts = await getCollection('blog');
  return rss({
    title: 'Amit Tyagi',
    description: 'Applied AI scientist',
    site: 'https://www.amittyagi.com',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.summary,
      link: `/blog/${post.slug}/`,
      pubDate: post.data.date,
    })),
  });
}