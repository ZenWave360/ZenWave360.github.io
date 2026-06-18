import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PLUGINS_DIR = 'src/content/docs/Plugins';
const GITHUB_BASE_URL = 'https://raw.githubusercontent.com/ZenWave360/zenwave-sdk/develop';

function sanitizeForMdx(content) {
  content = content.replace(/<\/([^>]+)>!--/g, '</$1><!--');
  content = content.replace(/\bClass<\?\s+extends\s+(\w+)>/g, '`Class<? extends $1>`');

  const codeBlocks = [];
  content = content.replace(/```[\s\S]*?```/g, (match) => {
    codeBlocks.push(match);
    return `__CODE_BLOCK_${codeBlocks.length - 1}__`;
  });

  content = content.replace(/<!--\s*TOC\s*-->\n?/g, '');
  content = content.replace(/(?<!`)<([a-zA-Z][a-zA-Z0-9]*)>(?!`)/g, '`<$1>`');
  content = content.replace(/(?<!`)(\$\.[a-zA-Z.]*<[^>]+>[a-zA-Z.]*)(?!`)/g, '`$1`');

  content = content.replace(/__CODE_BLOCK_(\d+)__/g, (_, index) => codeBlocks[Number(index)]);

  return content;
}

async function getPluginFiles() {
  const entries = await readdir(PLUGINS_DIR, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.mdx') && entry.name !== '00-index.mdx')
    .map((entry) => path.join(PLUGINS_DIR, entry.name))
    .sort();
}

function extractFrontmatter(content, filePath) {
  const frontmatterMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);

  if (!frontmatterMatch) {
    throw new Error(`No frontmatter found in ${filePath}`);
  }

  const frontmatter = frontmatterMatch[1];
  const slugMatch = frontmatter.match(/slug:\s*(.+)/);

  if (!slugMatch) {
    throw new Error(`No slug found in frontmatter of ${filePath}`);
  }

  return {
    frontmatter,
    slug: slugMatch[1].trim().replace(/^["']|["']$/g, ''),
  };
}

function getRemoteReadmeUrl(slug) {
  const pathMatch = slug.match(/\/zenwave-sdk(.+)/);

  if (!pathMatch) {
    throw new Error(`Invalid plugin slug format: ${slug}`);
  }

  return `${GITHUB_BASE_URL}${pathMatch[1]}README.md`;
}

async function syncSinglePlugin(filePath, { dryRun = false } = {}) {
  const content = await readFile(filePath, 'utf8');
  const { frontmatter, slug } = extractFrontmatter(content, filePath);
  const githubUrl = getRemoteReadmeUrl(slug);

  console.log(`Fetching ${slug}`);
  const response = await fetch(githubUrl);

  if (!response.ok) {
    throw new Error(`GitHub fetch failed for ${githubUrl}: ${response.status} ${response.statusText}`);
  }

  const githubContent = sanitizeForMdx(await response.text());
  const nextContent = `---\n${frontmatter}\n---\n\n${githubContent}`;

  if (dryRun) {
    console.log(`Dry run: would update ${path.basename(filePath)}`);
    return;
  }

  await writeFile(filePath, nextContent, 'utf8');
  console.log(`Updated ${path.basename(filePath)}`);
}

export async function syncPluginDocs({ dryRun = false } = {}) {
  console.log('Syncing plugin documentation...');
  const pluginFiles = await getPluginFiles();
  let failed = 0;

  for (const filePath of pluginFiles) {
    try {
      await syncSinglePlugin(filePath, { dryRun });
    } catch (error) {
      failed += 1;
      console.error(`Failed to sync ${filePath}: ${error.message}`);
    }
  }

  if (failed > 0) {
    throw new Error(`Plugin documentation sync completed with ${failed} failure(s).`);
  }

  console.log('Plugin documentation sync completed.');
}

const isCli = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isCli) {
  syncPluginDocs({ dryRun: process.argv.includes('--dry-run') }).catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
