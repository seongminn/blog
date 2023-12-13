import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';

export const Root = styled.li`
  & a {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    position: relative;

    margin-bottom: 60px;

    &:hover {
      transform: translateY(-10px);
    }

    ${({ theme }) => css`
      ${theme.mq.mobile} {
        display: grid;
        align-items: center;
        grid-template-columns: 170px auto;

        margin-bottom: 100px;

        transition: transform 0.2s ease-in-out;

        &:hover {
          transform: translateX(10px);
        }
      }
    `}
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin: 30px 0 0;

  ${({ theme }) => css`
    ${theme.mq.mobile} {
      margin: 0 0 0 50px;
    }
  `}
`;

export const Thumbnail = styled(GatsbyImage)`
  isolation: isolate;

  border-radius: 4px;
`;

export const Title = styled.h2`
  display: -webkit-box;
  overflow: hidden;

  margin-bottom: 10px;

  font-weight: bold;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.2px;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
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
      margin-right: 15px;
      padding: 0 8px;

      border-radius: 4px;

      background-color: #f5f5f5;

      color: ${theme.colors.grey_300};
      font-size: 12px;
      line-height: 28px;
    }
  `}
`;
