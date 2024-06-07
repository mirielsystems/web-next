import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.string().transform((str) => new Date(str)),
  }),
});

export const collections = { posts };
