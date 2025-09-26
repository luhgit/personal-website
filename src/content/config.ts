import { defineCollection, z } from "astro:content"

// WORK
const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    companyUrl: z.string().url().optional(),
    role: z.string(),
    location: z.string().optional(),
    dateStart: z.union([z.string(), z.date()]),
    dateEnd: z.union([z.string(), z.date()]).optional(), // omit => Present
    tags: z.array(z.string()).default([]),   // chips like ["Healthcare","GenAI"]
    highlights: z.array(z.string()).optional(), // short bullets
  }),
})

// BLOG
const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.date(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).default([]),
    external_link: z.string().url().optional(),   // ← important
  }),
})

// PROJECTS
const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.date(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).default([]),
    repoUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    external_link: z.string().url().optional(),
    featured: z.boolean().optional(),
    cover: z.string().optional(),
    status: z.enum(["Shipped","In progress","Prototype","Completed", "Ongoing"]).optional(),
  }),
})

// EDUCATION
const education = defineCollection({
  type: "content",
  schema: z.object({
    degree: z.string(),                 // e.g., "M.Sc. Internet Technologies & Information Systems"
    institution: z.string(),            // e.g., "Leibniz Universität Hannover …"
    location: z.string().optional(),    // e.g., "Hannover, Germany"
    dateStart: z.coerce.date(),
    dateEnd: z.coerce.date(),
    highlights: z.array(z.string()).default([]), // short plain-text bullets
  }),
})

// LEGAL (e.g. privacy, terms)
const legal = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
  }),
})

export const collections = { work, blog, projects, education, legal }
