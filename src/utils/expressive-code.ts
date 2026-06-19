import { ExpressiveCodeEngine, ExpressiveCodeTheme } from '@expressive-code/core';
import { pluginFrames } from '@expressive-code/plugin-frames';
import { pluginShiki } from '@expressive-code/plugin-shiki';
import { pluginTextMarkers } from '@expressive-code/plugin-text-markers';
import { toHtml } from 'hast-util-to-html';
import {
  customShikiLangAlias,
  customShikiLanguages,
  zenWaveDarkCodeTheme,
  zenWaveLightCodeTheme,
} from './code-highlighting';

const expressiveCodeEngine = new ExpressiveCodeEngine({
  themes: [
    new ExpressiveCodeTheme(zenWaveDarkCodeTheme),
    new ExpressiveCodeTheme(zenWaveLightCodeTheme),
  ],
  themeCssSelector: (theme, { styleVariants }) => {
    const baseTheme = styleVariants[0]?.theme;
    const alternateTheme = styleVariants.find((variant) => variant.theme.type !== baseTheme?.type)?.theme;
    if (theme === baseTheme || theme === alternateTheme) {
      return `[data-theme='${theme.type}']`;
    }
    return `[data-theme='${theme.name}']`;
  },
  plugins: [
    pluginShiki({
      langs: customShikiLanguages,
      langAlias: customShikiLangAlias,
    }),
    pluginTextMarkers(),
    pluginFrames(),
  ],
});

const sharedStylesPromise = Promise.all([
  expressiveCodeEngine.getBaseStyles(),
  expressiveCodeEngine.getThemeStyles(),
  expressiveCodeEngine.getJsModules(),
]);

export async function renderExpressiveCode({
  code,
  language,
  title,
}: {
  code: string;
  language: string;
  title?: string;
}) {
  const [baseStyles, themeStyles, jsModules] = await sharedStylesPromise;
  const rendered = await expressiveCodeEngine.render({
    code,
    language,
    props: title
      ? {
          frame: 'code',
          title,
        }
      : {
          frame: 'auto',
        },
  });

  return {
    html: toHtml(rendered.renderedGroupAst),
    sharedStyles: [baseStyles, themeStyles].join('\n'),
    blockStyles: [...rendered.styles].join('\n'),
    scripts: jsModules.join('\n'),
  };
}
