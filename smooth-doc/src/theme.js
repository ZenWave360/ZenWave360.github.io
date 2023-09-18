import { transparentize } from 'polished'
import { css, th, defaultTheme, aliasColor } from '@xstyled/styled-components'

export function primaryColor(color) {
  return aliasColor('primary', color)
}

export const theme = {
  initialColorModeName: 'light',
  ...defaultTheme,
  global: css`
    html,
    body {
      transition: 300ms ease-in color, 300ms ease-in background-color;
      margin: 0;
      font-family: base;
      background-color: background;
      color: on-background;
      line-height: base;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    img {
      display: inline-block;
    }

    :focus {
      outline-color: primary-500;
    }
    blockquote.quote {
      background-color: var(--xstyled-colors-editor-background,#18181b);
      margin: 3vw 3vw;
      box-sizing: border-box;
      position: relative;
      font-size: 24px;
      padding: 1vw 5vw;
      border-radius: 8px;
      
      font-style: italic;
    }
    @media (min-width: 768px) {
      blockquote.quote:before {
        width: 6vw;
        height: 7vw;
        top: 50%;
        left: 0;
        transform: translate(-50%, -50%);
      }
    }
    blockquote.quote:before {
      content: "";
      background-image: url(/resources/quote.svg);
      position: absolute;
      background-size: contain;
      background-repeat: no-repeat;
    }
    .wide-feature-text h3 {
        font-size: 38px;
        text-align: center;
    }
    .wide-feature-text p {
        font-size: 24px;
        margin: 0.5em auto;
    }
    .wide-feature-text ul {
        font-size: 24px;
        list-style-type: "👉 ";
        margin-left: 3rem;
    }
    .wide-feature-text li {
      margin: 0.5em auto;
    }
    .wide-feature-text strong {
      color: rgb(229, 192, 123);
    }
    .home-links {
        text-align: center;
        display: flex;
    }
    .home-links > * {
      width:30%;
      padding: 1rem;
    }

    .home-links a {
        color: var(--xstyled-colors-on-background, #ffffff)!important;
    }

  `,
  'prism-theme': () => ({
    styles: [
      {
        types: ['comment'],
        style: {
          color: 'rgb(106, 171, 115)',
          fontStyle: 'italic',
        },
      },
      {
        types: ['line-comment'],
        style: {
          color: 'rgb(99,103,100)',
          fontStyle: 'italic',
        },
      },
      {
        types: ['zdl-keyword', 'keyword'],
        style: {
          color: 'rgb(207, 142, 107)',
        },
      },
      {
        types: ['zdl-annotation', 'zdl-validation'],
        style: {
          color: 'rgb(179, 174, 96)',
        },
      },
      {
        types: ['zdl-class-name'],
        style: {
          color: 'rgb(102,127,209)',
        },
      },
      {
        types: ['zdl-field'],
        style: {
          color: 'rgb(198, 120, 221)',
        },
      },
      {
        types: ['punctuation'],
        style: {
          color: 'rgb(230,233,236)', // fixme
        },
      },
      {
        types: ['boolean', 'bool', 'char', 'number'],
        style: {
          color: 'rgb(33,51,157)',// fixme
        },
      },
      {
        types: ['tag'],
        style: {
          color: 'rgb(229, 192, 123)',
        },
      },
      {
        types: ['operator'],
        style: {
          color: 'rgb(171, 178, 191)',
        },
      },
      {
        types: ['string'],
        style: {
          color: 'rgb(152, 195, 121)',
        },
      },
      {
        types: ['attr-name', 'comment'],
        style: {
          fontStyle: 'italic',
        },
      },
      {
        types: ['function'],
        style: {
          color: 'rgb(97, 175, 239)',
        },
      },
    ],
  }),
  fonts: {
    base: '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
  },
  lineHeights: {
    base: 1.4,
    control: th.lineHeight('base'),
  },
  transitions: {
    base: '300ms ease all',
    fast: '150ms cubic-bezier(0.215, 0.61, 0.355, 1) all',
    control: th.transition('base'),
  },
  radii: {
    base: 4,
    control: th.radius('base'),
    editor: th.radius('base'),
    blockquote: th.radius('base'),
  },
  borderWidths: {
    base: 1,
    control: th.borderWidth('base'),
  },
  shadows: {
    focus: (p) => `0 0 0 ${th.px(2)(p)} ${th.color('primary-a500')(p)}`,
    'control-focus': th.shadow('focus'),
  },
  sizes: {
    screen: 1669, // 1440,
  },
  space: {
    0: 0,
    1: 4,
    2: 8,
    3: 16,
    4: 24,
    5: 48,
    6: 96,
    7: 144,
    8: 192,
    9: 240,
    'preview-padding-y': 16,
    'preview-padding-x': 24,
  },
  colors: {
    ...defaultTheme.colors,

    // Primary = indigo
    ...aliasColor('primary', 'indigo'),

    primary: th.color('primary-500'),
    'primary-a500': (p) => transparentize(0.5, th.color('primary-500')(p)),

    background: th.color('white'),
    'background-light': th.color('gray-100'),
    'background-primary': th.color('primary-100'),
    'background-mark': th.color('yellow-200'),
    'background-light-a50': (p) =>
      transparentize(0.05, th.color('background-light')(p)),
    'on-background': th.color('black'),
    'on-background-light': th.color('gray-700'),
    'on-background-primary': th.color('primary-700'),
    'on-background-primary-dark': th.color('primary-800'),

    'layout-border': th.color('gray-300'),

    'control-background': th.color('gray-100'),
    'control-placeholder': th.color('gray-600'),
    'control-on': th.color('gray-900'),
    'control-border': th.color('layout-border'),
    'control-border-hover': th.color('gray-500'),
    'control-border-active': th.color('primary-400'),

    'editor-background': th.color('gray-900'),
    'editor-on': th.color('gray-100'),
    'editor-border': th.color('layout-border'),

    'blockquote-link': th.color('yellow-800'),
    'blockquote-background': th.color('yellow-200'),
    'blockquote-border': th.color('yellow'),

    'doc-search-suggestion-highlight-background': th.color('primary-200'),
    'doc-search-suggestion-highlight-on-background': th.color('primary-800'),
    'doc-search-suggestion-content-background': th.color('primary-100'),
    'doc-search-suggestion-content-underline': th.color('primary-700'),

    modes: {
      dark: {
        background: th.color('gray-900'),
        'editor-background': th.color('black'),
        'background-light': th.color('gray-800'),
        'background-primary': th.color('primary-900'),
        'background-mark': th.color('yellow-500'),
        'background-light-a50': (p) =>
          transparentize(0.05, th.color('background-light')(p)),
        'on-background': th.color('white'),
        'on-background-light': th.color('gray-300'),
        'on-background-primary': th.color('primary-300'),
        'on-background-primary-dark': th.color('primary-200'),

        'layout-border': th.color('gray-700'),

        'control-background': th.color('gray-800'),
        'control-placeholder': th.color('gray-400'),
        'control-on': th.color('gray-100'),
        'control-border': th.color('layout-border'),
        'control-border-hover': th.color('gray-500'),
        'control-border-active': th.color('primary-600'),

        'blockquote-link': th.color('yellow-200'),
        'blockquote-background': th.color('yellow-900'),
        'blockquote-border': th.color('yellow-300'),

        'doc-search-suggestion-highlight-background': th.color('primary-800'),
        'doc-search-suggestion-highlight-on-background':
          th.color('primary-200'),
        'doc-search-suggestion-content-background': th.color('primary-900'),
        'doc-search-suggestion-content-underline': th.color('primary-300'),
      },
    },
  },
}
