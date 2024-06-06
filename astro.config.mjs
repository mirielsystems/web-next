import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
  content: {
    collections: {
      posts: {
        schema: {
          type: 'object',
          properties: {
            title: { type: 'string' },
            author: { type: 'string' },
            date: { type: 'string', format: 'date' },
          },
          required: ['title', 'author', 'date'],
        },
      },
    },
  },
});
