import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const SideBar = styled.aside<{ height: number }>`
  display: none;

  height: 100%;
  position: absolute;
  left: 100%;
  top: 0;

  /* padding-top: ${props => `${props.height}px`}; */

  ${({ theme }) => css`
    ${theme.mq.mobile} {
      display: block;

      width: 180px;
    }
    ${theme.mq.tablet} {
      display: block;

      width: 240px;
    }
    ${theme.mq.desktop} {
      display: block;

      width: 280px;
    }
  `}
`;

export const TocNav = styled.nav`
  position: sticky;
  top: 100px;
`;

export const TocList = styled.li<{ parsedMargin: number }>`
  display: block;
  overflow: hidden;
  position: relative;

  margin-left: ${props => `${props.parsedMargin}px`};
  padding-left: 16px;

  color: ${({ theme }) => theme.colors.grey_100};
  font-size: 15px;
  line-height: 30px;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;

  transition: all 30ms ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }

  &.toc-active {
    color: ${({ theme }) => theme.colors.black};
    border-image: ${({ theme }) => theme.colors.primary_gradient};

    &::before {
      display: block;
      position: absolute;
      top: 50%;
      left: 0;

      width: 2px;
      height: 50%;
      content: '';
      background: ${({ theme }) => theme.colors.primary_gradient};

      transform: translateY(-50%);
    }
  }
`;
