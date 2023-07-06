import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

import Body from './body';
import Head from './head';

const Blog = (props: PropsWithChildren) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export const Wrapper = styled.article`
  position: relative;
  width: 100%;
  margin: 0 auto;

  & > div:last-of-type {
    ${({ theme }) => css`
      ${theme.mq.mobile} {
        max-width: calc(100% - 180px);
      }
      ${theme.mq.tablet} {
        max-width: calc(100% - 240px);
      }
      ${theme.mq.desktop} {
        max-width: calc(100% - 280px);
      }
    `}
  }

  h1,
  h2,
  h3,
  h4 {
    scroll-margin-top: 80px;
  }
`;

Blog.Head = Head;
Blog.Body = Body;

export default Blog;
