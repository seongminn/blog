import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';

import { breakpoints } from '@/constants/media';

export const Root = styled.li`
  & a {
    position: relative;
    display: grid;
    grid-template-columns: 170px auto;
    align-items: center;

    margin-bottom: 100px;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: translateX(10px);
    }

    @media (max-width: ${breakpoints.sm}) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      margin-bottom: 60px;

      &:hover {
        transform: translateY(-10px);
      }
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 50px;

  @media (max-width: ${breakpoints.sm}) {
    margin: 30px 0 0 0;
  }
`;

export const Thumbnail = styled(GatsbyImage)`
  isolation: isolate;
  border-radius: 4px;
`;

export const Title = styled.h3`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  font-size: 20px;
  font-weight: bold;
  line-height: 32px;
  letter-spacing: -0.2px;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  font-size: 15px;
  font-weight: normal;
  line-height: 22px;
  letter-spacing: -0.1px;

  ${({ theme }) =>
    css`
      color: ${theme.colors.grey_400};
    `}
`;

export const Time = styled.time`
  font-size: 15px;
  margin-top: 15px;

  ${({ theme }) =>
    css`
      color: ${theme.colors.grey_400};
    `}
`;

export const TagItems = styled.ul`
  display: flex;
  margin-bottom: 15px;

  ${({ theme }) => css`
    & li {
      border-radius: 4px;
      font-size: 12px;
      line-height: 28px;
      padding: 0 8px;
      margin-right: 15px;

      color: ${theme.colors.grey_300};
      background-color: #f5f5f5;
    }
  `}
`;
