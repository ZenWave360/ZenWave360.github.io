import { getCollection } from 'astro:content';
import remoteCodeCache from '../../remote-code-cache.json';

export async function getStaticPaths() {
  const docs = await getCollection('docs');
  const cleanSlug = (entry: { slug?: string; id?: string }) => (entry.slug ?? entry.id ?? '').replace(/^\/+|\/+$/g, '');
  return docs
    .filter((entry) => {
      const slug = `/${cleanSlug(entry)}/`;
      return slug.includes('/docs/examples/') || slug.includes('/zenwave-sdk/plugins/') || slug.includes('/docs/event-driven-design/');
    })
    .map((entry) => ({
      params: { slug: cleanSlug(entry) },
      props: { entry },
    }));
}

function stripMdx(markdown: string) {
  return markdown
    .replace(/^---[\s\S]*?---/, '')
    .replace(/^import .*;?$/gm, '')
    .replace(/<RemoteCode[\s\S]*?\/>/g, '[RemoteCode snapshot included below]')
    .replace(/<CodeGeneration[\s\S]*?\/>/g, '[CodeGeneration snapshots included below]')
    .replace(/<[^>]+>/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function remoteCodeAppendix() {
  const entries = Object.values(remoteCodeCache as Record<string, { sourceUrl: string; language: string; content: string }>);
  if (!entries.length) return '';
  return [
    '',
    '## Remote Code Snapshots',
    '',
    ...entries.flatMap((entry) => [
      `Source: ${entry.sourceUrl}`,
      '',
      `\`\`\`${entry.language}`,
      entry.content,
      '```',
      '',
    ]),
  ].join('\n');
}

export async function GET({ props }: { props: { entry: any } }) {
  const body = props.entry.body ?? '';
  const text = [`# ${props.entry.data.title}`, '', props.entry.data.description ?? '', '', stripMdx(body), remoteCodeAppendix()].join('\n');

  return new Response(text, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
