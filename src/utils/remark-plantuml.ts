import { deflateRawSync } from 'node:zlib';

const PLANTUML_LANGUAGES = new Set(['plantuml', 'plant-uml', 'puml']);
const PLANTUML_SERVER_URL = 'https://www.plantuml.com/plantuml/svg/';
const PLANTUML_ALT_TEXT = 'PlantUML diagram';
const PLANTUML_ALPHABET = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_';

type MarkdownNode = {
  type?: string;
  lang?: string | null;
  meta?: string | null;
  value?: string;
  children?: MarkdownNode[];
};

type FigureMetadata = {
  alt: string;
  title: string;
};

function encode6Bit(value: number) {
  return PLANTUML_ALPHABET[value & 0x3f] ?? '0';
}

function append3Bytes(byte1: number, byte2: number, byte3: number) {
  const combined = (byte1 << 16) | (byte2 << 8) | byte3;

  return [
    encode6Bit((combined >> 18) & 0x3f),
    encode6Bit((combined >> 12) & 0x3f),
    encode6Bit((combined >> 6) & 0x3f),
    encode6Bit(combined & 0x3f),
  ].join('');
}

function encodePlantUml(source: string) {
  const compressed = deflateRawSync(Buffer.from(source, 'utf8'));
  let encoded = '';

  for (let index = 0; index < compressed.length; index += 3) {
    encoded += append3Bytes(
      compressed[index] ?? 0,
      compressed[index + 1] ?? 0,
      compressed[index + 2] ?? 0,
    );
  }

  return encoded;
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function extractQuotedMetaValue(meta: string, key: string) {
  const match = meta.match(new RegExp(`${key}="([^"]+)"`, 'i'));
  return match?.[1]?.trim() ?? '';
}

function readFigureMetadata(meta: string | null | undefined): FigureMetadata {
  if (!meta) {
    return { alt: PLANTUML_ALT_TEXT, title: '' };
  }

  const alt = extractQuotedMetaValue(meta, 'alt') || PLANTUML_ALT_TEXT;
  const title = extractQuotedMetaValue(meta, 'title');

  return { alt, title };
}

function renderPlantUmlFigure(source: string, meta: string | null | undefined) {
  const { alt, title } = readFigureMetadata(meta);
  const encodedSource = encodePlantUml(source);
  const imageUrl = `${PLANTUML_SERVER_URL}${encodedSource}`;
  const escapedAlt = escapeHtml(alt);
  const escapedTitle = escapeHtml(title);

  return [
    '<figure class="plantuml-diagram">',
    `<img src="${imageUrl}" alt="${escapedAlt}" loading="lazy" decoding="async" />`,
    title ? `<figcaption>${escapedTitle}</figcaption>` : '',
    '</figure>',
  ].join('');
}

function visitNode(node: MarkdownNode) {
  if (!Array.isArray(node.children)) {
    return;
  }

  node.children = node.children.map((child) => {
    if (child.type === 'code' && child.lang && PLANTUML_LANGUAGES.has(child.lang.toLowerCase())) {
      return {
        type: 'html',
        value: renderPlantUmlFigure(child.value ?? '', child.meta),
      };
    }

    visitNode(child);
    return child;
  });
}

export function remarkPlantUml() {
  return (tree: MarkdownNode) => {
    visitNode(tree);
  };
}
