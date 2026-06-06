import { getCollection } from 'astro:content';

export async function GET() {
  const docs = await getCollection('docs');
  const cleanSlug = (entry: { slug?: string; id?: string }) => (entry.slug ?? entry.id ?? '').replace(/^\/+|\/+$/g, '');
  const interesting = docs
    .filter((entry) => {
      const slug = `/${cleanSlug(entry)}/`;
      return slug.includes('/docs/examples/') || slug.includes('/zenwave-sdk/plugins/') || slug.includes('/docs/event-driven-design/');
    })
    .sort((a, b) => a.data.title.localeCompare(b.data.title));

  const lines = [
    '# ZenWave 360',
    '',
    'DDD and API-First Modeling Tools for Modern Distributed Applications.',
    '',
    '## Documentation',
    '',
    ...interesting.map((entry) => `- [${entry.data.title}](https://www.zenwave360.io/${cleanSlug(entry)}/): ${entry.data.description ?? ''}`),
    '',
    '## Plain Text',
    '',
    ...interesting.map((entry) => `- [${entry.data.title} plain text](https://www.zenwave360.io/plain/${cleanSlug(entry)}.txt)`),
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
