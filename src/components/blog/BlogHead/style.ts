import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  padding-bottom: 80px;
`;

export const Title = styled.h1`
  width: 100%;

  font-size: 24px;
  font-weight: 700;
  line-height: 1.5;

  margin: 0 0 10px;

  text-align: left;
  word-break: keep-all;

  ${({ theme }) => css`
    ${theme.mq.mobile} {
      font-size: 24px;
    }
    ${theme.mq.tablet} {
      font-size: 28px;
    }
    ${theme.mq.desktop} {
      font-size: 32px;
    }
  `}
`;

export const InfoArea = styled.div`
  display: flex;

  .date {
    text-align: left;
    position: relative;

    padding-left: 11px;

    ${({ theme }) => css`
      color: ${theme.colors.grey_200};

      &::after {
        position: absolute;
        bottom: 50%;
        left: 0;

        width: 1px;
        height: 80%;

        background-color: ${theme.colors.light_grey_200};

        transform: translateY(50%);
        content: '';
      }
    `}
  }

  .category {
    padding-right: 10px;
    text-transform: uppercase;
  }
`;

export const Image = styled.img`
  width: 100%;
  margin-top: 50px;

  border-radius: 4px;

  aspect-ratio: 2 / 1;
  object-fit: contain;
`;
