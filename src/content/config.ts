import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const markets = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/markets',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    titleZh: z.string(),
    slug: z.string(),
    status: z.enum(['Open', 'Restricted', 'Closed']),
    asOfDate: z.string(),
    region: z.string(),
    priority: z.number().default(0),
    summary: z.string(),
    summaryZh: z.string(),
  }),
});

const guides = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/guides',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    titleZh: z.string(),
    slug: z.string(),
    category: z.string(),
    priority: z.number().default(0),
    summary: z.string(),
    summaryZh: z.string(),
  }),
});

export const collections = { markets, guides };
