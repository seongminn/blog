import { Global, css } from '@emotion/react';
import { FunctionComponent } from 'react';

import { prism } from './prism';

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
    ${prism}
  }
`;

const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />;
};

export default GlobalStyle;
