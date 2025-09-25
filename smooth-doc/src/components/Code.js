import React from 'react'
import styled, { useTheme, th, up, css } from '@xstyled/styled-components'
import Highlight, { defaultProps } from 'prism-react-renderer'
import Prism from "prism-react-renderer/prism";
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview as BaseLivePreview,
} from 'react-live'

const identifier = /[a-zA-Z_][a-zA-Z0-9_.]*\b/.source;

Prism.languages.zdl = Prism.languages.extend('clike', {
  'zdl-class-name': {
    pattern: RegExp(/(\b(?:entity|enum|service|input|output|event|relationship)\s+)/.source + identifier),
    lookbehind: true,
  },
  'zdl-keyword': /\b(?:config|apis|plugins|entity|enum|service|input|output|event|relationship|for|to|withEvents|policies)\b/,
  'zdl-field': [
      /^\s*([a-z][a-zA-Z_][a-zA-Z0-9_.]*)\s+/,
      /{([a-z][a-zA-Z_][a-zA-Z0-9_.]*)}/, // field in relationship (not working)
    ],

});

Prism.languages.insertBefore('zdl', 'function', {
  'zdl-annotation': /(?:@\w+)/,
  'zdl-validation': /\b(?:required|unique|max|min|maxlength|minlength|pattern)\b/,
});

Prism.languages.java = Prism.languages.extend('javascript', {});

// Prism.languages.insertBefore('zdl', 'comment', {
//   'line-comment': /(^|[^\\:])\/\/.*/
// });

const Pre = styled.pre`
  font-size: 15;
  line-height: 1.45;
  word-break: normal;
  overflow: auto;
  direction: ltr;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  margin: 3 -3;
  background-color: editor-background;
  color: editor-on;
  direction: ltr;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  hyphens: none;
  padding: 4 0;
  border-left: ${th.space(4)} solid transparent;
  border-right: ${th.space(4)} solid transparent;

  textarea {
    &:focus {
      outline: none;
    }
  }

  ${up(
    'sm',
    css`
      border-radius: editor;
      margin: 3 -2;
    `,
  )}
`

const LivePreview = styled(BaseLivePreview)`
  padding: preview-padding-y preview-padding-x;
  margin: 3 -3 -3;
  border-top: 1;
  border-color: editor-border;
  border-image: initial;

  white-space: normal;
  font-family: base;
  overflow: hidden;

  background-color: background;
  color: on-background;

  ${up(
    'sm',
    css`
      border-right: 1;
      border-left: 1;
      border-radius: editor;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-color: editor-border;
      margin-left: -2;
      margin-right: -2;
    `,
  )}
`

const globalModules = {
  react: 'React',
}

export function LiveConfig({ modules }) {
  Object.assign(globalModules, modules)
  return null
}

function req(path) {
  const dep = globalModules[path]

  if (!dep) {
    throw new Error(
      `Unable to resolve path to module '${path}'. Use "LiveConfig" to provide modules.`,
    )
  }
  return dep
}

function importToRequire(code) {
  return (
    code
      // { a as b } => { a: b }
      .replace(/([0-9a-z_$]+) as ([0-9a-z_$]+)/gi, '$1: $2')
      // import { a } from "a" => const { a } = require("b")
      .replace(
        /import {([^}]+)} from ([^\s;]+);?/g,
        'const {$1} = require($2);',
      )
      // import a from "a" => const a = require("a").default || require("a")
      .replace(
        /import ([\S]+) from ([^\s;]+);?/g,
        'const $1 = require($2).default || require($2);',
      )
      // import * as a from "a"
      .replace(
        /import \* as ([\S]+) from ([^\s;]+);?/g,
        'const $1 = require($2);',
      )
      // import a from "a" => const a = require("a").default || require("a")
      .replace(
        /import (.+),\s?{([^}]+)} from ([^\s;]+);?/g,
        [
          'const $1 = require($3).default || require($3);',
          'const {$2} = require($3);',
        ].join('\n'),
      )
  )
}

export function usePrismTheme() {
  const theme = useTheme()
  return th('prism-theme')({ theme })
}

function trimEmptyLines(code) {
  const lines = code.split('\n')
  
  // Find first non-empty line
  let startIndex = 0
  while (startIndex < lines.length && lines[startIndex].trim() === '') {
    startIndex++
  }
  
  // Find last non-empty line
  let endIndex = lines.length - 1
  while (endIndex >= 0 && lines[endIndex].trim() === '') {
    endIndex--
  }
  
  // Return trimmed content, preserving original indentation of content lines
  return lines.slice(startIndex, endIndex + 1).join('\n')
}

export function Code({ children, lang = 'markup', meta }) {
  const prismTheme = usePrismTheme()
  const trimmedCode = trimEmptyLines(children)
  
  if (/live/.test(meta)) {
    return (
      <LiveProvider
        code={trimmedCode}
        transformCode={(code) => `${importToRequire(code)}`}
        scope={{ require: req }}
        language={lang}
        theme={prismTheme}
        noInline={/noInline/.test(meta)}
      >
        <LivePreview />
        <Pre
          as="div"
          style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
        >
          <LiveEditor padding={0} />
        </Pre>
        <LiveError />
      </LiveProvider>
    )
  }
  return (
    <Highlight
      {...defaultProps}
      code={trimmedCode}
      language={lang}
      theme={prismTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  )
}
