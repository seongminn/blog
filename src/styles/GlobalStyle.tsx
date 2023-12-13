import { Global, css } from '@emotion/react';

import { prism } from './prism';
import theme from './theme';

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

    scroll-behavior: smooth;

    &::selection {
      background: ${theme.colors.primary};

      color: #fff;
    }

    &::selection {
      background: ${theme.colors.primary};

      color: #fff;
    }
  }

  body {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
      'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;

    letter-spacing: -0.03px;

    text-size-adjust: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    text-rendering: optimizelegibility;
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

  b {
    font-weight: bold;
  }

  hr {
    display: block;
    overflow: visible;

    position: relative;

    width: 100%;
    width: 7px;
    height: 7px;
    margin: 3rem auto 4rem;
    border: 0;
    border-radius: 50%;

    background-color: black;
    background-color: ${theme.colors.primary_48};

    &::before {
      display: block;
      position: absolute;
      left: -2em;

      width: 7px;
      height: 7px;

      border-radius: 50%;

      background-color: ${theme.colors.primary_48};
      content: '';

      /* animation: dot-move-left 1s ease-out forwards; */
    }

    &::after {
      display: block;
      position: absolute;
      left: 2em;

      width: 7px;
      height: 7px;

      border-radius: 50%;

      background-color: ${theme.colors.primary_48};
      content: '';

      /* animation: dot-move-right 1s ease-out forwards; */
    }
  }

  div.post {
    /* Markdown Style */
    line-height: 1.8;
    font-size: 16px;
    font-weight: 400;
    word-break: normal;

    /* Apply Padding Attribute to All Elements */
    p {
      margin: 0.6rem 0;
      padding: 3px 0;

      line-height: 2;
    }

    strong {
      display: contents;

      font-weight: 600;
    }

    /* Adjust Heading Element Style */
    h1,
    h2,
    h3,
    h4 {
      font-weight: 600;
    }

    * + h1,
    * + h2,
    * + h3,
    * + h4 {
      padding: 40px 0 16px;
    }

    hr + h1,
    hr + h2,
    hr + h3,
    hr + h4 {
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

    h4 {
      font-size: 18px;
    }

    /* Adjust Quotation Element Style */
    blockquote {
      margin: 0.75rem 0;
      padding-left: 1rem;

      border-left: 0.25rem solid ${theme.colors.light_grey_100};

      background-color: ${theme.colors.white};

      font-style: italic;
      font-weight: 500;

      p:first-of-type {
        margin-top: 0;
      }

      p:last-of-type {
        margin-bottom: 0;
      }
    }

    /* Adjust List Element Style */

    ol {
      list-style: decimal;

      margin-left: 20px;
      padding: 20px 0;

      li {
        display: list-item;

        margin: 0.6rem 0;

        text-align: -webkit-match-parent;
        list-style: decimal;
      }

      p {
        margin: 0;
      }
    }

    ol + p {
      margin-top: 1.2rem;
    }

    ul {
      list-style: disc;

      margin-left: 20px;
      padding: 20px 0;

      li {
        list-style: disc;

        &::marker {
          text-align: start !important;
          text-indent: 0 !important;
          unicode-bidi: isolate;
          font-variant-numeric: tabular-nums;
          text-transform: none;
          text-align-last: start !important;
        }
      }
    }

    ol,
    ul {
      padding: 0;
    }

    /* Adjust Link Element Style */
    a {
      color: ${theme.colors.primary_darker};
      text-decoration: underline dashed;
      text-underline-offset: 0.25em;
    }

    figure {
      margin: 1.2rem 0;
    }

    figcaption {
      color: ${theme.colors.grey_200};
      font-size: 14px;
      text-align: center;
    }

    em {
      font-style: italic;
    }

    s,
    del {
      color: #999;
    }

    /* Adjust Code Style */
    ${prism}
  }
`;

const GlobalStyle = () => {
  return <Global styles={defaultStyle} />;
};

export default GlobalStyle;
