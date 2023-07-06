import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding-bottom: 80px;
`;

export const Title = styled.h1`
  width: 100%;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.5;
  margin: 0 0 10px 0;
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
        content: '';
        width: 1px;
        height: 80%;
        background-color: ${theme.colors.light_grey_200};
        position: absolute;
        left: 0;
        bottom: 50%;
        transform: translateY(50%);
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

  aspect-ratio: 2 / 1;
  object-fit: cover;
  border-radius: 4px;

  margin-top: 50px;
`;
