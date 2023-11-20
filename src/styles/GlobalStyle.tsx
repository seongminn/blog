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

    &::-moz-selection {
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

    -webkit-text-size-adjust: antialiased;
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
    width: 100%;
    background-color: black;
    margin: 3rem auto 4rem;
    border: 0;

    overflow: visible;
    border: 0;

    background-color: ${theme.colors.primary_48};
    display: block;
    height: 7px;
    width: 7px;
    border-radius: 50%;

    position: relative;

    &:before {
      content: '';
      background-color: ${theme.colors.primary_48};
      display: block;
      height: 7px;
      width: 7px;
      border-radius: 50%;
      position: absolute;
      left: -2em;
      /* animation: dot-move-left 1s ease-out forwards; */
    }

    &:after {
      content: '';
      background-color: ${theme.colors.primary_48};
      display: block;
      height: 7px;
      width: 7px;
      border-radius: 50%;
      position: absolute;
      left: 2em;
      /* animation: dot-move-right 1s ease-out forwards; */
    }
  }

  div.post {
    // Markdown Style
    line-height: 1.8;
    font-size: 16px;
    font-weight: 400;

    // Apply Padding Attribute to All Elements
    p {
      padding: 3px 0;
      line-height: 2;
      margin: 0.6rem 0;
    }

    strong {
      display: contents;
      font-weight: 600;
    }

    // Adjust Heading Element Style
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

    // Adjust Quotation Element Style
    blockquote {
      background-color: ${theme.colors.white};
      border-left: 0.25rem solid ${theme.colors.light_grey_100};

      margin: 0.75rem 0;
      padding-left: 1rem;

      font-style: italic;
      font-weight: 500;

      p:first-of-type {
        margin-top: 0;
      }

      p:last-of-type {
        margin-bottom: 0;
      }
    }

    // Adjust List Element Style

    ol {
      list-style: decimal;
      margin-left: 20px;
      padding: 20px 0;

      li {
        display: list-item;
        text-align: -webkit-match-parent;
        list-style: decimal;
        margin: 0.6rem 0;
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
          unicode-bidi: isolate;
          font-variant-numeric: tabular-nums;
          text-transform: none;
          text-indent: 0px !important;
          text-align: start !important;
          text-align-last: start !important;
        }
      }
    }

    ol,
    ul {
      padding: 0;
    }

    // Adjust Link Element Style
    a {
      color: ${theme.colors.primary_darker};
      text-decoration: underline dashed;
      text-underline-offset: 0.25em;
    }

    figure {
      margin: 1.2rem 0;
    }

    figcaption {
      font-size: 14px;
      color: ${theme.colors.grey_200};
      text-align: center;
    }

    em {
      font-style: italic;
    }

    s,
    del {
      color: #999;
    }

    // Adjust Code Style
    ${prism}
  }
`;

const GlobalStyle = () => {
  return <Global styles={defaultStyle} />;
};

export default GlobalStyle;
