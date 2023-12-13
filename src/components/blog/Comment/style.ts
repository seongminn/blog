import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Comment = styled.div`
  width: 100%;
  margin: 0 0 100px;

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

  .utterances {
    min-width: 100%;

    margin: 0;
  }

  .timeline {
    padding: 0;
  }
`;
