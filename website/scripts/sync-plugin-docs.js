const fs = require('fs-extra');
const fetch = require('node-fetch');
const path = require('path');
const glob = require('glob');

const PLUGINS_DIR = './pages/docs/Plugins';
const GITHUB_BASE_URL = 'https://raw.githubusercontent.com/ZenWave360/zenwave-sdk/main';

/**
 * Sanitize markdown content for MDX compatibility.
 * Fixes common issues that cause MDX parsing errors.
 */
function sanitizeForMdx(content) {
  // Fix malformed XML comments: </tag>!-- comment --> should be </tag><!-- comment -->
  content = content.replace(/<\/([^>]+)>!--/g, '</$1><!--');

  // Wrap Java generic types with ? in backticks to prevent JSX parsing
  // e.g., Class<? extends Annotation> becomes `Class<? extends Annotation>`
  content = content.replace(/\bClass<\?\s+extends\s+(\w+)>/g, '`Class<? extends $1>`');

  // Escape XML-like tags outside of code blocks to prevent MDX JSX parsing
  // First, protect code blocks by replacing them with placeholders
  const codeBlocks = [];
  content = content.replace(/```[\s\S]*?```/g, (match) => {
    codeBlocks.push(match);
    return `__CODE_BLOCK_${codeBlocks.length - 1}__`;
  });

  // Remove <!-- TOC --> comments (MDX doesn't support HTML comments outside code blocks)
  content = content.replace(/<!--\s*TOC\s*-->\n?/g, '');

  // Wrap XML-like tags in backticks if not already wrapped
  // e.g., <configOptions> becomes `<configOptions>`
  content = content.replace(/(?<!`)<([a-zA-Z][a-zA-Z0-9]*)>(?!`)/g, '`<$1>`');

  // Wrap JSONPath-like expressions with angle brackets in backticks
  // e.g., $.properties.<content property>.items becomes `$.properties.<content property>.items`
  content = content.replace(/(?<!`)(\$\.[a-zA-Z.]*<[^>]+>[a-zA-Z.]*)(?!`)/g, '`$1`');

  // Restore code blocks
  content = content.replace(/__CODE_BLOCK_(\d+)__/g, (_, index) => codeBlocks[parseInt(index)]);

  return content;
}

async function syncPluginDocs() {
  console.log('🔄 Syncing plugin documentation...');
  
  // Find all MDX files in the plugins directoryRefactorize your code.
  const pluginFiles = glob.sync(`${PLUGINS_DIR}/*.mdx`);
  
  for (const filePath of pluginFiles) {
    try {
      if (filePath.endsWith('00-index.mdx')) {
        console.log(`Skipping ${filePath}`);
        continue;
      }
      await syncSinglePlugin(filePath);
    } catch (error) {
      console.error(`❌ Failed to sync ${filePath}:`, error.message);
    }
  }
  
  console.log('✅ Plugin documentation sync completed');
}

async function syncSinglePlugin(filePath) {
  const content = await fs.readFile(filePath, 'utf8');
  
  // Extract front matter - handle both --- and different line endings
  const frontMatterMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!frontMatterMatch) {
    console.error(`❌ No front matter found in ${filePath}`);
    console.error(`File starts with: ${content.substring(0, 100)}...`);
    throw new Error('No front matter found');
  }
  
  const frontMatter = frontMatterMatch[1];
  const slugMatch = frontMatter.match(/slug:\s*(.+)/);
  if (!slugMatch) {
    console.error(`❌ No slug found in front matter of ${filePath}`);
    console.error(`Front matter: ${frontMatter}`);
    throw new Error('No slug found in front matter');
  }
  
  const slug = slugMatch[1].trim();
  console.log(`📥 Fetching content for ${slug}...`);
  
  // Extract path after /zenwave-sdk from slug
  const pathMatch = slug.match(/\/zenwave-sdk(.+)/);
  if (!pathMatch) {
    throw new Error(`Invalid slug format: ${slug}`);
  }
  
  const pluginPath = pathMatch[1]; // e.g., "/plugins/zdl-to-openapi/"
  
  // Fetch content from GitHub
  const githubUrl = `${GITHUB_BASE_URL}${pluginPath}README.md`;
  const response = await fetch(githubUrl);
  
  if (!response.ok) {
    console.error(`❌ Failed to fetch ${githubUrl}: ${response.status} ${response.statusText}`);
    throw new Error(`GitHub fetch failed: ${response.status} ${response.statusText}`);
  }
  
  let githubContent = await response.text();

  // Sanitize content for MDX compatibility
  githubContent = sanitizeForMdx(githubContent);

  // Reconstruct the file with original front matter + new content
  const newContent = `---\n${frontMatter}\n---\n\n${githubContent}`;
  
  await fs.writeFile(filePath, newContent, 'utf8');
  console.log(`✅ Updated ${path.basename(filePath)}`);
}

// Run the sync
if (require.main === module) {
  syncPluginDocs().catch(console.error);
}

module.exports = { syncPluginDocs };
