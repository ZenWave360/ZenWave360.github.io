import { readFileSync } from 'node:fs';
import { createShikiHighlighter } from '@astrojs/markdown-remark';
import githubDarkTheme from '@shikijs/themes/github-dark';
import githubLightTheme from '@shikijs/themes/github-light';

const zdlGrammar = JSON.parse(
  readFileSync(new URL('../syntaxes/zdl.tmLanguage.json', import.meta.url), 'utf-8'),
);
const zflGrammar = JSON.parse(
  readFileSync(new URL('../syntaxes/zfl.tmLanguage.json', import.meta.url), 'utf-8'),
);

export const zenWaveDarkCodeTheme = {
  ...githubDarkTheme,
  name: 'zenwave-dark',
  type: 'dark',
  colors: {
    ...githubDarkTheme.colors,
    'editor.background': '#000000',
    'editor.foreground': '#ffffff',
  },
  tokenColors: [
    ...githubDarkTheme.tokenColors,
    { scope: ['comment.block.documentation.zdl', 'comment.block.zdl', 'comment.line.double-slash.zdl'], settings: { foreground: '#66d970', fontStyle: 'italic' } },
    { scope: ['storage.type.annotation.zdl'], settings: { foreground: '#d8ff57' } },
    { scope: ['keyword.declaration.zdl', 'keyword.control.zdl'], settings: { foreground: '#ff8a3d' } },
    { scope: ['variable.other.field.zdl'], settings: { foreground: '#c792ea' } },
    { scope: ['entity.name.type.standard.zdl'], settings: { foreground: '#ffffff', fontStyle: 'bold' } },
    { scope: ['entity.name.type.zdl'], settings: { foreground: '#82aaff' } },
    { scope: ['entity.name.tag.validation.zdl'], settings: { foreground: '#d7d45f' } },
    { scope: ['support.function.zdl'], settings: { foreground: '#82aaff' } },
    { scope: ['string.quoted.double.zdl', 'string.quoted.single.zdl', 'string.regexp.zdl'], settings: { foreground: '#a5e075' } },
    { scope: ['constant.numeric.zdl', 'constant.language.zdl'], settings: { foreground: '#79b8ff' } },
    { scope: ['constant.other.enum.zdl', 'constant.other.zdl'], settings: { foreground: '#5ccfe6' } },
    { scope: ['support.type.property-name.zdl', 'constant.other.key.zdl'], settings: { foreground: '#ffcb6b' } },
    { scope: ['keyword.operator.zdl', 'keyword.operator.assignment.zdl', 'punctuation.separator.zdl'], settings: { foreground: '#ffffff' } },
  ],
};

export const zenWaveLightCodeTheme = {
  ...githubLightTheme,
  name: 'zenwave-light',
  type: 'light',
  colors: {
    ...githubLightTheme.colors,
    'editor.background': '#ffffff',
    'editor.foreground': '#24292f',
  },
  tokenColors: [
    ...githubLightTheme.tokenColors,
    { scope: ['comment.block.documentation.zdl', 'comment.block.zdl', 'comment.line.double-slash.zdl'], settings: { foreground: '#22863a', fontStyle: 'italic' } },
    { scope: ['storage.type.annotation.zdl'], settings: { foreground: '#6f42c1' } },
    { scope: ['keyword.declaration.zdl', 'keyword.control.zdl'], settings: { foreground: '#d73a49' } },
    { scope: ['variable.other.field.zdl'], settings: { foreground: '#6f42c1' } },
    { scope: ['entity.name.type.standard.zdl'], settings: { foreground: '#24292f', fontStyle: 'bold' } },
    { scope: ['entity.name.type.zdl'], settings: { foreground: '#005cc5' } },
    { scope: ['entity.name.tag.validation.zdl'], settings: { foreground: '#b08800' } },
    { scope: ['support.function.zdl'], settings: { foreground: '#005cc5' } },
    { scope: ['string.quoted.double.zdl', 'string.quoted.single.zdl', 'string.regexp.zdl'], settings: { foreground: '#22863a' } },
    { scope: ['constant.numeric.zdl', 'constant.language.zdl'], settings: { foreground: '#005cc5' } },
    { scope: ['constant.other.enum.zdl', 'constant.other.zdl'], settings: { foreground: '#032f62' } },
    { scope: ['support.type.property-name.zdl', 'constant.other.key.zdl'], settings: { foreground: '#b31d28' } },
  ],
};

export const customShikiLanguages = [
  {
    id: 'zdl',
    scopeName: 'source.zdl',
    aliases: ['zdl', 'zw'],
    grammar: zdlGrammar,
  },
  {
    id: 'zfl',
    scopeName: 'source.zfl',
    aliases: ['zfl'],
    grammar: zflGrammar,
  },
];

export const customShikiLangAlias = {
  hbs: 'handlebars',
  text: 'plaintext',
  txt: 'plaintext',
  yml: 'yaml',
  zw: 'zdl',
  plantuml: 'txt',
};

let remoteCodeHighlighterPromise: ReturnType<typeof createShikiHighlighter> | undefined;

export function getRemoteCodeHighlighter() {
  remoteCodeHighlighterPromise ??= createShikiHighlighter({
    langs: customShikiLanguages,
    langAlias: customShikiLangAlias,
    themes: {
      dark: zenWaveDarkCodeTheme,
      light: zenWaveLightCodeTheme,
    },
  });
  return remoteCodeHighlighterPromise;
}
