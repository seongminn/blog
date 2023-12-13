import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const BlogContainer = styled.div`
  position: relative;

  width: 100%;
  padding: 0;

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

  ${({ theme }) => css`
    ${theme.mq.mobile} {
      padding-right: 20px;
    }

    ${theme.mq.desktop} {
      padding-right: 40px;
    }
  `}

  h1,
  h2,
  h3,
  h4 {
    scroll-margin-top: 80px;
  }
`;
