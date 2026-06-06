import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const collections = {
  docs: defineCollection({
    loader: docsLoader({
      generateId: ({ entry, data }) => {
        if (typeof data.slug === 'string') {
          return data.slug.replace(/^\/+|\/+$/g, '');
        }
        return entry.replace(/\.(md|mdx)$/, '').replace(/\\/g, '/');
      },
    }),
    schema: docsSchema(),
  }),
  posts: defineCollection({
    loader: glob({
      base: './src/content/posts',
      pattern: '**/*.{md,mdx}',
      generateId: ({ entry, data }) => {
        if (typeof data.slug === 'string') {
          return data.slug.replace(/^\/+|\/+$/g, '');
        }
        return entry.replace(/\.(md|mdx)$/, '').replace(/\\/g, '/');
      },
    }),
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),
      slug: z.string(),
      date: z.coerce.date(),
      author: z.string().optional(),
      tags: z.array(z.string()).optional().default([]),
      excerpt: z.string().optional(),
      image: z.string().optional(),
      imageAlt: z.string().optional(),
      draft: z.boolean().optional().default(false),
    }),
  }),
};
