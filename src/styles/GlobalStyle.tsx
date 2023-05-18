import { Global, css } from '@emotion/react';
import { FunctionComponent } from 'react';

const defaultStyle = css`
  html,
  body,
  #___gatsby {
    height: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: inherit;
    color: inherit;
    flex-shrink: 0;
  }

  body {
    font-family: 'Pretendard';
    letter-spacing: -0.03px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ol,
  ul {
    list-style: none;
  }

  li {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: 0;
    background-color: inherit;
  }

  section[class*='-Blog'] {
    // Markdown Style
    line-height: 1.8;
    font-size: 16px;
    font-weight: 400;

    // Apply Padding Attribute to All Elements
    p {
      padding: 3px 0;
    }

    // Adjust Heading Element Style
    h1,
    h2,
    h3 {
      font-weight: 800;
      margin-bottom: 30px;
    }

    * + h1,
    * + h2,
    * + h3 {
      margin-top: 80px;
    }

    hr + h1,
    hr + h2,
    hr + h3 {
      margin-top: 0;
    }

    h1 {
      font-size: 30px;
    }

    h2 {
      font-size: 25px;
    }

    h3 {
      font-size: 20px;
    }

    // Adjust Quotation Element Style
    blockquote {
      margin: 30px 0;
      padding: 5px 15px;
      border-left: 2px solid #000000;
      font-weight: 800;
    }

    // Adjust List Element Style
    ol,
    ul {
      margin-left: 20px;
      padding: 30px 0;
    }

    // Adjust Horizontal Rule style
    hr {
      border: 1px solid #000000;
      margin: 100px 0;
    }

    // Adjust Link Element Style
    a {
      color: #4263eb;
      text-decoration: underline;
    }

    // Adjust Code Style
    code[class*='language-'],
    pre[class*='language-'] {
      color: #d6deeb;
      font-family: 'Fira Code';
      text-align: left;
      white-space: pre;
      word-spacing: normal;
      word-break: normal;
      word-wrap: normal;
      line-height: 1.5;
      font-size: 14px;

      -moz-tab-size: 4;
      -o-tab-size: 4;
      tab-size: 4;

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

    /* Code blocks */
    pre[class*='language-'] {
      padding: 1em;
      margin: 0.5em 0;
      overflow: auto;
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
    @media (max-width: 768px) {
      width: 100%;
      padding: 80px 20px;
      line-height: 1.6;
      font-size: 14px;

      h1 {
        font-size: 23px;
      }

      h2 {
        font-size: 20px;
      }

      h3 {
        font-size: 17px;
      }

      img {
        width: 100%;
      }

      hr {
        margin: 50px 0;
      }
    }
  }
`;

const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />;
};

export default GlobalStyle;
