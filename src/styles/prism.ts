import { css } from '@emotion/react';

import theme from './theme';

export const prism = css`
  code[class*='language-'],
  pre[class*='language-'] {
    color: #d6deeb;
    background-color: transparent;
    font-family: 'Fira Code', 'Consolas', 'Monaco', 'Andale Mono', 'Ubuntu Mono',
      monospace;
    font-variant-ligatures: normal;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    font-size: 14px;

    -moz-tab-size: 2;
    -o-tab-size: 2;
    tab-size: 2;

    font-feature-settings: 'ss01', 'ss02', 'ss03', 'ss04', 'ss05', 'ss06',
      'zero', 'onum';

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;

    border-radius: 4px;
  }

  pre[class*='language-']::-moz-selection,
  pre[class*='language-'] ::-moz-selection,
  code[class*='language-']::-moz-selection,
  code[class*='language-'] ::-moz-selection {
    text-shadow: none;
  }

  pre[class*='language-']::selection,
  pre[class*='language-'] ::selection,
  code[class*='language-']::selection,
  code[class*='language-'] ::selection {
    text-shadow: none;
  }

  @media print {
    code[class*='language-'],
    pre[class*='language-'] {
      text-shadow: none;
      font-family: inherit;
    }
  }

  pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0 1.7rem;
    overflow: auto;
  }

  p > code[class*='language-'],
  li > code[class*='language-'] {
    color: ${theme.colors.primary_darker};
    background-color: ${theme.colors.primary_24};
    padding: 0.2rem 0.4rem;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    color: white;
    background: hsl(220, 13%, 18%);
  }

  :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }

  .token.comment,
  .token.prolog,
  .token.cdata {
    color: rgb(99, 119, 119);
    font-style: italic;
  }

  .token.punctuation {
    color: rgb(199, 146, 234);
  }

  .namespace {
    color: rgb(178, 204, 214);
  }

  .token.deleted {
    color: rgba(239, 83, 80, 0.56);
    font-style: italic;
  }

  .token.symbol,
  .token.property {
    color: rgb(128, 203, 196);
  }

  .token.tag,
  .token.operator,
  .token.keyword {
    color: rgb(127, 219, 202);
    &:not(.operator) {
      font-style: italic;
    }
  }

  .token.boolean {
    color: rgb(255, 88, 116);
  }

  .token.number {
    color: rgb(247, 140, 108);
  }

  .token.constant,
  .token.function,
  .token.builtin,
  .token.char {
    color: rgb(130, 170, 255);
  }

  .token.selector,
  .token.doctype {
    color: rgb(199, 146, 234);
    font-style: italic;
  }

  .token.attr-name,
  .token.inserted {
    color: rgb(173, 219, 103);
    font-style: italic;
  }

  .token.string,
  .token.url,
  .token.entity,
  .language-css .token.string,
  .style .token.string {
    color: rgb(173, 219, 103);
  }

  .token.class-name,
  .token.atrule,
  .token.attr-value {
    color: rgb(255, 203, 139);
  }

  .token.regex,
  .token.important,
  .token.variable {
    color: rgb(214, 222, 235);
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }
  // Markdown Responsive Design

  ${theme.mq.tablet} {
    h1 {
      font-size: 22px;
    }

    h2 {
      font-size: 19px;
    }

    h3 {
      font-size: 16px;
    }
  }

  /* @media (max-width: 768px) {
    width: 100%;
    line-height: 1.4;
    font-size: 14px;

    h1 {
      font-size: 22px;
    }

    h2 {
      font-size: 19px;
    }

    h3 {
      font-size: 16px;
    }

    img {
      width: 100%;
    }

    hr {
      margin: 50px 0;
    }
  } */
`;

// export const prism = css`
//   code[class*='language-'],
//   pre[class*='language-'] {
//     color: white;
//     background: none;
//     font-family: Fira Code;
//     font-feature-settings: normal;
//     text-align: left;
//     white-space: pre;
//     word-spacing: normal;
//     word-break: normal;
//     word-wrap: normal;
//     line-height: 1.5;
//     margin-bottom: 0;
//     font-size: 14px;

//     -moz-tab-size: 4;
//     -o-tab-size: 4;
//     tab-size: 4;

//     -webkit-hyphens: none;
//     -moz-hyphens: none;
//     -ms-hyphens: none;
//     hyphens: none;

//     &::-webkit-scrollbar {
//       background-color: transparent;
//       height: 4px;
//     }

//     &::-webkit-scrollbar-thumb {
//       border-radius: 4px;
//       background-color: hsla(230, 5%, 35%, 1);
//     }
//   }

//   pre[class*='language-'] {
//     overflow: auto;
//   }

//   pre[class*='language-']::-moz-selection {
//     background: hsl(207, 4%, 16%);
//   }

//   pre[class*='language-']::selection {
//     background: hsl(207, 4%, 16%);
//   }

//   pre[class*='language-']::-moz-selection,
//   pre[class*='language-'] ::-moz-selection {
//     text-shadow: none;
//     background: hsla(0, 0%, 100%, 0.15);
//   }

//   pre[class*='language-']::selection,
//   pre[class*='language-'] ::selection {
//     text-shadow: none;
//     background: hsla(0, 0%, 100%, 0.15);
//   }

//   *:not(pre) > code[class*='language-'] {
//     border-radius: 0.3em;
//     background: #3c4148;
//     color: white;
//     padding: 0.15em 0.5em;
//     white-space: normal;
//   }

//   .token {
//     font-size: 14px;
//   }

//   .token.attr-name {
//     color: rgb(173, 219, 103);
//     font-style: italic;
//   }

//   .token.comment {
//     color: rgb(128, 147, 147);
//   }

//   .token.string,
//   .token.url {
//     color: rgb(173, 219, 103);
//   }

//   .token.variable {
//     color: rgb(214, 222, 235);
//   }

//   .token.number {
//     color: rgb(247, 140, 108);
//   }

//   .token.builtin,
//   .token.char,
//   .token.constant,
//   .token.function {
//     color: rgb(130, 170, 255);
//   }

//   .token.punctuation {
//     color: rgb(199, 146, 234);
//   }

//   .token.selector,
//   .token.doctype {
//     color: rgb(199, 146, 234);
//     font-style: 'italic';
//   }

//   .token.class-name {
//     color: rgb(255, 203, 139);
//   }

//   .token.tag,
//   .token.keyword {
//     color: #ffa7c4;
//     font-style: italic;
//   }

//   .token.operator {
//     color: #ffa7c4;
//   }

//   .token.boolean {
//     color: rgb(255, 88, 116);
//   }

//   .token.property {
//     color: rgb(128, 203, 196);
//   }

//   .token.namespace {
//     color: rgb(178, 204, 214);
//   }

//   pre[data-line] {
//     padding: 1em 0 1em 3em;
//     position: relative;
//   }

//   .gatsby-highlight-code-line {
//     background-color: hsla(207, 95%, 15%, 1);
//     display: block;
//     margin-right: -1.3125rem;
//     margin-left: -1.3125rem;
//     padding-right: 1em;
//     padding-left: 1.25em;
//     border-left: 0.25em solid #ffa7c4;
//   }

//   .gatsby-highlight {
//     margin-bottom: 1.75rem;
//     margin-left: -1.3125rem;
//     margin-right: -1.3125rem;
//     border-radius: 4px;
//     background: rgb(32 36 39);
//     -webkit-overflow-scrolling: touch;
//     overflow: auto;
//   }

//   .gatsby-highlight pre[class*='language-'] {
//     float: left;
//     min-width: 100%;
//   }
// `;
